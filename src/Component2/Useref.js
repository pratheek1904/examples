import React, { useEffect, useRef, useState } from 'react'

const Useref = () => {

const count=useRef(0)
const[myval,setmyval]=useState("")
useEffect(()=>{
  count.current=count.current+1
},[count.current])
  return (
    <div>
    <input
      type="text"
      placeholder="Type here"
      value={myval}
      onChange={(e)=>setmyval(e.target.value)}
    />
      <h1>{count.current}</h1>
    </div>
  )
}

export default Useref
