/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  KassandraConstants,
  KassandraConstantsInterface,
} from "../../Pool.sol/KassandraConstants";

const _abi = [
  {
    inputs: [],
    name: "BPOW_PRECISION",
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
    name: "EXIT_FEE",
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
    name: "MAX_ASSET_LIMIT",
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
    name: "MAX_BPOW_BASE",
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
    name: "MAX_FEE",
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
    name: "MAX_IN_RATIO",
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
    name: "MAX_OUT_RATIO",
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
    name: "MAX_POOL_SUPPLY",
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
    name: "MAX_TOTAL_WEIGHT",
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
    name: "MAX_UINT",
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
    name: "MAX_WEIGHT",
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
    name: "MIN_ASSET_LIMIT",
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
    name: "MIN_BALANCE",
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
    name: "MIN_BPOW_BASE",
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
    name: "MIN_CORE_BALANCE",
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
    name: "MIN_FEE",
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
    name: "MIN_POOL_SUPPLY",
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
    name: "MIN_WEIGHT",
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
    name: "ONE",
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
] as const;

const _bytecode =
  "0x61037f61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061012b5760003560e01c8063992e2a92116100b7578063c6580d121161007b578063c6580d12146101a9578063cc12f267146101b1578063e4a28a5214610130578063e5b5019a146101b9578063ec093021146101c257600080fd5b8063992e2a9214610182578063ba019dab1461018a578063bc063e1a14610152578063bc694ea214610192578063c2ee3a081461019a57600080fd5b80634d1acbab116100fe5780634d1acbab146101625780636fd34b9f1461016a57806376c7a3c7146101725780637e88781c1461017a578063867378c51461017257600080fd5b806309a3bbe414610130578063189d00ca1461014a578063218b5382146101525780633bbef9be1461015a575b600080fd5b6101386101ca565b60405190815260200160405180910390f35b6101386101e0565b6101386101f7565b61013861020a565b610138600281565b610138601081565b610138610221565b610138610236565b610138610249565b610138600181565b610138610267565b610138670de0b6b3a764000081565b610138610286565b6101386102a5565b61013860001981565b6101386102bb565b6101dd670de0b6b3a764000060326102e4565b81565b6101dd6402540be400670de0b6b3a7640000610301565b6101dd600a670de0b6b3a7640000610301565b6101dd64e8d4a51000670de0b6b3a7640000610301565b6101dd620f4240670de0b6b3a7640000610301565b6101dd670de0b6b3a764000060646102e4565b61025c6003670de0b6b3a7640000610301565b6101dd906001610323565b600161027c670de0b6b3a764000060026102e4565b6101dd9190610336565b606461029b670de0b6b3a764000060036102e4565b6101dd9190610301565b6101dd670de0b6b3a7640000633b9aca006102e4565b6101dd6002670de0b6b3a7640000610301565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176102fb576102fb6102ce565b92915050565b60008261031e57634e487b7160e01b600052601260045260246000fd5b500490565b808201808211156102fb576102fb6102ce565b818103818111156102fb576102fb6102ce56fea26469706673582212203cd8e8f333272f78b57417eee89e864c576ee4496045430c4f7c24d1a25c6bdf64736f6c63430008120033";

type KassandraConstantsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: KassandraConstantsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class KassandraConstants__factory extends ContractFactory {
  constructor(...args: KassandraConstantsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<KassandraConstants> {
    return super.deploy(overrides || {}) as Promise<KassandraConstants>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): KassandraConstants {
    return super.attach(address) as KassandraConstants;
  }
  override connect(signer: Signer): KassandraConstants__factory {
    return super.connect(signer) as KassandraConstants__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KassandraConstantsInterface {
    return new utils.Interface(_abi) as KassandraConstantsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KassandraConstants {
    return new Contract(address, _abi, signerOrProvider) as KassandraConstants;
  }
}
