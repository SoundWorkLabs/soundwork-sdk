export type SoundworkBid = {
  "version": "0.1.0",
  "name": "soundwork_bid",
  "instructions": [
    {
      "name": "makeBid",
      "docs": [
        "make a bid for an nft"
      ],
      "accounts": [
        {
          "name": "bidder",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "biddingDataAcc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "listingDataAcc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "solEscrowWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "soundworkList",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "lamports",
          "type": "u64"
        },
        {
          "name": "expiresTs",
          "type": "i64"
        }
      ]
    },
    {
      "name": "editBid",
      "accounts": [
        {
          "name": "bidder",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "biddingDataAcc",
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
          "name": "newLamports",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "newExpires",
          "type": {
            "option": "i64"
          }
        }
      ]
    },
    {
      "name": "deleteBid",
      "docs": [
        "deletes a bid for an nft"
      ],
      "accounts": [
        {
          "name": "bidder",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "biddingDataAcc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "solEscrowWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "soundworkList",
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
        "accepts bid from user"
      ],
      "accounts": [
        {
          "name": "seller",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "listingDataAcc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "biddingDataAcc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerSolEscrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerTokenAcc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "assetManager",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultTokenAcc",
          "isMut": true,
          "isSigner": false
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
      "name": "rejectBid",
      "docs": [
        "reject a user's bid"
      ],
      "accounts": [
        {
          "name": "seller",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "listingDataAcc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerSolEscrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "biddingDataAcc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "soundworkList",
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
      "name": "biddingDataV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "expiresTs",
            "type": "i64"
          },
          {
            "name": "lamports",
            "type": "u64"
          },
          {
            "name": "owner",
            "type": "publicKey"
          }
        ]
      }
    }
  ]
};

export const IDL: SoundworkBid = {
  "version": "0.1.0",
  "name": "soundwork_bid",
  "instructions": [
    {
      "name": "makeBid",
      "docs": [
        "make a bid for an nft"
      ],
      "accounts": [
        {
          "name": "bidder",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "biddingDataAcc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "listingDataAcc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "solEscrowWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "soundworkList",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "lamports",
          "type": "u64"
        },
        {
          "name": "expiresTs",
          "type": "i64"
        }
      ]
    },
    {
      "name": "editBid",
      "accounts": [
        {
          "name": "bidder",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "biddingDataAcc",
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
          "name": "newLamports",
          "type": {
            "option": "u64"
          }
        },
        {
          "name": "newExpires",
          "type": {
            "option": "i64"
          }
        }
      ]
    },
    {
      "name": "deleteBid",
      "docs": [
        "deletes a bid for an nft"
      ],
      "accounts": [
        {
          "name": "bidder",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "biddingDataAcc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "solEscrowWallet",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "soundworkList",
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
        "accepts bid from user"
      ],
      "accounts": [
        {
          "name": "seller",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "listingDataAcc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "biddingDataAcc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerSolEscrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerTokenAcc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "assetManager",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultTokenAcc",
          "isMut": true,
          "isSigner": false
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
      "name": "rejectBid",
      "docs": [
        "reject a user's bid"
      ],
      "accounts": [
        {
          "name": "seller",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "listingDataAcc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerSolEscrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "biddingDataAcc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "soundworkList",
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
      "name": "biddingDataV1",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "expiresTs",
            "type": "i64"
          },
          {
            "name": "lamports",
            "type": "u64"
          },
          {
            "name": "owner",
            "type": "publicKey"
          }
        ]
      }
    }
  ]
};
