import React, { useState } from "react";

let StatesInFunction = () => {
    let [count, setCount] = useState(0);
    let handleChange = (event)=>{
        setCount(event.target.value);
    }
    return (
        <div>
            <h2>
                {count}
            </h2>
            <br />
            <input type="number" onChange={handleChange}></input>
            <button onClick={() => setCount(count+=1)}>Increment</button><br />
            <button onClick={() => setCount(count -= 1)}>Decrement</button><br />
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default StatesInFunction;