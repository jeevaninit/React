import React, { useEffect, useState } from 'react'

const UseStateAndUseEffect = () => {
    const [count,setCount]=useState(0);

    function increment(){
        setCount(count+1);
    }

    function decrement(){
        setCount(count-1)
    }

useEffect(()=>{
alert("Hello am from useEffect function.....")
},[count])

  return (
    <div>
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default UseStateAndUseEffect