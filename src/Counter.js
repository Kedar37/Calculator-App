import React, { useReducer } from 'react';

const initialValue = 0

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return initialValue + 1
        case 'decrement':
            return initialValue - 1
        case 'reset':
            return initialValue
        default:
            return state
    }
}

function Counter () {
    const[count, dispatch] = useReducer(reducer, initialValue)

    return (
        <div id='cart'>
            <div>Count: {count} </div>
            <button onClick={() => dispatch('increment')}>Add</button>
            <button onClick={() => dispatch('decrement')}>Remove</button>
            <button onClick={() => dispatch('reset')}>Clear</button>
        </div>
    )
}

export default Counter;