import { combineReducers } from 'redux'
import * as types from './types'

const InitialTextState = {
    text: 'Initial label value0.'
}

// COUNTER REDUCER
const textLabelReducer = (state = InitialTextState, { type, payload }) => {
    switch (type) {
        case types.UPDATE:
            console.log('payload', payload)
            return {
                text: !!payload.text,
            }
        default:
            return state
    }
}


// COMBINED REDUCERS
const reducers = {
    textLabel: textLabelReducer,
}
export default combineReducers(reducers)
