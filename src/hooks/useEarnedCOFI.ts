import { useEffect, useState } from 'react'
import useWeb3 from 'src/libs/web3/hooks/useWeb3'
import BigNumber from 'bignumber.js'
import useInterval from '@use-it/interval'
import { toBigNumber } from 'src/libs/web3/util'

const useEarnedCOFI = () => {
  const { api, inited } = useWeb3()
  const [val, setVal] = useState<{
    value: BigNumber
    amount: BigNumber
    formatAmount: string
  }>()

  const refresh = async () => {
    if (!api || !api.account || !api.Tokens.CNODE.address) {
      setVal(undefined)
      return
    }

    const earned = await api.Contracts.CoFiXVaultForStaking.contract?.earned(api.Tokens.CNODE.address, api.account)
    if (earned) {
      const v = {
        value: toBigNumber(earned),
        amount: toBigNumber(api.Tokens.COFI.amount(earned)),
        formatAmount: api.Tokens.COFI.format(api.Tokens.COFI.amount(earned)),
      }

      if (JSON.stringify(v) !== JSON.stringify(val)) {
        setVal(v)
      }
    }
  }

  useEffect(() => {
    refresh()
  }, [api, inited])
  useInterval(refresh, 1000)

  return val
}

export default useEarnedCOFI
