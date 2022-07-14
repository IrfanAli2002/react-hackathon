import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Extra from "../config/components/extra";
import MainLayout from "./mainlayout";
import Footer from './footer'

function Admin() {
  const [user, setUser] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
    <div className='admindiv'>

      <MainLayout />
    </div>
    </>
  );
}
export default Admin;
