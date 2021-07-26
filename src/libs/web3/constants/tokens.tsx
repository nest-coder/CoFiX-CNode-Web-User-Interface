import {
  TokenCNode,
  TokenCOFI,
  TokenDAI,
  TokenHBTC,
  TokenNEST,
  TokenPETH,
  TokenPUSD,
  TokenUSDT,
} from 'src/components/Icon'

import { TokenProps } from '../api/Token'

export const USDT: TokenProps = {
  symbol: 'USDT',
  Icon: TokenUSDT,
  addresses: {
    1: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    3: '0xc82C867f9e25303C766e2ba83d512419223d4574',
    4: '0x20125a7256EFafd0d4Eec24048E08C5045BC5900',
  },
}

export const HBTC: TokenProps = {
  symbol: 'HBTC',
  Icon: TokenHBTC,
  addresses: {
    4: '0xaE73d363Cb4aC97734E07e48B01D0a1FF5D1190B',
  },
}

export const PETH: TokenProps = {
  symbol: 'PETH',
  Icon: TokenPETH,
  addresses: {
    4: '0xd5Dfe6355EeBE918a23d70f5399Bb08F8a1BD588',
  },
}

export const PUSD: TokenProps = {
  symbol: 'PUSD',
  Icon: TokenPUSD,
  addresses: {
    4: '0x01A8088947B1222a5dC5a13C45b845E0361EEFF7',
  },
}

export const DAI: TokenProps = {
  symbol: 'DAI',
  Icon: TokenDAI,
  addresses: {
    4: '0xFe027e6243Cd9b94772fA07c0b5fcD3D03D55c92',
  },
}

export const NEST: TokenProps = {
  symbol: 'NEST',
  Icon: TokenNEST,
  addresses: {
    1: '0x04abEdA201850aC0124161F037Efd70c74ddC74C',
    3: '0x2CFa7278ecf2DB7f6f97C07EefaC4aAD19b81d80',
    4: '0xE313F3f49B647fBEDDC5F2389Edb5c93CBf4EE25',
  },
  formatPrecision: 2,
}

export const COFI: TokenProps = {
  symbol: 'COFI',
  Icon: TokenCOFI,
  addresses: {
    1: '0x1a23a6bfbadb59fa563008c0fb7cf96dfcf34ea1',
    3: '0x7E03E60925D27D6DeF4F05E725f5fD2f03BDbfD5',
    4: '0x6b3077dcEe0975017BDd1a7eA9E12d3D9F398695',
  },
}

export const CNODE: TokenProps = {
  symbol: 'CNODE',
  Icon: TokenCNode,
  addresses: {
    4: '0xa818c471Ab162a1d7669Ab04b023Ebac38DDCA64',
  },
}

export const ERC20TokenWhitelist = [USDT, COFI, CNODE]
