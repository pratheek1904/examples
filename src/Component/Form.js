import React from 'react'
import { useState } from 'react'

const Form = () => {
  const[myval,setmyval]=useState("")
  const[todo,setodo]=useState([])

  const todoSubmit=(e)=>{
    e.preventDefault()
    const myarray={id:new Date().getTime().toString(),myval}
    setodo([...todo,myarray])
    console.log(myarray)
  }
  const todoRemove=(id)=>{
    const removed=todo.filter((val)=>{
      return val.id!==id
    })
    setodo(removed)
  }
  return (
    <div>
      <h1>Todo Application</h1>
      <form onSubmit={todoSubmit}>
        <input
          type="text"
          value={myval}
          onChange={(e)=>setmyval(e.target.value)}
          placeholder='Enter Todo'
        />
        <input
          type="Submit"
        />
      </form>
      {
        todo.map((elem)=>{
         return(
          <div key={elem.id}>
            <p>{elem.myval}<button onClick={()=>todoRemove(elem.id)}>Remove</button> </p>
          </div>
         )
        })
      }
    </div>
  )
}

export default Form

