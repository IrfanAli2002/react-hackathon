import * as React from 'react';
import { deleteData, getData } from '../../config/firebase/firebasemethods';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Table } from '@mui/material';
import SMButton from '../../config/components/button';
import { useNavigate } from "react-router-dom";
import Card from '../../config/components/card';
import { Box } from '@mui/system';


export default function AppData() {

  const [renderData, setrenderData] = useState([])
  const navigate = useNavigate()



  let goForm = () => {
    navigate("/form")
  }

  let getDatafunc = () => {
    getData('bookings').then((res) => {
      setrenderData(res)
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }


  let removeData = (xyz) => {
    console.log(`id=====>`, xyz)
    deleteData('bookings', xyz)
  }

  const editBtn = (data) => {
    console.log(data)
    navigate("/editform", {
      state: data
    })

  }
  useEffect(() => {

    getDatafunc()

  }, [])
  return (
    <>
    <div >

      <div>AppData</div>
      <Box>

      <Table border='1px' className='admintable'>
        <table  >

        <thead>
          <tr className='padd'>
            <th className='padd'>Full Name</th>
            <th className='padd'>CNIC</th>
            <th className='padd'>Date</th>
            <th className='padd'>Number of person</th>
            <th className='padd'>Price</th>
            <th className='padd'>Services</th>
          </tr>
        </thead>
        {renderData.map((e) => {

          return (
            <>
              <tbody>
                <tr className='padd'>
                  <td className='padd'>{e.fullname}</td>
                  <td className='padd'>{e.cnic}</td>
                  <td className='padd'>{e.date}</td>
                  <td className='padd'>{e.numofperson}</td>
                  <td className='padd'>{e.price}</td>
                  <td className='padd'>{e.service}</td>
                  <td className='padd'><SMButton onClick={() => editBtn(e)} variant='contained' label="edit" /></td>
                  <td className='padd'><SMButton onClick={() => removeData(e.id)} variant='contained' label="delete" /></td>
                </tr>
              </tbody>
            </>
          )
        })}
        <td><SMButton variant='contained' fullWidth={true} onClick={goForm} label="Add Room" /></td>



        </table>
      </Table>

      </Box>


    </div>
    </>
  )
}
