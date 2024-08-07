/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/soundwork_list.json`.
 */
export type SoundworkList = {
  "address": "EA4ptgF3TYjDBGYJApAoZoyCbCYw6P5mGU5noCe1Z97",
  "metadata": {
    "name": "soundworkList",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "docs": [
    "SOUNDWORK LIST",
    ""
  ],
  "instructions": [
    {
      "name": "buyAsset",
      "docs": [
        "Buy MPL Core asset listed on our marketplace",
        ""
      ],
      "discriminator": [
        197,
        37,
        177,
        1,
        180,
        23,
        175,
        98
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "buyer",
          "writable": true
        },
        {
          "name": "seller",
          "writable": true
        },
        {
          "name": "walletAsBuyer",
          "writable": true,
          "optional": true
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
          "name": "paymentMint",
          "writable": true,
          "optional": true
        },
        {
          "name": "walletTokenAccount",
          "writable": true,
          "optional": true
        },
        {
          "name": "buyerTokenAccount",
          "writable": true,
          "optional": true
        },
        {
          "name": "sellerTokenAccount",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "seller"
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
          "name": "treasuryTokenAccount",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "treasury"
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
          "name": "treasury",
          "writable": true
        },
        {
          "name": "listingData",
          "writable": true
        },
        {
          "name": "assetManager"
        },
        {
          "name": "marketplaceConfig"
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
      "args": [
        {
          "name": "params",
          "type": {
            "option": {
              "defined": {
                "name": "buyAssetParams"
              }
            }
          }
        }
      ]
    },
    {
      "name": "depositSol",
      "docs": [
        "Deposit SOL into the user escrow wallet.",
        ""
      ],
      "discriminator": [
        108,
        81,
        78,
        117,
        125,
        155,
        56,
        200
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "wallet",
          "writable": true
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
              "name": "depositSolParams"
            }
          }
        }
      ]
    },
    {
      "name": "depositToken",
      "docs": [
        "Deposit SOL into the user escrow wallet.",
        ""
      ],
      "discriminator": [
        11,
        156,
        96,
        218,
        39,
        163,
        180,
        19
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "wallet",
          "writable": true
        },
        {
          "name": "mint",
          "writable": true
        },
        {
          "name": "authorityTokenAccount",
          "writable": true
        },
        {
          "name": "walletTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "wallet"
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
                "path": "mint"
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
              "name": "depositTokenParams"
            }
          }
        }
      ]
    },
    {
      "name": "initEscrowAccount",
      "docs": [
        "Initialize asset manager escrow account.",
        "",
        "Note: Only admin address can call this function",
        ""
      ],
      "discriminator": [
        194,
        47,
        142,
        154,
        67,
        64,
        5,
        212
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true,
          "address": "4kg8oh3jdNtn7j2wcS7TrUua31AgbLzDVkBZgTAe44aF"
        },
        {
          "name": "assetManager",
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
                  83,
                  101,
                  105,
                  107,
                  97
                ]
              }
            ]
          }
        },
        {
          "name": "coreProgram",
          "address": "CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "initMarketplaceConfigAccount",
      "docs": [
        "Initialize marketplace config account.",
        "",
        "Note: Only admin address can call this function",
        ""
      ],
      "discriminator": [
        56,
        192,
        187,
        232,
        253,
        7,
        10,
        51
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true,
          "address": "4kg8oh3jdNtn7j2wcS7TrUua31AgbLzDVkBZgTAe44aF"
        },
        {
          "name": "marketplaceConfig",
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
                  73,
                  106,
                  105,
                  99,
                  104,
                  105
                ]
              }
            ]
          }
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
              "name": "initMarketPlaceConfigParams"
            }
          }
        }
      ]
    },
    {
      "name": "initUserEscrowWallet",
      "docs": [
        "Initialize user escrow wallet.",
        ""
      ],
      "discriminator": [
        106,
        51,
        87,
        232,
        89,
        106,
        84,
        195
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "wallet",
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
                  89,
                  97,
                  109,
                  97,
                  100,
                  97
                ]
              },
              {
                "kind": "account",
                "path": "authority"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "listAsset",
      "docs": [
        "List an MPL Core asset on Soundwork",
        ""
      ],
      "discriminator": [
        11,
        25,
        254,
        205,
        61,
        252,
        23,
        15
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "asset",
          "writable": true
        },
        {
          "name": "listingData",
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
                  72,
                  105,
                  116,
                  111,
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
          "name": "assetManager"
        },
        {
          "name": "collection",
          "writable": true,
          "optional": true
        },
        {
          "name": "coreProgram",
          "address": "CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d"
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
              "name": "listAssetParams"
            }
          }
        }
      ]
    },
    {
      "name": "unlistAsset",
      "docs": [
        "Remove MPL Core asset listed on our marketplace",
        ""
      ],
      "discriminator": [
        236,
        102,
        149,
        208,
        243,
        87,
        59,
        92
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
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
          "name": "listingData",
          "writable": true
        },
        {
          "name": "assetManager"
        },
        {
          "name": "coreProgram",
          "address": "CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "updateListingAmount",
      "docs": [
        "Remove MPL Core asset listed on our marketplace",
        ""
      ],
      "discriminator": [
        249,
        226,
        85,
        165,
        27,
        187,
        9,
        73
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "asset",
          "writable": true
        },
        {
          "name": "listingData",
          "writable": true
        },
        {
          "name": "assetManager"
        },
        {
          "name": "coreProgram",
          "address": "CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d"
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
              "name": "updateListingParams"
            }
          }
        }
      ]
    },
    {
      "name": "withdrawSol",
      "docs": [
        "Withdraw SOL into the user's escrow wallet.",
        ""
      ],
      "discriminator": [
        145,
        131,
        74,
        136,
        65,
        137,
        42,
        38
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "authority",
          "writable": true
        },
        {
          "name": "wallet",
          "writable": true
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
            "option": {
              "defined": {
                "name": "withdrawSolParams"
              }
            }
          }
        }
      ]
    },
    {
      "name": "withdrawToken",
      "docs": [
        "Withdraw tokens from the user escrow wallet.",
        ""
      ],
      "discriminator": [
        136,
        235,
        181,
        5,
        101,
        109,
        57,
        81
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "authority",
          "writable": true
        },
        {
          "name": "wallet",
          "writable": true
        },
        {
          "name": "mint",
          "writable": true
        },
        {
          "name": "authorityTokenAccount",
          "writable": true
        },
        {
          "name": "walletTokenAccount",
          "writable": true
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
              "name": "withdrawTokenParams"
            }
          }
        }
      ]
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
      "name": "insufficientFunds",
      "msg": "Insufficient funds to purchase asset"
    },
    {
      "code": 6001,
      "name": "invalidOperation",
      "msg": "Invalid operation!"
    },
    {
      "code": 6002,
      "name": "invalidAuthority",
      "msg": "You do no have authority to perform the requested operation!"
    },
    {
      "code": 6003,
      "name": "zeroValueNotAllowed",
      "msg": "The value provided should not be zero."
    },
    {
      "code": 6004,
      "name": "paymentMintAddressMismatch",
      "msg": "The mint address provided does not match seller's provided mint address."
    },
    {
      "code": 6005,
      "name": "missingAccount",
      "msg": "An account required for this operation is missing."
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
      "name": "buyAssetParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bidAmount",
            "docs": [
              "only used when buying using a bid amount"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "depositSolParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "docs": [
              "amount to deposit in lamports"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "depositTokenParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "docs": [
              "amount to deposit in lamports"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "initMarketPlaceConfigParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "takerFeeBps",
            "docs": [
              "taker fee basis points, /100%"
            ],
            "type": "u8"
          },
          {
            "name": "treasuryAddress",
            "docs": [
              "treasury address"
            ],
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "listAssetParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "docs": [
              "listing amount/price in lamports"
            ],
            "type": "u64"
          },
          {
            "name": "paymentOption",
            "docs": [
              "which method can be used to purchase the listed asset"
            ],
            "type": {
              "defined": {
                "name": "paymentOption"
              }
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
      "name": "updateListingParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "docs": [
              "edit listing amount/price in lamports"
            ],
            "type": "u64"
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
    },
    {
      "name": "withdrawSolParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "docs": [
              "amount to withdraw in lamports"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "withdrawTokenParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "docs": [
              "amount to withdraw in lamports"
            ],
            "type": "u64"
          }
        ]
      }
    }
  ],
  "constants": [
    {
      "name": "adminAddress",
      "type": "pubkey",
      "value": "4kg8oh3jdNtn7j2wcS7TrUua31AgbLzDVkBZgTAe44aF"
    },
    {
      "name": "seedAssetManager",
      "type": "bytes",
      "value": "[83, 101, 105, 107, 97]"
    },
    {
      "name": "seedListingData",
      "type": "bytes",
      "value": "[72, 105, 116, 111, 114, 105]"
    },
    {
      "name": "seedMarketplaceConfig",
      "type": "bytes",
      "value": "[73, 106, 105, 99, 104, 105]"
    },
    {
      "name": "seedPrefix",
      "type": "bytes",
      "value": "[75, 101, 115, 115, 111, 107, 117]"
    },
    {
      "name": "seedWallet",
      "type": "bytes",
      "value": "[89, 97, 109, 97, 100, 97]"
    },
    {
      "name": "treasuryAddress",
      "type": "pubkey",
      "value": "4kg8oh3jdNtn7j2wcS7TrUua31AgbLzDVkBZgTAe44aF"
    }
  ]
};
