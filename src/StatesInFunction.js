import React, { useState } from "react";

let StatesInFunction = () => {
    const [count, setCount] = useState("Hi");
    return (
        <div>
            <h2
                onMouseOver={() => setCount("What's Up?")}
                onMouseLeave={() => setCount("Hi")}
            >
                {count}
            </h2>
        </div>
    )
}

export default StatesInFunction;