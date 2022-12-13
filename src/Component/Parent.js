import React, { useState } from 'react'
import Parentchild from './Parentchild'

const Parent = () => {
    const[value,setvalue]=useState("hello Praent")
  return (
    <div>
      <h1>{value}</h1>
      <Parentchild name={setvalue}/>
    </div>
  )
}

export default Parent
