import apiGetRequest from '../../common/apiGetRequest'

export const getTransactions = () => {
  return dispatch => {
    dispatch({ type: 'transactions/GET_TRANSACTIONS_REQUEST' })
    return apiGetRequest('http://www.mocky.io/v2/5c62e7c33000004a00019b05').then(response => {
      dispatch({ type: 'transactions/GET_TRANSACTIONS_SUCCESS', payload: response.body.transactions })
    })
  }
}
