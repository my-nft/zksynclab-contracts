/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  EtherPaymentFallback,
  EtherPaymentFallbackInterface,
} from "../../common/EtherPaymentFallback";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "SafeReceived",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060c18061001f6000396000f3fe6080604052366056573373ffffffffffffffffffffffffffffffffffffffff167f3d0ce9bfc3ed7d6862dbb28b2dea94561fe714a1b4d019aa8af39730d1ad7c3d34604051604c91906072565b60405180910390a2005b600080fd5b6000819050919050565b606c81605b565b82525050565b6000602082019050608560008301846065565b9291505056fea264697066735822122044aa47708fcbd701c8ecbc95bb432efa6172e3e2327d39b64d95cb852105925864736f6c63430008120033";

type EtherPaymentFallbackConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EtherPaymentFallbackConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EtherPaymentFallback__factory extends ContractFactory {
  constructor(...args: EtherPaymentFallbackConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<EtherPaymentFallback> {
    return super.deploy(overrides || {}) as Promise<EtherPaymentFallback>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): EtherPaymentFallback {
    return super.attach(address) as EtherPaymentFallback;
  }
  override connect(signer: Signer): EtherPaymentFallback__factory {
    return super.connect(signer) as EtherPaymentFallback__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EtherPaymentFallbackInterface {
    return new utils.Interface(_abi) as EtherPaymentFallbackInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EtherPaymentFallback {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as EtherPaymentFallback;
  }
}
