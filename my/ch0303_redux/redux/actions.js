import * as types from './types'

export const changeLabel = () => dispatch => {
    return dispatch({
        type: types.UPDATE,
        text: document.getElementById('inputTextbox').value
    })
}