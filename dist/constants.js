"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SEED_BID_DATA = exports.SEED_WALLET = exports.SEED_MARKETPLACE_CONFIG = exports.SEED_LISTING_DATA = exports.ASSET_MANAGER_PREFIX = exports.SEED_PREFIX = exports.TREASURY_ADDRESS = exports.CORE_PROGRAM_ID = exports.SOUNDWORK_CREATE_PROGRAM_ID = exports.SOUNDWORK_BID_PROGRAM_ID = exports.SOUNDWORK_LIST_PROGRAM_ID = void 0;
const web3_js_1 = require("@solana/web3.js");
// ------------------------------------------- soundwork programs
exports.SOUNDWORK_LIST_PROGRAM_ID = new web3_js_1.PublicKey("EA4ptgF3TYjDBGYJApAoZoyCbCYw6P5mGU5noCe1Z97");
exports.SOUNDWORK_BID_PROGRAM_ID = new web3_js_1.PublicKey("4mFDYND4AVREYEJXCPhjq1LnbjELHHebJqG3NZechA7X");
exports.SOUNDWORK_CREATE_PROGRAM_ID = new web3_js_1.PublicKey("4iraDthfMHkgrvWsLz4mfCyHJY4JKc31TTxGMZKrc6r8");
// ------------------------------------------- external programs
exports.CORE_PROGRAM_ID = new web3_js_1.PublicKey("CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d");
// ------------------------------------------- soundwork address
exports.TREASURY_ADDRESS = new web3_js_1.PublicKey("4kg8oh3jdNtn7j2wcS7TrUua31AgbLzDVkBZgTAe44aF");
// ------------------------------------------- seeds
exports.SEED_PREFIX = "Kessoku";
exports.ASSET_MANAGER_PREFIX = "Seika";
exports.SEED_LISTING_DATA = "Hitori";
exports.SEED_MARKETPLACE_CONFIG = "Ijichi";
exports.SEED_WALLET = "Yamada";
exports.SEED_BID_DATA = "Futari";
