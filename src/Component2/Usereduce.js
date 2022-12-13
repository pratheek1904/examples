import React, { useReducer } from 'react'

const reducer=(state,action)=>{
  if(action.type==="INC"){
    state=state+1
  }
  if(action.type==="DEC"){
    state=state-1
  }
return state
}
const Usereduce = () => {
  const[state,dispatch]=useReducer(reducer,0)
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={()=>dispatch({type:"INC"})}>Incr</button>
      <button onClickCapture={()=>dispatch({type:"DEC"})}>Decr</button>
    </div>
  )
}

export default Usereduce
