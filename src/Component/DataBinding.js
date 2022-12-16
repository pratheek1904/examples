import React, { useState } from 'react'

const DataBinding = () => {
  const[myvalue,setmyvalue]=useState("")
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Text"
        value={myvalue}
        onChange={(e)=>setmyvalue(e.target.value)}
      />
      <p>The input entered is {myvalue}</p>
    </div>
  )
}

export default DataBinding