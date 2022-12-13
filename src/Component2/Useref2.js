import React, { useRef, useState } from 'react'

const Useref2 = () => {
    const[myvalue,setmyvalue]=useState("")

    const inputElem=useRef("")

    const changestyle=()=>{
        inputElem.current.style.backgroundColor="lightgreen"
        inputElem.current.focus()
    }
  return (
    <div>
    <input
    ref={inputElem}
    type="text"
    value={myvalue}
    onChange={(e)=>setmyvalue(e.target.value)}
    placeholder="Type here..."
    /><br/>
    <button onClick={changestyle}>Submit</button>
    </div>
  )
}

export default Useref2
