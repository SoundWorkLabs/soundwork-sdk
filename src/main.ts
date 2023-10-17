import {
    Cluster,
    clusterApiUrl,
    Connection,
    LAMPORTS_PER_SOL,
    TransactionInstruction,
} from "@solana/web3.js";
import { Program, Provider, BN, IdlAccounts } from "@coral-xyz/anchor";
import { PublicKey, SystemProgram } from "@solana/web3.js";
import { ASSOCIATED_PROGRAM_ID } from "@coral-xyz/anchor/dist/cjs/utils/token";
import {
    TOKEN_PROGRAM_ID,
} from "@solana/spl-token";

import { MarketContracts } from "./idl/market_contracts";
import { IDL as soundworkIDL } from "./idl/market_contracts";
import { SOUNDWORK_PROGRAM_ID } from "./constants";
import {
    findAssetManagerAcc,
    findListingDataAcc,
    findVaultTokenAcc,
} from "./pda";


// todo (Jimii) helpers for the marke fees

/**
 * This is the base level class for interfacing with the Soundwork marketplace contracts.
 * @class
 */
export class SoundworSDK {
    /** anchor provider of the person calling our sdk */
    // todo: what if it's not a person calling this?
    private provider: Provider;
    /** Our anchor program helper */
    private program: Program<MarketContracts>;
    /** The cluster in which the connection endpoint belongs to */
    public readonly cluster: Cluster;
    /** The connection object from Solana's SDK */
    public readonly connection: Connection;
    /** URL to the full node JSON RPC endpoint */
    public readonly endpoint: string;

    constructor(cluster: Cluster, provider: Provider) {
        this.provider = provider;
        this.cluster = cluster;
        this.endpoint = clusterApiUrl(this.cluster);
        this.connection = new Connection(this.endpoint);

        this.program = new Program<MarketContracts>(
            soundworkIDL,
            SOUNDWORK_PROGRAM_ID,
            provider
        );
    }

    // --------------------------------------- fetchers
    /**
     * Fetch data about a listed NFT on the soundwork Marketplace
     * @param {PublicKey} mint - the mint address of the nft
     * @returns {Promise<IdlAccounts<MarketContracts>["listingDataV1"]>} a promise that resolves to the data inside the listingDataV1 account
     * @throws {Error} if there is an error fetching the details or if the response contains an error
     */
    async fetchListedNftByMint(
        mint: PublicKey
    ): Promise<IdlAccounts<MarketContracts>["listingDataV1"]> {
        try {
            const listingDataAcc = findListingDataAcc(mint);

            let listingData: IdlAccounts<MarketContracts>["listingDataV1"] =
                await this.program.account.listingDataV1.fetch(listingDataAcc);

            return listingData;
        } catch (err) {
            throw new Error(`error during create Listing: ${err}`);
        }
    }

    // --------------------------------------- listing calls
    /**
     * List an NFT on the soundwork marketplace
     * @param {PublicKey} mint - the mint address of the NFT.
     * @param {PublicKey} userTokenAcc - the Associated Token Account address for the user's mint.
     * @param {number} lamports - the amount in SOL for which the user is listing the NFT.
     * @returns {Promise<TransactionInstruction>} a promise that resolves to a web3.js Instruction which should be signed and send.
     * @throws {Error} if there is an error creating a listing or if the response contains an error // todo
     */
    public async createListing(
        mint: PublicKey,
        userTokenAcc: PublicKey,
        lamports: number
    ): Promise<TransactionInstruction> {
        const listingDataAcc = findListingDataAcc(mint);
        const assetManager = findAssetManagerAcc();
        const vaultTokenAccount = findVaultTokenAcc(mint, assetManager);

        try {
            let ix = await this.program.methods
                .listNft(new BN(lamports * LAMPORTS_PER_SOL))
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
     * @param {PublicKey} userTokenAcc - the Associated Token Account address for the user's mint.
     * @param {number} newPriceLamports - the amount in SOL for the new listing.
     * @returns {Promise<TransactionInstruction>} a promise that resolves to a web3.js Instruction which should be signed and send by provider.
     * @throws {Error} if there is an error editing a listing or if the response contains an error // todo
     */
    public async editListing(
        mint: PublicKey,
        userTokenAcc: PublicKey,
        newPriceLamports: number
    ): Promise<TransactionInstruction> {
        const listingDataAcc = findListingDataAcc(mint);
        const assetManager = findAssetManagerAcc();
        const vaultTokenAccount = findVaultTokenAcc(mint, assetManager);

        try {
            let ix = await this.program.methods
                .editListing(new BN(newPriceLamports * LAMPORTS_PER_SOL))
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
     * @param {PublicKey} userTokenAcc - the Associated Token Account address for the user's mint.
     * @param {number} newPriceLamports - the amount in SOL for the new listing.
     * @returns {Promise<TransactionInstruction>} a promise that resolves to a web3.js Instruction which should be signed and send by provider.
     * @throws {Error} if there is an error deleting the listing or if the response contains an error // todo
     */
    public async deleteListing(
        mint: PublicKey,
        userTokenAcc: PublicKey
    ): Promise<TransactionInstruction> {
        const listingDataAcc = findListingDataAcc(mint);
        const assetManager = findAssetManagerAcc();
        const vaultTokenAccount = findVaultTokenAcc(mint, assetManager);

        try {
            let ix = await this.program.methods
                .removeListing()
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
     * @param {PublicKey} ogOwner - public key  of user who put up NFT for listing.
     * @param {PublicKey} buyerTokenAccount - The Token Account for the buyer. Created if it does not exist by our contract.
     * @param {PublicKey} mint - the mint address of the Listed NFT.
     * @returns {Promise<TransactionInstruction>} a promise that resolves to a web3.js Instruction which should be signed and send by provider.
     * @throws {Error} if there is an error purchasing the listing or if the response contains an error // todo
     */
    public async buyListing(
        buyerTokenAccount: PublicKey,
        mint: PublicKey
    ): Promise<TransactionInstruction> {
        const listingDataAcc = findListingDataAcc(mint);
        const assetManager = findAssetManagerAcc();
        const vaultTokenAccount = findVaultTokenAcc(mint, assetManager);

        let listingData = await this.program.account.listingDataV1.fetch(
            listingDataAcc
        );

        try {
            let ix = await this.program.methods
                .buyListing()
                .accounts({
                    buyer: this.provider.publicKey, // ! change
                    ogOwner: listingData.owner, // ! change
                    buyerTokenAccount, // ! change
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
            throw new Error(`error during Buy Listing: ${err}`);
        }
    }
}
