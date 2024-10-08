import { BN } from "@coral-xyz/anchor";
import {
	Keypair,
	LAMPORTS_PER_SOL,
	PublicKey,
	sendAndConfirmTransaction,
	Transaction,
} from "@solana/web3.js";
import { SoundworkListSDK } from "../src/soundwork-list/main";

// test utils
import {
	asset,
	BONK_DEV_MINT,
	buyerKeypair,
	connection,
	setBuyerProvider,
	setProvider,
	setSellerProvider,
	sleep,
	userKeypair,
} from "./testUtils";

describe("SOUNDWORK LIST SDK TEST", () => {
	let listSDK: SoundworkListSDK;

	describe("SELLER TESTS", () => {
		// let provider = setSellerProvider();
		// beforeAll(() => {
		// 	listSDK = new SoundworkListSDK(provider, connection);
		// });
		// it("should fail fetching listed NFT data for an account that does not exist", async () => {
		// 	try {
		// 		let nonExistentMint = new PublicKey(
		// 			"DY73PC8Dmr2nYXmrMcJG4hxKhXTMSo5kKfG89iLjY1G8"
		// 		);
		// 		await listSDK.fetchListDataByAddress(nonExistentMint);
		// 		fail("Expected an error to be thrown, but it didn't.");
		// 	} catch (error: any) {
		// 		console.log("error trying to fetch non existent account: ", error);
		// 		expect(error).toBeInstanceOf(Error);
		// 	}
		// }, 60000);
		// it("should create a listing with SPL Token", async () => {
		// 	// one bonk
		// 	let ix = await listSDK.listAsset(asset, new BN(1_000_000_000), {
		// 		token: { mint: BONK_DEV_MINT },
		// 	});
		// 	let tx = new Transaction().add(ix);
		// 	let txSig = await sendAndConfirmTransaction(
		// 		provider.connection,
		// 		tx,
		// 		[userKeypair]
		// 	);
		// 	expect(txSig).toBeDefined();
		// 	console.log(
		// 		`create listing tx: https://explorer.solana.com/tx/${txSig}?cluster=devnet`
		// 	);
		// 	await sleep(4000); // Delay
		// }, 60000);
		// 		// it('should edit a listing', async () => {
		// 		// 	await sleep(4000); // Delay
		// 		// 	let ix = await listSDK.editListing(nftMint, 20);
		// 		// 	let tx = new Transaction().add(ix);
		// 		// 	let txSig = await sendAndConfirmTransaction(provider.connection, tx, [userKeypair])
		// 		// 	expect(txSig).toBeDefined();
		// 		// 	console.log(
		// 		// 		`edit listing tx: https://explorer.solana.com/tx/${txSig}?cluster=devnet`
		// 		// 	);
		// 		// }, 60000);
		// it("unlist listed asset and close listing data account", async () => {
		// 	await sleep(4000); // Delay
		// 	let ix = await listSDK.unlistAsset(asset);
		// 	let tx = new Transaction().add(ix);
		// 	let txSig = await sendAndConfirmTransaction(
		// 		provider.connection,
		// 		tx,
		// 		[userKeypair]
		// 	);
		// 	expect(txSig).toBeDefined();
		// 	console.log(
		// 		`delete listing tx: https://explorer.solana.com/tx/${txSig}?cluster=devnet`
		// 	);
		// }, 60000);
	});

	describe("BUYER TESTS", () => {
		// let provider = setBuyerProvider();
		// beforeAll(() => {
		// 	listSDK = new SoundworkListSDK(provider, connection);
		// });
		// it("buy a listed NFT and close listing data account", async () => {
		// 	await sleep(4000); // Delay
		// 	// let ix = await listSDK.buyListing(asset, null); // when using native sol to pay
		// 	let ix = await listSDK.buyListing(asset, BONK_DEV_MINT, null);
		// 	let tx = new Transaction().add(ix);
		// 	let txSig = await sendAndConfirmTransaction(
		// 		provider.connection,
		// 		tx,
		// 		[buyerKeypair],
		// 		{ skipPreflight: true }
		// 	);
		// 	expect(txSig).toBeDefined();
		// 	console.log(
		// 		`buy listing tx: https://explorer.solana.com/tx/${txSig}?cluster=devnet`
		// 	);
		// }, 60000);
	});

	describe("WITHDRAW && DEPOSIT TESTS", () => {
		let provider = setBuyerProvider();

		beforeAll(() => {
			listSDK = new SoundworkListSDK(provider, connection);
		});

		// it("deposit sol ino the escrowed account", async () => {
		// 	await sleep(4000); // Delay
		// 	let ix = await listSDK.depositSol(new BN(2 * LAMPORTS_PER_SOL));
		// 	let tx = new Transaction().add(ix);
		// 	let txSig = await sendAndConfirmTransaction(
		// 		provider.connection,
		// 		tx,
		// 		[buyerKeypair]
		// 	);
		// 	expect(txSig).toBeDefined();
		// 	console.log(
		// 		`deposit SOL tx: https://explorer.solana.com/tx/${txSig}?cluster=devnet`
		// 	);
		// }, 60000);

		// it("withdraw sol from the escrowed account", async () => {
		// 	await sleep(4000); // Delay
		// 	let ix = await listSDK.withDrawSol(new BN(2 * LAMPORTS_PER_SOL));
		// 	let tx = new Transaction().add(ix);
		// 	let txSig = await sendAndConfirmTransaction(
		// 		provider.connection,
		// 		tx,
		// 		[buyerKeypair]
		// 	);
		// 	expect(txSig).toBeDefined();
		// 	console.log(
		// 		`withdraw SOL tx: https://explorer.solana.com/tx/${txSig}?cluster=devnet`
		// 	);
		// }, 60000);

		it("fetches users escrow wallet address", async () => {
			let resp = await listSDK.fetchUserEscrowWallet(
				new PublicKey("devu5C7Jg52KXd2Uyo5okGESYyKtQPMx8sme6vM11xK")
			);

			console.log(resp);
		}, 60000);
	});
});
