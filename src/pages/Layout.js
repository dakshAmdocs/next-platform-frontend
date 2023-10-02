import { Outlet, Link } from "react-router-dom";
import Appbar from "../components/Appbar";
import { Stack } from "@mui/material";
// import Ngrid from './grid'
import BasicModal from '../components/Modal'

import React from "react";
import '../pages/Layout.css'

const Layout = () => {
  return (
    <>
      <Stack spacing={5} >
      <div className="home-banner">
      <Appbar/>
      <br />
      <br /><br /><br /> <br />
      <div className="shadow">
        <Outlet />
        </div></div>
      </Stack>
    </>
  )
};

export default Layout;