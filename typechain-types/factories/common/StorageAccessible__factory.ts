/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  StorageAccessible,
  StorageAccessibleInterface,
} from "../../common/StorageAccessible";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "offset",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    name: "getStorageAt",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "targetContract",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "calldataPayload",
        type: "bytes",
      },
    ],
    name: "simulateAndRevert",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061055b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80635624b25b1461003b578063b4faba091461006b575b600080fd5b6100556004803603810190610050919061018b565b610087565b604051610062919061025b565b60405180910390f35b61008560048036038101906100809190610410565b61011f565b005b60606000602083610098919061049b565b67ffffffffffffffff8111156100b1576100b06102e5565b5b6040519080825280601f01601f1916602001820160405280156100e35781602001600182028036833780820191505090505b50905060005b838110156101145780850154806020830260208501015250808061010c906104dd565b9150506100e9565b508091505092915050565b600080825160208401855af4806000523d6020523d600060403e60403d016000fd5b6000604051905090565b600080fd5b600080fd5b6000819050919050565b61016881610155565b811461017357600080fd5b50565b6000813590506101858161015f565b92915050565b600080604083850312156101a2576101a161014b565b5b60006101b085828601610176565b92505060206101c185828601610176565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b60005b838110156102055780820151818401526020810190506101ea565b60008484015250505050565b6000601f19601f8301169050919050565b600061022d826101cb565b61023781856101d6565b93506102478185602086016101e7565b61025081610211565b840191505092915050565b600060208201905081810360008301526102758184610222565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006102a88261027d565b9050919050565b6102b88161029d565b81146102c357600080fd5b50565b6000813590506102d5816102af565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61031d82610211565b810181811067ffffffffffffffff8211171561033c5761033b6102e5565b5b80604052505050565b600061034f610141565b905061035b8282610314565b919050565b600067ffffffffffffffff82111561037b5761037a6102e5565b5b61038482610211565b9050602081019050919050565b82818337600083830152505050565b60006103b36103ae84610360565b610345565b9050828152602081018484840111156103cf576103ce6102e0565b5b6103da848285610391565b509392505050565b600082601f8301126103f7576103f66102db565b5b81356104078482602086016103a0565b91505092915050565b600080604083850312156104275761042661014b565b5b6000610435858286016102c6565b925050602083013567ffffffffffffffff81111561045657610455610150565b5b610462858286016103e2565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006104a682610155565b91506104b183610155565b92508282026104bf81610155565b915082820484148315176104d6576104d561046c565b5b5092915050565b60006104e882610155565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361051a5761051961046c565b5b60018201905091905056fea26469706673582212203ec89c34e62e1b48f9b69cfeadf0f2ceabaca16350f4aa39b1f0f13d4fb42b6364736f6c63430008120033";

type StorageAccessibleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StorageAccessibleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StorageAccessible__factory extends ContractFactory {
  constructor(...args: StorageAccessibleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<StorageAccessible> {
    return super.deploy(overrides || {}) as Promise<StorageAccessible>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): StorageAccessible {
    return super.attach(address) as StorageAccessible;
  }
  override connect(signer: Signer): StorageAccessible__factory {
    return super.connect(signer) as StorageAccessible__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StorageAccessibleInterface {
    return new utils.Interface(_abi) as StorageAccessibleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StorageAccessible {
    return new Contract(address, _abi, signerOrProvider) as StorageAccessible;
  }
}