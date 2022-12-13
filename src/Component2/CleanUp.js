import React, { useEffect, useState } from 'react'

const CleanUp = () => {
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
      <h1>The size of the screen is</h1>
      <p>{widthcount}</p>
    </div>
  )
}

export default CleanUp

// import React, { useEffect, useState } from 'react'

// const CleanUp = () => {
//   const[widthcount,setwidthcount]=useState(window.screen.width)

//   const actualwidth=()=>{
//     setwidthcount(window.innerWidth)
//   }
//   useEffect(()=>{
//     window.addEventListener("resize",actualwidth)
//     return()=>{
//       window.removeEventListener("resize",actualwidth)
//     }
//   })
//   return (
//     <div>
//       <h1>The current size of the window is</h1>
//       <h2>{widthcount}</h2>
//     </div>
//   )
// }

// export default CleanUp
