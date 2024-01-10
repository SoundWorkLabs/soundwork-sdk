## Soundwork SDK

<div align="center">
  <img style="margin-bottom:15px" src="https://i0.wp.com/soundwork.io/wp-content/uploads/2023/05/2nd-logo_TINY.png?w=1120&ssl=1" height="80px" />
  <h1><strong>Soundwork SDK</strong></h1>
  <p>
    <strong>TypeScript SDK to interact with the Soundwork `listing` and `bidding` programs.</strong>
  </p>
  <p>
    <a target="_blank" href="https://discord.gg/Jyw67UfQ"><img alt="Discord Chat" src="https://img.shields.io/badge/chat-discord-blueviolet" /></a>
    <a target="_blank" href="https://github.com/SoundWorkLabs//blob/master/LICENSE"><img alt="License" src="https://img.shields.io/github/license/SoundWorkLabs/market-contracts" /></a>
    <a target="_blank" href="https://www.npmjs.com/package/@jimii/soundwork-sdk"><img alt="SDK" src="https://img.shields.io/npm/v/%40jimii%2Fsoundwork-sdk"/></a>
  </p>
</div>

## Table of Contents

-   [Installation](#getting-started)
-   [Examples](#examples)
-   [Contributing](#contributing)

## Getting Started

```bash
# yarn
yarn add @soundwork-oss/soundwork-sdk
# npm
npm install @soundwork-oss/soundwork-sdk
# pnpm
pnpm install @soundwork-oss/soundwork-sdk
```

## Examples

Check out the extensive list of methods you can call in the [tests directory](./tests/) for both bid and list programs.

## List Program

```ts
// import the SDK
import { SoundworkListSDK } from "@soundwork-oss/soundwork-sdk";

// Initialize the list program SDK
let listSDK = new SoundworkListSDK(provider, connection);

// list an NFT
let ix = await listSDK.createListing(nftMint, new BN(1 * LAMPORTS_PER_SOL));
let tx = new Transaction().add(ix);

await sendAndConfirmTransaction(provider.connection, tx, [userKeypair]);
```

## Bid Program

```ts
// import the SDK
import { SoundworkBidSDK } from "@soundwork-oss/soundwork-sdk";

// Initialize the list program SDK
let bidSDK = new SoundworkBidSDK(provider, connection);

// Place a bid for an NFT
let now = new Date();
let expire_ts = now.setFullYear(now.getFullYear() + 1); // ! should default to a year

let ix = await bidSDK.placeBid(
	nftMint,
	new BN(1 * LAMPORTS_PER_SOL),
	new BN(expire_ts)
);
let tx = new Transaction().add(ix);

await sendAndConfirmTransaction(provider.connection, tx, [
	buyerKeypair,
]);
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
