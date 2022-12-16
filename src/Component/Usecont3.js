import React, { useContext } from "react";
import { biodata } from "./Usecont1";

const Usecont3 = () => {
  const val = useContext(biodata);

  return (
    <div>
      {/* {
        val[0].map((elem)=>{
          return(
            <div key={elem.id}>
              <p>{elem.title}</p>
            </div>
          )
        })
      } */}
      <table>
          <tr>
            <th>Id</th>
            <th>Title</th>
          </tr>
          <td>
            {val.map((elem) => {
              return elem.map((eleme) => {
                return <tr key={eleme.id}>{eleme.id}</tr>;
              });
            })}
          </td>
          <td>
            {val.map((elem) => {
              return elem.map((eleme) => {
                return <tr key={eleme.id}>{eleme.title}</tr>;
              });
            })}
          </td>
        {/* </tbody> */}
      </table>
    </div>
  );
};

export default Usecont3;
