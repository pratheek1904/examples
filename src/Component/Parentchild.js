import React from 'react'

const Parentchild = (props) => {
  return (
    <div>
      <button onClick={()=>props.name("updated")}>Click To Update</button>
    </div>
  )
}

export default Parentchild
