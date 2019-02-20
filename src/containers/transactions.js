import React, { Component } from 'react'
import _ from 'lodash'
import { getTransactions } from '../redux/actions/transactions'
import connect from '../common/reduxConnect'
import { getTenLowestExpenses } from '../common/expenses'
import Transaction from '../components/transaction'

class Transactions extends Component {
  componentWillMount() {
    this.props.dispatch(getTransactions())
  }
  render() {
    const tenLowestTransactions = getTenLowestExpenses(this.props.transactions.transactions)
    return (
      <div>
        {_.map(tenLowestTransactions, transaction => {
          return <Transaction transaction={transaction} key={transaction.id} />
        })}
      </div>
    )
  }
}

export default connect(state => ({
  transactions: state.transactions,
}))(Transactions)
