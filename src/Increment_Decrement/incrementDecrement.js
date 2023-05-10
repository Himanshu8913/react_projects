import React, { useState } from 'react'

function IncrementDecrement() {
    //const counter = 0
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    return (
        <div className="App">
            <h1>Counter: <span>{counter}</span></h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default IncrementDecrement;