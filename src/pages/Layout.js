import { Outlet, Link } from "react-router-dom";
import Appbar from "../components/Appbar";
import { Stack } from "@mui/material";
// import Ngrid from './grid'
import BasicModal from '../components/Modal'

const Layout = () => {
  return (
    <Stack spacing={5} >

      <Appbar/>
     
      <Outlet />
    </Stack>
  )
};

export default Layout;