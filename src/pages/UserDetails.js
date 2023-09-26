import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import axios from "axios";
import "./UserDataComponent.css";

function UserDetails() {
  const [userData, setUserData] = useState({});
  const [familyData, setFamilyData] = useState([]);

  useEffect(() => {
    axios
      .get("URL")
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });

    axios
      .get("URL")
      .then((response) => {
        setFamilyData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching family data:", error);
      });
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Card className="user-card">
            <Card.Header className="card-header">User Information</Card.Header>
            <Card.Body>
              <ul className="user-info">
                <li>
                  <strong>First Name:</strong> {userData.firstName}
                </li>
                <li>
                  <strong>Last Name:</strong> {userData.lastName}
                </li>
                <li>
                  <strong>Date of Birth:</strong> {userData.dob}
                </li>
                <li>
                  <strong>Aadhaar:</strong> {userData.adhaar}
                </li>
                <li>
                  <strong>Email:</strong> {userData.email}
                </li>
                <li>
                  <strong>Password:</strong> {userData.password}
                </li>
                <li>
                  <strong>Gender:</strong> {userData.gender}
                </li>
                <li>
                  <strong>Plan Type:</strong> {userData.email}
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="family-card">
            <Card.Header className="card-header">
              Family Information
            </Card.Header>
            <Card.Body>
              <ul className="family-list">
                {familyData.map((familyMember, index) => (
                  <li key={index}>
                    <strong>Name:</strong> {familyMember.name},{" "}
                    <strong>Relation:</strong> {familyMember.relation}
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="buttons">
        <Link className="btn btn-outline-primary mx-2" to="/addmembers">
          Add Members
        </Link>
        <Link className="btn btn-outline-dark mx-2" to="/addmembers">
          Change plan
        </Link>
      </div>
    </Container>
  );
}

export default UserDetails;
