import { t, Trans } from '@lingui/macro'
import { FC } from 'react'
import Card from 'src/components/Card'
import Field from 'src/components/Field'
import TokenInput from 'src/components/TokenInput'
import useEarnedCOFI from 'src/hooks/useEarnedCOFI'
import useStakeInfo from 'src/hooks/useStakeInfo'
import useTokenUSDTAmount from 'src/hooks/useTokenUSDTAmount'
import useClaimCOFI from 'src/libs/web3/hooks/useClaimCOFI'

import TransactionButtonGroup from '../TransactionButtonGroup'

const ClaimCOFICard: FC = () => {
  const earnedCOFI = useEarnedCOFI()
  const cofiUSDTAmount = useTokenUSDTAmount('COFI')
  const stakeInfo = useStakeInfo()
  const handleClaimCOFI = useClaimCOFI({
    amount: earnedCOFI?.formatAmount,
  })

  const classPrefix = 'claim-cofi-card'

  return (
    <Card title={t`Claim COFI`}>
      <TokenInput
        title={t`Available COFI Amount to Claim`}
        symbol="COFI"
        value={earnedCOFI?.formatAmount || '0'}
        selectable={false}
        editable={false}
        noExtra
        className={`${classPrefix}-token-input`}
        loading={!earnedCOFI}
      />

      <Field
        name={t`Current mining speed`}
        value={`
          ${stakeInfo ? stakeInfo.cofiPerBlock : '--'} COFI
          `}
        loading={!cofiUSDTAmount?.formatAmount}
      />

      <TransactionButtonGroup onClick={handleClaimCOFI.handler} disabled={!earnedCOFI || earnedCOFI.value.lte(0)}>
        <Trans>Claim COFI</Trans>
      </TransactionButtonGroup>
    </Card>
  )
}

export default ClaimCOFICard
