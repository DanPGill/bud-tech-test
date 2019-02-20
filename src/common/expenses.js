import _ from 'lodash'

export const getExpensesOnly = transactions => _.reject(transactions, transaction => !(transaction.amount.value < 0))

export const getTenLowestExpenses = transactions => {
  const transactionsByExpenseValue = _.orderBy(getExpensesOnly(transactions), expense => expense.amount.value, ['desc'])
  return _.filter(transactionsByExpenseValue, (transactionByExpenseValue, index) => index <= 9)
}