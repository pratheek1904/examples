import React from 'react'

const Parentchild = (props) => {
  const handleIncr=()=>{
    props.val(prevCount=>prevCount+1)
  }
  const handleDecr=()=>{
   props.val(prevCount=>prevCount-1)
  }
  return (
    <div>
      <button onClick={handleIncr}>Increment</button>
      <button onClick={handleDecr}>Decrement</button>
    </div>
  )
}

export default Parentchild
