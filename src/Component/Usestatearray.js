import React from 'react'
import { useState } from 'react'

const Usestatearray = () => {
  const biodata=[
    {
      id:0,
      name:"Pratheek",
      age:21
    },{
      id:1,
      name:"Pratheek",
      age:22
    },{
      id:2,
      name:"Pratheek",
      age:23
    },{
      id:3,
      name:"Pratheek",
      age:24
    },
  ]
  const handleRemove=(id)=>{
    const newarray=myarray.filter((elem)=>{
      return elem.id!==id
    })
    setmyarray(newarray)
  }
  const[myarray,setmyarray]=useState(biodata)
  return (
    <div>
      {
        myarray.map((elem)=>{
          return <h1 key={elem.id}>Name:{elem.name} age:{elem.age} 
          <button onClick={()=>handleRemove(elem.id)}>Remove</button></h1>
        })
      }
    </div>
  )
}

export default Usestatearray
