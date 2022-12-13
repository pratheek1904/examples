import React, { useState } from 'react'

const Todo = () => {
    const[todos,setTodos]=useState("")
    const[entry,setentry]=useState([])

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(todos){
            const newentry={id:new Date().getTime().toString(),todos}
        setentry([...entry,newentry])
        setTodos("")
        }
        else{
            alert("Enter a todo first")
        }
    }
    const handleAdd=(id)=>{
        const removed=entry.filter((elements)=>{
            return elements.id!==id
        })
        setentry(removed)

    }
  return (
    <div>
    <h1><b>Todo List app</b></h1>
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder='Enter a Todo'
        value={todos}
        onChange={(e)=>setTodos(e.target.value)}
        ></input>&nbsp;
        <button type='submit'>ADD</button>
      </form>

      {
        entry.map((elem)=>{
            return(
                
                <p key={elem.id}>{elem.todos}&nbsp; <button onClick={()=>handleAdd(elem.id)}>Remove</button></p>
            )
        })
      }
    </div>
  )
}

export default Todo
