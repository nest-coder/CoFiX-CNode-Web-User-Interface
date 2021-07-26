import './styles'

import { t, Trans } from '@lingui/macro'
import { FC, useState } from 'react'
import Card from 'src/components/Card'
import Field from 'src/components/Field'
import TokenInput from 'src/components/TokenInput'
import useStakeInfo from 'src/hooks/useStakeInfo'
import useToken from 'src/hooks/useToken'
import useWithdrawCNode from 'src/libs/web3/hooks/useWithdrawCNode'
import { toBigNumber } from 'src/libs/web3/util'

import ClaimCOFICard from '../shared/ClaimCOFICard'
import TransactionButtonGroup from '../shared/TransactionButtonGroup'

const Withdraw: FC = () => {
  const cnode = useToken('CNODE')
  const [amount, setAmount] = useState('')
  const [insufficient, setInsufficient] = useState(false)
  const stakeInfo = useStakeInfo()
  const handleWithdrawCNode = useWithdrawCNode({
    amount,
  })

  return (
    <div className="cofi-page">
      <section>
        <Card title={t`Withdraw CNode`}>
          <TokenInput
            selectable={false}
            symbol={cnode?.symbol}
            title={`${t`Input Withdraw Amount (CNode)`}`}
            value={amount}
            balance={stakeInfo?.staked}
            onChange={(v) => setAmount(v)}
            checkInsufficientBalance
            onInsufficientBalance={(i) => setInsufficient(i)}
          />
          <Field
            name={t`CNode Token unmining`}
            value={stakeInfo ? stakeInfo.totalSupply.minus(stakeInfo.totalStaked).toFixed(0) : '--'}
          />
          <Field name={t`CNode Token mining`} value={stakeInfo ? stakeInfo.totalStaked.toFixed(0) : '--'} />

          <TransactionButtonGroup
            disabled={insufficient || !amount || toBigNumber(amount).lte(0)}
            onClick={handleWithdrawCNode.handler}
          >
            <Trans>Withdraw CNode</Trans>
          </TransactionButtonGroup>
        </Card>
      </section>

      <section>
        <ClaimCOFICard />
      </section>
    </div>
  )
}

export default Withdraw
