import React, { useState } from 'react'

const DataBinding = () => {
  const[val,setval]=useState("")

  return (
    <div>
      <input
        type="text"
        placeholder='Enter here'
        value={val}
        onChange={(e)=>setval(e.target.value)}
      />
      <p>{val}</p>
    </div>
  )
}

export default DataBinding