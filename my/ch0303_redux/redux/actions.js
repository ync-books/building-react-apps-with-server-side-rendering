import * as types from './types'

export const changeLabel = (v) => dispatch => {
    //console.log('v', v)
    return dispatch({
        type: types.UPDATE,
        payload: { text: v}
    })
}
