import { BN } from "@coral-xyz/anchor";
import {
	Keypair,
	PublicKey,
	sendAndConfirmTransaction,
	Transaction,
	LAMPORTS_PER_SOL,
} from "@solana/web3.js";
import { SoundworkBidSDK } from "../src/soundwork-bid/main";

// test utils
import {
	setProvider,
	nftMint,
	userKeypair,
	buyerKeypair,
	sleep,
	connection,
	setBuyerProvider,
	setSellerProvider,
} from "./testUtils";

describe("SOUNDWORK BID SDK TEST", () => {
	let bidSDK: SoundworkBidSDK;

	describe("BUYER TESTS", () => {
		// let provider = setBuyerProvider();
		// beforeAll(() => {
		//     bidSDK = new SoundworkBidSDK(provider, connection);
		// });

		it("dummy", () => {
			//
		})

		// it("should fail fetching bidding data for non-existent account", async () => {
		// 	try {
		// 		let nonExistentMint = new PublicKey(
		// 			"DY73PC8Dmr2nYXmrMcJG4hxKhXTMSo5kKfG89iLjY1G8"
		// 		);
		// 		await bidSDK.fetchBidDataByMint(nonExistentMint);
		// 		fail("Expected an error to be thrown, but it didn't.");
		// 	} catch (error: any) {
		// 		console.log("error trying to fetch non existent account: ", error);
		// 		expect(error).toBeInstanceOf(Error);
		// 	}
		// }, 60000);

		// it("should create a bid for an NFT", async () => {
		//     // let time_now = new Date().getTime();
		//     let now = new Date();
		//     let expire_ts = now.setFullYear(now.getFullYear() + 1); // ! should default to a year
		//     let ix = await bidSDK.placeBid(
		//         nftMint,
		//         new BN(1 * LAMPORTS_PER_SOL),
		//         new BN(expire_ts),
		//     );
		//     let tx = new Transaction().add(ix);
		//     let txSig = await sendAndConfirmTransaction(provider.connection, tx, [
		//         buyerKeypair,
		//     ]);
		//     expect(txSig).toBeDefined();
		//     console.log(
		//         `create bid tx: https://explorer.solana.com/tx/${txSig}?cluster=devnet`
		//     );
		//     await sleep(4000); // Delay
		// }, 60000);

		// it('should edit a bid', async () => {
		//     await sleep(4000); // Delay
		//     let ix = await bidSDK.editBid(nftMint, 20, null);
		//     let tx = new Transaction().add(ix);
		//     let txSig = await sendAndConfirmTransaction(provider.connection, tx, [buyerKeypair])
		//     expect(txSig).toBeDefined();
		//     console.log(
		//         `edit bid tx: https://explorer.solana.com/tx/${txSig}?cluster=devnet`
		//     );
		// }, 60000);

		// it('deletes a bid ', async () => {
		//     await sleep(4000); // Delay
		    // let ix = await bidSDK.deleteBid(nftMint);
		    // let tx = new Transaction().add(ix);
		    // let txSig = await sendAndConfirmTransaction(provider.connection, tx, [buyerKeypair])
		    // expect(txSig).toBeDefined();
		    // console.log(
		    //     `delete bid tx: https://explorer.solana.com/tx/${txSig}?cluster=devnet`
		    // );
		// }, 60000);
	});

	describe("SELLER TESTS", () => {
		// let provider = setSellerProvider();
		// beforeAll(() => {
		//     bidSDK = new SoundworkBidSDK(provider, connection);
		// });

		// it('accepts a bid ', async () => {
		//     await sleep(4000); // Delay
		//     let ix = await bidSDK.acceptBid(nftMint);
		//     let tx = new Transaction().add(ix);
		//     let txSig = await sendAndConfirmTransaction(provider.connection, tx, [userKeypair])
		//     expect(txSig).toBeDefined();
		//     console.log(
		//         `accept bid tx: https://explorer.solana.com/tx/${txSig}?cluster=devnet`
		//     );
		// }, 60000);

		// it('rejects a bid ', async () => {
		//     await sleep(4000); // Delay
		//     let ix = await bidSDK.rejectBid(nftMint);
		//     let tx = new Transaction().add(ix);
		//     let txSig = await sendAndConfirmTransaction(provider.connection, tx, [userKeypair])
		//     expect(txSig).toBeDefined();
		//     console.log(
		//         `reject bid tx: https://explorer.solana.com/tx/${txSig}?cluster=devnet`
		//     );
		// }, 60000);
	});
});
