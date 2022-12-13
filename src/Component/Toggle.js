import React, { useState } from 'react'

const Toggle = () => {
  const [mybtn,setmybtn]=useState("Toggle On")
  const toggling=()=>{
    if(mybtn=="Toggle On"){
      setmybtn("Toggle Off")
    }
    else{
      setmybtn("Toggle On")
    }
  }
  return (
    <div>
      <button onClick={toggling}>{mybtn}</button>
    </div>
  )
}

export default Toggle
