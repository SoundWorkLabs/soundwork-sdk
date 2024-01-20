import { Connection, TransactionInstruction } from "@solana/web3.js";
import { Program, Provider, BN, IdlAccounts } from "@coral-xyz/anchor";
import { PublicKey, SystemProgram } from "@solana/web3.js";
import { ASSOCIATED_PROGRAM_ID } from "@coral-xyz/anchor/dist/cjs/utils/token";
import {
	getAssociatedTokenAddressSync,
	TOKEN_PROGRAM_ID,
} from "@solana/spl-token";

import { SoundworkBid } from "./idl/soundwork_bid";
import { IDL as soundworkIDL } from "./idl/soundwork_bid";
import {
	SOUNDWORK_BID_PROGRAM_ID,
	SOUNDWORK_LIST_PROGRAM_ID,
} from "../constants";
import {
	findAssetManagerAcc,
	findBiddingDataAcc,
	findListingDataAcc,
	findUserEscrowWallet,
	findVaultTokenAcc,
} from "../pda";

/**
 * This is the base level class for interfacing with the Soundwork bidding contract.
 * @class
 */
export class SoundworkBidSDK {
	/** wallet provider of the person calling our sdk */
	private bidderProvider!: Provider;
	/** wallet provider of the person who put up asset for listing */
	private sellerProvider?: Provider;
	/** Our anchor program helper */
	private program: Program<SoundworkBid>;
	/** The connection object from Solana's SDK */
	public readonly connection: Connection;

	/**
	 * instantiate a new instance with the providers and program already loaded
	 * @param {Provider} bidderProvider - The bidder wallet provider who wants to buy the asset.
	 * @param {Connection} connection - The solana cluster we are connected to.
	 * @param {Provider} sellerProvider - The seller wallet provider who put up the asset for listing.
	 *    Optional because we might just want to perform the bid operations without the seller accepting/rejecting offer
	 */
	constructor(
		bidderProvider: Provider,
		connection: Connection,
		sellerProvider?: Provider
	) {
		this.bidderProvider = bidderProvider;
		this.connection = connection;
		this.sellerProvider = sellerProvider;

		this.program = new Program<SoundworkBid>(
			soundworkIDL,
			SOUNDWORK_BID_PROGRAM_ID,
			bidderProvider
		);
	}

	// --------------------------------------- fetchers
	/**
	 * Fetch bidding data for an NFT using the mint
	 * @param {PublicKey} mint - the mint address of the nft
	 * @returns {Promise<IdlAccounts<SoundworkBid>["biddingDataV1"]>} a promise that resolves with the data inside the biddingDataV1 account
	 * @throws {Error} throws error if mint has not bids placed on it
	 */
	async fetchBidDataByMint(
		mint: PublicKey
	): Promise<IdlAccounts<SoundworkBid>["biddingDataV1"]> {
		try {
			const biddingDataAcc = findBiddingDataAcc(mint);

			let listingData: IdlAccounts<SoundworkBid>["biddingDataV1"] =
				await this.program.account.biddingDataV1.fetch(biddingDataAcc);

			return listingData;
		} catch (err) {
			throw new Error(`error fetching bidding data: ${err}`);
		}
	}

	// --------------------------------------- bidding calls
	/**
	 * Place a bid for an NFT listed on Soundwork.
	 * @param {PublicKey} mint - the mint address of the NFT.
	 * @param {BN} lamports - the amount of lamports for which you'd like to purchase the NFT.
	 * @param {BN} expire_ts - unix timestamp of when the bid expires.
	 * @returns {Promise<TransactionInstruction>} a promise that resolves to a web3.js Instruction.
	 * @throws {Error} Throws an Error if bidding is unsuccessful.
	 * ## possible errors
	 * - That the amount you are placing for the bid is higher than the listing price of owner.
	 * - You don't have enough funds that can be transferred to owner if bid is accepted.
	 */
	async placeBid(mint: PublicKey, lamports: BN, expire_ts: BN) {
		if (!this.bidderProvider.publicKey) {
			throw Error("Expected public key not found");
		}

		const biddingDataAcc = findBiddingDataAcc(mint);
		const listingDataAcc = findListingDataAcc(mint);
		let solEscrowWallet = findUserEscrowWallet(
			this.bidderProvider.publicKey
		);

		try {
			let ix = await this.program.methods
				.makeBid(lamports, expire_ts)
				.accounts({
					bidder: this.bidderProvider.publicKey,
					mint,
					biddingDataAcc,
					listingDataAcc,
					solEscrowWallet,
					soundworkList: SOUNDWORK_LIST_PROGRAM_ID,
					systemProgram: SystemProgram.programId,
				})
				.instruction();

			return ix;
		} catch (err) {
			throw new Error(`error placing bid: ${err}`);
		}
	}

	/**
	 * Edit a placed bid.
	 * @param {PublicKey} mint - the mint address of the NFT.
	 * @param {BN} lamports - update price of the bid.
	 * @param {BN | null} expires_ts - new unix timestamp of when the bid expires.
	 * @returns {Promise<TransactionInstruction>} a promise that resolves to a web3.js Instruction.
	 * @throws {Error} Throws an Error if unsuccessful.
	 */
	async editBid(
		mint: PublicKey,
		lamports: BN | null,
		expires_ts: BN | null
	): Promise<TransactionInstruction> {
		const biddingDataAcc = findBiddingDataAcc(mint);

		try {
			let ix = await this.program.methods
				.editBid(expires_ts, lamports)
				.accounts({
					bidder: this.bidderProvider.publicKey,
					biddingDataAcc,
					systemProgram: SystemProgram.programId,
				})
				.instruction();

			return ix;
		} catch (err) {
			throw new Error(`error deleting bid: ${err}`);
		}
	}

	/**
	 * Owner Accepts a bid. This transfers the NFT to bidder and the escrowed funds to the NFT lister.
	 * @param {PublicKey} mint - the mint address of the NFT.
	 * @returns {Promise<TransactionInstruction>} a promise that resolves to a web3.js Instruction.
	 * @throws {Error} Throws an Error if unsuccessful.
	 */
	async acceptBid(mint: PublicKey): Promise<TransactionInstruction> {
		if (!this.sellerProvider?.publicKey) {
			throw Error("Expected public key not found");
		}

		const listingDataAcc = findListingDataAcc(mint);
		const biddingDataAcc = findBiddingDataAcc(mint);
		const assetManager = findAssetManagerAcc();
		const vaultTokenAccount = findVaultTokenAcc(mint, assetManager);

		const buyer = await (await this.fetchBidDataByMint(mint)).owner; // this can fail(network issues)
		let buyerTokenAcc = getAssociatedTokenAddressSync(mint, buyer);
		let buyerSolEscrow = findUserEscrowWallet(buyer);

		try {
			let ix = await this.program.methods
				.acceptBid()
				.accounts({
					seller: this.sellerProvider.publicKey,
					listingDataAcc,
					biddingDataAcc,
					buyer,
					mint,
					buyerSolEscrow,
					buyerTokenAcc,
					assetManager,
					vaultTokenAcc: vaultTokenAccount,
					soundworkList: SOUNDWORK_LIST_PROGRAM_ID,
					tokenProgram: TOKEN_PROGRAM_ID,
					associatedTokenProgram: ASSOCIATED_PROGRAM_ID,
					systemProgram: SystemProgram.programId,
				})
				.instruction();

			return ix;
		} catch (err) {
			throw new Error(`error accepting bid: ${err}`);
		}
	}

	/**
	 * Reject a bid from a bidder.
	 * @param {PublicKey} mint - the mint address of the NFT.
	 * @returns {Promise<TransactionInstruction>} a promise that resolves to a web3.js Instruction.
	 * @throws {Error} Throws an Error if  unsuccessful.
	 */
	async rejectBid(mint: PublicKey): Promise<TransactionInstruction> {
		if (!this.sellerProvider?.publicKey) {
			throw Error("Expected public key not found");
		}

		const biddingDataAcc = findBiddingDataAcc(mint);
		const listingDataAcc = findListingDataAcc(mint);

		const bidData = await this.fetchBidDataByMint(mint); // ! this can fail(network issues)
		const buyerSolEscrow = findUserEscrowWallet(bidData.owner);

		try {
			let ix = await this.program.methods
				.rejectBid()
				.accounts({
					seller: this.sellerProvider.publicKey,
					listingDataAcc,
					buyer: bidData.owner,
					buyerSolEscrow,
					biddingDataAcc,
					soundworkList: SOUNDWORK_LIST_PROGRAM_ID,
					systemProgram: SystemProgram.programId,
				})
				.instruction();

			return ix;
		} catch (err) {
			throw new Error(`error rejecting bid: ${err}`);
		}
	}

	/**
	 * Delete a bid for an NFT.
	 * @param {PublicKey} mint - the mint address of the NFT.
	 * @returns {Promise<TransactionInstruction>} a promise that resolves to a web3.js Instruction.
	 * @throws {Error} Throws an Error if unsuccessful.
	 */
	async deleteBid(mint: PublicKey): Promise<TransactionInstruction> {
		const biddingDataAcc = findBiddingDataAcc(mint);

		const bidData = await this.fetchBidDataByMint(mint); // ! this can fail(network issues)
		const solEscrowWallet = findUserEscrowWallet(bidData.owner);

		try {
			let ix = await this.program.methods
				.deleteBid()
				.accounts({
					bidder: this.bidderProvider.publicKey,
					biddingDataAcc,
					solEscrowWallet,
					soundworkList: SOUNDWORK_LIST_PROGRAM_ID,
					systemProgram: SystemProgram.programId,
				})
				.instruction();

			return ix;
		} catch (err) {
			throw new Error(`error deleting bid: ${err}`);
		}
	}
}
