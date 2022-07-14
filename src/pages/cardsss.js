import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Extra from '../config/components/extra'
import { Rooms } from '../config/components/obj';
import SMButton from '../config/components/button'
import { useLocation, useNavigate } from "react-router-dom";
import { getData } from '../config/firebase/firebasemethods';

export default function Cardsss() {

    const [addRooms, setaddRooms] = useState([]);
    const navigate = useNavigate()



    let getDatafunc = () => {
        getData('admin').then((res) => {
            setaddRooms(res)
          console.log(res)
        }).catch((err) => {
          console.log(err)
        })
      }
      useEffect(() => {

        getDatafunc()
    
      }, [])


    let booknow = (data) => {
        navigate("/booking", {
            state: data
        })
        console.log(data)
    }

    return (
        <>
            <div className='bgwhite'>
                <h1>Rooms</h1>
                <div className='maincards'>
                    {addRooms.map((e) => {
                        return (

                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item md={8}>
                                    <Extra head={e.title }
                                        pera={e.services}
                                        price={e.price}
                                        image={e.images} />
                                        <button onClick={() => booknow(e)} className='cardbtn'>Book Now</button>
                                </Grid>

                            </Grid>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
