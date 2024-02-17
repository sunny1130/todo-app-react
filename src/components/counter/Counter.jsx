import { useState } from 'react';
import {PropTypes} from 'prop-types'
import './Counter.css';


export default function Counter({by}) {
    const state = useState(0)
    const [c,setc] = useState(0)
    const buttonstyle = {fontSize:"30px"}
    return(
        <div>
            <div className="counter">Counter</div>
            <span className="count">{state[0]}</span>
            <div>
                <button className="countButton" style={buttonstyle} onClick={incrementCounter}>+{by}</button>
            </div>
            <div>
                <button className="countButton" style={buttonstyle} onClick={decrementCounter}>-{by}</button>
            </div>
        </div>
    )
    function incrementCounter(){
        console.log("Increment Counter Fucntion Called");
        state[1](state[0]+by)
        console.log(state[0])
        setc(c+100)
        console.log(c)
    }
    function decrementCounter(){
        console.log("Increment Counter Fucntion Called");
        state[1](state[0]-1)
        console.log(state[0])
        setc(c-100)
        console.log(c)
    }
}

Counter.propTypes = {
    by: PropTypes.number
}

Counter.defaultProps = {
    by: 1
}


