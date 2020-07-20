import React, { useState } from "react";

let StatesInFunction = () => {
    let [count, setCount] = useState(0);
    return (
        <div>
            <h2>
                {count}
            </h2>
            <br />
            <button onClick={() => setCount(count+=1)}>Increment</button><br />
            <button onClick={() => setCount(count -= 1)}>Decrement</button><br />
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default StatesInFunction;