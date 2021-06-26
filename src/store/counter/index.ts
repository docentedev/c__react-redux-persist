import createPersist from '../../utils/createPersist'
import { Action } from '../types'
import { CounterPayload, CounterState } from './types'

export const COUNTER_ADD = 'COUNTER_ADD'
export const COUNTER_SUB = 'COUNTER_SUB'

const initialState: CounterState = {
    counter: 0,
}

const counterPersist = createPersist('redux-counter')

const reducer = (prevState = counterPersist.get() || initialState, action: Action<CounterPayload>): CounterState => {
    let currStore = null
    switch (action.type) {
        case COUNTER_ADD:
            currStore = {
                counter: prevState.counter + action.payload,
            }
            counterPersist.set(currStore)
            break
        case COUNTER_SUB:
            currStore = {
                counter: prevState.counter - action.payload,
            }
            counterPersist.set(currStore)
            break
        default:
            currStore = prevState
    }
    return currStore
}

export default reducer
