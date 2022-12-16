import React, { useState } from "react";

const Object = () => {
  const obj = {
    name: "Pratheek",
    usn: 113,
    age: 21,
  };
  const [data, setdata] = useState(obj);
  const updateObj = () => {
    setdata({name:"Pranam",usn:100,age:23})
  };
  return (
    <div>
      <h3>my name is :{data.name},usn is: {data.usn} and my age is{data.age}</h3>
      <button onClick={updateObj}>Update</button>
    </div>
  );
};

export default Object;

// import React from 'react'
// import { useState } from 'react'

// const Object = () => {
//   const[mydata,setmydata]=useState({
//     name:"Pratheek",
//     age:21
//   })
//   const handleUpdate=()=>{
//     setmydata({age:25,name:"Prajwal"})
//   }
//   return (
//     <div>
//       <p>name:{mydata.name} age:{mydata.age}</p>
//       <button onClick={handleUpdate}>Update</button>
//     </div>
//   )
// }

// export default Object
