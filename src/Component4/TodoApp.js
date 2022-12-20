import React, { useState } from "react";

const TodoApp = () => {
    const[myvalue,setMyvalue]=useState("")
    const[notes,setnotes]=useState("")
    const[Todo,setTodo]=useState([])

const handlesubmit=(e)=>{
   e.preventDefault()
   const newarr={id:new Date().getTime().toString(),myvalue,notes}
   setTodo([...Todo,newarr])
   console.log(newarr)
   setMyvalue("")
}
const handleRemove=(id)=>{
const removed=Todo.filter((val)=>{
    return val.id!==id
})
setTodo(removed)
}

  return (
    <div>
      <h1> Todo Application</h1>
      <form onSubmit={handlesubmit}>
        <input
            type="text"
            placeholder="Enter Todo"
            value={myvalue}
            onChange={(e)=>setMyvalue(e.target.value)}
        /><br/>
        <input
            type="text"
            placeholder="Enter Description"
            value={notes}
            onChange={(e)=>setnotes(e.target.value)}
        />
        <button>Submit</button>
      </form>
      {
        Todo.map((elem)=>{
            return(
                <div key={elem.id}>
                    <p>{elem.myvalue} {elem.notes} <button onClick={()=>handleRemove(elem.id)}>Remove</button></p>
                </div>
            )
        })
      }
    </div>
  );
};

export default TodoApp;
