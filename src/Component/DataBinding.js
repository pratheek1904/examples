import React, { useState } from 'react'

const DataBinding = () => {
    const[value,setvalue]=useState("")
  return (
    <div>
      <h1>2 way Data binding</h1>
      <input
        type="text"
        placeholder='Type here...'
        value={value}
        onChange={(e)=>setvalue(e.target.value)}
      />
      <p>{value}</p>
    </div>
  )
}

export default DataBinding
