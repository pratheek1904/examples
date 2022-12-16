import React, { useEffect, useState } from 'react'

const FetchApi2 = () => {
    const[posts,setposts]=useState([])
 const getUsers=async()=>{
  const response=await fetch("https://jsonplaceholder.typicode.com/todos")
  const data=await response.json()
  setposts(data)
 }
    useEffect(()=>{
        getUsers()
    },[])
  return (
    <div>
      {
        posts.map((elem)=>{
               return(
                <p key={elem.id}>{elem.title}</p>
               )
        })
      }
    </div>
  )
}

export default FetchApi2