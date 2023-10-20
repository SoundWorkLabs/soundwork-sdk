export type MarketContracts = {
    "version": "0.1.0";
    "name": "market_contracts";
    "instructions": [
        {
            "name": "listNft";
            "docs": [
                "list an NFT on soundwork by moving NFT to our asset manager",
                "create an `listingData` account to hold price,"
            ];
            "accounts": [
                {
                    "name": "authority";
                    "isMut": true;
                    "isSigner": true;
                },
                {
                    "name": "authorityTokenAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "mint";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "assetManager";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "vaultTokenAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "listingData";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "tokenProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "associatedTokenProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "systemProgram";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [
                {
                    "name": "lamports";
                    "type": "u64";
                }
            ];
        },
        {
            "name": "editListing";
            "docs": [
                "edit listing, by updating the `listingData` account information"
            ];
            "accounts": [
                {
                    "name": "authority";
                    "isMut": true;
                    "isSigner": true;
                },
                {
                    "name": "authorityTokenAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "mint";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "assetManager";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "vaultTokenAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "listingData";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "tokenProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "systemProgram";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [
                {
                    "name": "lamports";
                    "type": "u64";
                }
            ];
        },
        {
            "name": "removeListing";
            "docs": [
                "remove listing by closing the `listingData` account",
                "and transfer NFT from soundwork to user"
            ];
            "accounts": [
                {
                    "name": "authority";
                    "isMut": true;
                    "isSigner": true;
                },
                {
                    "name": "authorityTokenAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "mint";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "assetManager";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "vaultTokenAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "listingData";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "tokenProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "systemProgram";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [];
        },
        {
            "name": "buyListing";
            "docs": [
                "buy an NFT from soundwork",
                "transfer NFT to user if he has funds to purchase the NFT"
            ];
            "accounts": [
                {
                    "name": "buyer";
                    "isMut": true;
                    "isSigner": true;
                },
                {
                    "name": "ogOwner";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "assetManager";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "vaultTokenAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "buyerTokenAccount";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "mint";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "listingData";
                    "isMut": true;
                    "isSigner": false;
                },
                {
                    "name": "tokenProgram";
                    "isMut": false;
                    "isSigner": false;
                },
                {
                    "name": "systemProgram";
                    "isMut": false;
                    "isSigner": false;
                }
            ];
            "args": [];
        }
    ];
    "accounts": [
        {
            "name": "assetManagerV1";
            "type": {
                "kind": "struct";
                "fields": [];
            };
        },
        {
            "name": "listingDataV1";
            "type": {
                "kind": "struct";
                "fields": [
                    {
                        "name": "lamports";
                        "type": "u64";
                    },
                    {
                        "name": "owner";
                        "type": "publicKey";
                    },
                    {
                        "name": "createdTs";
                        "type": "i64";
                    }
                ];
            };
        }
    ];
};
export declare const IDL: MarketContracts;
