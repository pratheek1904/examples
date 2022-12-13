import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Fetchdata = () => {
  const [search,setSearch]=useState("")
  const[posts,setposts]=useState([])
  useEffect(()=>{
   fetch('https://jsonplaceholder.typicode.com/todos')
   .then((res)=>{
    return res.json()
   }).then((data)=>{
    console.log(data)
    setposts(data)
   })
  })
  return (
    <div>
      <input 
      type="text"
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      placeholder='Search here...'
      />
      {
        posts.filter((value)=>{
          if(search==''){
            return value;
          }
          else if(value.title.toLowerCase().includes(search.toLowerCase())){
            return value
          }
        }).map((elem)=>{
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

export default Fetchdata

