import { useState } from 'react';
import CounterButton from "./CounterButton";
import './Counter.css'

export default function Counter(){
    const state = useState(0)
    return(
        <>
            <div className="counter">Counter</div>
            <span className="countLabel">{state[0]}</span>
            <div>
                <CounterButton byvar={1}  incrementMethod={incrementCounter} decrementMethod={decrementCounter} />
                <CounterButton byvar={5}  incrementMethod={incrementCounter} decrementMethod={decrementCounter} />
                <CounterButton byvar={10} incrementMethod={incrementCounter} decrementMethod={decrementCounter} />
            </div>
        </>
    )

    function incrementCounter(by){
        state[1](state[0] + by)
    }

    function decrementCounter(by){
        state[1](state[0] - by)
    }
}