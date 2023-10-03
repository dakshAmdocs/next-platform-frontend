import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UserFamilyInfo.css";
import BasicModal from "../components/Modal";






function UserDetails() {
  // State to store user and family data
  
  // const plan =(id)=>{
  //   let planName ="";
  //     if(id ==0){
  //       planName = "Silver";
  //     }
  //     else if(id == 1){
  //       planName = "Gold";
  //     }
  //     else if(id == 3){
  //       planName ="Platinum";
  //     }
  //     else{
  //       planName = "None"
  //     }
  // }
  const [userData, setUserData] = useState([]);
  const [familyData, setFamilyData] = useState([]);

  // Fetch user data
  useEffect(() => {
    fetch("http://localhost:8080/api/customer/getByID/1")
      .then((response) => response.json())
      .then((data) => {setUserData(data)})
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  // Fetch family data
  useEffect(() => {
    fetch("URL")
      .then((response) => response.json())
      .then((data) => setFamilyData(data))
      .catch((error) => console.error("Error fetching family data:", error));
  }, []);

  return (
    <div>
      
      <div className="container mt-5" >
        <h2 className="text-center mb-4">User and Family Information</h2>
        <div className="row">
          <div className="col-md-6" >
            <h3 className="mb-3">User Information</h3>
            {console.log("Divyansh" ,userData)}
            {/* {userData.map((user) => ( */}
              <div key={userData.id} className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">
                    {userData.first_name} {userData.last_name}
                  </h5>
                  <p className="card-text">
                    <strong>Date of Birth:</strong> {userData.dob}
                    <br />
                    <strong>Aadhar:</strong> {userData.id_number}
                    <br />
                    <strong>ID Type:</strong> {userData.id_type}
                    <br />
                    <strong>Gender:</strong> {userData.gender}
                    <br />
                    {/* <strong>Selected Plan:</strong> {plan(userData.id_type) } */}
                    <br />
                  </p>
                </div>
              </div>
            {/* ))} */}
          </div>
          <div className="col-md-6">
            <h3 className="mb-3">Family Information</h3>
            {familyData.map((family) => (
              <div key={family.id} className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">{family.name}</h5>
                  <p className="card-text">
                    <strong>Relation:</strong> {family.relation}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
        <br />
        <br />
        <div className="buttons"><div className="row">
          <div className="mb3 col">
            <Link className="btn btn-outline-info" to="/add-user" >
              Add Members
            </Link>
          </div>
          <div className="mb-3 col">
            <BasicModal />
          </div>
        </div></div>
        
      </div>
    </div>
  );
}

export default UserDetails;
