import { getAssociatedTokenAddressSync } from "@solana/spl-token";
import { PublicKey } from "@solana/web3.js";
import { SOUNDWORK_LIST_PROGRAM_ID } from "./constants";

export function findListingDataAcc(nftMint: PublicKey): PublicKey {
	const [listingDataAcc] = PublicKey.findProgramAddressSync(
		[nftMint.toBuffer(), Buffer.from("ryo")],
		SOUNDWORK_LIST_PROGRAM_ID
	);

	return listingDataAcc;
}

export function findAssetManagerAcc(): PublicKey {
	const [assetManager] = PublicKey.findProgramAddressSync(
		[Buffer.from("soundwork")],
		SOUNDWORK_LIST_PROGRAM_ID
	);
    
	return assetManager;
}

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
