export type SoundworkList = {
  "version": "0.1.0",
  "name": "soundwork_list",
  "constants": [
    {
      "name": "SEED_PREFIX",
      "type": "bytes",
      "value": "[75, 101, 115, 115, 111, 107, 117]"
    },
    {
      "name": "SEED_ASSET_MANAGER",
      "type": "bytes",
      "value": "[83, 101, 105, 107, 97]"
    },
    {
      "name": "SEED_MARKETPLACE_CONFIG",
      "type": "bytes",
      "value": "[73, 106, 105, 99, 104, 105]"
    },
    {
      "name": "SEED_LISTING_DATA",
      "type": "bytes",
      "value": "[72, 105, 116, 111, 114, 105]"
    },
    {
      "name": "SEED_WALLET",
      "type": "bytes",
      "value": "[89, 97, 109, 97, 100, 97]"
    },
    {
      "name": "ADMIN_ADDRESS",
      "type": "publicKey",
      "value": "pubkey ! (\"4kg8oh3jdNtn7j2wcS7TrUua31AgbLzDVkBZgTAe44aF\")"
    },
    {
      "name": "TREASURY_ADDRESS",
      "type": "publicKey",
      "value": "pubkey ! (\"4kg8oh3jdNtn7j2wcS7TrUua31AgbLzDVkBZgTAe44aF\")"
    }
  ],
  "instructions": [
    {
      "name": "initEscrowAccount",
      "docs": [
        "Initialize asset manager escrow account.",
        "",
        "Note: Only admin address can call this function",
        ""
      ],
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "assetManager",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "coreProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
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
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "marketplaceConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "InitMarketPlaceConfigParams"
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
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "wallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "depositSol",
      "docs": [
        "Deposit SOL into the user escrow wallet.",
        ""
      ],
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "wallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "DepositSolParams"
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
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "wallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "option": {
              "defined": "WithdrawSolParams"
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
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "wallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authorityTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "walletTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "DepositTokenParams"
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
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "wallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authorityTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "walletTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "WithdrawTokenParams"
          }
        }
      ]
    },
    {
      "name": "listAsset",
      "docs": [
        "List an MPL Core asset on Soundwork",
        ""
      ],
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "asset",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "listingData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "assetManager",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "coreProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "ListAssetParams"
          }
        }
      ]
    },
    {
      "name": "updateListingAmount",
      "docs": [
        "Remove MPL Core asset listed on our marketplace",
        ""
      ],
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "asset",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "listingData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "assetManager",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "coreProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "UpdateListingParams"
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
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "asset",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "listingData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "assetManager",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "coreProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "buyAsset",
      "docs": [
        "Buy MPL Core asset listed on our marketplace",
        ""
      ],
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "seller",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "walletAsBuyer",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "asset",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "paymentMint",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "walletTokenAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "buyerTokenAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "sellerTokenAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "treasuryTokenAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "listingData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "assetManager",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketplaceConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "coreProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "option": {
              "defined": "BuyAssetParams"
            }
          }
        }
      ]
    }
  ],
  "accounts": [
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
            "type": "publicKey"
          },
          {
            "name": "assetAddress",
            "docs": [
              "asset address"
            ],
            "type": "publicKey"
          },
          {
            "name": "paymentOption",
            "docs": [
              "type of way user wants to get paid when listing is bought / bid made for asset"
            ],
            "type": {
              "defined": "PaymentOption"
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
            "type": "publicKey"
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
      "name": "wallet",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
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
  "types": [
    {
      "name": "InitMarketPlaceConfigParams",
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
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "BuyAssetParams",
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
      "name": "DepositSolParams",
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
      "name": "DepositTokenParams",
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
      "name": "WithdrawSolParams",
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
      "name": "WithdrawTokenParams",
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
      "name": "ListAssetParams",
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
              "defined": "PaymentOption"
            }
          }
        ]
      }
    },
    {
      "name": "UpdateListingParams",
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
      "name": "PaymentOption",
      "docs": [
        "When listed, how does the user want to receive funds",
        ""
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Native"
          },
          {
            "name": "Token",
            "fields": [
              {
                "name": "mint",
                "type": "publicKey"
              }
            ]
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InsufficientFunds",
      "msg": "Insufficient funds to purchase asset"
    },
    {
      "code": 6001,
      "name": "InvalidOperation",
      "msg": "Invalid operation!"
    },
    {
      "code": 6002,
      "name": "InvalidAuthority",
      "msg": "You do no have authority to perform the requested operation!"
    },
    {
      "code": 6003,
      "name": "ZeroValueNotAllowed",
      "msg": "The value provided should not be zero."
    },
    {
      "code": 6004,
      "name": "PaymentMintAddressMismatch",
      "msg": "The mint address provided does not match seller's provided mint address."
    },
    {
      "code": 6005,
      "name": "MissingAccount",
      "msg": "An account required for this operation is missing."
    }
  ]
};

export const IDL: SoundworkList = {
  "version": "0.1.0",
  "name": "soundwork_list",
  "constants": [
    {
      "name": "SEED_PREFIX",
      "type": "bytes",
      "value": "[75, 101, 115, 115, 111, 107, 117]"
    },
    {
      "name": "SEED_ASSET_MANAGER",
      "type": "bytes",
      "value": "[83, 101, 105, 107, 97]"
    },
    {
      "name": "SEED_MARKETPLACE_CONFIG",
      "type": "bytes",
      "value": "[73, 106, 105, 99, 104, 105]"
    },
    {
      "name": "SEED_LISTING_DATA",
      "type": "bytes",
      "value": "[72, 105, 116, 111, 114, 105]"
    },
    {
      "name": "SEED_WALLET",
      "type": "bytes",
      "value": "[89, 97, 109, 97, 100, 97]"
    },
    {
      "name": "ADMIN_ADDRESS",
      "type": "publicKey",
      "value": "pubkey ! (\"4kg8oh3jdNtn7j2wcS7TrUua31AgbLzDVkBZgTAe44aF\")"
    },
    {
      "name": "TREASURY_ADDRESS",
      "type": "publicKey",
      "value": "pubkey ! (\"4kg8oh3jdNtn7j2wcS7TrUua31AgbLzDVkBZgTAe44aF\")"
    }
  ],
  "instructions": [
    {
      "name": "initEscrowAccount",
      "docs": [
        "Initialize asset manager escrow account.",
        "",
        "Note: Only admin address can call this function",
        ""
      ],
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "assetManager",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "coreProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
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
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "marketplaceConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "InitMarketPlaceConfigParams"
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
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "wallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "depositSol",
      "docs": [
        "Deposit SOL into the user escrow wallet.",
        ""
      ],
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "wallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "DepositSolParams"
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
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "wallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "option": {
              "defined": "WithdrawSolParams"
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
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "wallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authorityTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "walletTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "DepositTokenParams"
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
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "wallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authorityTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "walletTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "WithdrawTokenParams"
          }
        }
      ]
    },
    {
      "name": "listAsset",
      "docs": [
        "List an MPL Core asset on Soundwork",
        ""
      ],
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "asset",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "listingData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "assetManager",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "coreProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "ListAssetParams"
          }
        }
      ]
    },
    {
      "name": "updateListingAmount",
      "docs": [
        "Remove MPL Core asset listed on our marketplace",
        ""
      ],
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "asset",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "listingData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "assetManager",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "coreProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "UpdateListingParams"
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
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "asset",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "listingData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "assetManager",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "coreProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "buyAsset",
      "docs": [
        "Buy MPL Core asset listed on our marketplace",
        ""
      ],
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "seller",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "walletAsBuyer",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "asset",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "paymentMint",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "walletTokenAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "buyerTokenAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "sellerTokenAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "treasuryTokenAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "listingData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "assetManager",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketplaceConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "coreProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "option": {
              "defined": "BuyAssetParams"
            }
          }
        }
      ]
    }
  ],
  "accounts": [
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
            "type": "publicKey"
          },
          {
            "name": "assetAddress",
            "docs": [
              "asset address"
            ],
            "type": "publicKey"
          },
          {
            "name": "paymentOption",
            "docs": [
              "type of way user wants to get paid when listing is bought / bid made for asset"
            ],
            "type": {
              "defined": "PaymentOption"
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
            "type": "publicKey"
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
      "name": "wallet",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
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
  "types": [
    {
      "name": "InitMarketPlaceConfigParams",
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
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "BuyAssetParams",
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
      "name": "DepositSolParams",
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
      "name": "DepositTokenParams",
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
      "name": "WithdrawSolParams",
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
      "name": "WithdrawTokenParams",
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
      "name": "ListAssetParams",
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
              "defined": "PaymentOption"
            }
          }
        ]
      }
    },
    {
      "name": "UpdateListingParams",
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
      "name": "PaymentOption",
      "docs": [
        "When listed, how does the user want to receive funds",
        ""
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Native"
          },
          {
            "name": "Token",
            "fields": [
              {
                "name": "mint",
                "type": "publicKey"
              }
            ]
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InsufficientFunds",
      "msg": "Insufficient funds to purchase asset"
    },
    {
      "code": 6001,
      "name": "InvalidOperation",
      "msg": "Invalid operation!"
    },
    {
      "code": 6002,
      "name": "InvalidAuthority",
      "msg": "You do no have authority to perform the requested operation!"
    },
    {
      "code": 6003,
      "name": "ZeroValueNotAllowed",
      "msg": "The value provided should not be zero."
    },
    {
      "code": 6004,
      "name": "PaymentMintAddressMismatch",
      "msg": "The mint address provided does not match seller's provided mint address."
    },
    {
      "code": 6005,
      "name": "MissingAccount",
      "msg": "An account required for this operation is missing."
    }
  ]
};
