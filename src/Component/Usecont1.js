import React, { createContext, useEffect, useState } from "react";
import Usecont2 from "./Usecont2";

const biodata = createContext();

const Usecont1 = () => {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setposts(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <biodata.Provider value={[posts]}>
        <Usecont2 />
      </biodata.Provider>
    </div>
  );
};

export default Usecont1;
export {biodata}