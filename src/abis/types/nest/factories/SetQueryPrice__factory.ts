/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { SetQueryPrice, SetQueryPriceInterface } from "../SetQueryPrice";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "nestMappingAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "run",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class SetQueryPrice__factory {
  static readonly abi = _abi;
  static createInterface(): SetQueryPriceInterface {
    return new utils.Interface(_abi) as SetQueryPriceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SetQueryPrice {
    return new Contract(address, _abi, signerOrProvider) as SetQueryPrice;
  }
}
