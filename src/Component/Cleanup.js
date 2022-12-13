import React, { useEffect, useState } from 'react'

const Cleanup = () => {
  const[widthcount,setwidthcount]=useState(window.screen.width)

  const actualwidth=()=>{
    setwidthcount(window.innerWidth)
  }
  useEffect(()=>{
    window.addEventListener("resize",actualwidth)
    return()=>{
      window.removeEventListener("resize",actualwidth)
    }
  })
  return (
    <div>
    <h1>The size of the screen width is</h1>
      <p>{widthcount}</p>

    </div>
  )
}

export default Cleanup

