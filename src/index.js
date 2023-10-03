import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home/Home';
import SilverPlan from './components/Cards/SilverPlan'
import GoldPlan from './components/Cards/GoldPlan'
import PlatinumPlan from './components/Cards/PlatinumPlan'
import CreateUser from './pages/CreateUser'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import UserDetails from './pages/UserDetails';
import AddUser from './pages/AddMembers';
import Login from './components/Login';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route exact path ="/login" element ={<Login/>}/>
        <Route exact path="/silver" element={<SilverPlan />} />
        <Route exact path="/gold" element={<GoldPlan />} />
        <Route exact path="/platinum" element={<PlatinumPlan />} />
        <Route exact path="/silver/create-user/:data" element={<CreateUser/>} />
        <Route exact path="/gold/create-user/:data" element={<CreateUser/>} />
        <Route exact path="/platinum/create-user/:data" element={<CreateUser/>} />
        <Route path="/createuser" element={<CreateUser />} />
        {/*<Route path="/editUser/:user_id" element={<EditUser />} />
         */}
          <Route index element={<newGrid />} />
          <Route path="/userdetails" element={<UserDetails />} />
          <Route path="/add-user" element={<AddUser title = {'Add Family'} />} />
      </Route>
    </Routes>
  </BrowserRouter>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
