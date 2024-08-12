import {
	BN,
	IdlAccounts,
	IdlTypes,
	Program,
	Provider,
} from "@coral-xyz/anchor";
import { ASSOCIATED_PROGRAM_ID } from "@coral-xyz/anchor/dist/cjs/utils/token";
import {
	getAssociatedTokenAddressSync,
	TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import {
	Connection,
	PublicKey,
	SystemProgram,
	TransactionInstruction,
} from "@solana/web3.js";

import { CORE_PROGRAM_ID, TREASURY_ADDRESS } from "../constants";
import {
	findAssetManagerAddress,
	findListingDataAddress,
	findMarketplaceConfigAddress,
	findWalletAddress,
} from "../pda";
import type { SoundworkList } from "./idl/soundwork_list";
import * as soundworkListIDL from "./idl/soundwork_list.json";

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
			soundworkListIDL as unknown as SoundworkList,
			provider
		);
	}

	// --------------------------------------- fetchers
	/**
	 * Fetch data about a listed collectible on the soundwork Marketplace
	 *
	 * @param {PublicKey} asset - the address of the collectible
	 * @returns {Promise<IdlAccounts<SoundworkList>["listingData"]>} a promise that resolves to the data inside the listingDataV1 account
	 * @throws {Error} if there is an error fetching the details or if the response contains an error
	 */
	async fetchListDataByAddress(
		asset: PublicKey
	): Promise<IdlAccounts<SoundworkList>["listingData"]> {
		try {
			const listingDataAcc = findListingDataAddress(asset);

			let listingData: IdlAccounts<SoundworkList>["listingData"] =
				await this.program.account.listingData.fetch(listingDataAcc);

			return listingData;
		} catch (err) {
			throw new Error(`error fetching listing data: ${err}`);
		}
	}

	/**
	 * Fetch user escrow wallet
	 *
	 * @returns {Promise<IdlAccounts<SoundworkList>["wallet"]>} a promise that resolves to the data inside the listingDataV1 account
	 * @throws {Error} if there is an error fetching the details or if the response contains an error
	 */
	async fetchUserEscrowWallet(
		authority: PublicKey
	): Promise<IdlAccounts<SoundworkList>["wallet"]> {
		try {
			const walletAddress = findWalletAddress(authority);

			let walletData: IdlAccounts<SoundworkList>["wallet"] =
				await this.program.account.wallet.fetch(walletAddress);

			return walletData;
		} catch (err) {
			throw new Error(`error fetching listing data: ${err}`);
		}
	}

	// --------------------------------------- listing calls
	/**
	 * List an NFT on the soundwork marketplace
	 *
	 * @param {PublicKey} asset - the asset address.
	 * @param {number} amount - the amount in lamports for which the user is listing the NFT.
	 * @param {IdlTypes<SoundworkList>["paymentOption"] } paymentOption - payment option. Native Sol or tokens.
	 * @param {PublicKey | null } [collection] - Optional collection address.
	 * @returns {Promise<TransactionInstruction>} a promise that resolves to a web3.js Instruction.
	 * @throws {Error} if there is an error creating a listing or if the response contains an error // todo
	 */
	public async listAsset(
		asset: PublicKey,
		amount: number,
		paymentOption: IdlTypes<SoundworkList>["paymentOption"],
		collection: PublicKey | null = null
	): Promise<TransactionInstruction> {
		if (!this.provider.publicKey) {
			throw Error("Expected public key not found");
		}

		try {
			let ix = await this.program.methods
				.listAsset({
					amount,
					paymentOption,
				})
				.accountsStrict({
					payer: this.provider.publicKey,
					asset,
					collection,
					listingData: findListingDataAddress(asset),
					assetManager: findAssetManagerAddress(),
					coreProgram: CORE_PROGRAM_ID,
					systemProgram: SystemProgram.programId,
				})
				.instruction();

			return ix;
		} catch (err) {
			throw new Error(`error during create Listing: ${err}`);
		}
	}

	// todo(Jimii): implement edit_listing method
	// /**
	//  * Edit a listed collectible on the soundwork marketplace
	//  * @param {PublicKey} asset - the asset address.
	//  * @param {number} newPrice - the new amount in lamports.
	//  * @returns {Promise<TransactionInstruction>} a promise that resolves to a web3.js Instruction.
	//  * @throws {Error} if there is an error editing a listing or if the response contains an error // todo
	//  */
	// public async editListing(
	// 	asset: PublicKey,
	// 	newPrice: number
	// ): Promise<TransactionInstruction> {
	// 	if (!this.provider.publicKey) {
	// 		throw Error("Expected public key not found");
	// 	}

	// 	try {
	// 		let ix = await this.program.methods
	// 			.editListing(new BN(newPriceLamports))
	// 			.accounts({
	// 				payer: this.provider.publicKey,

	// 				tokenProgram: TOKEN_PROGRAM_ID,
	// 				systemProgram: SystemProgram.programId,
	// 			})
	// 			.instruction();

	// 		return ix;
	// 	} catch (err) {
	// 		throw new Error(`error during Edit Listing: ${err}`);
	// 	}
	// }

	/**
	 * Unlist a collectible from our marketplace
	 *
	 * @param {PublicKey} asset - the asset address.
	 * @param {PublicKey | null } [collection] - Optional collection address.
	 * @returns {Promise<TransactionInstruction>} a promise that resolves to a web3.js Instruction.
	 * @throws {Error} if there is an error deleting the listing or if the response contains an error // todo
	 */
	public async unlistAsset(
		asset: PublicKey,
		collection: PublicKey | null = null
	): Promise<TransactionInstruction> {
		if (!this.provider.publicKey) {
			throw Error("Expected public key not found");
		}

		try {
			let ix = await this.program.methods
				.unlistAsset()
				.accountsStrict({
					payer: this.provider.publicKey,
					asset,
					collection,
					listingData: findListingDataAddress(asset),
					assetManager: findAssetManagerAddress(),
					coreProgram: CORE_PROGRAM_ID,
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
	 *
	 * @param {PublicKey} asset - the asset address of the listed collectible.
	 * @param {PublicKey | null}  [mint] - Optional. Only passed it when payment is in SPL tokens.
	 * @param {PublicKey | null } [collection] - Optional collection address.
	 * @returns {Promise<TransactionInstruction>} a promise that resolves to a web3.js Instruction.
	 * @throws {Error} if there is an error purchasing the listing or if the response contains an error // todo
	 */
	public async buyListing(
		asset: PublicKey,
		mint: PublicKey | null,
		collection: PublicKey | null = null
	): Promise<TransactionInstruction> {
		if (!this.provider.publicKey) {
			throw Error("Expected public key not found");
		}

		const listingDataAddress = findListingDataAddress(asset);

		let listingData = await this.program.account.listingData.fetch(
			listingDataAddress
		);

		try {
			let ix = await this.program.methods
				.buyAsset(null)
				.accountsStrict({
					payer: this.provider.publicKey,
					buyer: this.provider.publicKey,
					seller: listingData.authority,
					walletAsBuyer: null,
					asset,
					collection,
					paymentMint: mint,
					walletTokenAccount: null,
					buyerTokenAccount: mint
						? getAssociatedTokenAddressSync(
								mint,
								this.provider.publicKey
						  )
						: null,
					sellerTokenAccount: mint
						? getAssociatedTokenAddressSync(
								mint,
								listingData.authority
						  )
						: null,
					treasuryTokenAccount: mint
						? getAssociatedTokenAddressSync(mint, TREASURY_ADDRESS)
						: null, // ! update to correct address
					treasury: TREASURY_ADDRESS, // ! update to correct address
					listingData: listingDataAddress,
					assetManager: findAssetManagerAddress(),
					marketplaceConfig: findMarketplaceConfigAddress(),
					coreProgram: CORE_PROGRAM_ID,
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
	 * Initialize user's Escrow wallet owned by soundwork list program.
	 *
	 * @returns {Promise<TransactionInstruction>} a promise that resolves to a web3.js Instruction.
	 * @throws {Error} throw an error if we encounter a failure
	 */
	public async initUserEscrowWallet(): Promise<TransactionInstruction> {
		if (!this.provider.publicKey) {
			throw Error("Expected public key not found");
		}

		let ix = await this.program.methods
			.initUserEscrowWallet()
			.accountsStrict({
				authority: this.provider.publicKey,
				wallet: findWalletAddress(this.provider.publicKey),
				systemProgram: SystemProgram.programId,
			})
			.instruction();

		return ix;
	}

	/**
	 * Deposit SOL into  user's Escrow wallet owned by soundwork list program.
	 *
	 * @param {BN} amount - the amount in lamports you are depositing into the escrow.
	 * @returns {Promise<TransactionInstruction>} a promise that resolves to a web3.js Instruction.
	 * @throws {Error} throw an error if we encounter a failure
	 */
	public async depositSol(amount: BN): Promise<TransactionInstruction> {
		if (!this.provider.publicKey) {
			throw Error("Expected public key not found");
		}

		let ix = await this.program.methods
			.depositSol(amount)
			.accountsStrict({
				authority: this.provider.publicKey,
				wallet: findWalletAddress(this.provider.publicKey),
				systemProgram: SystemProgram.programId,
			})
			.instruction();

		return ix;
	}

	/**
	 * Withdraw SOL into  user's Escrow wallet owned by soundwork list program.
	 *
	 * @param {BN} amount - the amount in lamports you'd like to withdraw from the escrow.
	 * @returns {Promise<TransactionInstruction>} a promise that resolves to a web3.js Instruction.
	 * @throws {Error} throw an error if we encounter a failure
	 */
	public async withDrawSol(amount: BN): Promise<TransactionInstruction> {
		if (!this.provider.publicKey) {
			throw Error("Expected public key not found");
		}

		let ix = await this.program.methods
			.withdrawSol(amount)
			.accountsStrict({
				payer: this.provider.publicKey,
				authority: this.provider.publicKey,
				wallet: findWalletAddress(this.provider.publicKey),
				systemProgram: SystemProgram.programId,
			})
			.instruction();

		return ix;
	}

	/**
	 * Deposits a specific SPL token (e.g., USDC) into  user's Escrow wallet.
	 *
	 * @param {BN} amount - the amount of tokens you are depositing into the escrow.
	 * @param {PublicKey}  mint - the SPL token mint address user wants to deposit.
	 * @returns {Promise<TransactionInstruction>} a promise that resolves to a web3.js Instruction.
	 * @throws {Error} throw an error if we encounter a failure
	 */
	public async depositSPLToken(
		amount: BN,
		mint: PublicKey
	): Promise<TransactionInstruction> {
		if (!this.provider.publicKey) {
			throw Error("Expected public key not found");
		}

		let ix = await this.program.methods
			.depositToken({ amount }) // with 6 decimals, this is 1 USDC dev coin
			.accountsStrict({
				authority: this.provider.publicKey,
				wallet: findWalletAddress(this.provider.publicKey),
				mint,
				authorityTokenAccount: getAssociatedTokenAddressSync(
					mint,
					this.provider.publicKey
				),
				walletTokenAccount: getAssociatedTokenAddressSync(
					mint,
					findWalletAddress(this.provider.publicKey),
					true
				),
				tokenProgram: TOKEN_PROGRAM_ID,
				associatedTokenProgram: ASSOCIATED_PROGRAM_ID,
				systemProgram: SystemProgram.programId,
			})
			.instruction();

		return ix;
	}

	/**
	 * Withdraws a specific SPL token (e.g., USDC) from the user's Escrow wallet.
	 *
	 * @param {BN} amount - the amount of tokens you are depositing into the escrow.
	 * @param {PublicKey}  mint - the SPL token mint address user wants to deposit.
	 * @returns {Promise<TransactionInstruction>} a promise that resolves to a web3.js Instruction.
	 * @throws {Error} throw an error if we encounter a failure
	 */
	public async withdrawSPLToken(
		amount: BN,
		mint: PublicKey
	): Promise<TransactionInstruction> {
		if (!this.provider.publicKey) {
			throw Error("Expected public key not found");
		}

		let ix = await this.program.methods
			.withdrawToken({ amount })
			.accountsStrict({
				payer: this.provider.publicKey,
				authority: this.provider.publicKey,
				wallet: findWalletAddress(this.provider.publicKey),
				mint,
				authorityTokenAccount: getAssociatedTokenAddressSync(
					mint,
					this.provider.publicKey
				),
				walletTokenAccount: getAssociatedTokenAddressSync(
					mint,
					findWalletAddress(this.provider.publicKey),
					true
				),
				tokenProgram: TOKEN_PROGRAM_ID,
				associatedTokenProgram: ASSOCIATED_PROGRAM_ID,
				systemProgram: SystemProgram.programId,
			})
			.instruction();

		return ix;
	}
}
