

import React from 'react'
import { useState,useEffect } from 'react'

const Counter = () => {
  const[count,setcount]=useState(0)

  useEffect(() => {
    setTimeout(() => {
      setcount(count + 1);
    }, 1000);
  },[]);
  return (
    <div>
      <h1>counter Application</h1>
      <p> count value is: <b>{count}</b></p>
      <button >Increment</button>&nbsp;
      <button onClick={()=>setcount(count-1)}>Decrement</button>&nbsp;
    </div>
  )
}

export default Counter
