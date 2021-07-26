import { useEffect } from 'react'
import useWeb3 from './useWeb3'
import injected from '../connectors/injected'

const useInactiveListener = (suppress = false) => {
  const { active, error, activate } = useWeb3()

  useEffect(() => {
    const { ethereum } = window

    if (!ethereum || !ethereum.on) {
      return
    }

    if (active || error || suppress) {
      return
    }

    const reload = () => {
      activate(
        injected,
        (err) => {
          console.error(err)
        },
        false
      )
    }

    ethereum.on('chainChanged', reload)
    ethereum.on('accountsChanged', reload)

    return () => {
      if (ethereum.removeListener) {
        ethereum.removeListener('chainChanged', reload)
        ethereum.removeListener('accountsChanged', reload)
      }
    }
  }, [active, error, suppress, activate])
}

export default useInactiveListener
