import { ContractTransaction } from '@ethersproject/contracts'
import { t } from '@lingui/macro'
import { useEffect, useState } from 'react'
import { notifyTransaction } from 'src/pages/shared/TransactionNotification'
import { createContainer } from 'unstated-next'

import useWeb3 from './useWeb3'

export enum TransactionType {
  Approve,
  StakeCNode,
  WithdrawCNode,
  ClaimCOFI,
}

export enum TransactionStatus {
  Pending,
  Success,
  Fail,
}

export type TransasctionClaimCOFIContent = {
  amount?: string
}

export type TransactionStakeCNodeContent = {
  amount: string
}

export type TransactionWithdrawCNodeContent = {
  amount: string
}

export type TransactionApproveContent = {
  transactionType: TransactionType
  token: string
}

export enum TransactionReceiptStatus {
  Unknown,
  Reverted,
  Successful,
}

export type Transaction = {
  id?: string
  timestamp?: number
  status?: TransactionStatus
  hash?: string
  msg?: any
  tx?: string

  receiptStatus?: TransactionReceiptStatus
} & (
  | {
      type: TransactionType.StakeCNode
      content: TransactionStakeCNodeContent
    }
  | {
      type: TransactionType.WithdrawCNode
      content: TransactionWithdrawCNodeContent
    }
  | {
      type: TransactionType.ClaimCOFI
      content: TransasctionClaimCOFIContent
    }
  | {
      type: TransactionType.Approve
      content: TransactionApproveContent
    }
)

const _useTransaction = () => {
  const { api } = useWeb3()
  const [transactions, setTransactions] = useState<Array<Transaction>>([])
  const [current, setCurrent] = useState<Transaction>()
  const [showModal, setShowModal] = useState(false)

  const upsertTranasction = (transaction: Transaction) => {
    const index = transactions.findIndex((t) => t.id === transaction.id)
    if (index > -1) {
      transactions[index] = transaction
      setTransactions({ ...transactions })
    } else {
      setTransactions(transactions.concat(transaction))
    }
  }

  const updateCurrent = (transaction: Transaction) => {
    if (!current) {
      setCurrent({ ...transaction })
      return
    }

    if (current.timestamp && transaction.timestamp) {
      if (current.timestamp > transaction.timestamp) {
        return
      }
    }

    setCurrent({ ...transaction })
    upsertTranasction(transaction)
  }

  const push = async (transaction: Transaction, t: () => Promise<ContractTransaction | undefined>) => {
    try {
      transaction.id = `${Date.now()}`
      transaction.timestamp = Date.now()
      transaction.status = TransactionStatus.Pending
      transaction.receiptStatus = TransactionReceiptStatus.Unknown

      upsertTranasction(transaction)
      updateCurrent(transaction)
      setShowModal(true)

      const result = await t()
      if (!result) {
        return
      }

      transaction.hash = result.hash
      transaction.status = TransactionStatus.Success
      // transaction.tx = utils.serializeTransaction(result)
      updateCurrent(transaction)

      setTimeout(() => {
        closeModal()
      }, 2000)

      const check = async () => {
        if (transaction.status !== TransactionStatus.Success) {
          return
        }

        const recipet = await api?.provider?.getTransactionReceipt(result.hash)
        if (typeof recipet?.status !== 'undefined') {
          const status = recipet.status
            ? (transaction.receiptStatus = TransactionReceiptStatus.Successful)
            : (transaction.receiptStatus = TransactionReceiptStatus.Reverted)
          transaction.receiptStatus = status
          updateCurrent(transaction)
          notifyTransaction(transaction)
        } else {
          setTimeout(check, 1000)
        }
      }

      check()
    } catch (e) {
      console.error(e)
      transaction.msg = e
      transaction.status = TransactionStatus.Fail
      transaction.receiptStatus = TransactionReceiptStatus.Reverted
      updateCurrent(transaction)
    }

    return transaction
  }

  useEffect(() => {
    if (!api) {
      return
    }

    ;(async () => {
      const cache = localStorage.getItem(`cofix-cnode-transactions:${api.chainId}`)
      if (cache) {
        setTransactions(JSON.parse(cache as string) as any)
      }
    })()
  }, [api])

  useEffect(() => {
    if (!api) {
      return
    }

    ;(async () => {
      localStorage.setItem(`cofix-cnode-transactions:${api.chainId}`, JSON.stringify(transactions))
    })()
  }, [api, transactions])

  useEffect(() => {
    if (!current) {
      return
    }

    const index = transactions.findIndex((t) => t.id === current.id)
    if (index > -1) {
      transactions[index] = current as any
      setTransactions([...transactions])
    }
  }, [current])

  const closeModal = () => {
    setShowModal(false)
  }

  const getTransactionById = (id: string) => {
    return transactions.find((t) => t.id === id)
  }

  return { transactions, push, current, showModal, closeModal, getTransactionById }
}

const transaction = createContainer(_useTransaction)

const useTransaction = () => {
  return transaction.useContainer()
}

export default useTransaction

export const Provider = transaction.Provider

export const getTransactionTitle = (transaction: Transaction) => {
  switch (transaction.type) {
    case TransactionType.StakeCNode:
      return t`Stake CNode`
    case TransactionType.WithdrawCNode:
      return t`Withdraw CNode`
    case TransactionType.ClaimCOFI:
      return t`Claim COFI`
    case TransactionType.Approve:
      return t`Approve`
    default:
      return t`Unsupported Type`
  }
}

export const getTransactionContent = (transaction: Transaction) => {
  switch (transaction.type) {
    case TransactionType.StakeCNode:
      return `${transaction.content.amount} CNODE`
    case TransactionType.WithdrawCNode:
      return `${transaction.content.amount} CNODE`
    case TransactionType.ClaimCOFI:
      return `${transaction.content.amount} COFI`
    case TransactionType.Approve:
      switch (transaction.content.transactionType) {
        case TransactionType.StakeCNode:
          return 'CNODE'
        default:
          return ''
      }
    default:
      return t`Unsupported Content`
  }
}
