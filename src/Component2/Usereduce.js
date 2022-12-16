import React, { useReducer } from 'react'

const Usereduce = () => {
  const reducer=(state,action)=>{
    if(action.type==="Increment")
    {
      state+=1
    }
    if(action.type==="Decrement"){
      state-=1
    }
    return state
  }
  const[state,dispatch]=useReducer(reducer,0)
  return (
    <div>
      <p>{state}</p>
      <button onClick={()=>dispatch({type:"Increment"})}>Incre</button>
      <button onClick={()=>dispatch({type:"Decrement"})}>Decre</button>
    </div>
  )
}

export default Usereduce