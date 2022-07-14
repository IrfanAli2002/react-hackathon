import { Grid } from '@mui/material'

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

export default function About() {
  return (
    <>
      <div className='mainabout'>
        <h1 className='abouth1'>About</h1>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item md={6}>
            <p className='aboutpera'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa saepe a non dolore atque
              similique eaque ad amet laborum porro facilis quasi quisquam, voluptate fugit natus. Optio
              asperiores molestias quo?
            </p>
          </Grid>
          <Grid item md={6}>
            <img className='aboutimg' src={"https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8&w=1000&q=80"} />
          </Grid>
        </Grid>
      </div>
    </>
  )
}
