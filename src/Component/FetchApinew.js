import React, { useEffect, useState } from 'react'

const FetchApinew = () => {
  const[posts,setposts]=useState([])
  const getusers= async()=>{
    const url="https://jsonplaceholder.typicode.com/todos"
    const resposne=await fetch(url)
    const data=await resposne.json()
    setposts(data)
  }
  useEffect(()=>{
    getusers()
  },[])

  return (
    <div>
      {
        posts.map((elem)=>{
          return(
            <div key={elem.id}>
              <p>{elem.title}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default FetchApinew
