import React, { useState,useEffect } from 'react'
import axios from 'axios'
import User from './User'
function UserList() {
    const [userList, setUserList]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(res=>{
            setUserList(res.data)
    })
    .catch(err=>console.log(err))
},[])
  return (
    <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap",border:"primary",backgroundColor:"#FFB6C1"}}>{userList.map((el)=><User el={el} key={el.id}/>)}</div>
  )
}

export default UserList