import { PublicKey } from "@solana/web3.js";
export declare function findListingDataAcc(nftMint: PublicKey): PublicKey;
export declare function findAssetManagerAcc(): PublicKey;
export declare function findVaultTokenAcc(nftMint: PublicKey, assetManager: PublicKey): PublicKey;
