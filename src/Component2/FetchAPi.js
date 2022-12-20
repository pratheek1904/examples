import React, { useEffect, useState } from "react";

const FetchAPi = () => {
  const [search, setsearch] = useState("");
  const [posts, setposts] = useState([]);
  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    setposts(data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <input 
      type="text"
        placeholder="enter here"
        value={search}
        onChange={(e)=>setsearch(e.target.value)}
      />
      <table>
        <tr>
          <th>ID</th>
          <th>Title</th>
        </tr>
        <td>
        {
        posts.filter((elem)=>{
          if(search===""){
            return elem
          }
          else if(elem.title.toLowerCase().includes(search.toLowerCase())){
            return elem.title
          }
          else
          return " "
        }).map((eleM)=>{
          return(
            <div key={eleM.id}>
              <tr >{eleM.id}</tr>
            </div>
          )
        })
      }
        </td>
        <td>
        {
        posts.filter((elem)=>{
          if(search===""){
            return elem
          }
          else if(elem.title.toLowerCase().includes(search.toLowerCase())){
            return elem.title
          }
          else
          return " "
        }).map((eleM)=>{
          return(
            <div key={eleM.id}>
              <tr>{eleM.title}</tr>
            </div>
          )
        })
      }
        </td>
      </table>
    </div>
  );
};

export default FetchAPi;
