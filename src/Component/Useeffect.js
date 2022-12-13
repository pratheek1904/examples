import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Useeffect = () => {
  const[count,setCount]=useState(100)
  const[data,setdata]=useState(10)
  useEffect(()=>{
   console.log("hello Partheek")
  },[data])
  useEffect(()=>{
    console.log("hello Partheek 2")
   },[count])
  return (
    <div>
      <h1>count: {count}</h1>
      <h2>Data:{data}</h2>
      <button onClick={()=>setCount(prevCount=>prevCount+1)}>Update counter</button>
      <button onClick={()=>setdata(data+1)}>Update data</button>
    </div>
  )
}

export default Useeffect

 
// import React, { useEf<h1>fect, useState } from "react";

// const Useeffect = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (count) {
//       document.title = `${count}`;
//     } else {
//       document.title = ``;
//     }
//   }, [count]);
//   const handleClick = () => {
//     setCount(count + 1);
//   };
//   return (
//     <div>
//       <button onClick={handleClick}>Click me {count}</button>
//     </div>
//   );
// };

// export default Useeffect;
