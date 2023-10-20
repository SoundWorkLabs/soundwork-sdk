import { Cluster, Connection, TransactionInstruction } from "@solana/web3.js";
import { Provider, IdlAccounts } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import { MarketContracts } from "./idl/market_contracts";
/**
 * This is the base level class for interfacing with the Soundwork marketplace contracts.
 * @class
 */
export declare class SoundworkSDK {
    /** anchor provider of the person calling our sdk */
    private provider;
    /** Our anchor program helper */
    private program;
    /** The cluster in which the connection endpoint belongs to */
    readonly cluster: Cluster;
    /** The connection object from Solana's SDK */
    readonly connection: Connection;
    /** URL to the full node JSON RPC endpoint */
    readonly endpoint: string;
    constructor(cluster: Cluster, provider: Provider);
    /**
     * Fetch data about a listed NFT on the soundwork Marketplace
     * @param {PublicKey} mint - the mint address of the nft
     * @returns {Promise<IdlAccounts<MarketContracts>["listingDataV1"]>} a promise that resolves to the data inside the listingDataV1 account
     * @throws {Error} if there is an error fetching the details or if the response contains an error
     */
    fetchListedNftByMint(mint: PublicKey): Promise<IdlAccounts<MarketContracts>["listingDataV1"]>;
    /**
     * List an NFT on the soundwork marketplace
     * @param {PublicKey} mint - the mint address of the NFT.
     * @param {number} lamports - the amount in SOL for which the user is listing the NFT.
     * @returns {Promise<TransactionInstruction>} a promise that resolves to a web3.js Instruction which should be signed and send.
     * @throws {Error} if there is an error creating a listing or if the response contains an error // todo
     */
    createListing(mint: PublicKey, lamports: number): Promise<TransactionInstruction>;
    /**
     * Edit a listed NFT on the soundwork marketplace
     * @param {PublicKey} mint - the mint address of the NFT.
     * @param {number} newPriceLamports - the amount in SOL for the new listing.
     * @returns {Promise<TransactionInstruction>} a promise that resolves to a web3.js Instruction which should be signed and send by provider.
     * @throws {Error} if there is an error editing a listing or if the response contains an error // todo
     */
    editListing(mint: PublicKey, newPriceLamports: number): Promise<TransactionInstruction>;
    /**
     * Cancel a Listing made on the soundwork marketplace
     * @param {PublicKey} mint - the mint address of the NFT.
     * @param {number} newPriceLamports - the amount in SOL for the new listing.
     * @returns {Promise<TransactionInstruction>} a promise that resolves to a web3.js Instruction which should be signed and send by provider.
     * @throws {Error} if there is an error deleting the listing or if the response contains an error // todo
     */
    deleteListing(mint: PublicKey): Promise<TransactionInstruction>;
    /**
     * Buy an NFT Listed on the soundwork marketplace
     * @param {PublicKey} mint - the mint address of the Listed NFT.
     * @returns {Promise<TransactionInstruction>} a promise that resolves to a web3.js Instruction which should be signed and send by provider.
     * @throws {Error} if there is an error purchasing the listing or if the response contains an error // todo
     */
    buyListing(mint: PublicKey): Promise<TransactionInstruction>;
}
