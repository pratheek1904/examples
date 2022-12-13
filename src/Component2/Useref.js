import React, { useEffect, useRef, useState } from 'react'

const Useref = () => {
  const[myval,setmyval]=useState("")
  const count=useRef(0)
  useEffect(()=>{
    count.current=count.current+1
  })
  return (
    <div>
      <input
        type="text"
        placeholder='Enter here...'
        value={myval}
        onChange={(e)=>setmyval(e.target.value)}
      />
      <p>The number of letters entered are: {count.current}</p>
    </div>
  )
}

export default Useref
