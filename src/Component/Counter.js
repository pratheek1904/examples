import React, { useState } from 'react'

const Counter = () => {
  const[count,setcount]=useState(0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setcount(prevstate=>prevstate+1)}>Increment</button>
      <button onClick={()=>setcount(prevstate=>prevstate-1)}>Decrement</button>
    </div>
  )
}

export default Counter