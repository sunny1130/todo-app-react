
import {PropTypes} from 'prop-types'
import './CounterButton.css';


export default function CounterButton({byvar,incrementMethod,decrementMethod}) {
    
    const buttonstyle = {fontSize:"30px"}
    return(
        <div>
            <div>
                <button className="countButton" style={buttonstyle} onClick={() => incrementMethod(byvar)}>+{byvar}</button>
                <button className="countButton" style={buttonstyle} onClick={decrementCounter}>-{byvar}</button>
            </div>
        </div>
    )
    
    function decrementCounter(){
        decrementMethod(byvar)
    }
}

CounterButton.propTypes = {
    byvar: PropTypes.number
}

CounterButton.defaultProps = {
    byvar: 1
}


