import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import SMButton from '../config/components/button'
import SMInput from '../config/components/input'
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { sendData } from '../config/firebase/firebasemethods';
import { useNavigate } from 'react-router-dom';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';



export default function Footer() {
  const [comVal, setcomVal] = useState([]);
  const navigate = useNavigate()

  let submit = () => {
    sendData(comVal, `complain`).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
    console.log(comVal)
  }
  let signUppage = () => {
    navigate(`/signup`)
  }


  return (
    <>
     <div className='mainfooter'>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item md={4}>
            <Box>
            <Typography sx={{textDecoration:'underline',fontWeight:'bold'}} variant='h4'>
              ADDRESS
            </Typography>
            </Box>
            <Box sx={{padding:5}}>
            <Typography variant='h6'>
              Hawksbay beach <LocationOnOutlinedIcon/>
            </Typography>
            </Box>
          </Grid>




          <Grid item md={4}>
            <table>
              <th><h1>Hotel Management By Irfan</h1></th>
             
              <tr>
                <td>
                  <span >create an account to get wonderfull offers</span>
                  <SMButton sx={{ padding: 1 }}  onClick={signUppage} label="Sign Up" />
                </td>
              </tr>
            </table>
          </Grid>
          <Grid item md={4}>
            <h1>Complain</h1>
            <Box>
              <Box >
                <SMInput onChange={(e) => { setcomVal({ ...comVal, name: e.target.value }) }} label="Name" type="text" />
              </Box>
              <Box >
                <SMInput onChange={(e) => { setcomVal({ ...comVal, complain: e.target.value }) }} label="Complain" type="text" />
              </Box>
              <Box >
                <SMButton variant={"contained"} onClick={submit} label="Submit" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
