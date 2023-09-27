import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const Appbar = () => {
  return (
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NEXT PLATFORM
          </Typography>
          <Link className="btn btn-light mx-2" to="/userdetails">
            User
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Appbar;
