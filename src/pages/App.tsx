import loadable from '@loadable/component'
import React from 'react'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Footer from 'src/pages/shared/Footer'
import Header from 'src/pages/shared/Header'
import TransactionModal from 'src/pages/shared/TransactionModal'

const Deposit = loadable(() => import('./Deposit'))
const Withdraw = loadable(() => import('./Withdraw'))

function App() {
  return (
    <main>
      <TransactionModal />
      <ToastContainer />

      <Router>
        <Header />

        <Switch>
          <Route path="/deposit">
            <Deposit />
          </Route>

          <Route path="/withdraw">
            <Withdraw />
          </Route>

          <Redirect to="/deposit" />
        </Switch>

        <Footer />
      </Router>
    </main>
  )
}

export default App
