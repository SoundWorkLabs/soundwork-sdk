"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoundworkSDK = void 0;
const web3_js_1 = require("@solana/web3.js");
const anchor_1 = require("@coral-xyz/anchor");
const web3_js_2 = require("@solana/web3.js");
const token_1 = require("@coral-xyz/anchor/dist/cjs/utils/token");
const spl_token_1 = require("@solana/spl-token");
const market_contracts_1 = require("./idl/market_contracts");
const constants_1 = require("./constants");
const pda_1 = require("./pda");
// todo (Jimii) helpers for the marke fees
/**
 * This is the base level class for interfacing with the Soundwork marketplace contracts.
 * @class
 */
class SoundworkSDK {
    constructor(cluster, provider) {
        this.provider = provider;
        this.cluster = cluster;
        this.endpoint = (0, web3_js_1.clusterApiUrl)(this.cluster);
        this.connection = new web3_js_1.Connection(this.endpoint);
        this.program = new anchor_1.Program(market_contracts_1.IDL, constants_1.SOUNDWORK_PROGRAM_ID, provider);
    }
    // --------------------------------------- fetchers
    /**
     * Fetch data about a listed NFT on the soundwork Marketplace
     * @param {PublicKey} mint - the mint address of the nft
     * @returns {Promise<IdlAccounts<MarketContracts>["listingDataV1"]>} a promise that resolves to the data inside the listingDataV1 account
     * @throws {Error} if there is an error fetching the details or if the response contains an error
     */
    fetchListedNftByMint(mint) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listingDataAcc = (0, pda_1.findListingDataAcc)(mint);
                let listingData = yield this.program.account.listingDataV1.fetch(listingDataAcc);
                return listingData;
            }
            catch (err) {
                throw new Error(`error during create Listing: ${err}`);
            }
        });
    }
    // --------------------------------------- listing calls
    /**
     * List an NFT on the soundwork marketplace
     * @param {PublicKey} mint - the mint address of the NFT.
     * @param {number} lamports - the amount in SOL for which the user is listing the NFT.
     * @returns {Promise<TransactionInstruction>} a promise that resolves to a web3.js Instruction which should be signed and send.
     * @throws {Error} if there is an error creating a listing or if the response contains an error // todo
     */
    createListing(mint, lamports) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.provider.publicKey) {
                throw Error("Expected public key not found");
            }
            const listingDataAcc = (0, pda_1.findListingDataAcc)(mint);
            const assetManager = (0, pda_1.findAssetManagerAcc)();
            const vaultTokenAccount = (0, pda_1.findVaultTokenAcc)(mint, assetManager);
            // derive token account
            let userTokenAcc = (0, spl_token_1.getAssociatedTokenAddressSync)(mint, this.provider.publicKey);
            try {
                let ix = yield this.program.methods
                    .listNft(new anchor_1.BN(lamports * web3_js_1.LAMPORTS_PER_SOL))
                    .accounts({
                    authority: this.provider.publicKey,
                    authorityTokenAccount: userTokenAcc,
                    mint,
                    assetManager,
                    vaultTokenAccount,
                    listingData: listingDataAcc,
                    tokenProgram: spl_token_1.TOKEN_PROGRAM_ID,
                    associatedTokenProgram: token_1.ASSOCIATED_PROGRAM_ID,
                    systemProgram: web3_js_2.SystemProgram.programId,
                })
                    .instruction();
                return ix;
            }
            catch (err) {
                throw new Error(`error during create Listing: ${err}`);
            }
        });
    }
    /**
     * Edit a listed NFT on the soundwork marketplace
     * @param {PublicKey} mint - the mint address of the NFT.
     * @param {number} newPriceLamports - the amount in SOL for the new listing.
     * @returns {Promise<TransactionInstruction>} a promise that resolves to a web3.js Instruction which should be signed and send by provider.
     * @throws {Error} if there is an error editing a listing or if the response contains an error // todo
     */
    editListing(mint, newPriceLamports) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.provider.publicKey) {
                throw Error("Expected public key not found");
            }
            const listingDataAcc = (0, pda_1.findListingDataAcc)(mint);
            const assetManager = (0, pda_1.findAssetManagerAcc)();
            const vaultTokenAccount = (0, pda_1.findVaultTokenAcc)(mint, assetManager);
            // derive token account
            let userTokenAcc = (0, spl_token_1.getAssociatedTokenAddressSync)(mint, this.provider.publicKey);
            try {
                let ix = yield this.program.methods
                    .editListing(new anchor_1.BN(newPriceLamports * web3_js_1.LAMPORTS_PER_SOL))
                    .accounts({
                    authority: this.provider.publicKey,
                    authorityTokenAccount: userTokenAcc,
                    mint,
                    assetManager,
                    vaultTokenAccount,
                    listingData: listingDataAcc,
                    tokenProgram: spl_token_1.TOKEN_PROGRAM_ID,
                    systemProgram: web3_js_2.SystemProgram.programId,
                })
                    .instruction();
                return ix;
            }
            catch (err) {
                throw new Error(`error during Edit Listing: ${err}`);
            }
        });
    }
    /**
     * Cancel a Listing made on the soundwork marketplace
     * @param {PublicKey} mint - the mint address of the NFT.
     * @param {number} newPriceLamports - the amount in SOL for the new listing.
     * @returns {Promise<TransactionInstruction>} a promise that resolves to a web3.js Instruction which should be signed and send by provider.
     * @throws {Error} if there is an error deleting the listing or if the response contains an error // todo
     */
    deleteListing(mint) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.provider.publicKey) {
                throw Error("Expected public key not found");
            }
            const listingDataAcc = (0, pda_1.findListingDataAcc)(mint);
            const assetManager = (0, pda_1.findAssetManagerAcc)();
            const vaultTokenAccount = (0, pda_1.findVaultTokenAcc)(mint, assetManager);
            // derive user's ATA account
            let userTokenAcc = (0, spl_token_1.getAssociatedTokenAddressSync)(mint, this.provider.publicKey);
            try {
                let ix = yield this.program.methods
                    .removeListing()
                    .accounts({
                    authority: this.provider.publicKey,
                    authorityTokenAccount: userTokenAcc,
                    mint,
                    assetManager,
                    vaultTokenAccount,
                    listingData: listingDataAcc,
                    tokenProgram: spl_token_1.TOKEN_PROGRAM_ID,
                    systemProgram: web3_js_2.SystemProgram.programId,
                })
                    .instruction();
                return ix;
            }
            catch (err) {
                throw new Error(`error during Delete Listing: ${err}`);
            }
        });
    }
    // --------------------------------------- trade methods. (buy / sell)
    /**
     * Buy an NFT Listed on the soundwork marketplace
     * @param {PublicKey} mint - the mint address of the Listed NFT.
     * @returns {Promise<TransactionInstruction>} a promise that resolves to a web3.js Instruction which should be signed and send by provider.
     * @throws {Error} if there is an error purchasing the listing or if the response contains an error // todo
     */
    buyListing(mint) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.provider.publicKey) {
                throw Error("Expected public key not found");
            }
            const listingDataAcc = (0, pda_1.findListingDataAcc)(mint);
            const assetManager = (0, pda_1.findAssetManagerAcc)();
            const vaultTokenAccount = (0, pda_1.findVaultTokenAcc)(mint, assetManager);
            // derive buyer's ATA account
            let buyerTokenAccount = (0, spl_token_1.getAssociatedTokenAddressSync)(mint, this.provider.publicKey);
            let listingData = yield this.program.account.listingDataV1.fetch(listingDataAcc);
            try {
                let ix = yield this.program.methods
                    .buyListing()
                    .accounts({
                    buyer: this.provider.publicKey,
                    ogOwner: listingData.owner,
                    buyerTokenAccount,
                    mint,
                    assetManager,
                    vaultTokenAccount,
                    listingData: listingDataAcc,
                    tokenProgram: spl_token_1.TOKEN_PROGRAM_ID,
                    systemProgram: web3_js_2.SystemProgram.programId,
                })
                    .instruction();
                return ix;
            }
            catch (err) {
                throw new Error(`error during Buy Listing: ${err}`);
            }
        });
    }
}
exports.SoundworkSDK = SoundworkSDK;
