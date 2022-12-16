import React, { useState } from 'react'
import Parentchild from './Parentchild'

const Parent = () => {
  const[count,setCount]=useState(0)
  return (
    <div>
    <h1>{count}</h1>
      <Parentchild val={setCount}/>
    </div>
  )
}

export default Parent
