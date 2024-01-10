import {
	Keypair,
	PublicKey,
	sendAndConfirmTransaction,
	Transaction,
} from "@solana/web3.js";
import { SoundworkListSDK } from "../src/soundwork-list/main";

// test utils
import {
	setProvider,
	nftMint,
	userKeypair,
	buyerKeypair,
	sleep,
	connection,
	setSellerProvider,
	setBuyerProvider,
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
		// 		await listSDK.fetchListDataByMint(nonExistentMint);

		// 		fail("Expected an error to be thrown, but it didn't.");
		// 	} catch (error: any) {
		// 		console.log("error trying to fetch non existent account: ", error);
		// 		expect(error).toBeInstanceOf(Error);
		// 		// expect(error.message).toBe(
		// 		// 	"error during create Listing: Error: Account does not exist or has no data 8woQMNqkTEF8pvHBaEyzMfWEcsAN3vBUYrak2G4bp3ca"
		// 		// );
		// 	}
		// }, 60000);

		// it("should create a listing", async () => {
		// let ix = await listSDK.createListing(nftMint, 1);
		// let tx = new Transaction().add(ix);
		// let txSig = await sendAndConfirmTransaction(provider.connection, tx, [
		// 	userKeypair,
		// ]);
		// expect(txSig).toBeDefined();
		// console.log(
		// 	`create listing tx: https://explorer.solana.com/tx/${txSig}?cluster=devnet`
		// );
		// 	await sleep(4000); // Delay
		// }, 60000);

		// it('should edit a listing', async () => {
		// 	await sleep(4000); // Delay
		// 	let ix = await listSDK.editListing(nftMint, 20);
		// 	let tx = new Transaction().add(ix);
		// 	let txSig = await sendAndConfirmTransaction(provider.connection, tx, [userKeypair])
		// 	expect(txSig).toBeDefined();
		// 	console.log(
		// 		`edit listing tx: https://explorer.solana.com/tx/${txSig}?cluster=devnet`
		// 	);
		// }, 60000);

		// it('delete listed NFT and close listing data account', async () => {
		// 	await sleep(4000); // Delay

		// let ix = await listSDK.deleteListing(nftMint);
		// let tx = new Transaction().add(ix);
		// let txSig = await sendAndConfirmTransaction(provider.connection, tx, [userKeypair])

		// expect(txSig).toBeDefined();
		// console.log(
		// 	`delete listing tx: https://explorer.solana.com/tx/${txSig}?cluster=devnet`
		// );
		// }, 60000);
	});

	describe("BUYER TESTS", () => {
		let provider = setBuyerProvider();

		beforeAll(() => {
			listSDK = new SoundworkListSDK(provider, connection);
		});

		it('buy a listed NFT and close listing data account', async () => {
			await sleep(4000); // Delay
			let ix = await listSDK.buyListing(nftMint);
			let tx = new Transaction().add(ix);
			let txSig = await sendAndConfirmTransaction(provider.connection, tx, [buyerKeypair])
			expect(txSig).toBeDefined();
			console.log(
				`buy listing tx: https://explorer.solana.com/tx/${txSig}?cluster=devnet`
			);
		}, 60000);
	});
});
