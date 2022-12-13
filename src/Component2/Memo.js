import React, { useMemo, useState } from "react";

const Memo = () => {
  const [count, setcount] = useState(0);
  const[show,setshow]=useState(false)

  const handleIncr=()=>{
    return setcount(count+1)
  }
function countednum(num){
  console.log(num)
  for(let i=0;i<=100000000;i++){}
  return num
}
  const checknum=useMemo(()=>{
    return countednum(count)
  },[count])
  
  return (
    <div>
      <button onClick={handleIncr}>Counter</button><br/>
      <p>my new number is {checknum}</p>
      <button onClick={()=>setshow(!show)}>{show?"you clicked":"Not clicked"}</button>
    </div>
  );
};

export default Memo;
