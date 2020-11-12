import * as types from './types'

export const changeLabel = () => dispatch => {
    return dispatch({
        type: types.UPDATE,
        payload: { text: "ttt"}
    })
}