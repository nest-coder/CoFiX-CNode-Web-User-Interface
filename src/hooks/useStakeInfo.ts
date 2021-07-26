import { useEffect, useState } from 'react'
import useWeb3 from 'src/libs/web3/hooks/useWeb3'
import useInterval from '@use-it/interval'
import BigNumber from 'bignumber.js'
import { toBigNumber } from 'src/libs/web3/util'

const useStakeInfo = () => {
  const { api } = useWeb3()
  const [info, setInfo] = useState<{
    totalSupply: BigNumber
    totalStaked: BigNumber
    cofiPerBlock: string
    staked: {
      amount: BigNumber
      value: BigNumber
      formatAmount: string
    }
  }>()

  const refresh = async () => {
    if (!api || !api.Tokens.CNODE.address) {
      setInfo(undefined)
      return
    }

    const [totalSupply, channelInfo, staked] = await Promise.all([
      api.Tokens.CNODE.totalSupply(),
      api.Contracts.CoFiXVaultForStaking.contract?.getChannelInfo(api.Tokens.CNODE.address),
      api.Contracts.CoFiXVaultForStaking.contract?.balanceOf(api.Tokens.CNODE.address, api.account || ''),
    ])
    if (channelInfo) {
      const newInfo = {
        totalSupply,
        totalStaked: toBigNumber(channelInfo.totalStaked),
        cofiPerBlock: api.Tokens.COFI.format(api.Tokens.COFI.amount(channelInfo.cofiPerBlock)),
        staked: {
          amount: api.Tokens.CNODE.amount(staked || 0),
          value: toBigNumber(staked || 0),
          formatAmount: api.Tokens.CNODE.format(api.Tokens.CNODE.amount(staked || 0)),
        },
      }

      if (JSON.stringify(newInfo) !== JSON.stringify(info)) {
        setInfo(newInfo)
      }
    }
  }

  useEffect(() => {
    refresh()
  }, [api])
  useInterval(refresh, 1000)

  return info
}

export default useStakeInfo
