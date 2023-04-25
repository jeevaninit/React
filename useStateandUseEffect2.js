import React, { useEffect } from 'react'
import { useState } from 'react';

const useStateandUseEffect2 = () => {

  

    const [count, setCount] = useState(0);

const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }


useEffect(()=>{
    console.log(`hello from incremnt and decrement ${count} times...`)
},[count])


  return (
    <div>
      
         <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <h1>{count}</h1>
    </div>
  )
}

export default useStateandUseEffect2


