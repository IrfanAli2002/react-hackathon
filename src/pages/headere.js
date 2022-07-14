import { Box, Grid } from '@mui/material'
import React from 'react'
import SMButton from '../config/components/button'
import { useLocation, useNavigate } from "react-router-dom";


export default function Headerr() {
    const navigate = useNavigate()

    let gobook= ()=>{
        navigate('/booking')
    }
    return (
        <>
            <div className='headerdiv'>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item md={12}>
                        <Box><span className='headpera'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis debitis fugiat reprehenderit laborum rem illum.
                        </span>
                        </Box>
                    </Grid>
                   
                </Grid>

            </div>
        </>
    )
}
