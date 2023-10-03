import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Container,
  Stack,
} from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
//import Carousel from 'react-bootstrap/Carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import './CarouselDesign.css';



import Box from "@mui/material/Box";

const style = {
  top: "50%",
  left: "50%",
  // transform: 'translate(-50%, -50%)',

 
  background: 'none',
  boxShadow: 10,
  borderRadius: 5,
  p: 4,
  
  // color: 'white'
  // backgroundColor: '#9EDDFF'
  // zIndex: -1,
};

const packages = [
  {
    id: "silver",
    name: "SILVER PLAN",
    price: "@199 ONLY",
    description: "Basic Features",
   
  },
  {
    id: "gold",
    name: "GOLD PLAN",
    price: "@399 ONLY",
    description: "Value for money",
    
  },
  {
    id: "platinum",
    name: "PLATINUM PLAN",
    price: "@799 ONLY",
    description: "Ultra max package",
  },
];


const CarouselDesign = () => {
  return (
    <>
      <Box sx={style}>
        <div className="carousel-container">
          <Carousel showThumbs={false} infiniteLoop autoPlay>
            {packages.map((pkg, index) => (
              <Link to={`/${pkg.id}`} style={{ textDecoration: "none" }}>
                {console.log(pkg.img)}
                <div className="cardStyle">
                  <div key={index} className="package-slide">


            {/* <h2>{pkg.id}</h2> */}
            <h2 style={{color: 'white'}}>{pkg.name}</h2>
            <h3 style={{color: 'white'}}>{pkg.price}</h3>
            <h4 style={{color: 'white'}}>{pkg.description}</h4>          
          </div>
          </div>
          </Link>
        ))}
       
      </Carousel>
     
    </div>
    </Box>

    </>
  );
};

export default CarouselDesign;
