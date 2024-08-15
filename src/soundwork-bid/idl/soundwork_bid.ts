/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/soundwork_bid.json`.
 */
export type SoundworkBid = {
  "address": "4mFDYND4AVREYEJXCPhjq1LnbjELHHebJqG3NZechA7X",
  "metadata": {
    "name": "soundworkBid",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "docs": [
    "SOUNDWORK BID",
    ""
  ],
  "instructions": [
    {
      "name": "acceptBid",
      "docs": [
        "Accept placed bid",
        ""
      ],
      "discriminator": [
        196,
        191,
        1,
        229,
        144,
        172,
        122,
        227
      ],
      "accounts": [
        {
          "name": "seller",
          "writable": true,
          "signer": true
        },
        {
          "name": "bidder",
          "writable": true
        },
        {
          "name": "asset",
          "writable": true
        },
        {
          "name": "collection",
          "writable": true,
          "optional": true
        },
        {
          "name": "bidData",
          "writable": true
        },
        {
          "name": "bidderEscrowWallet",
          "writable": true
        },
        {
          "name": "listingData",
          "writable": true
        },
        {
          "name": "paymentMint",
          "writable": true,
          "optional": true
        },
        {
          "name": "bidderTokenAccount",
          "writable": true,
          "optional": true
        },
        {
          "name": "sellerTokenAccount",
          "writable": true,
          "optional": true
        },
        {
          "name": "walletTokenAccount",
          "writable": true,
          "optional": true
        },
        {
          "name": "treasuryTokenAccount",
          "writable": true,
          "optional": true
        },
        {
          "name": "treasury",
          "writable": true
        },
        {
          "name": "assetManager"
        },
        {
          "name": "marketplaceConfig"
        },
        {
          "name": "soundworkList",
          "address": "EA4ptgF3TYjDBGYJApAoZoyCbCYw6P5mGU5noCe1Z97"
        },
        {
          "name": "coreProgram",
          "address": "CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "editBid",
      "docs": [
        "Edit a placed bid on Soundwork",
        ""
      ],
      "discriminator": [
        120,
        60,
        74,
        91,
        22,
        151,
        150,
        190
      ],
      "accounts": [
        {
          "name": "bidder",
          "writable": true,
          "signer": true
        },
        {
          "name": "asset",
          "writable": true
        },
        {
          "name": "bidData",
          "writable": true
        },
        {
          "name": "bidderEscrowWallet",
          "writable": true
        },
        {
          "name": "listingData",
          "writable": true
        },
        {
          "name": "paymentMint",
          "writable": true,
          "optional": true
        },
        {
          "name": "bidderTokenAccount",
          "writable": true,
          "optional": true
        },
        {
          "name": "walletTokenAccount",
          "writable": true,
          "optional": true
        },
        {
          "name": "soundworkList",
          "address": "EA4ptgF3TYjDBGYJApAoZoyCbCYw6P5mGU5noCe1Z97"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "editBidParams"
            }
          }
        }
      ]
    },
    {
      "name": "makeBid",
      "docs": [
        "Place a bid for a listed MPL Core asset on Soundwork",
        ""
      ],
      "discriminator": [
        216,
        87,
        131,
        156,
        192,
        140,
        6,
        91
      ],
      "accounts": [
        {
          "name": "bidder",
          "writable": true,
          "signer": true
        },
        {
          "name": "asset",
          "writable": true
        },
        {
          "name": "bidData",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  75,
                  101,
                  115,
                  115,
                  111,
                  107,
                  117
                ]
              },
              {
                "kind": "const",
                "value": [
                  70,
                  117,
                  116,
                  97,
                  114,
                  105
                ]
              },
              {
                "kind": "account",
                "path": "asset"
              }
            ]
          }
        },
        {
          "name": "bidderEscrowWallet",
          "writable": true
        },
        {
          "name": "listingData",
          "writable": true
        },
        {
          "name": "paymentMint",
          "writable": true,
          "optional": true
        },
        {
          "name": "bidderTokenAccount",
          "writable": true,
          "optional": true
        },
        {
          "name": "walletTokenAccount",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "bidderEscrowWallet"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "paymentMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "soundworkList",
          "address": "EA4ptgF3TYjDBGYJApAoZoyCbCYw6P5mGU5noCe1Z97"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "makeBidParams"
            }
          }
        }
      ]
    },
    {
      "name": "rejectBid",
      "docs": [
        "Reject placed bid",
        ""
      ],
      "discriminator": [
        16,
        180,
        239,
        231,
        62,
        80,
        45,
        40
      ],
      "accounts": [
        {
          "name": "seller",
          "writable": true,
          "signer": true
        },
        {
          "name": "bidder",
          "writable": true
        },
        {
          "name": "asset",
          "writable": true
        },
        {
          "name": "bidData",
          "writable": true
        },
        {
          "name": "bidderEscrowWallet",
          "writable": true
        },
        {
          "name": "listingData",
          "writable": true
        },
        {
          "name": "paymentMint",
          "writable": true,
          "optional": true
        },
        {
          "name": "bidderTokenAccount",
          "writable": true,
          "optional": true
        },
        {
          "name": "walletTokenAccount",
          "writable": true,
          "optional": true
        },
        {
          "name": "soundworkList",
          "address": "EA4ptgF3TYjDBGYJApAoZoyCbCYw6P5mGU5noCe1Z97"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "revokeBid",
      "docs": [
        "Revoke placed bid",
        ""
      ],
      "discriminator": [
        208,
        23,
        80,
        72,
        126,
        81,
        237,
        118
      ],
      "accounts": [
        {
          "name": "bidder",
          "writable": true,
          "signer": true
        },
        {
          "name": "asset",
          "writable": true
        },
        {
          "name": "bidData",
          "writable": true
        },
        {
          "name": "bidderEscrowWallet",
          "writable": true
        },
        {
          "name": "listingData",
          "writable": true
        },
        {
          "name": "paymentMint",
          "writable": true,
          "optional": true
        },
        {
          "name": "bidderTokenAccount",
          "writable": true,
          "optional": true
        },
        {
          "name": "walletTokenAccount",
          "writable": true,
          "optional": true
        },
        {
          "name": "soundworkList",
          "address": "EA4ptgF3TYjDBGYJApAoZoyCbCYw6P5mGU5noCe1Z97"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "assetManager",
      "discriminator": [
        136,
        86,
        167,
        98,
        220,
        48,
        54,
        97
      ]
    },
    {
      "name": "bidData",
      "discriminator": [
        75,
        140,
        105,
        117,
        60,
        122,
        188,
        172
      ]
    },
    {
      "name": "listingData",
      "discriminator": [
        5,
        103,
        123,
        206,
        38,
        237,
        99,
        97
      ]
    },
    {
      "name": "marketPlaceConfig",
      "discriminator": [
        183,
        245,
        12,
        144,
        196,
        23,
        211,
        30
      ]
    },
    {
      "name": "wallet",
      "discriminator": [
        24,
        89,
        59,
        139,
        81,
        154,
        232,
        95
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "unrecognizedSigner",
      "msg": "Signer address does not math the initializer address"
    },
    {
      "code": 6001,
      "name": "bidExpired",
      "msg": "Bid TimeStamp Expired"
    },
    {
      "code": 6002,
      "name": "insufficientFunds",
      "msg": "Insufficient Funds to make bid for item"
    },
    {
      "code": 6003,
      "name": "missingAccount",
      "msg": "An account required for this operation is missing."
    },
    {
      "code": 6004,
      "name": "paymentMintAddressMismatch",
      "msg": "The mint address provided does not match seller's provided mint address."
    },
    {
      "code": 6005,
      "name": "overflow",
      "msg": "Operations resulted in an overflow."
    }
  ],
  "types": [
    {
      "name": "assetManager",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "docs": [
              "PDA bump"
            ],
            "type": "u8"
          },
          {
            "name": "reserved",
            "docs": [
              "Unused reserved byte space for additive future changes."
            ],
            "type": {
              "array": [
                "u8",
                128
              ]
            }
          }
        ]
      }
    },
    {
      "name": "bidData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "docs": [
              "PDA bump"
            ],
            "type": "u8"
          },
          {
            "name": "amount",
            "docs": [
              "amount in lamports asset is being listed for"
            ],
            "type": "u64"
          },
          {
            "name": "authority",
            "docs": [
              "asset owner"
            ],
            "type": "pubkey"
          },
          {
            "name": "expiryTs",
            "docs": [
              "unix timestamp listing expires"
            ],
            "type": "i64"
          },
          {
            "name": "reserved",
            "docs": [
              "Unused reserved byte space for additive future changes."
            ],
            "type": {
              "array": [
                "u8",
                128
              ]
            }
          }
        ]
      }
    },
    {
      "name": "editBidParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "docs": [
              "bid amount/price in lamports"
            ],
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "expiryTs",
            "docs": [
              "expiry timestamp"
            ],
            "type": {
              "option": "i64"
            }
          }
        ]
      }
    },
    {
      "name": "listingData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "docs": [
              "PDA bump"
            ],
            "type": "u8"
          },
          {
            "name": "amount",
            "docs": [
              "amount in lamports asset is being listed for"
            ],
            "type": "u64"
          },
          {
            "name": "authority",
            "docs": [
              "asset owner"
            ],
            "type": "pubkey"
          },
          {
            "name": "assetAddress",
            "docs": [
              "asset address"
            ],
            "type": "pubkey"
          },
          {
            "name": "paymentOption",
            "docs": [
              "type of way user wants to get paid when listing is bought / bid made for asset"
            ],
            "type": {
              "defined": {
                "name": "paymentOption"
              }
            }
          },
          {
            "name": "reserved",
            "docs": [
              "Unused reserved byte space for additive future changes."
            ],
            "type": {
              "array": [
                "u8",
                128
              ]
            }
          }
        ]
      }
    },
    {
      "name": "makeBidParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "docs": [
              "bid amount/price in lamports"
            ],
            "type": "u64"
          },
          {
            "name": "expiryTs",
            "docs": [
              "expiry timestamp"
            ],
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "marketPlaceConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "docs": [
              "PDA bump"
            ],
            "type": "u8"
          },
          {
            "name": "treasuryAddress",
            "docs": [
              "Taker fee percentage"
            ],
            "type": "pubkey"
          },
          {
            "name": "takerFeeBps",
            "docs": [
              "Taker fee basis points"
            ],
            "type": "u8"
          },
          {
            "name": "reserved",
            "docs": [
              "Unused reserved byte space for additive future changes."
            ],
            "type": {
              "array": [
                "u8",
                128
              ]
            }
          }
        ]
      }
    },
    {
      "name": "paymentOption",
      "docs": [
        "When listed, how does the user want to receive funds",
        ""
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "native"
          },
          {
            "name": "token",
            "fields": [
              {
                "name": "mint",
                "type": "pubkey"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "wallet",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                128
              ]
            }
          }
        ]
      }
    }
  ],
  "constants": [
    {
      "name": "seedBidData",
      "type": "bytes",
      "value": "[70, 117, 116, 97, 114, 105]"
    },
    {
      "name": "seedPrefix",
      "type": "bytes",
      "value": "[75, 101, 115, 115, 111, 107, 117]"
    }
  ]
};
