"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findBidDataAddress = exports.findWalletAddress = exports.findListingDataAddress = exports.findMarketplaceConfigAddress = exports.findAssetManagerAddress = void 0;
const web3_js_1 = require("@solana/web3.js");
const constants_1 = require("./constants");
/**
 * Derive the asset manager account address
 * @returns {PublicKey} The asset Manager Address.
 */
const findAssetManagerAddress = () => {
    return web3_js_1.PublicKey.findProgramAddressSync([Buffer.from(constants_1.SEED_PREFIX), Buffer.from(constants_1.ASSET_MANAGER_PREFIX)], constants_1.SOUNDWORK_LIST_PROGRAM_ID)[0];
};
exports.findAssetManagerAddress = findAssetManagerAddress;
/**
 * Derive the marketplace config account
 * @returns {PublicKey} listingData Address.
 */
const findMarketplaceConfigAddress = () => {
    return web3_js_1.PublicKey.findProgramAddressSync([Buffer.from(constants_1.SEED_PREFIX), Buffer.from(constants_1.SEED_MARKETPLACE_CONFIG)], constants_1.SOUNDWORK_LIST_PROGRAM_ID)[0];
};
exports.findMarketplaceConfigAddress = findMarketplaceConfigAddress;
/**
 * Derive the listing data account address
 * @param asset Asset address
 * @returns {PublicKey} listingData Address.
 */
const findListingDataAddress = (asset) => {
    return web3_js_1.PublicKey.findProgramAddressSync([
        Buffer.from(constants_1.SEED_PREFIX),
        Buffer.from(constants_1.SEED_LISTING_DATA),
        asset.toBuffer(),
    ], constants_1.SOUNDWORK_LIST_PROGRAM_ID)[0];
};
exports.findListingDataAddress = findListingDataAddress;
/**
 * Derive the user wallet escrow address
 * @param authority user's address
 * @returns {PublicKey} listingData Address.
 */
const findWalletAddress = (authority) => {
    return web3_js_1.PublicKey.findProgramAddressSync([
        Buffer.from(constants_1.SEED_PREFIX),
        Buffer.from(constants_1.SEED_WALLET),
        authority.toBuffer(),
    ], constants_1.SOUNDWORK_LIST_PROGRAM_ID)[0];
};
exports.findWalletAddress = findWalletAddress;
/**
 * Derive the bid data account address
 *
 * @param asset asset's address
 *
 * @returns {PublicKey} The bid data Address.
 */
const findBidDataAddress = (asset) => {
    return web3_js_1.PublicKey.findProgramAddressSync([
        Buffer.from(constants_1.SEED_PREFIX),
        Buffer.from(constants_1.SEED_BID_DATA),
        asset.toBuffer(),
    ], constants_1.SOUNDWORK_BID_PROGRAM_ID)[0];
};
exports.findBidDataAddress = findBidDataAddress;
