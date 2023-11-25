"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findVaultTokenAcc = exports.findAssetManagerAcc = exports.findListingDataAcc = void 0;
const spl_token_1 = require("@solana/spl-token");
const web3_js_1 = require("@solana/web3.js");
const constants_1 = require("./constants");
function findListingDataAcc(nftMint) {
    const [listingDataAcc] = web3_js_1.PublicKey.findProgramAddressSync([nftMint.toBuffer(), Buffer.from("ryo")], constants_1.SOUNDWORK_LIST_PROGRAM_ID);
    return listingDataAcc;
}
exports.findListingDataAcc = findListingDataAcc;
function findAssetManagerAcc() {
    const [assetManager] = web3_js_1.PublicKey.findProgramAddressSync([Buffer.from("soundwork")], constants_1.SOUNDWORK_LIST_PROGRAM_ID);
    return assetManager;
}
exports.findAssetManagerAcc = findAssetManagerAcc;
function findVaultTokenAcc(nftMint, assetManager) {
    let vaultTokenAccount = (0, spl_token_1.getAssociatedTokenAddressSync)(nftMint, assetManager, true);
    return vaultTokenAccount;
}
exports.findVaultTokenAcc = findVaultTokenAcc;
