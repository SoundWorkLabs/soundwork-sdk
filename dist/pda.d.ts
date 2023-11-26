import { PublicKey } from "@solana/web3.js";
/**
  * Derive the listing data account address
  * @param {PublicKey} nftMint - the mint address of the NFT.
  * @returns {PublicKey} The address of the derived account.
  */
export declare function findListingDataAcc(nftMint: PublicKey): PublicKey;
/**
  * Derive the AssetManager address for the listing program.
  * The AssetManager manages all tokens on the listing program.
  * @returns {PublicKey} The address for the AssetManager.
  */
export declare function findAssetManagerAcc(): PublicKey;
/**
  * Derive the ATA for the Listing program AssetManager.
  * @param {PublicKey} nftMint - the mint of the token.
  * @returns {PublicKey} The Associated Token Address for the nft.
  */
export declare function findVaultTokenAcc(nftMint: PublicKey, assetManager: PublicKey): PublicKey;
/**
  * Derive the SOL escrow address.
  * @param {PublicKey} address - the address for which the listing address is to be derived.
  * @returns {PublicKey} The address of the derived escrow.
  */
export declare function findUserEscrowWallet(address: PublicKey): PublicKey;
/**
  * Derive the bidding data account address
  * @param {PublicKey} nftMint - the mint address of the NFT.
  * @returns {PublicKey} The address of the derived account.
  */
export declare function findBiddingDataAcc(nftMint: PublicKey): PublicKey;
