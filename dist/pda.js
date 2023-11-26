"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findBiddingDataAcc = exports.findUserEscrowWallet = exports.findVaultTokenAcc = exports.findAssetManagerAcc = exports.findListingDataAcc = void 0;
const spl_token_1 = require("@solana/spl-token");
const web3_js_1 = require("@solana/web3.js");
const constants_1 = require("./constants");
/**
  * Derive the listing data account address
  * @param {PublicKey} nftMint - the mint address of the NFT.
  * @returns {PublicKey} The address of the derived account.
  */
function findListingDataAcc(nftMint) {
    const [listingDataAcc] = web3_js_1.PublicKey.findProgramAddressSync([nftMint.toBuffer(), Buffer.from("ryo")], constants_1.SOUNDWORK_LIST_PROGRAM_ID);
    return listingDataAcc;
}
exports.findListingDataAcc = findListingDataAcc;
/**
  * Derive the AssetManager address for the listing program.
  * The AssetManager manages all tokens on the listing program.
  * @returns {PublicKey} The address for the AssetManager.
  */
function findAssetManagerAcc() {
    const [assetManager] = web3_js_1.PublicKey.findProgramAddressSync([Buffer.from("soundwork")], constants_1.SOUNDWORK_LIST_PROGRAM_ID);
    return assetManager;
}
exports.findAssetManagerAcc = findAssetManagerAcc;
/**
  * Derive the ATA for the Listing program AssetManager.
  * @param {PublicKey} nftMint - the mint of the token.
  * @returns {PublicKey} The Associated Token Address for the nft.
  */
function findVaultTokenAcc(nftMint, assetManager) {
    let vaultTokenAccount = (0, spl_token_1.getAssociatedTokenAddressSync)(nftMint, assetManager, true);
    return vaultTokenAccount;
}
exports.findVaultTokenAcc = findVaultTokenAcc;
/**
  * Derive the SOL escrow address.
  * @param {PublicKey} address - the address for which the listing address is to be derived.
  * @returns {PublicKey} The address of the derived escrow.
  */
function findUserEscrowWallet(address) {
    const [userEscrowWaller] = web3_js_1.PublicKey.findProgramAddressSync([address.toBuffer(), Buffer.from("Hitori")], constants_1.SOUNDWORK_LIST_PROGRAM_ID);
    return userEscrowWaller;
}
exports.findUserEscrowWallet = findUserEscrowWallet;
/**
  * Derive the bidding data account address
  * @param {PublicKey} nftMint - the mint address of the NFT.
  * @returns {PublicKey} The address of the derived account.
  */
function findBiddingDataAcc(nftMint) {
    const [biddingDataAcc] = web3_js_1.PublicKey.findProgramAddressSync([nftMint.toBuffer(), Buffer.from("Ikuyo")], constants_1.SOUNDWORK_BID_PROGRAM_ID);
    return biddingDataAcc;
}
exports.findBiddingDataAcc = findBiddingDataAcc;
