// TODO replace this for the mainnet addresses these are ropsten contracts
export default {
	ytxAddress: '0x1465113223c8f2FFf67dE3fb84C29Cc1044B1fCE',
	yfsAddress: '0xDf5D1128014b4f09C25370caA785a244c2564619',
	nftManager: '0x8c4B2F3Fd8f8A454370A07b67837E834a113bC7c',
	lockLiquidity: '0x25b1340c589C944dF6aF854406835ae4EBf88B77',
	ytxAbi: [
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'owner',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'spender',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'value',
					type: 'uint256',
				},
			],
			name: 'Approval',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address',
					name: 'sender',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256',
				},
			],
			name: 'Fee',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'previousOwner',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'newOwner',
					type: 'address',
				},
			],
			name: 'OwnershipTransferred',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'from',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'to',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'value',
					type: 'uint256',
				},
			],
			name: 'Transfer',
			type: 'event',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: '_balances',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'owner',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'spender',
					type: 'address',
				},
			],
			name: 'allowance',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'spender',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256',
				},
			],
			name: 'approve',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
			],
			name: 'balanceOf',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [],
			name: 'decimals',
			outputs: [
				{
					internalType: 'uint8',
					name: '',
					type: 'uint8',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'spender',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'subtractedValue',
					type: 'uint256',
				},
			],
			name: 'decreaseAllowance',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'gameTreasury',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'spender',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'addedValue',
					type: 'uint256',
				},
			],
			name: 'increaseAllowance',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: 'isFrozen',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [],
			name: 'lockLiquidityContract',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [],
			name: 'name',
			outputs: [
				{
					internalType: 'string',
					name: '',
					type: 'string',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [],
			name: 'owner',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [],
			name: 'renounceOwnership',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'symbol',
			outputs: [
				{
					internalType: 'string',
					name: '',
					type: 'string',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [],
			name: 'totalSupply',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'recipient',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256',
				},
			],
			name: 'transfer',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'transferFee',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'sender',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'recipient',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256',
				},
			],
			name: 'transferFrom',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'newOwner',
					type: 'address',
				},
			],
			name: 'transferOwnership',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_gameTreasury',
					type: 'address',
				},
			],
			name: 'initialize',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_gameTreasury',
					type: 'address',
				},
			],
			name: 'setGameTreasury',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_lockLiquidityContract',
					type: 'address',
				},
			],
			name: 'setLockLiquidityContract',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_account',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_amount',
					type: 'uint256',
				},
			],
			name: 'burn',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'extractETHIfStuck',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_token',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_amount',
					type: 'uint256',
				},
			],
			name: 'extractTokenIfStuck',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_of',
					type: 'address',
				},
			],
			name: 'freezeTokens',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_of',
					type: 'address',
				},
			],
			name: 'unFreezeTokens',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_fee',
					type: 'uint256',
				},
			],
			name: 'changeFee',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
	],
	yfsAbi: [
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'owner',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'spender',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'value',
					type: 'uint256',
				},
			],
			name: 'Approval',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'previousOwner',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'newOwner',
					type: 'address',
				},
			],
			name: 'OwnershipTransferred',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'from',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'to',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'value',
					type: 'uint256',
				},
			],
			name: 'Transfer',
			type: 'event',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: '_balances',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'owner',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'spender',
					type: 'address',
				},
			],
			name: 'allowance',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'spender',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256',
				},
			],
			name: 'approve',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
			],
			name: 'balanceOf',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [],
			name: 'decimals',
			outputs: [
				{
					internalType: 'uint8',
					name: '',
					type: 'uint8',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'spender',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'subtractedValue',
					type: 'uint256',
				},
			],
			name: 'decreaseAllowance',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'spender',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'addedValue',
					type: 'uint256',
				},
			],
			name: 'increaseAllowance',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: 'isFrozen',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [],
			name: 'name',
			outputs: [
				{
					internalType: 'string',
					name: '',
					type: 'string',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [],
			name: 'nftManager',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [],
			name: 'owner',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [],
			name: 'renounceOwnership',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'symbol',
			outputs: [
				{
					internalType: 'string',
					name: '',
					type: 'string',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [],
			name: 'totalSupply',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
			constant: true,
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'recipient',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256',
				},
			],
			name: 'transfer',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'sender',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'recipient',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256',
				},
			],
			name: 'transferFrom',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'newOwner',
					type: 'address',
				},
			],
			name: 'transferOwnership',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_nftManager',
					type: 'address',
				},
			],
			name: 'initialize',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_nftManager',
					type: 'address',
				},
			],
			name: 'setManager',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_to',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_amount',
					type: 'uint256',
				},
			],
			name: 'mint',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_account',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_amount',
					type: 'uint256',
				},
			],
			name: 'burn',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'extractETHIfStuck',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_token',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_amount',
					type: 'uint256',
				},
			],
			name: 'extractTokenIfStuck',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_of',
					type: 'address',
				},
			],
			name: 'freezeTokens',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_of',
					type: 'address',
				},
			],
			name: 'unFreezeTokens',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
	],
	nftManagerAbi: [
		{
		  "anonymous": false,
		  "inputs": [
			{
			  "indexed": true,
			  "internalType": "address",
			  "name": "owner",
			  "type": "address"
			},
			{
			  "indexed": true,
			  "internalType": "address",
			  "name": "approved",
			  "type": "address"
			},
			{
			  "indexed": true,
			  "internalType": "uint256",
			  "name": "tokenId",
			  "type": "uint256"
			}
		  ],
		  "name": "Approval",
		  "type": "event"
		},
		{
		  "anonymous": false,
		  "inputs": [
			{
			  "indexed": true,
			  "internalType": "address",
			  "name": "owner",
			  "type": "address"
			},
			{
			  "indexed": true,
			  "internalType": "address",
			  "name": "operator",
			  "type": "address"
			},
			{
			  "indexed": false,
			  "internalType": "bool",
			  "name": "approved",
			  "type": "bool"
			}
		  ],
		  "name": "ApprovalForAll",
		  "type": "event"
		},
		{
		  "anonymous": false,
		  "inputs": [
			{
			  "indexed": true,
			  "internalType": "address",
			  "name": "previousOwner",
			  "type": "address"
			},
			{
			  "indexed": true,
			  "internalType": "address",
			  "name": "newOwner",
			  "type": "address"
			}
		  ],
		  "name": "OwnershipTransferred",
		  "type": "event"
		},
		{
		  "anonymous": false,
		  "inputs": [
			{
			  "indexed": true,
			  "internalType": "address",
			  "name": "from",
			  "type": "address"
			},
			{
			  "indexed": true,
			  "internalType": "address",
			  "name": "to",
			  "type": "address"
			},
			{
			  "indexed": true,
			  "internalType": "uint256",
			  "name": "tokenId",
			  "type": "uint256"
			}
		  ],
		  "name": "Transfer",
		  "type": "event"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "",
			  "type": "address"
			}
		  ],
		  "name": "amountStaked",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function",
		  "constant": true
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "to",
			  "type": "address"
			},
			{
			  "internalType": "uint256",
			  "name": "tokenId",
			  "type": "uint256"
			}
		  ],
		  "name": "approve",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "owner",
			  "type": "address"
			}
		  ],
		  "name": "balanceOf",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function",
		  "constant": true
		},
		{
		  "inputs": [],
		  "name": "baseURI",
		  "outputs": [
			{
			  "internalType": "string",
			  "name": "",
			  "type": "string"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function",
		  "constant": true
		},
		{
		  "inputs": [
			{
			  "internalType": "string",
			  "name": "",
			  "type": "string"
			}
		  ],
		  "name": "blueprintExists",
		  "outputs": [
			{
			  "internalType": "bool",
			  "name": "",
			  "type": "bool"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function",
		  "constant": true
		},
		{
		  "inputs": [
			{
			  "internalType": "string",
			  "name": "",
			  "type": "string"
			},
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "name": "blueprints",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function",
		  "constant": true
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "tokenId",
			  "type": "uint256"
			}
		  ],
		  "name": "getApproved",
		  "outputs": [
			{
			  "internalType": "address",
			  "name": "",
			  "type": "address"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function",
		  "constant": true
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "owner",
			  "type": "address"
			},
			{
			  "internalType": "address",
			  "name": "operator",
			  "type": "address"
			}
		  ],
		  "name": "isApprovedForAll",
		  "outputs": [
			{
			  "internalType": "bool",
			  "name": "",
			  "type": "bool"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function",
		  "constant": true
		},
		{
		  "inputs": [],
		  "name": "lastId",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function",
		  "constant": true
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "name": "mintedTokenIds",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function",
		  "constant": true
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "name": "myTokenURI",
		  "outputs": [
			{
			  "internalType": "string",
			  "name": "",
			  "type": "string"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function",
		  "constant": true
		},
		{
		  "inputs": [],
		  "name": "name",
		  "outputs": [
			{
			  "internalType": "string",
			  "name": "",
			  "type": "string"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function",
		  "constant": true
		},
		{
		  "inputs": [],
		  "name": "oneDayInBlocks",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function",
		  "constant": true
		},
		{
		  "inputs": [],
		  "name": "owner",
		  "outputs": [
			{
			  "internalType": "address",
			  "name": "",
			  "type": "address"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function",
		  "constant": true
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "tokenId",
			  "type": "uint256"
			}
		  ],
		  "name": "ownerOf",
		  "outputs": [
			{
			  "internalType": "address",
			  "name": "",
			  "type": "address"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function",
		  "constant": true
		},
		{
		  "inputs": [],
		  "name": "renounceOwnership",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "from",
			  "type": "address"
			},
			{
			  "internalType": "address",
			  "name": "to",
			  "type": "address"
			},
			{
			  "internalType": "uint256",
			  "name": "tokenId",
			  "type": "uint256"
			}
		  ],
		  "name": "safeTransferFrom",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "from",
			  "type": "address"
			},
			{
			  "internalType": "address",
			  "name": "to",
			  "type": "address"
			},
			{
			  "internalType": "uint256",
			  "name": "tokenId",
			  "type": "uint256"
			},
			{
			  "internalType": "bytes",
			  "name": "_data",
			  "type": "bytes"
			}
		  ],
		  "name": "safeTransferFrom",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "operator",
			  "type": "address"
			},
			{
			  "internalType": "bool",
			  "name": "approved",
			  "type": "bool"
			}
		  ],
		  "name": "setApprovalForAll",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "bytes4",
			  "name": "interfaceId",
			  "type": "bytes4"
			}
		  ],
		  "name": "supportsInterface",
		  "outputs": [
			{
			  "internalType": "bool",
			  "name": "",
			  "type": "bool"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function",
		  "constant": true
		},
		{
		  "inputs": [],
		  "name": "symbol",
		  "outputs": [
			{
			  "internalType": "string",
			  "name": "",
			  "type": "string"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function",
		  "constant": true
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "",
			  "type": "address"
			}
		  ],
		  "name": "timeStaked",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function",
		  "constant": true
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "index",
			  "type": "uint256"
			}
		  ],
		  "name": "tokenByIndex",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function",
		  "constant": true
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "owner",
			  "type": "address"
			},
			{
			  "internalType": "uint256",
			  "name": "index",
			  "type": "uint256"
			}
		  ],
		  "name": "tokenOfOwnerByIndex",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function",
		  "constant": true
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "tokenId",
			  "type": "uint256"
			}
		  ],
		  "name": "tokenURI",
		  "outputs": [
			{
			  "internalType": "string",
			  "name": "",
			  "type": "string"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function",
		  "constant": true
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "name": "tokenURIs",
		  "outputs": [
			{
			  "internalType": "string",
			  "name": "",
			  "type": "string"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function",
		  "constant": true
		},
		{
		  "inputs": [],
		  "name": "totalSupply",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function",
		  "constant": true
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "from",
			  "type": "address"
			},
			{
			  "internalType": "address",
			  "name": "to",
			  "type": "address"
			},
			{
			  "internalType": "uint256",
			  "name": "tokenId",
			  "type": "uint256"
			}
		  ],
		  "name": "transferFrom",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "newOwner",
			  "type": "address"
			}
		  ],
		  "name": "transferOwnership",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [],
		  "name": "yfs",
		  "outputs": [
			{
			  "internalType": "address",
			  "name": "",
			  "type": "address"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function",
		  "constant": true
		},
		{
		  "inputs": [],
		  "name": "ytx",
		  "outputs": [
			{
			  "internalType": "address",
			  "name": "",
			  "type": "address"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function",
		  "constant": true
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "_ytx",
			  "type": "address"
			},
			{
			  "internalType": "address",
			  "name": "_yfs",
			  "type": "address"
			},
			{
			  "internalType": "string",
			  "name": "baseUri_",
			  "type": "string"
			}
		  ],
		  "name": "initialize",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "_ytx",
			  "type": "address"
			}
		  ],
		  "name": "setYTX",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "_yfs",
			  "type": "address"
			}
		  ],
		  "name": "setYFS",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "string",
			  "name": "baseURI_",
			  "type": "string"
			}
		  ],
		  "name": "setBaseURI",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "string",
			  "name": "_tokenURI",
			  "type": "string"
			},
			{
			  "internalType": "uint256",
			  "name": "_maxMint",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "_ytxCost",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "_yfsCost",
			  "type": "uint256"
			}
		  ],
		  "name": "createBlueprint",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "_amount",
			  "type": "uint256"
			}
		  ],
		  "name": "stakeYTX",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [],
		  "name": "getTokenURIs",
		  "outputs": [
			{
			  "internalType": "string[]",
			  "name": "",
			  "type": "string[]"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function",
		  "constant": true
		},
		{
		  "inputs": [],
		  "name": "receiveYFS",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [],
		  "name": "getGeneratedYFS",
		  "outputs": [
			{
			  "internalType": "uint256",
			  "name": "",
			  "type": "uint256"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function",
		  "constant": true
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "_amount",
			  "type": "uint256"
			}
		  ],
		  "name": "unstakeYTXAndReceiveYFS",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "string",
			  "name": "_tokenURI",
			  "type": "string"
			}
		  ],
		  "name": "safeMint",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "_id",
			  "type": "uint256"
			}
		  ],
		  "name": "breakCard",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "address",
			  "name": "_token",
			  "type": "address"
			},
			{
			  "internalType": "uint256",
			  "name": "_amount",
			  "type": "uint256"
			}
		  ],
		  "name": "extractTokensIfStuck",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [],
		  "name": "extractETHIfStruck",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [
			{
			  "internalType": "string",
			  "name": "_tokenURI",
			  "type": "string"
			}
		  ],
		  "name": "getBlueprint",
		  "outputs": [
			{
			  "internalType": "uint256[4]",
			  "name": "",
			  "type": "uint256[4]"
			}
		  ],
		  "stateMutability": "view",
		  "type": "function",
		  "constant": true
		}
	],
}
