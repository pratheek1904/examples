import React, { useRef, useState } from 'react'

const Useref2 = () => {

  const[myvalue,setmyvalue]=useState("")
  const inputElem=useRef("")

  const changestyle=()=>{
   inputElem.current.style.background="red"
   inputElem.current.focus()
  }

  return (
    <div>
    
      <input
      ref={inputElem}
        type="text"
        placeholder="Enter here"
        value={myvalue}
        onChange={(e)=>setmyvalue(e.target.value)}
      />

      <button onClick={changestyle}>Submit</button>
    </div>
  )
}

export default Useref2

