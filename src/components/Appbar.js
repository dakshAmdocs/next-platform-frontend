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
    //  <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="static" className='topnav'>
    //     <Toolbar>
    //       <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
    //         <Link to="/" style={{textDecoration:'none', color:'red', fontSize: 'large', fontWeight: 'bolder' }}>N.E.X.T </Link>
    //       </Typography>
    //       <Link to="/userdetails" style={{textDecoration:'none', color:'white', marginRight: 50, fontSize:'large'}}>
    //       <PersonOutlineIcon />
    //       </Link>
    //     </Toolbar>
    //   </AppBar>
    // </Box>
    <>

      {/* <nav className="navbar bg-body-tertiary topnav">
        <div className="container-fluid">
        <Link to="/" style={{textDecoration:'none', color:'brown', fontSize: '40px', fontWeight: 'bolder' }}>&nbsp;NEXT</Link>
          <button type="button" className="btn btn-outline-danger "><Link to="/userdetails" style={{ textDecoration: 'none', color: 'brown', fontSize: '10px' }}>
            <PersonOutlineIcon />
          </Link></button>
        </div>
      </nav> */}
      <header className="topnav">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <Link className=" newbrand" to="/" >
           N&nbsp;E&nbsp;X&nbsp;T
          </Link>
          <div className="navbar">
              <button className="btn btn-info" ><Link to="/userdetails" style={{ textDecoration: 'none',color: 'white', fontSize: '10px' }}><PersonOutlineIcon /> </Link></button>
          </div>
        </div>
      </nav>
    </header>
    </>
  )
}
//className="btn btn-light mx-2" 
export default Appbar;

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import Switch from '@mui/material/Switch';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormGroup from '@mui/material/FormGroup';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';

// export default function MenuAppBar() {
//   const [auth, setAuth] = React.useState(true);
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleChange = (event) => {
//     setAuth(event.target.checked);
//   };

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <Box sx={{ flexGrow: 1}}>
//       <FormGroup>
//         {/* <FormControlLabel
//           control={
//             <Switch
//               checked={auth}
//               onChange={handleChange}
//               aria-label="login switch"
//             />
//           }
//           label={auth ? 'Logout' : 'Login'}
//         /> */}
//       </FormGroup>
//       <AppBar position="static" style={{backgroundColor: 'white'}}>
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Photos
//           </Typography>
//           {auth && (
//             <div>
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleMenu}
//                 color="inherit"
//               >
//                 <AccountCircle />
//               </IconButton>
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorEl}
//                 anchorOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 open={Boolean(anchorEl)}
//                 onClose={handleClose}
//               >
//                 <MenuItem onClick={handleClose}>Profile</MenuItem>
//                 <MenuItem onClick={handleClose}>My account</MenuItem>
//               </Menu>
//             </div>
//           )}
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
