import _ from 'lodash'

export default transactions => {
  const expensesOnly = _.reject(transactions, transaction => !(transaction.amount.value < 0))
  const transactionsByExpenseValue = _.orderBy(expensesOnly, expense => expense.amount.value, ['desc'])
  return _.filter(transactionsByExpenseValue, (transactionByExpenseValue, index) => index <= 9)
}