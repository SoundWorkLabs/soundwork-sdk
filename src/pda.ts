import { getAssociatedTokenAddressSync } from "@solana/spl-token";
import { PublicKey } from "@solana/web3.js";
import { SOUNDWORK_LIST_PROGRAM_ID, SOUNDWORK_BID_PROGRAM_ID } from "./constants";

/**
  * Derive the listing data account address
  * @param {PublicKey} nftMint - the mint address of the NFT.
  * @returns {PublicKey} The address of the derived account.
  */
export function findListingDataAcc(nftMint: PublicKey): PublicKey {
	const [listingDataAcc] = PublicKey.findProgramAddressSync(
		[nftMint.toBuffer(), Buffer.from("ryo")],
		SOUNDWORK_LIST_PROGRAM_ID
	);

	return listingDataAcc;
}

/**
  * Derive the AssetManager address for the listing program.
  * The AssetManager manages all tokens on the listing program.
  * @returns {PublicKey} The address for the AssetManager.
  */
export function findAssetManagerAcc(): PublicKey {
	const [assetManager] = PublicKey.findProgramAddressSync(
		[Buffer.from("soundwork")],
		SOUNDWORK_LIST_PROGRAM_ID
	);

	return assetManager;
}

/**
  * Derive the ATA for the Listing program AssetManager.
  * @param {PublicKey} nftMint - the mint of the token.
  * @returns {PublicKey} The Associated Token Address for the nft.
  */
export function findVaultTokenAcc(
	nftMint: PublicKey,
	assetManager: PublicKey
): PublicKey {
	let vaultTokenAccount = getAssociatedTokenAddressSync(
		nftMint,
		assetManager,
		true
	);

	return vaultTokenAccount;
}

/**
  * Derive the SOL escrow address.
  * @param {PublicKey} address - the address for which the listing address is to be derived.
  * @returns {PublicKey} The address of the derived escrow.
  */
export function findUserEscrowWallet(address: PublicKey): PublicKey {
	const [userEscrowWaller] = PublicKey.findProgramAddressSync(
		[address.toBuffer(), Buffer.from("Hitori")],
		SOUNDWORK_LIST_PROGRAM_ID
	)
	return userEscrowWaller;
}

/**
  * Derive the bidding data account address
  * @param {PublicKey} nftMint - the mint address of the NFT.
  * @returns {PublicKey} The address of the derived account.
  */
export function findBiddingDataAcc(nftMint: PublicKey): PublicKey {
	const [biddingDataAcc] = PublicKey.findProgramAddressSync(
		[nftMint.toBuffer(), Buffer.from("Ikuyo")],
		SOUNDWORK_BID_PROGRAM_ID
	)

	return biddingDataAcc;
}
