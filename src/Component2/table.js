import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Table = () => {
  const [post, setpost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setpost(data);
      });
  });
  return <div>
  <table>
    <tr>
        <th>id</th>
        <th>title</th>
    </tr>
    <td rowSpan={0}>
        {
            post.map((elem)=>{
                return(
                    <tr>{elem.id}</tr>
                )
            })
        }
    </td>
    <td colSpan={0}>
    {
            post.map((elem)=>{
                return(
                    <tr rowSpan={0}>{elem.title}</tr>
                )
            })
        }
    </td>
  </table>
  </div>;
};

export default Table;
