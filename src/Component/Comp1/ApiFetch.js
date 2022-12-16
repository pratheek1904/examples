import React, { useEffect, useState } from "react";

const ApiFetch = () => {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setposts(data);
      });
  });
  return (
    <div>
      <table>
       <tbody>
       <tr>
          <th>Id</th>
          <th>title</th>
        </tr>
        <td>
          {posts.map((elem) => {
            return (
              <div key={elem.id}>
                <tr>{elem.id}</tr>
              </div>
            );
          })}
        </td>
        <td>
          {posts.map((elem) => {
            return (
              <div key={elem.id}>
                <tr>{elem.title}</tr>
              </div>
            );
          })}
        </td>
       </tbody>
      </table>
    </div>
  );
};

export default ApiFetch;
