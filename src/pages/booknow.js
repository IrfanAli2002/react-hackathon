import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import PrimarySearchAppBar from '../config/components/appbar'
import SMButton from '../config/components/button'
import Extra from '../config/components/extra'
import SMInput from '../config/components/input'
import { sendData } from '../config/firebase/firebasemethods'
import Footer from './footer'

export default function Bookings() {

    const location = useLocation()
    const [booknow, setBooknow] = useState({
        beds: location.state.title,
        service: location.state.services,
        price: location.state.price,
        image: location.state.images,

    })

    let booked = () => {
        sendData(booknow, `bookings/`).then((res) => {
            alert("Room booked ")
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }



    return (
        <>
            <PrimarySearchAppBar />
            <div>

                <Box sx={{ padding: 10 }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item md={6}>
                            <Box>
                                <SMInput  onChange={(e) => { setBooknow({ ...booknow, fullname: e.target.value }) }} label="Full Name" type="text" />
                            </Box>
                            <Box>
                                <SMInput  onChange={(e) => { setBooknow({ ...booknow, numofperson: e.target.value }) }} label="Number of Person" type="number" />
                            </Box>
                            <Box>
                                <SMInput  onChange={(e) => { setBooknow({ ...booknow, cnic: e.target.value }) }} label="CNIC Number" type="number" />
                            </Box>
                            <Box>
                                <SMInput  onChange={(e) => { setBooknow({ ...booknow, number: e.target.value }) }} label="Phone Number" type="number" />
                            </Box>
                            <Box>
                                <SMInput  onChange={(e) => { setBooknow({ ...booknow, days: e.target.value }) }} label="Days" type="number" />
                            </Box>
                            <Box>
                                <SMInput  onChange={(e) => { setBooknow({ ...booknow, date: e.target.value }) }} type="date" />
                            </Box>
                            <Box>
                                <button onClick={booked} className='cardbtn1'>Book Now</button>
                            </Box>
                        </Grid>
                        <Grid item md={6}>
                            <Extra head={booknow.beds}
                                pera={booknow.service}
                                price={booknow.price}
                                image={booknow.image} />
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <Footer />
        </>

    )
}
