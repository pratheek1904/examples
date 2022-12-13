import React, { useEffect, useState } from 'react'

const FetchAPi = () => {
    const[search,setSearch]=useState("")
    const[posts,setposts]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>{
            return res.json()
        }).then((data)=>{
            // console.log(data)
            setposts(data)
        })
    },[])
  return (
    <div>
    <input
        type="text"
        placeholder="Search here"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
    />
      {
        posts.filter((value)=>{
            if(value==""){
                return value
            }
            else if(value.title.toLowerCase().includes(search.toLowerCase())){
                return value
            }
        })
        .map((elem)=>{
            return(
            <div key={elem.id}>
            <p >{elem.title}</p>
            </div>
            )
        })
      }
    </div>
  )
}

export default FetchAPi
