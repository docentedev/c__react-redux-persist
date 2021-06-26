import { combineReducers, createStore, applyMiddleware } from 'redux'
import counterReducer from './counter'
import logMiddleware from './logMiddleware'

const rootReducer = combineReducers({
    counter: counterReducer,
})

const store = createStore(rootReducer, applyMiddleware(logMiddleware))

export default store
