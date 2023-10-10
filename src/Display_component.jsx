import React from "react";

export default function Display_component({count, setCount}){
    return(
        <div>
            <div className="counter">Counter</div>
            <div className="count">{count}</div>
        </div>
    )
}
