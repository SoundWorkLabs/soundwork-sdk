import { AnchorProvider, Wallet } from "@coral-xyz/anchor";
import { clusterApiUrl, Connection, Keypair, PublicKey } from "@solana/web3.js";
import { readFileSync } from "fs";
import { homedir } from "os";

import { Provider } from "@coral-xyz/anchor";

const USER_KEYPAIR_PATH = homedir() + "/.config/solana/id.json";
export const userKeypair = Keypair.fromSecretKey(
	Buffer.from(JSON.parse(readFileSync(USER_KEYPAIR_PATH, "utf-8")))
);

const BUYER_KEYPAIR_PATH = homedir() + "/.config/solana/id-new.json";
export const buyerKeypair = Keypair.fromSecretKey(
	Buffer.from(JSON.parse(readFileSync(BUYER_KEYPAIR_PATH, "utf-8")))
);

export const cluster = "devnet"; // ! change here

let endpoint = clusterApiUrl("devnet");
export const connection = new Connection(endpoint);

export function setProvider(): Provider {
	const wallet = new Wallet(userKeypair);

	let provider = new AnchorProvider(
		connection,
		wallet,
		AnchorProvider.defaultOptions()
	);
	return provider;
}

export function setSellerProvider(): Provider {
	// ! GET RID OF ME
	const wallet = new Wallet(userKeypair);

	let provider = new AnchorProvider(
		connection,
		wallet,
		AnchorProvider.defaultOptions()
	);
	return provider;
}

export function setBuyerProvider(): Provider {
	const wallet = new Wallet(buyerKeypair);

	let provider = new AnchorProvider(
		connection,
		wallet,
		AnchorProvider.defaultOptions()
	);
	return provider;
}

export const nftMint = new PublicKey(
	"E3nQYNBhTu7F2idxy5zceAFh5YMKXU6Uo3oeSeebhcWC"
);

export const asset = new PublicKey(
	"BLBymXS7qxcsL9qESyfv82Q4DKSAfCtNnna7TBEqKmj6"
);

export const BONK_DEV_MINT = new PublicKey(
	"BpBqiAoNFYVZr8vr3V5CHFX3HkRwnihNcKnzvxAEZ38e"
);

export const sleep = (ms: number) =>
	new Promise((resolve) => setTimeout(resolve, ms));
