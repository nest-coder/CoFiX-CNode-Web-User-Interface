import { CoFiXControllerProps } from '../api/CoFiXController'
import { CoFiXDAOProps } from '../api/CoFixDAO'
import { CoFiXRouterProps } from '../api/CoFiXRouter'
import { CoFiXVaultForStakingProps } from '../api/CoFiXVaultForStaking'
import { NestPriceFacadeProps } from '../api/NestPriceFacade'

export const NestPriceFacade: NestPriceFacadeProps = {
  addresses: {
    1: '0xB5D2890c061c321A5B6A4a4254bb1522425BAF0A',
    3: '0x406C82f4F116F4FAD75bb47A142C9B5Fb213133C',
    4: '0x40C3EB032f27fDa7AdcF1B753c75B84e27f26838',
  },
}

export const CoFiXController: CoFiXControllerProps = {
  addresses: {
    1: '0xf471bFd6c0A1Ab79cAD54B9608652B85638ceD97',
    3: '0x4C73A1f379bD5bC28DB20f4d2D3df344497000BF',
    4: '0x59c2EAF8FC22C10C2EB79Be3c23c2916BD0ec81e',
  },
}

export const CoFiXRouter: CoFiXRouterProps = {
  addresses: {
    1: '0x72A63055b9AA997A4311D0D068170e38F5455b82',
    3: '0x59291fa0828290252d743F3A424B35B7aabf6aFF',
    4: '0x9f7997EFb0aF6f5e370dea99b1941D73330825C9',
  },
}

export const CoFiXVaultForStaking: CoFiXVaultForStakingProps = {
  addresses: {
    4: '0x11839c81beBBC82686b0052Cb6F03E9Ae58A9704',
  },
}

export const CoFiXDAO: CoFiXDAOProps = {
  addresses: {
    4: '0x2720dF961723568062A96F9f5310d8ab408bfFfc',
  },
}
