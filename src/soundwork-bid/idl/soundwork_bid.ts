export type SoundworkBid = {
  "version": "0.1.0",
  "name": "soundwork_bid",
  "constants": [
    {
      "name": "SEED_PREFIX",
      "type": "bytes",
      "value": "[75, 101, 115, 115, 111, 107, 117]"
    },
    {
      "name": "SEED_BID_DATA",
      "type": "bytes",
      "value": "[70, 117, 116, 97, 114, 105]"
    }
  ],
  "instructions": [
    {
      "name": "makeBid",
      "docs": [
        "Place a bid for a listed MPL Core asset on Soundwork",
        ""
      ],
      "accounts": [
        {
          "name": "bidder",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "asset",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bidData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bidderEscrowWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "listingData",
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
          "name": "bidderTokenAccount",
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
          "name": "soundworkList",
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
            "defined": "MakeBidParams"
          }
        }
      ]
    },
    {
      "name": "editBid",
      "docs": [
        "Edit a placed bid on Soundwork",
        ""
      ],
      "accounts": [
        {
          "name": "bidder",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "asset",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bidData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bidderEscrowWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "listingData",
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
          "name": "bidderTokenAccount",
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
          "name": "soundworkList",
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
            "defined": "EditBidParams"
          }
        }
      ]
    },
    {
      "name": "revokeBid",
      "docs": [
        "Revoke placed bid",
        ""
      ],
      "accounts": [
        {
          "name": "bidder",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "asset",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bidData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bidderEscrowWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "listingData",
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
          "name": "bidderTokenAccount",
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
          "name": "soundworkList",
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
      "args": []
    },
    {
      "name": "acceptBid",
      "docs": [
        "Accept placed bid",
        ""
      ],
      "accounts": [
        {
          "name": "seller",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "bidder",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asset",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bidData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bidderEscrowWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "listingData",
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
          "name": "bidderTokenAccount",
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
          "name": "walletTokenAccount",
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
          "name": "soundworkList",
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
      "args": []
    },
    {
      "name": "rejectBid",
      "docs": [
        "Reject placed bid",
        ""
      ],
      "accounts": [
        {
          "name": "seller",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "bidder",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asset",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bidData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bidderEscrowWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "listingData",
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
          "name": "bidderTokenAccount",
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
          "name": "soundworkList",
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
      "args": []
    }
  ],
  "accounts": [
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
            "type": "publicKey"
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
    }
  ],
  "types": [
    {
      "name": "EditBidParams",
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
      "name": "MakeBidParams",
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
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "UnrecognizedSigner",
      "msg": "Signer address does not math the initializer address"
    },
    {
      "code": 6001,
      "name": "BidExpired",
      "msg": "Bid TimeStamp Expired"
    },
    {
      "code": 6002,
      "name": "InsufficientFunds",
      "msg": "Insufficient Funds to make bid for item"
    },
    {
      "code": 6003,
      "name": "MissingAccount",
      "msg": "An account required for this operation is missing."
    },
    {
      "code": 6004,
      "name": "PaymentMintAddressMismatch",
      "msg": "The mint address provided does not match seller's provided mint address."
    },
    {
      "code": 6005,
      "name": "Overflow",
      "msg": "Operations resulted in an overflow."
    }
  ]
};

export const IDL: SoundworkBid = {
  "version": "0.1.0",
  "name": "soundwork_bid",
  "constants": [
    {
      "name": "SEED_PREFIX",
      "type": "bytes",
      "value": "[75, 101, 115, 115, 111, 107, 117]"
    },
    {
      "name": "SEED_BID_DATA",
      "type": "bytes",
      "value": "[70, 117, 116, 97, 114, 105]"
    }
  ],
  "instructions": [
    {
      "name": "makeBid",
      "docs": [
        "Place a bid for a listed MPL Core asset on Soundwork",
        ""
      ],
      "accounts": [
        {
          "name": "bidder",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "asset",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bidData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bidderEscrowWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "listingData",
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
          "name": "bidderTokenAccount",
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
          "name": "soundworkList",
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
            "defined": "MakeBidParams"
          }
        }
      ]
    },
    {
      "name": "editBid",
      "docs": [
        "Edit a placed bid on Soundwork",
        ""
      ],
      "accounts": [
        {
          "name": "bidder",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "asset",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bidData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bidderEscrowWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "listingData",
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
          "name": "bidderTokenAccount",
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
          "name": "soundworkList",
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
            "defined": "EditBidParams"
          }
        }
      ]
    },
    {
      "name": "revokeBid",
      "docs": [
        "Revoke placed bid",
        ""
      ],
      "accounts": [
        {
          "name": "bidder",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "asset",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bidData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bidderEscrowWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "listingData",
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
          "name": "bidderTokenAccount",
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
          "name": "soundworkList",
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
      "args": []
    },
    {
      "name": "acceptBid",
      "docs": [
        "Accept placed bid",
        ""
      ],
      "accounts": [
        {
          "name": "seller",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "bidder",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asset",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bidData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bidderEscrowWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "listingData",
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
          "name": "bidderTokenAccount",
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
          "name": "walletTokenAccount",
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
          "name": "soundworkList",
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
      "args": []
    },
    {
      "name": "rejectBid",
      "docs": [
        "Reject placed bid",
        ""
      ],
      "accounts": [
        {
          "name": "seller",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "bidder",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asset",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bidData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bidderEscrowWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "listingData",
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
          "name": "bidderTokenAccount",
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
          "name": "soundworkList",
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
      "args": []
    }
  ],
  "accounts": [
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
            "type": "publicKey"
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
    }
  ],
  "types": [
    {
      "name": "EditBidParams",
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
      "name": "MakeBidParams",
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
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "UnrecognizedSigner",
      "msg": "Signer address does not math the initializer address"
    },
    {
      "code": 6001,
      "name": "BidExpired",
      "msg": "Bid TimeStamp Expired"
    },
    {
      "code": 6002,
      "name": "InsufficientFunds",
      "msg": "Insufficient Funds to make bid for item"
    },
    {
      "code": 6003,
      "name": "MissingAccount",
      "msg": "An account required for this operation is missing."
    },
    {
      "code": 6004,
      "name": "PaymentMintAddressMismatch",
      "msg": "The mint address provided does not match seller's provided mint address."
    },
    {
      "code": 6005,
      "name": "Overflow",
      "msg": "Operations resulted in an overflow."
    }
  ]
};
