import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "../components/card";
import Form from "../../pages/form";
import Login from "../../pages/login";
import SignUpUser from "../../pages/signup";
import Mainweb from "../../pages/mainweb";
import Admin from "../../pages/admin";
import Bookings from "../../pages/booknow";
import EditForm from "../../pages/dashboardscreens/edit";
// import TeachersForm from "../../pages/teachersform";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainweb />} />
        <Route path="booking" element={<Bookings />} />
        <Route path="admin/*" element={<Admin />} />
        <Route path="login" element={<Login />} />
        <Route path="form" element={<Form />} />
        <Route path="card" element={<Card />} />
        <Route path="editform" element={<EditForm />} />
        <Route path="signup" element={<SignUpUser />} />
      {/* <Route path="/form" element={<TeachersForm />} /> */}
      </Routes>
    </Router>
  );
}
