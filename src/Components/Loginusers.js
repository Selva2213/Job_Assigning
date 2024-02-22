import React from 'react'
import { useNavigate } from 'react-router-dom'

function Loginusers() {
    const navigate=useNavigate();
  return (
    <div className='lu'>
      <center>
        <fieldset className='fs'>
        <form action="#" method="post" id="loginForm">
            <p>
                <label for="name">Username: </label>
                <input type="text" id="name" name="name" required />
            </p>
            <p>
                <label for="pass">Password: </label>
                <input type="password" id="pass" name="pass" required />
            </p>
            <button type="submit" onClick={()=> navigate('loginsuccess')}>Login</button><br></br>
            
        </form>
        </fieldset>
        </center>
        <div className='goback2'>
        <button onClick={()=>navigate(-1)}>Go back</button>
        </div>
    </div>
  )
}

export default Loginusers
