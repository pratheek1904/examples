import React, { useEffect, useState } from 'react'

const Cleanup = () => {
  const[widthcount,setwidthcount]=useState(window.screen.width)
const actualwidth=()=>{
  setwidthcount(window.innerWidth)
}

  useEffect(()=>{
    window.addEventListener("resize",actualwidth)
    return(()=>{
      window.removeEventListener("resize",actualwidth)
    })
  })
  return (
    <div>
      <h1>The width of the screen is {widthcount}</h1>
    </div>
  )
}

export default Cleanup

