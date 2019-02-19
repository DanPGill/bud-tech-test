import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

const middlewares = [thunk]
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
const store = createStoreWithMiddleware(rootReducer)
export default store
