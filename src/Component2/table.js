import React from "react";
import "../App.css"
const Table1=()=> {
    const details=[
                {
                    name:"Pratheek",
                    id:113
                },{
                    name:"Mohan",
                    id:75
                },{
                    name:"nithin",
                    id:100
                }
        ]
    return (
    
        <table>
          <tr>
            <th>Name</th>
            <th>id</th>
          </tr>
          <tr>{
            details.map((elem)=>{
                return(
                <td>{elem.name}</td>)
            })
          }
         </tr>
         <tr>
         {
            details.map((elem)=>{
                return(
                <td>{elem.id}</td>)
            })
          }
         </tr>
        </table>
      
    );
  }
    
  export default Table1

