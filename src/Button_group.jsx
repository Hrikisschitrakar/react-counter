import React from 'react';

export default function Buttongroup({count, setCount}){
    function increment(){
        setCount(count+1);
    }
    function decrement(){
        setCount(count-1);
    }
    return(
        <div>
            <button onClick={increment}>Plus</button>
            <button onClick={decrement}>Minus</button>
        </div>
    )
}
