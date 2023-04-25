import React from 'react'
import { useState,useEffect } from 'react';

const UseStateandUseEffectwithStyles = () => {
    const styleInc={
        backgroundColor:'greeen',
        margin:'10px',
        padding:'10px',
        color:'white',
        borderRadius:'50px'
      }

      const styleDec={
        backgroundColor:'orange',
        margin:'10px',
        padding:'10px',
        color:'white',
        borderRadius:'50px'
      }
    const [count, setCount] = useState(0);


    useEffect(() => {
        alert(`You clicked  ${count}times`);
      }, [count]);

  return (
    <div>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)} style={styleInc}>Increase</button>
    <button onClick={()=>setCount(count-1)} style={styleDec}>Decrement</button>
    </div>
  )
}

export default UseStateandUseEffectwithStyles;