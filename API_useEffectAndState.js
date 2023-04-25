import React, { useState } from 'react'

const API_useEffectAndState = () => {
    const [data,setData]=useState([]);
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((json)=>setData(json));

    const styles={
        table:{
       
        border:"1px solid black",
        padding:'10px',
        margin:'10px',
        backgroundColor:'lightgray',
        lineHeight:'40px',
        },
        talign:{
            width:"800px",
            margin:'0px auto',
            textAlign:'center'
        }
    }


  return (
    <div>
        <h1  style={styles.talign}>Get Data from api</h1>
        <table style={styles.talign}>
        
        {data.map((item)=>(
            <tr key={item.id} style={styles.table}>
           <td>{item.name}</td>
           <td>{item.email}</td>
           <td>{item.address.city}</td>
           </tr>
        ))}
        
        </table>
    </div>
  )
}

export default API_useEffectAndState