import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useRef, useState, useEffect } from 'react';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'rgb(0,0,0,0.75)',
    boxShadow: 24,
    p: 4,
    // borderRadius: '100px',
    textAlign: 'center',
    color: 'white'
};

const Login = () => {
    // const[user, setUser] = useState('');
    // const [validName, setValidName] = useState(false);
    // cosnt[userFocus, setUserFocus] = useState(false);


    return (
        <div>
            <Box sx={style}>
                <h1 style={{color: 'white'}}>Login</h1><br />
                <Box component='form'
                    noValidate
                    autoComplete="off">
                    <div className="row">
                        <label htmlFor="Username">Username</label><br />
                        <TextField
                            required
                            fullWidth
                            sx ={{border: '1px solid white', borderRadius: 1, input: {color: 'white'}}}
                            id="outlined-basic"
                            type='text'
                            // onChange={(e)=> setUser(e.target.value)}

                        />
                    </div>
                    <br />
                    <div className="row">
                        <label htmlFor="Username" >Password</label><br/>
                        <TextField
                            required
                            fullWidth
                            sx ={{border: '1px solid white', borderRadius: 1,color: 'white', input: {color: 'white'}}}
                            id="outlined-required"
                            type='password'
                            
                        />
                    </div>
                    <br />
                    <div >
                        <Button variant="contained" color="success"  style={{width: '200px'}} href="/userdetails">
                            Login
                        </Button>
                    </div><br />
                    <p>Don't have login credentials</p><p>Please Sign Up below</p>
                    <div >
                        <Button variant="contained" style={{width: '200px'}} href="/createuser" >
                            Signup
                        </Button>
                    </div>
                </Box>
            </Box>

        </div>
    )
}

export default Login
