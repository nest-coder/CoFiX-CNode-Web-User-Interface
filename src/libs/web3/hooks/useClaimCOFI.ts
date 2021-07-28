import { useCallback } from 'react'

import useTransaction, { TransactionType, TransasctionClaimCOFIContent } from './useTransaction'
import useWeb3 from './useWeb3'

const useClaimCOFI = (content: TransasctionClaimCOFIContent) => {
  const { api, inited } = useWeb3()
  const { push } = useTransaction()

  const handler = useCallback(async () => {
    return push(
      {
        type: TransactionType.ClaimCOFI,
        content,
      },
      async () => {
        if (!api || !api.Tokens.CNODE.address) {
          return
        }

        return api.Contracts.CoFiXVaultForStaking.contract?.getReward(api.Tokens.CNODE.address)
      }
    )
  }, [api, inited, content])

  return { handler }
}

export default useClaimCOFI
