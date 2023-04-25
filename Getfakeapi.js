import React,{useEffect,useState} from "react";


const Getfakeapi = () => {
    const [data,setData] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(json=>setData(json))
    },[])
  return (
    <div>
{data.map((item)=><p key={item.id}>
    Name:{item.name}
    email:{item.email}
    </p>)}    </div>
  )
}

export default Getfakeapi