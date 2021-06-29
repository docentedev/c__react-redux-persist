import { combineReducers, createStore, applyMiddleware } from 'redux'
import counterReducer from './counter'
import productReducer from './product'
import logMiddleware from './logMiddleware'

const rootReducer = combineReducers({
    counter: counterReducer,
    product: productReducer,
})

const store = createStore(rootReducer, applyMiddleware(logMiddleware))

export default store
