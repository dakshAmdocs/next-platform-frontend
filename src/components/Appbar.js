import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import './Appbar.css'
import "bootstrap/dist/css/bootstrap.min.css";

const Appbar = () => {
 
  return (
    <>
      <header className="topnav">
        <nav className="navbar navbar-expand-md navbar-dark">
          <div className="container-fluid">
            <Link className=" newbrand" to="/" >
              N&nbsp;E&nbsp;X&nbsp;T
            </Link>
            <div className="navbar">
              <button className="btn btn-info">
                <Link to="/login" style={{ color: 'white', fontSize: 'large' }}>
                  <PersonOutlineIcon />
                </Link>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
//className="btn btn-light mx-2" 
export default Appbar;


