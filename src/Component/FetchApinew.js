import React, { useEffect, useState } from 'react'

const FetchApinew = () => {
  const [posts,setPosts]=useState([])
  const getusers=async()=>{
  const url="https://jsonplaceholder.typicode.com/todos"
  const resposne=await fetch(url)
  const data=await resposne.json()
  setPosts(data)
  console.log(data)
  }
  useEffect(()=>{
    getusers()
  },[])
  return (
    <div>
      {
        posts.map((elem)=>{
          return(
            <div>
              <p key={elem.id}>{elem.title}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default FetchApinew