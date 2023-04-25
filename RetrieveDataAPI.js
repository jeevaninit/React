import React, { useEffect, useState } from 'react'

const RetrieveDataAPI = () => {
    
const [data,setData]= useState([]);

useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(json=>setData(json))
},[])


  return (
    <div>
        <h1>Retrieve Data from A Fake Rest API</h1>
        {data.map((item)=><p key={item.id}>
           <span>{item.name}</span>
           <span>{item.email}</span>
        </p>

        )}

    </div>
  )
}

export default RetrieveDataAPI