import React, { useMemo, useState } from 'react'

const Memo = () => {
  const[count,setcount]=useState(0)
  const[show,setshow]=useState(false)

  function counted(num){
    console.log(num)
    for(let i=0;i<1000000000;i++){}
    return num
  }

  const checkednum=useMemo(()=>{
return  counted(count)
  },[count])

  return (
    <div>
      <button onClick={()=>setcount(count+1)}>Increment</button>
      <p>My new value is {checkednum}</p>
      <button onClick={()=>setshow(!show)}>{show?"you clicked":"Not clicked"}</button>
    </div>
  )
}

export default Memo

