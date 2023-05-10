import React, { useState } from 'react'

function IncrementDecrement() {
    //const counter = 0
    const [counter, setCounter] = useState(0);

    const increment = () => {
        //setCounter((prevCounter) => prevCounter + 1);
        setCounter(function(prevCounter) {
            return prevCounter + 1;
        });
    }

    const decrement = () => {
        setCounter((prevCounter) => prevCounter - 1);
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
