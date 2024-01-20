import {
	Connection,
	LAMPORTS_PER_SOL,
	TransactionInstruction,
} from "@solana/web3.js";
import { Program, Provider, BN, IdlAccounts } from "@coral-xyz/anchor";
import { PublicKey, SystemProgram } from "@solana/web3.js";
import { ASSOCIATED_PROGRAM_ID } from "@coral-xyz/anchor/dist/cjs/utils/token";
import {
	getAssociatedTokenAddressSync,
	TOKEN_PROGRAM_ID,
} from "@solana/spl-token";

import { SoundworkList } from "./idl/soundwork_list";
import { IDL as soundworkIDL } from "./idl/soundwork_list";
import { SOUNDWORK_LIST_PROGRAM_ID } from "../constants";
import {
	findAssetManagerAcc,
	findListingDataAcc,
	findUserEscrowWallet,
	findVaultTokenAcc,
} from "../pda";

// todo (Jimii): helpers for the marker/taker fees

/**
 * This is the base level class for interfacing with the Soundwork listing contract.
 * @class
 */
export class SoundworkListSDK {
	/** anchor provider of the person calling our sdk */
	// todo: what if it's not a person calling this?
	private provider!: Provider;
	/** Our anchor program helper */
	private program: Program<SoundworkList>;
	/** The connection object from Solana's SDK */
	public readonly connection: Connection;

	constructor(provider: Provider, connection: Connection) {
		this.provider = provider;
		this.connection = connection;

		this.program = new Program<SoundworkList>(
			soundworkIDL,
			SOUNDWORK_LIST_PROGRAM_ID,
			provider
		);
	}

	// --------------------------------------- fetchers
	/**
	 * Fetch data about a listed NFT on the soundwork Marketplace
	 * @param {PublicKey} mint - the mint address of the nft
	 * @returns {Promise<IdlAccounts<SoundworkList>["listingDataV1"]>} a promise that resolves to the data inside the listingDataV1 account
	 * @throws {Error} if there is an error fetching the details or if the response contains an error
	 */
	async fetchListDataByMint(
		mint: PublicKey
	): Promise<IdlAccounts<SoundworkList>["listingDataV1"]> {
		try {
			const listingDataAcc = findListingDataAcc(mint);

			let listingData: IdlAccounts<SoundworkList>["listingDataV1"] =
				await this.program.account.listingDataV1.fetch(listingDataAcc);

			return listingData;
		} catch (err) {
			throw new Error(`error fetching listing data: ${err}`);
		}
	}

	// --------------------------------------- listing calls
	/**
	 * List an NFT on the soundwork marketplace
	 * @param {PublicKey} mint - the mint address of the NFT.
	 * @param {number} lamports - the amount in lamports for which the user is listing the NFT.
	 * @returns {Promise<TransactionInstruction>} a promise that resolves to a web3.js Instruction.
	 * @throws {Error} if there is an error creating a listing or if the response contains an error // todo
	 */
	public async createListing(
		mint: PublicKey,
		lamports: number
	): Promise<TransactionInstruction> {
		if (!this.provider.publicKey) {
			throw Error("Expected public key not found");
		}

		const listingDataAcc = findListingDataAcc(mint);
		const assetManager = findAssetManagerAcc();
		const vaultTokenAccount = findVaultTokenAcc(mint, assetManager);

		// derive token account
		let userTokenAcc = getAssociatedTokenAddressSync(
			mint,
			this.provider.publicKey
		);

		try {
			let ix = await this.program.methods
				.listNft(new BN(lamports))
				.accounts({
					authority: this.provider.publicKey,
					authorityTokenAccount: userTokenAcc,
					mint,
					assetManager,
					vaultTokenAccount,
					listingData: listingDataAcc,
					tokenProgram: TOKEN_PROGRAM_ID,
					associatedTokenProgram: ASSOCIATED_PROGRAM_ID,
					systemProgram: SystemProgram.programId,
				})
				.instruction();

			return ix;
		} catch (err) {
			throw new Error(`error during create Listing: ${err}`);
		}
	}

	/**
	 * Edit a listed NFT on the soundwork marketplace
	 * @param {PublicKey} mint - the mint address of the NFT.
	 * @param {number} newPriceLamports - the amount in lamports for the new listing.
	 * @returns {Promise<TransactionInstruction>} a promise that resolves to a web3.js Instruction.
	 * @throws {Error} if there is an error editing a listing or if the response contains an error // todo
	 */
	public async editListing(
		mint: PublicKey,
		newPriceLamports: number
	): Promise<TransactionInstruction> {
		if (!this.provider.publicKey) {
			throw Error("Expected public key not found");
		}

		const listingDataAcc = findListingDataAcc(mint);
		const assetManager = findAssetManagerAcc();
		const vaultTokenAccount = findVaultTokenAcc(mint, assetManager);

		// derive token account
		let userTokenAcc = getAssociatedTokenAddressSync(
			mint,
			this.provider.publicKey
		);

		try {
			let ix = await this.program.methods
				.editListing(new BN(newPriceLamports))
				.accounts({
					authority: this.provider.publicKey,
					authorityTokenAccount: userTokenAcc,
					mint,
					assetManager,
					vaultTokenAccount,
					listingData: listingDataAcc,
					tokenProgram: TOKEN_PROGRAM_ID,
					systemProgram: SystemProgram.programId,
				})
				.instruction();

			return ix;
		} catch (err) {
			throw new Error(`error during Edit Listing: ${err}`);
		}
	}

	/**
	 * Cancel a Listing made on the soundwork marketplace
	 * @param {PublicKey} mint - the mint address of the NFT.
	 * @returns {Promise<TransactionInstruction>} a promise that resolves to a web3.js Instruction.
	 * @throws {Error} if there is an error deleting the listing or if the response contains an error // todo
	 */
	public async deleteListing(
		mint: PublicKey
	): Promise<TransactionInstruction> {
		if (!this.provider.publicKey) {
			throw Error("Expected public key not found");
		}

		const listingDataAcc = findListingDataAcc(mint);
		const assetManager = findAssetManagerAcc();
		const vaultTokenAccount = findVaultTokenAcc(mint, assetManager);

		// derive user's ATA account
		let userTokenAcc = getAssociatedTokenAddressSync(
			mint,
			this.provider.publicKey
		);

		try {
			let ix = await this.program.methods
				.deleteListing()
				.accounts({
					authority: this.provider.publicKey,
					authorityTokenAccount: userTokenAcc,
					mint,
					assetManager,
					vaultTokenAccount,
					listingData: listingDataAcc,
					tokenProgram: TOKEN_PROGRAM_ID,
					systemProgram: SystemProgram.programId,
				})
				.instruction();

			return ix;
		} catch (err) {
			throw new Error(`error during Delete Listing: ${err}`);
		}
	}

	// --------------------------------------- trade methods. (buy / sell)
	/**
	 * Buy an NFT Listed on the soundwork marketplace
	 * @param {PublicKey} mint - the mint address of the Listed NFT.
	 * @returns {Promise<TransactionInstruction>} a promise that resolves to a web3.js Instruction.
	 * @throws {Error} if there is an error purchasing the listing or if the response contains an error // todo
	 */
	public async buyListing(mint: PublicKey): Promise<TransactionInstruction> {
		if (!this.provider.publicKey) {
			throw Error("Expected public key not found");
		}

		const listingDataAcc = findListingDataAcc(mint);
		const assetManager = findAssetManagerAcc();
		const vaultTokenAccount = findVaultTokenAcc(mint, assetManager);

		// derive buyer's ATA account
		let buyerTokenAccount = getAssociatedTokenAddressSync(
			mint,
			this.provider.publicKey
		);

		let listingData = await this.program.account.listingDataV1.fetch(
			listingDataAcc
		);

		try {
			let ix = await this.program.methods
				.buyListing()
				.accounts({
					payer: this.provider.publicKey,
					buyer: this.provider.publicKey,
					ogOwner: listingData.owner,
					escrowWalletAsBuyer: null,
					buyerTokenAccount,
					mint,
					assetManager,
					vaultTokenAccount,
					listingData: listingDataAcc,
					bidDataAcc: null,
					tokenProgram: TOKEN_PROGRAM_ID,
					associatedTokenProgram: ASSOCIATED_PROGRAM_ID,
					systemProgram: SystemProgram.programId,
				})
				.instruction();

			return ix;
		} catch (err) {
			throw new Error(`error during Buy Listing: ${err}`);
		}
	}

	// --------------------------------------- Escrow methods. (withdraw/deposit)
	/**
	 * Deposit SOL into Escrow owned by the soundwork marketplace contract
	 * @param {number} lamports - the amount in lamports you are depositing into the escrow.
	 * @returns {Promise<TransactionInstruction>} a promise that resolves to a web3.js Instruction.
	 * @throws {Error} throw an error if we encounter a failure
	 */
	public async depositSol(lamports: number): Promise<TransactionInstruction> {
		if (!this.provider.publicKey) {
			throw Error("Expected public key not found");
		}

		const solEscrowWallet = findUserEscrowWallet(this.provider.publicKey);

		let ix = await this.program.methods
			.depositSol(new BN(lamports))
			.accounts({
				owner: this.provider.publicKey,
				solEscrowWallet,
				systemProgram: SystemProgram.programId,
			})
			.instruction();

		return ix;
	}

	/**
	 * Deposit SOL into Escrow owned by the soundwork marketplace contract
	 * @param {number} lamports - the amount in lamports you'd like to withdraw from the escrow.
	 * @returns {Promise<TransactionInstruction>} a promise that resolves to a web3.js Instruction.
	 * @throws {Error} throw an error if we encounter a failure
	 */
	public async withDrawSol(
		lamports: number
	): Promise<TransactionInstruction> {
		if (!this.provider.publicKey) {
			throw Error("Expected public key not found");
		}

		const solEscrowWallet = findUserEscrowWallet(this.provider.publicKey);

		let ix = await this.program.methods
			.withdrawSol(new BN(lamports))
			.accounts({
				payer: this.provider.publicKey,
				authority: this.provider.publicKey,
				solEscrowWallet: solEscrowWallet,
				systemProgram: SystemProgram.programId,
			})
			.instruction();

		return ix;
	}
}
