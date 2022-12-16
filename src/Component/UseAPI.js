import React, { useEffect, useState } from "react";

const UseAPI = () => {
  const [post, setpost] = useState([]);
  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setpost(data);
    console.log(data);
  };
  useEffect(() => {
    getUsers()
  },[]);
  return (
    <div>
        {
            post.map((elem)=>{
                return(
                    <div key={elem.id}>
                        <p>{elem.title}</p>
                    </div>
                )
            })
        }
    </div>
  );
};

export default UseAPI;

// import React, { useEffect, useState } from 'react'

// const UseAPI = () => {
// const[users,setUsers]=useState([])

// const getUsers=async()=>{
//     const response=await fetch('https://jsonplaceholder.typicode.com/posts')
//     setUsers(await response.json())
// }

//     useEffect(()=>{
//         getUsers()
//     },[])
//     const handleRemove=(id)=>{
//         const removed=users.filter((element)=>{
//             return element.id!==id
//         })
//         setUsers(removed)
//     }
//   return (
//   <>
//     <h2>List of jsonplaceholder Users</h2>
//     {
//         users.map((elem)=>{
//             return(
//                 <>
//                 <p>  <label>id:</label>{elem.id}</p>
//                 <p> <label>title:</label>{elem.title}</p>
//                 <p><label>body:</label>{elem.body}</p>
//                 <button onClick={()=>handleRemove(elem.id)}>Remove</button>
//             </>
//             )
//         })
//     }
//   </>
//   )
// }

// export default UseAPI
