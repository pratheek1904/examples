import React from 'react'
import { useState } from 'react'

const Object = () => {
  const[mydata,setmydata]=useState({
    name:"Pratheek",
    age:21
  })
  const handleUpdate=()=>{
    setmydata({age:25,name:"Prajwal"})
  }
  return (
    <div>
      <p>name:{mydata.name} age:{mydata.age}</p>
      <button onClick={handleUpdate}>Update</button>
    </div>
  )
}

export default Object
