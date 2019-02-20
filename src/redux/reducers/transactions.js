const initialState = {
  transactions: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'transactions/GET_TRANSACTIONS_SUCCESS':
      return { ...state, transactions: action.payload }
    default:
      return state
  }
}
