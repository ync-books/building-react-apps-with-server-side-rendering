import React, {useEffect} from  'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeLabel } from '../redux/actions'

const Index = () => {
    const textLabel = useSelector((state) => state.text)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(changeLabel())
    }, [dispatch])

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
                Count: <span>{textLabel}</span>
            </h1>
        </div>
    )
}

export default Index