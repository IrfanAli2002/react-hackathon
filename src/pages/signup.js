import { Box } from '@mui/material'
import React, { useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import SMButton from '../config/components/button'
import SMInput from '../config/components/input'
import { sendData, signUpUser } from '../config/firebase/firebasemethods'

const SignUpUser = () => {

  const [userobj, setUserObj] = useState([])
  const navigate = useNavigate();


  let gotologin = ()=>{
    navigate(`/login`)
  }

  let signUp = () => {
    if(!userobj.email){
      return alert("email is required")
    }
    if(!userobj.password || userobj.password.length < 6){
      return alert("password is required and password must be aleast seven character")
    }
    console.log(userobj)
    signUpUser(userobj).then(
      (res)=>{
        console.log(res)
        navigate(`/login`)
      }
    ).catch(err=>{
      console.log(err)

    })
    
  }

  return (
    <>

          <h1>Sign Up</h1>
      <Box className='main'>
        <Box className='shawdow'>

          
          <Box sx={{ padding: 1 }}>
            <SMInput onChange={(e) => setUserObj({ ...userobj, name: e.target.value })}  label='Name' type='text' />
          </Box>
          <Box sx={{ padding: 1 }}>
            <SMInput onChange={(e) => setUserObj({ ...userobj, email: e.target.value })}  label='Email' type='email' required />
          </Box>
          <Box sx={{ padding: 1 }}>
            <SMInput onChange={(e) => setUserObj({ ...userobj, password: e.target.value })}  label='Password' type='password' required />
          </Box>
          <Box sx={{ padding: 1 }}>
            <SMButton  variant={"contained"} onClick={signUp}  label='Sign Up' />
          </Box>
          <Box sx={{ padding: 1 }}>
            <span>I have already account <SMButton onClick={gotologin} label="Login"/> </span>
          </Box>
        </Box>

      </Box>





    </>


  )
}

export default SignUpUser