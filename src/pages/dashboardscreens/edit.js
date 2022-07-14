import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container } from '@mui/system';
import { createTheme, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import SMInput from "../../config/components/input";
import SMButton from "../../config/components/button";
import { editformData, sendData } from "../../config/firebase/firebasemethods";


function EditForm() {

    const theme = createTheme();
    const navigate = useNavigate()



    const location = useLocation();
    const [formEdit, setFormEdit] = useState(

        {
            name:location.state.fullname,
            cnic:location.state.cnic,
            date:location.state.date,
            person:location.state.numofperson,
            price:location.state.price,
            services:location.state.service,
            id:location.state.id,

        }

    )



    const editfunc = () => {
        editformData(formEdit, 'bookings/', formEdit.id).then(() => {
            console.log("data update transfer")
            navigate("/admin/appdata")

        }).catch((err) => {
            console.log(err)
        })

    }


    //   console.log(`STATE======>`,location.state)





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
                                Edit Form
                            </Typography>
                            <Box >
                                <Box>

                                    <SMInput
                                        className='inp'
                                        fullWidth={true}
                                        margin="normal"
                                        value={formEdit.name}
                                        required
                                        onChange={(e) => setFormEdit({ ...formEdit, name: e.target.value })}
                                        type="text"
                                        id="password"
                                        autoComplete="current-password"
                                    />
                                </Box>
                                <Box>

                                    <SMInput
                                        margin="normal"
                                        className='inp'
                                        fullWidth={true}
                                        value={formEdit.cnic}
                                        onChange={(e) => { setFormEdit({ ...formEdit, cnic: e.target.value }) }}
                                        required
                                        type="text"
                                        autoFocus
                                    />
                                </Box>
                                <Box>
                                    <SMInput
                                        margin="normal"
                                        className='inp'
                                        fullWidth={true}
                                        value={formEdit.date}
                                        onChange={(e) => { setFormEdit({ ...formEdit, date: e.target.value }) }}
                                        required
                                        type="date"
                                        autoComplete="current-password"
                                    />

                                </Box>
                                <Box>
                                    <SMInput
                                        margin="normal"
                                        className='inp'
                                        fullWidth={true}
                                        value={formEdit.person}
                                        required
                                        onChange={(e) => { setFormEdit({ ...formEdit, person: e.target.value }) }}
                                        type="text"
                                        autoComplete="current-password"
                                    />

                                </Box>
                                <Box>

                                    <SMInput
                                        margin="normal"
                                        className='inp'
                                        fullWidth={true}
                                        value={formEdit.price}
                                        required
                                        onChange={(e) => { setFormEdit({ ...formEdit, price: e.target.value }) }}
                                        type="text"
                                        autoComplete="current-password"
                                    />
                                </Box>
                                <Box>

                                    <SMInput
                                        margin="normal"
                                        className='inp'
                                        fullWidth={true}
                                        value={formEdit.services}
                                        required
                                        label="Required Qualification"
                                        onChange={(e) => { setFormEdit({ ...formEdit, services: e.target.value }) }}
                                        type="text"
                                        autoComplete="current-password"
                                    />
                                </Box>
                                <SMButton
                                    type="submit"
                                    fullWidth={true}
                                    label="Update"
                                    variant="contained"
                                    onClick={editfunc}
                                    sx={{ mt: 3, mb: 2 }}

                                    Submit
                                />

                            </Box>
                        </Box>
                    </Container>
                </ThemeProvider>
            </Box>
        </div>
    );
}
export default EditForm;
