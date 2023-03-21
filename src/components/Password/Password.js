import './app.css'
import React, { useState } from 'react'

function Password() {
    const[showPassword, setShowPassword] = useState(false);
    function handClick(){
        setShowPassword(!showPassword)
    }

  return (
    <div className='password-body'>
        <label>
            Password :
        <input className='password--input' type={showPassword ? 'text':'password'}/>
        Show Password <input type='checkbox' onClick={handClick} />
        </label>
    </div>
  )
}

export default Password