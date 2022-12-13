import React, { useState } from 'react'
import "../Component3/weather.css"

const Sidebar = () => {
    const[active,setactive]=useState(true)
  return (
    <div className='sidebar'>
      <p className= {active?'home':'home2'}>Home</p>
      <p className='cities'>Cities</p>
    </div>
  )
}

export default Sidebar