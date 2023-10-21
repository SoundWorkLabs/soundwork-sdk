import { AnchorProvider, Wallet } from "@coral-xyz/anchor";
import {
	Cluster,
	clusterApiUrl,
	Connection,
	Keypair,
	PublicKey,
} from "@solana/web3.js";
import { homedir } from "os";
import { readFileSync } from "fs";

import { Provider } from "@coral-xyz/anchor";

const USER_KEYPAIR_PATH = homedir() + "/.config/solana/id.json";
export const userKeypair = Keypair.fromSecretKey(
	Buffer.from(JSON.parse(readFileSync(USER_KEYPAIR_PATH, "utf-8")))
);

export const cluster = 'devnet' // ! change here

let endpoint = clusterApiUrl("devnet");
export const connection = new Connection(endpoint)

export function setProvider(): Provider {
	const wallet = new Wallet(userKeypair);

	let provider = new AnchorProvider(
		connection,
		wallet,
		AnchorProvider.defaultOptions()
	);
	return provider;
}

export const nftMint = new PublicKey(
	"CiHbwBVEUUv2FypF5ndnLrYnuBBR3XEysu4v3yg6M6NE"
);

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
