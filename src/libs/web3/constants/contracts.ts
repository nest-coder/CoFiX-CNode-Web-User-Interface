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
    4: '0xEf1673bda89C0c1827680467BdfB6d22F18F8498',
  },
}

export const CoFiXRouter: CoFiXRouterProps = {
  addresses: {
    1: '0x72A63055b9AA997A4311D0D068170e38F5455b82',
    3: '0x59291fa0828290252d743F3A424B35B7aabf6aFF',
    4: '0xFd759970c8B4A6EfE5525EA9A03732Ef04F1C5F4',
  },
}

export const CoFiXVaultForStaking: CoFiXVaultForStakingProps = {
  addresses: {
    4: '0xf952Cb518BD7F72F600c6aEA0A8CcFBeabe7c9C0',
  },
}

export const CoFiXDAO: CoFiXDAOProps = {
  addresses: {
    4: '0xCD0E336D483511840D3002E4aE1518bd3681cdaC',
  },
}
