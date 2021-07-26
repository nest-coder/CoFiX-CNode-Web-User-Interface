import './styles'

import { t, Trans } from '@lingui/macro'
import { FC, useState } from 'react'
import Card from 'src/components/Card'
import TokenInput from 'src/components/TokenInput'
import useToken from 'src/hooks/useToken'
import { TransactionType } from 'src/libs/web3/hooks/useTransaction'
import { toBigNumber } from 'src/libs/web3/util'

import TransactionButtonGroup from '../shared/TransactionButtonGroup'
import useStakeCNode from 'src/libs/web3/hooks/useStakeCNode'
import useStakeInfo from 'src/hooks/useStakeInfo'
import Field from 'src/components/Field'
import ClaimCOFICard from '../shared/ClaimCOFICard'

const Deposit: FC = () => {
  const cnode = useToken('CNODE')
  const [amount, setAmount] = useState('')
  const [insufficient, setInsufficient] = useState(false)
  const stakeInfo = useStakeInfo()
  const handleStakeCNode = useStakeCNode({
    amount,
  })

  return (
    <div className="cofi-page">
      <section>
        <Card title={t`Deposit CNode`}>
          <TokenInput
            selectable={false}
            symbol={cnode?.symbol}
            title={`${t`Input Deposit Amount (CNode)`}`}
            value={amount}
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
            approve={{
              transactionType: TransactionType.StakeCNode,
              token: 'CNODE',
            }}
            disabled={insufficient || !amount || toBigNumber(amount).lte(0)}
            onClick={handleStakeCNode.handler}
          >
            <Trans>Deposit CNode</Trans>
          </TransactionButtonGroup>
        </Card>
      </section>

      <section>
        <ClaimCOFICard />
      </section>
    </div>
  )
}

export default Deposit
