import React, {useEffect} from  'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeLabel } from '../redux/actions'

const Index = () => {
    const {text: textLabel} = useSelector((state) => state.textLabel)
    {console.log('textLabel', textLabel)}
    const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(changeLabel())
    // }, [dispatch])

    return (
        <div>
            <h1>Redux Demo</h1>
            <br />
            <div className="center">
                <input id="inputTextbox" type="text">
                </input>
                <button onClick={() => dispatch(changeLabel(document.getElementById('inputTextbox').value))}>
                    Update Label
                </button>
            </div>
            <br />
            <h1>
                <span>{textLabel}</span>
            </h1>
        </div>
    )
}

export default Index