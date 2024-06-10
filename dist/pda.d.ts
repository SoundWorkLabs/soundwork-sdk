import { PublicKey } from "@solana/web3.js";
/**
 * Derive the asset manager account address
 * @returns {PublicKey} The asset Manager Address.
 */
export declare const findAssetManagerAddress: () => PublicKey;
/**
 * Derive the marketplace config account
 * @returns {PublicKey} listingData Address.
 */
export declare const findMarketplaceConfigAddress: () => PublicKey;
/**
 * Derive the listing data account address
 * @param asset Asset address
 * @returns {PublicKey} listingData Address.
 */
export declare const findListingDataAddress: (asset: PublicKey) => PublicKey;
/**
 * Derive the user wallet escrow address
 * @param authority user's address
 * @returns {PublicKey} listingData Address.
 */
export declare const findWalletAddress: (authority: PublicKey) => PublicKey;
/**
 * Derive the bid data account address
 *
 * @param asset asset's address
 *
 * @returns {PublicKey} The bid data Address.
 */
export declare const findBidDataAddress: (asset: PublicKey) => PublicKey;
