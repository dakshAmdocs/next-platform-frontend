import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import UserDetails from "./pages/UserDetails";
import AddMembers from "./pages/AddMembers";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          {/* <Route path="/createUser" element={<CreateUser />} />
        <Route path="/editUser/:user_id" element={<EditUser />} />
         */}
          <Route path="/addmembers" element={<AddMembers />} />
          <Route path="/userdetails" element={<UserDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
