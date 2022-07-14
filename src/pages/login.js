import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SMButton from "../config/components/button";
import SMInput from "../config/components/input";
import { logInUser } from "../config/firebase/firebasemethods";

function Login() {

  const [inpVal, setInpVal] = useState({})

  const navigate = useNavigate();

  let gotosignup = ()=>{
    navigate(`/signup`)
  }
  
  let login = () => {
    if (!inpVal.email) {
      return alert("email is required")
    }
    if (!inpVal.password || inpVal.password.length < 6) {
      return alert("password is required password must be atleast 6 characters")
    }
    console.log(inpVal)
    logInUser(inpVal).then(success => {
      console.log("user agya")

      navigate('/')

    }).catch((err) => {
      console.log(err)
    })

  }

  return (
    <>
      <h1>Login</h1>
      <Box>
        <Box sx={{ padding: 1 }}>
          <SMInput onChange={(e) => { setInpVal({ ...inpVal, email: e.target.value }) }} label="Email" type="email" />
        </Box>
        <Box sx={{ padding: 1 }}>
          <SMInput onChange={(e) => { setInpVal({ ...inpVal, password: e.target.value }) }} label="Password" type="password" />
        </Box>
        <Box sx={{ padding: 1 }}>
          <SMButton variant={"contained"} onClick={login} label="Login" />
        </Box>
        <Box sx={{ padding: 1 }}>
          <span>I don't have account <SMButton onClick={gotosignup} label="Create Account" /> </span>
        </Box>
      </Box>
    </>
  );
}
export default Login;
