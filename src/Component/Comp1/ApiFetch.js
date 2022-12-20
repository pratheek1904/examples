import React, { useEffect, useState } from "react";

const ApiFetch = () => {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos",{
      headers:{
        id:'2337383882883'
      }
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setposts(data);
      });
  });

  const putpostEvent=()=>{
    const data={
      name:"Pratheek",
      USN:113,
      age:21
    }
    fetch("https://jsonplaceholder.typicode.com/todos",{
      method:"POST",
      headers:{
        'content-Type':'application/json',
        'Access-control-allow-Origin':'*'
      },
      body:JSON.stringify(data)
    })
    .then((res) => {
      if(res.status==200){
        alert("success")
      }
      return res.json();
    })
    .then((data) => {
      setposts(data);
    });
   
  }

  return (
    <div>
      {
        posts.map((elem)=>{
          return(
            <div key={elem.id}>
              <p>{elem.title}</p>
            </div>
          )
        })
      }
      <button onClick={putpostEvent}>submit</button>
    </div>
  );
};

export default ApiFetch;
