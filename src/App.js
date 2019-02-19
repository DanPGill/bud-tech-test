import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './redux/reducers/store'
import Transactions from './containers/transactions'

class App extends Component {
  render() {
    return (
      <div>
      <Provider store={store}>
        <Transactions />
      </Provider>
      </div>
    );
  }
}

export default App;
