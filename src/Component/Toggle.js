import React, { useState } from 'react'

const Toggle = () => {
  const[val,setval]=useState(false)
  return (
    <div>
      <button onClick={()=>setval(!val)}>{val?"clicked":"click"}</button>
    </div>
  )
}

export default Toggle

