import React from 'react'
import { useNavigate } from 'react-router-dom'

function Help() {
  const navigate=useNavigate();
  return (
    <div className='help'>
      <h1>Help page</h1>
      <div className='goback1'>
        <button onClick={()=>navigate(-1)}>Go back</button>
        </div>
    </div>
  )
}

export default Help

