import React, { useState } from "react";

import "./AddFamilyMember.css";

function AddMembers() {
  const [familyMember, setFamilyMember] = useState({
    firstName: "",

    lastName: "",

    dateOfBirth: "",

    gender: "male", // You can set a default gender value if needed
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFamilyMember({
      ...familyMember,

      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Family member added", familyMember);
  };

  return (
    <div className="family-member-container">
      <h1>Add Family Member</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={familyMember.firstName}
          onChange={handleInputChange}
          required
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={familyMember.lastName}
          onChange={handleInputChange}
          required
        />

        <input
          type="date"
          name="dateOfBirth"
          placeholder="Date of Birth"
          value={familyMember.dateOfBirth}
          onChange={handleInputChange}
          required
        />

        <div>
          <table>
            <td>
              {" "}
              <label>Gender:</label>
            </td>
            <td>
              <select
                className="form-select"
                name="gender"
                value={familyMember.gender}
                onChange={handleInputChange}
              >
                <option selected>Select Gender</option>
                
                <option value="male">Male</option>

                <option value="female">Female</option>

                <option value="other">Other</option>
              </select>
            </td>
          </table>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddMembers;
