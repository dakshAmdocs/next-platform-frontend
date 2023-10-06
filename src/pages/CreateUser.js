import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Button } from "@mui/material";
import { create } from "@mui/material/styles/createTransitions";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function CreateUser(props) {
  let navigate = useNavigate();
  let { data } = useParams();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    id_type: "",
    dob: "",
    id_number: "",
    gender: "",
    username: "",
    password: "",
  });


  const { first_name, last_name, id_type, dob, id_number, gender,username, password} = user;
  console.log(user);

  
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/customer/putCustomer", user);
    navigate("/");
  };



  return (
    <div className="container">
      <div className="row">

        <div>
          <h2> Enter Your Details</h2><br />

          <form
            onSubmit={(e) => onSubmit(e)
            }
          >

            <div className="row">
              <div className="mb-3 col">
                <label htmlFor="FirstName" className="form-label">
                  First Name
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your first name"
                  name="first_name"
                  value={first_name}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3 col">
                <label htmlFor="LastName" className="form-label">
                  Last Name
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your last name"
                  name="last_name"
                  value={last_name}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="mb-3 col">
                <label htmlFor="DOB" className="form-label">
                  Date of birth:
                </label>
              
                <input
                  type={"date"}
                  className="form-control"
                  placeholder="dd-mm-yyyy"
                  name="dob"
                  value={dob}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>
            <div className="row">
              <div className="mb-3 col">
                <label htmlFor="id type" className="form-label">ID type</label>
                <select class="form-select" aria-label="Default select example" name="id_type" onChange={(e) => onInputChange(e)}>
                  <option selected>Open this select menu</option>
                  <option value="0">Aadhar Number</option>
                  <option value="1">PAN Number</option>
                  <option value="2">Passport Number</option>
                </select>
              </div>
              <div className="mb-3 col">
                <label htmlFor="id number" className="form-label">
                  ID Number
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your ID number"
                  name="id_number"
                  value={id_number}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3 col">
                <label htmlFor="gender" className="form-label">Gender</label>
                <select class="form-select" aria-label="Default select example" name="gender" onChange={(e) => onInputChange(e)} >
                  <option selected>Open this select menu</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Others</option>
                </select>
              </div>
            </div>

            <div className="row" >
              <div className="mb-3 col">
                <label htmlFor="username">Username</label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your username"
                  name="username"
                  value={username}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3 col">
                <label htmlFor="password">Password</label>
                <input
                  type={"password"}
                  className="form-control"
                  placeholder="Enter your password"
                  name="password"
                  value={password}
                  onChange={(e) => onInputChange(e)}
                /></div>
              <div className="mb-3 col">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  type={"password"}
                  className="form-control"
                  placeholder="Enter your ID number"
                  name="password"
                  onChange={(e) => onInputChange(e)}
                />
              </div>

            </div>


            <br />
            <button type="submit" className="btn btn-primary" >
              Submit
            </button>
            <Link className="btn btn-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
          <div><br />
            <p>Already Registered?</p>
            <Link to="/login">
              <Button variant="contained" color="success"  >
                Login
              </Button>
            </Link>
          </div>
        </div >
      </div >
    </div >

  )
}

export default CreateUser;