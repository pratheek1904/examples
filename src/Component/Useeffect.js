import React, { useEffect, useState } from 'react'

const Useeffect = () => {
  const[count,setcount]=useState(0)
  const[val,setval]=useState(10)

  useEffect(()=>{
    console.log("First Count")
  },[count])
  useEffect(()=>{
    console.log("Second count")
  },[val])
  return (
    <div>
      <h1>First count:{count} <button onClick={()=>setcount(count+1)}>Increment</button></h1>
      <h1>Second count:{val}<button onClick={()=>setval(val+1)}>Decrement</button></h1>
    </div>
  )
}

export default Useeffect