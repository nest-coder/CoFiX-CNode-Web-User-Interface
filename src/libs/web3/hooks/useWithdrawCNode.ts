import { useCallback } from 'react'
import useTransaction, { TransactionType, TransactionWithdrawCNodeContent } from './useTransaction'
import useWeb3 from './useWeb3'

const useWithdrawCNode = (content: TransactionWithdrawCNodeContent) => {
  const { api } = useWeb3()
  const { push } = useTransaction()

  const handler = useCallback(async () => {
    return push(
      {
        type: TransactionType.WithdrawCNode,
        content,
      },
      async () => {
        if (!api || !api.Tokens.CNODE.address) {
          return
        }

        return api.Contracts.CoFiXVaultForStaking.contract?.withdraw(
          api.Tokens.CNODE.address,
          api.Tokens.CNODE.parse(content.amount).toFixed(0)
        )
      }
    )
  }, [api, content.amount])

  return { handler }
}

export default useWithdrawCNode
