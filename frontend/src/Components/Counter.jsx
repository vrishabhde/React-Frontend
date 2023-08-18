import { useState } from "react";


const Counter = () => {
    const [counter, setcounter] = useState(0);
    const increment = () => {
        setcounter(key=> key+1);
    }

    const decrement = () => {
        setcounter(kkey => kkey -1);
    }

    return (
        <>
        <h1>Counter page:{counter}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        </>
    )
}

export default Counter;