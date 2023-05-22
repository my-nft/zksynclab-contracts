/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { TestToken, TestTokenInterface } from "../../Token.sol/TestToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001b1d38038062001b1d833981016040819052620000349162000467565b6a52b7d2dcc80cd2e4000000828260036200005083826200055f565b5060046200005f82826200055f565b50505060008111620000b85760405162461bcd60e51b815260206004820152601560248201527f45524332304361707065643a206361702069732030000000000000000000000060448201526064015b60405180910390fd5b6005556006805460ff19169055620000d2600033620000f1565b620000e9336a211654585005212800000062000101565b50506200064d565b620000fd82826200018d565b5050565b600554816200011a6200021760201b620004971760201c565b6200012691906200062b565b1115620001765760405162461bcd60e51b815260206004820152601960248201527f45524332304361707065643a20636170206578636565646564000000000000006044820152606401620000af565b620000fd82826200021d60201b6200072d1760201c565b62000199828262000310565b620000fd5760008281526007602090815260408083206001600160a01b03851684529091529020805460ff19166001179055620001d33390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60025490565b6001600160a01b038216620002755760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401620000af565b62000283600083836200033d565b80600260008282546200029791906200062b565b90915550506001600160a01b03821660009081526020819052604081208054839290620002c69084906200062b565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b60008281526007602090815260408083206001600160a01b038516845290915290205460ff165b92915050565b60065460ff1615620003855760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401620000af565b6200039d8383836200039d60201b620004e71760201c565b505050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620003ca57600080fd5b81516001600160401b0380821115620003e757620003e7620003a2565b604051601f8301601f19908116603f01168101908282118183101715620004125762000412620003a2565b816040528381526020925086838588010111156200042f57600080fd5b600091505b8382101562000453578582018301518183018401529082019062000434565b600093810190920192909252949350505050565b600080604083850312156200047b57600080fd5b82516001600160401b03808211156200049357600080fd5b620004a186838701620003b8565b93506020850151915080821115620004b857600080fd5b50620004c785828601620003b8565b9150509250929050565b600181811c90821680620004e657607f821691505b6020821081036200050757634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200039d57600081815260208120601f850160051c81016020861015620005365750805b601f850160051c820191505b81811015620005575782815560010162000542565b505050505050565b81516001600160401b038111156200057b576200057b620003a2565b62000593816200058c8454620004d1565b846200050d565b602080601f831160018114620005cb5760008415620005b25750858301515b600019600386901b1c1916600185901b17855562000557565b600085815260208120601f198616915b82811015620005fc57888601518255948401946001909101908401620005db565b50858210156200061b5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b808201808211156200033757634e487b7160e01b600052601160045260246000fd5b6114c0806200065d6000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c806342966c68116100de57806395d89b4111610097578063a9059cbb11610071578063a9059cbb14610330578063d539139314610343578063d547741f1461036a578063dd62ed3e1461037d57600080fd5b806395d89b411461030d578063a217fddf14610315578063a457c2d71461031d57600080fd5b806342966c68146102985780635c975abb146102ab57806370a08231146102b657806379cc6790146102df5780638456cb59146102f257806391d14854146102fa57600080fd5b80632f2ff15d1161014b57806336568abe1161012557806336568abe14610257578063395093511461026a5780633f4ba83a1461027d57806340c10f191461028557600080fd5b80632f2ff15d1461022b578063313ce56714610240578063355274ea1461024f57600080fd5b806301ffc9a71461019357806306fdde03146101bb578063095ea7b3146101d057806318160ddd146101e357806323b872dd146101f5578063248a9ca314610208575b600080fd5b6101a66101a13660046111b8565b6103b6565b60405190151581526020015b60405180910390f35b6101c36103ed565b6040516101b29190611206565b6101a66101de366004611255565b61047f565b6002545b6040519081526020016101b2565b6101a661020336600461127f565b61049d565b6101e76102163660046112bb565b60009081526007602052604090206001015490565b61023e6102393660046112d4565b6104c1565b005b604051601281526020016101b2565b6005546101e7565b61023e6102653660046112d4565b6104ec565b6101a6610278366004611255565b61056f565b61023e6105ae565b61023e610293366004611255565b6105c5565b61023e6102a63660046112bb565b6105fa565b60065460ff166101a6565b6101e76102c4366004611300565b6001600160a01b031660009081526020819052604090205490565b61023e6102ed366004611255565b610604565b61023e610619565b6101a66103083660046112d4565b61062d565b6101c3610658565b6101e7600081565b6101a661032b366004611255565b610667565b6101a661033e366004611255565b6106f9565b6101e77f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b61023e6103783660046112d4565b610707565b6101e761038b36600461131b565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60006001600160e01b03198216637965db0b60e01b14806103e757506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600380546103fc90611345565b80601f016020809104026020016040519081016040528092919081815260200182805461042890611345565b80156104755780601f1061044a57610100808354040283529160200191610475565b820191906000526020600020905b81548152906001019060200180831161045857829003601f168201915b5050505050905090565b60003361048d818585610818565b5060019392505050565b60025490565b6000336104ab85828561093c565b6104b68585856109ce565b506001949350505050565b6000828152600760205260409020600101546104dd8133610ba7565b6104e78383610c0b565b505050565b6001600160a01b03811633146105615760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b61056b8282610c91565b5050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061048d90829086906105a9908790611395565b610818565b60006105ba8133610ba7565b6105c2610cf8565b50565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a66105f08133610ba7565b6104e78383610d8b565b6105c23382610dfa565b61060f82338361093c565b61056b8282610dfa565b60006106258133610ba7565b6105c2610f54565b60009182526007602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6060600480546103fc90611345565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156106ec5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610558565b6104b68286868403610818565b60003361048d8185856109ce565b6000828152600760205260409020600101546107238133610ba7565b6104e78383610c91565b6001600160a01b0382166107835760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610558565b61078f60008383610fcf565b80600260008282546107a19190611395565b90915550506001600160a01b038216600090815260208190526040812080548392906107ce908490611395565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b03831661087a5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610558565b6001600160a01b0382166108db5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610558565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146109c857818110156109bb5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610558565b6109c88484848403610818565b50505050565b6001600160a01b038316610a325760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610558565b6001600160a01b038216610a945760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610558565b610a9f838383610fcf565b6001600160a01b03831660009081526020819052604090205481811015610b175760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610558565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610b4e908490611395565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610b9a91815260200190565b60405180910390a36109c8565b610bb1828261062d565b61056b57610bc9816001600160a01b03166014611015565b610bd4836020611015565b604051602001610be59291906113a8565b60408051601f198184030181529082905262461bcd60e51b825261055891600401611206565b610c15828261062d565b61056b5760008281526007602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610c4d3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610c9b828261062d565b1561056b5760008281526007602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60065460ff16610d415760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610558565b6006805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b60055481610d9860025490565b610da29190611395565b1115610df05760405162461bcd60e51b815260206004820152601960248201527f45524332304361707065643a20636170206578636565646564000000000000006044820152606401610558565b61056b828261072d565b6001600160a01b038216610e5a5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610558565b610e6682600083610fcf565b6001600160a01b03821660009081526020819052604090205481811015610eda5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610558565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610f0990849061141d565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b60065460ff1615610f9a5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610558565b6006805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610d6e3390565b60065460ff16156104e75760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610558565b60606000611024836002611430565b61102f906002611395565b67ffffffffffffffff81111561104757611047611447565b6040519080825280601f01601f191660200182016040528015611071576020820181803683370190505b509050600360fc1b8160008151811061108c5761108c61145d565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106110bb576110bb61145d565b60200101906001600160f81b031916908160001a90535060006110df846002611430565b6110ea906001611395565b90505b6001811115611162576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061111e5761111e61145d565b1a60f81b8282815181106111345761113461145d565b60200101906001600160f81b031916908160001a90535060049490941c9361115b81611473565b90506110ed565b5083156111b15760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610558565b9392505050565b6000602082840312156111ca57600080fd5b81356001600160e01b0319811681146111b157600080fd5b60005b838110156111fd5781810151838201526020016111e5565b50506000910152565b60208152600082518060208401526112258160408501602087016111e2565b601f01601f19169190910160400192915050565b80356001600160a01b038116811461125057600080fd5b919050565b6000806040838503121561126857600080fd5b61127183611239565b946020939093013593505050565b60008060006060848603121561129457600080fd5b61129d84611239565b92506112ab60208501611239565b9150604084013590509250925092565b6000602082840312156112cd57600080fd5b5035919050565b600080604083850312156112e757600080fd5b823591506112f760208401611239565b90509250929050565b60006020828403121561131257600080fd5b6111b182611239565b6000806040838503121561132e57600080fd5b61133783611239565b91506112f760208401611239565b600181811c9082168061135957607f821691505b60208210810361137957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156103e7576103e761137f565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516113e08160178501602088016111e2565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516114118160288401602088016111e2565b01602801949350505050565b818103818111156103e7576103e761137f565b80820281158282048414176103e7576103e761137f565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6000816114825761148261137f565b50600019019056fea2646970667358221220d8ef453ed6609989fc7809e37cedd52319bac194878bce8d99f5d5618e66629b64736f6c63430008120033";

type TestTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestToken__factory extends ContractFactory {
  constructor(...args: TestTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestToken> {
    return super.deploy(_name, _symbol, overrides || {}) as Promise<TestToken>;
  }
  override getDeployTransaction(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, overrides || {});
  }
  override attach(address: string): TestToken {
    return super.attach(address) as TestToken;
  }
  override connect(signer: Signer): TestToken__factory {
    return super.connect(signer) as TestToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestTokenInterface {
    return new utils.Interface(_abi) as TestTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestToken {
    return new Contract(address, _abi, signerOrProvider) as TestToken;
  }
}
