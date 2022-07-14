import React, { useState } from 'react'
import { createTheme, CssBaseline, Paper, ThemeProvider } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SMInput from '../config/components/input';
import InputLabel from '@mui/material/InputLabel';
import SMButton from '../config/components/button';
import { sendData, sendingData } from '../config/firebase/firebasemethods';
import { Container } from '@mui/system';
import { useNavigate } from "react-router-dom";



const Form = () => {
    let [saveData, setSaveData] = useState([])

    const navigate = useNavigate()


    const theme = createTheme();


    const sendfunc = () => {

        sendData(saveData, 'admin/').then(() => {
            console.log("data transfer")
            navigate("/")

        }).catch((err) => {
            console.log(err)
        })

        console.log(saveData)

    }


    return (
        <div className='admindiv'>

            <Box className='admindiv'>
                <Typography variant='h1'>For Admin</Typography>

                <ThemeProvider theme={theme}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >

                            <Typography component="h1" variant="h5">
                                ADD ROOMS
                            </Typography>
                            <Box >
                                <Box>
                                    <SMInput
                                        className='inp'
                                        margin="normal"
                                        onChange={(e) => { setSaveData({ ...saveData, title: e.target.value }) }}
                                        required
                                        fullWidth={true}
                                        label="Number of bedrooms"
                                        type="text"
                                    />

                                </Box>
                                <Box>
                                    <SMInput
                                     className='inp'
                                        margin="normal"
                                        onChange={(e) => { setSaveData({ ...saveData, price: e.target.value }) }}
                                        required
                                        fullWidth={true}
                                        label="Price"
                                        type="text"
                                        autoFocus
                                    />

                                </Box>
                                <Box>

                                    <SMInput
                                     className='inp'
                                        margin="normal"
                                        onChange={(e) => { setSaveData({ ...saveData, images: e.target.value }) }}
                                        required
                                        label='Enter image url'
                                        fullWidth={true}
                                        type="text"
                                        autoComplete="current-password"
                                    />
                                </Box>
                                <SMInput
                                 className='inp'
                                    margin="normal"
                                    required
                                    fullWidth={true}
                                    label="Services"
                                    onChange={(e) => { setSaveData({ ...saveData, services: e.target.value }) }}
                                    type="text"
                                    autoComplete="current-password"
                                />
                                <SMButton
                                    type="submit"
                                    label="Submit"
                                    fullWidth
                                    variant="contained"
                                    onClick={sendfunc}
                                    sx={{ mt: 3, mb: 2 }}

                                    Submit
                                />

                            </Box>
                        </Box>
                    </Container>
                </ThemeProvider>
            </Box>
        </div>
    )
}
export default Form;