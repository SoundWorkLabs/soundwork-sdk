import { BN, IdlAccounts, Program, Provider } from "@coral-xyz/anchor";
import { ASSOCIATED_PROGRAM_ID } from "@coral-xyz/anchor/dist/cjs/utils/token";
import {
	ASSOCIATED_TOKEN_PROGRAM_ID,
	getAssociatedTokenAddressSync,
	TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import {
	Connection,
	PublicKey,
	SystemProgram,
	TransactionInstruction,
} from "@solana/web3.js";

import {
	CORE_PROGRAM_ID,
	SOUNDWORK_BID_PROGRAM_ID,
	SOUNDWORK_LIST_PROGRAM_ID,
	TREASURY_ADDRESS,
} from "../constants";
import {
	findAssetManagerAddress,
	findBidDataAddress,
	findListingDataAddress,
	findMarketplaceConfigAddress,
	findWalletAddress,
} from "../pda";
import { SoundworkBid, IDL as soundworkIDL } from "./idl/soundwork_bid";

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
	 * Fetch bidding data for an asset
	 * @param {PublicKey} asset - the asset address of the collectible.
	 * @returns {Promise<IdlAccounts<SoundworkBid>[""]>} a promise that resolves with the data inside the biddingDataV1 account
	 * @throws {Error} throws error if mint has not bids placed on it
	 */
	async fetchBidDataByAddress(
		asset: PublicKey
	): Promise<IdlAccounts<SoundworkBid>["bidData"]> {
		try {
			const bidDataAddress = findBidDataAddress(asset);

			let listingData: IdlAccounts<SoundworkBid>["bidData"] =
				await this.program.account.bidData.fetch(bidDataAddress);

			return listingData;
		} catch (err) {
			throw new Error(`error fetching bidding data: ${err}`);
		}
	}

	// --------------------------------------- bidding calls
	/**
	 * Place a bid for an NFT listed on Soundwork.
	 *
	 * @param {PublicKey} address - the mint address of the NFT.
	 * @param {BN} amount - the amount in lamports for which you'd like to purchase the NFT.
	 * @param {BN} expiryTs - unix timestamp of when the bid expires.
	 * @param {PublicKey} [mint] - Optional. Only passed it when payment is in SPL tokens.
	 * @returns {Promise<TransactionInstruction>} a promise that resolves to a web3.js Instruction.
	 * @throws {Error} Throws an Error if bidding is unsuccessful.
	 *
	 * ## possible errors
	 * - the user's escrow wallet isn't initialized.
	 * - You don't have enough funds to place bid.
	 */
	async placeBid(
		asset: PublicKey,
		amount: BN,
		expiryTs: BN,
		mint?: PublicKey
	) {
		if (!this.bidderProvider.publicKey) {
			throw Error("Expected public key not found");
		}

		const escrowWalletAddress = findWalletAddress(
			this.bidderProvider.publicKey
		);

		try {
			let ix = await this.program.methods
				.makeBid({
					amount,
					expiryTs,
				})
				.accounts({
					bidder: this.bidderProvider.publicKey,
					asset,
					bidData: findBidDataAddress(asset),
					bidderEscrowWallet: escrowWalletAddress,
					listingData: findListingDataAddress(asset),
					paymentMint: mint,
					bidderTokenAccount: mint
						? getAssociatedTokenAddressSync(
								mint,
								this.bidderProvider.publicKey
						  )
						: null,
					walletTokenAccount: mint
						? getAssociatedTokenAddressSync(
								mint,
								escrowWalletAddress,
								true
						  )
						: null,
					soundworkList: SOUNDWORK_LIST_PROGRAM_ID,
					associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
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
	 * @param {PublicKey} asset - the asset address of the collectible.
	 * @param {BN} amount - update price of the bid.
	 * @param {BN | null} expiryTs - new unix timestamp of when the bid expires.
	 * @param {PublicKey} [mint] - Optional. Only passed it when payment is in SPL tokens.
	 * @returns {Promise<TransactionInstruction>} a promise that resolves to a web3.js Instruction.
	 * @throws {Error} Throws an Error if unsuccessful.
	 */
	async editBid(
		asset: PublicKey,
		amount: BN | null,
		expiryTs: BN | null,
		mint?: PublicKey
	): Promise<TransactionInstruction> {
		if (!this.bidderProvider.publicKey) {
			throw Error("Expected public key not found");
		}

		let escrowWalletAddress = findWalletAddress(
			this.bidderProvider.publicKey
		);

		try {
			let ix = await this.program.methods
				.editBid({ amount, expiryTs })
				.accounts({
					bidder: this.bidderProvider.publicKey,
					asset,
					bidData: findBidDataAddress(asset),
					bidderEscrowWallet: escrowWalletAddress,
					listingData: findListingDataAddress(asset),
					paymentMint: mint,
					bidderTokenAccount: mint
						? getAssociatedTokenAddressSync(
								mint,
								this.bidderProvider.publicKey
						  )
						: null,
					walletTokenAccount: mint
						? getAssociatedTokenAddressSync(
								mint,
								escrowWalletAddress,
								true
						  )
						: null,
					soundworkList: SOUNDWORK_LIST_PROGRAM_ID,
					tokenProgram: TOKEN_PROGRAM_ID,
					associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
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
	 *
	 * @param {PublicKey} asset - the address of the asset.
	 * @param {PublicKey} [mint] - Optional. Only passed it when payment is in SPL tokens.
	 * @returns {Promise<TransactionInstruction>} a promise that resolves to a web3.js Instruction.
	 * @throws {Error} Throws an Error if unsuccessful.
	 */
	async acceptBid(
		asset: PublicKey,
		mint?: PublicKey
	): Promise<TransactionInstruction> {
		if (!this.sellerProvider?.publicKey) {
			throw Error("Expected public key not found");
		}

		const seller = this.sellerProvider.publicKey;
		const bidder = await (
			await this.fetchBidDataByAddress(asset)
		).authority; // this can fail(network issues)

		try {
			let ix = await this.program.methods
				.acceptBid()
				.accounts({
					seller,
					bidder,
					asset,
					bidData: findBidDataAddress(asset),
					bidderEscrowWallet: findWalletAddress(bidder),
					listingData: findListingDataAddress(asset),
					paymentMint: mint,
					bidderTokenAccount: mint
						? getAssociatedTokenAddressSync(mint, bidder)
						: null,
					sellerTokenAccount: mint
						? getAssociatedTokenAddressSync(mint, seller)
						: null,
					walletTokenAccount: mint
						? getAssociatedTokenAddressSync(
								mint,
								findWalletAddress(bidder),
								true
						  )
						: null,
					treasuryTokenAccount: mint
						? getAssociatedTokenAddressSync(mint, TREASURY_ADDRESS)
						: null,
					treasury: TREASURY_ADDRESS,
					assetManager: findAssetManagerAddress(),
					marketplaceConfig: findMarketplaceConfigAddress(),
					soundworkList: SOUNDWORK_LIST_PROGRAM_ID,
					coreProgram: CORE_PROGRAM_ID,
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
	 * @param {PublicKey} asset - the asset address of the collectible.
	 * @param {PublicKey} [mint] - Optional. Only passed it when payment is in SPL tokens.
	 * @returns {Promise<TransactionInstruction>} a promise that resolves to a web3.js Instruction.
	 * @throws {Error} Throws an Error if  unsuccessful.
	 */
	async rejectBid(
		asset: PublicKey,
		mint?: PublicKey
	): Promise<TransactionInstruction> {
		if (!this.sellerProvider?.publicKey) {
			throw Error("Expected public key not found");
		}

		const bidData = await this.fetchBidDataByAddress(asset); // this can fail(network issues)

		try {
			let ix = await this.program.methods
				.rejectBid()
				.accounts({
					seller: this.sellerProvider.publicKey,
					bidder: bidData.authority,
					asset,
					bidData: findBidDataAddress(asset),
					bidderEscrowWallet: findWalletAddress(bidData.authority),
					listingData: findListingDataAddress(asset),
					paymentMint: mint,
					bidderTokenAccount: mint
						? getAssociatedTokenAddressSync(mint, bidData.authority)
						: null,
					walletTokenAccount: mint
						? getAssociatedTokenAddressSync(
								mint,
								findWalletAddress(bidData.authority),
								true
						  )
						: null,
					soundworkList: SOUNDWORK_LIST_PROGRAM_ID,
					tokenProgram: TOKEN_PROGRAM_ID,
					associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
					systemProgram: SystemProgram.programId,
				})
				.instruction();

			return ix;
		} catch (err) {
			throw new Error(`error rejecting bid: ${err}`);
		}
	}

	/**
	 * Revoke bid placed on a core asset.
	 *
	 * @param {PublicKey} asset - the asset address of the collectible.
	 * @param {PublicKey} [mint] - Optional. Only passed it when payment is in SPL tokens.
	 * @returns {Promise<TransactionInstruction>} a promise that resolves to a web3.js Instruction.
	 * @throws {Error} Throws an Error if unsuccessful.
	 */
	async revokeBid(
		asset: PublicKey,
		mint?: PublicKey
	): Promise<TransactionInstruction> {
		if (!this.bidderProvider?.publicKey) {
			throw Error("Expected public key not found");
		}

		let bidder = this.bidderProvider.publicKey;

		try {
			let ix = await this.program.methods
				.revokeBid()
				.accounts({
					bidder,
					asset,
					bidData: findBidDataAddress(asset),
					bidderEscrowWallet: findWalletAddress(bidder),
					listingData: findListingDataAddress(asset),
					paymentMint: mint,
					bidderTokenAccount: mint
						? getAssociatedTokenAddressSync(mint, bidder)
						: null,
					walletTokenAccount: mint
						? getAssociatedTokenAddressSync(
								mint,
								findWalletAddress(bidder),
								true
						  )
						: null,
					soundworkList: SOUNDWORK_LIST_PROGRAM_ID,
					tokenProgram: TOKEN_PROGRAM_ID,
					associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
					systemProgram: SystemProgram.programId,
				})
				.instruction();

			return ix;
		} catch (err) {
			throw new Error(`error deleting bid: ${err}`);
		}
	}
}
