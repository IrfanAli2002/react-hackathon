import React from 'react'
import PrimarySearchAppBar from '../config/components/appbar'
import Extra from '../config/components/extra'
import "../App.css";
import SMButton from "../config/components/button";
import { Box, Grid } from '@mui/material';
import { useState } from 'react';
import SMInput from '../config/components/input';
import { useNavigate } from 'react-router-dom';
import { sendData } from '../config/firebase/firebasemethods';
import { Rooms } from '../config/components/obj';
import About from './about';
import Footer from './footer';
import Cardsss from './cardsss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headerr from './headere';


function Mainweb() {







  return (
    <>
      <Box className='mainbody'>


        <Box>
          <PrimarySearchAppBar />
        </Box>
        <Box className="headerr">
      <Headerr/>
        </Box>
        <Box>
          <Cardsss />

        </Box>
        <Box>
          <About />

        </Box>
        <Box>
          <Footer />

        </Box>
      </Box>
    </>
  )
}


export default Mainweb