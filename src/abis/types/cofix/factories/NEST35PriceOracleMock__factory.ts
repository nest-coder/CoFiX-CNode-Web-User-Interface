/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import { Provider } from '@ethersproject/providers'
import type { NEST35PriceOracleMock, NEST35PriceOracleMockInterface } from '../NEST35PriceOracleMock'

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'nest',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'addressEffect_',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'nestToken_',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
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
    name: 'priceInfoMap',
    outputs: [
      {
        internalType: 'uint256',
        name: 'ethAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'erc20Amount',
        type: 'uint256',
      },
      {
        internalType: 'uint128',
        name: 'avgPrice',
        type: 'uint128',
      },
      {
        internalType: 'int128',
        name: 'vola',
        type: 'int128',
      },
      {
        internalType: 'uint256',
        name: 'lastUpdateBlock',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'defi',
        type: 'address',
      },
    ],
    name: 'activate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'payback',
        type: 'address',
      },
    ],
    name: 'queryPriceAvgVola',
    outputs: [
      {
        internalType: 'uint256',
        name: 'ethAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'tokenAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint128',
        name: 'avgPrice',
        type: 'uint128',
      },
      {
        internalType: 'int128',
        name: 'vola',
        type: 'int128',
      },
      {
        internalType: 'uint256',
        name: 'bn',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'latestPrice',
    outputs: [
      {
        internalType: 'uint256',
        name: 'ethAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'tokenAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint128',
        name: 'avgPrice',
        type: 'uint128',
      },
      {
        internalType: 'int128',
        name: 'vola',
        type: 'int128',
      },
      {
        internalType: 'uint256',
        name: 'bn',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'checkPriceNow',
    outputs: [
      {
        internalType: 'uint256',
        name: 'ethAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'erc20Amount',
        type: 'uint256',
      },
      {
        internalType: 'uint128',
        name: 'avgPrice',
        type: 'uint128',
      },
      {
        internalType: 'int128',
        name: 'vola',
        type: 'int128',
      },
      {
        internalType: 'uint256',
        name: 'blockNum',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'ethAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'erc20Amount',
        type: 'uint256',
      },
      {
        internalType: 'uint128',
        name: 'avgPrice',
        type: 'uint128',
      },
      {
        internalType: 'int128',
        name: 'vola',
        type: 'int128',
      },
    ],
    name: 'feedPrice',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
    ],
    name: 'checkUseNestPrice',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

export class NEST35PriceOracleMock__factory {
  static readonly abi = _abi
  static createInterface(): NEST35PriceOracleMockInterface {
    return new utils.Interface(_abi) as NEST35PriceOracleMockInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): NEST35PriceOracleMock {
    return new Contract(address, _abi, signerOrProvider) as NEST35PriceOracleMock
  }
}
