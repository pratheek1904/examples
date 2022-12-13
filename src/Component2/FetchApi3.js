import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FetchApi3 = () => {
    const[posts,setposts]=useState([])
    const getusers=async()=>{
        const response=await axios.get("https://jsonplaceholder.typicode.com/todos")
        setposts(response.data)
    }
    useEffect(()=>{
     getusers()   
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

export default FetchApi3
