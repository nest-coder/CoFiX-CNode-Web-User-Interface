import { useCallback } from 'react'

import useTransaction, { TransactionStakeCNodeContent, TransactionType } from './useTransaction'
import useWeb3 from './useWeb3'

const useStakeCNode = (content: TransactionStakeCNodeContent) => {
  const { api } = useWeb3()
  const { push } = useTransaction()

  const handler = useCallback(async () => {
    return push(
      {
        type: TransactionType.StakeCNode,
        content,
      },
      async () => {
        if (!api || !api.Tokens.CNODE.address) {
          return
        }

        return api.Contracts.CoFiXVaultForStaking.contract?.stake(
          api.Tokens.CNODE.address,
          api.Tokens.CNODE.parse(content.amount).toFixed(0)
        )
      }
    )
  }, [api, content.amount])

  return { handler }
}

export default useStakeCNode
