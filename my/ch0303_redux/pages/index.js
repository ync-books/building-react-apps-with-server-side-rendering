import React, {useEffect} from  'react'
import { useDispatch } from 'react-redux'
import { changeLabel } from '../redux/actions'

const Index = () => {
    const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(startClock())
    // }, [dispatch])

    return (
        <div>
            <h1>Redux Demo</h1>
            <br />
            <div className="center">
                <input id="inputTextbox" type="text">
                </input>
                <button type="button"
                        onClick={dispatch(changeLabel())}>
                    Update Label
                </button>
            </div>
            <br />
            <p>{this.props.text}</p>
        </div>
    )
}

export default Index