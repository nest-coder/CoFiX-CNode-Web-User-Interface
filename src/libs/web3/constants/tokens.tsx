import { TokenCNode, TokenCOFI, TokenUSDT } from 'src/components/Icon';

import { TokenProps } from '../api/Token';
import { Mainnet, Rinkeby } from './chains';

export const USDT: TokenProps = {
  symbol: 'USDT',
  Icon: TokenUSDT,
  addresses: {
    [Mainnet.chainId]: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    [Rinkeby.chainId]: '0x2d750210c0b5343a0b79beff8F054C9add7d2411',
  },
}



export const COFI: TokenProps = {
  symbol: 'COFI',
  Icon: TokenCOFI,
  addresses: {
    [Mainnet.chainId]: '0x1a23a6BfBAdB59fa563008c0fB7cf96dfCF34Ea1',
    [Rinkeby.chainId]: '0x61EA050b28Ccca539F0faf79Fd26F6Df31b9f15B',
  },
}

export const CNODE: TokenProps = {
  symbol: 'CNODE',
  Icon: TokenCNode,
  addresses: {
    [Mainnet.chainId]: '0x558201DC4741efc11031Cdc3BC1bC728C23bF512',
    [Rinkeby.chainId]: '0x91566410cC6E9F6579e4132909F597676D5C1FB2',
  },
}

export const ERC20TokenWhitelist = [USDT, COFI, CNODE]
