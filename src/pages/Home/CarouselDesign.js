import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Card, CardContent, Typography, Button, Grid, Container } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
//import Carousel from 'react-bootstrap/Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';

const packages = [
  {
    id: 'silver',
    name: 'SILVER PLAN @199 ONLY',
    description: 'Basic Features',
  },
  {
    id: 'gold',
    name: 'GOLD PLAN @399 ONLY',
    description: 'Value for money',
  },
  {
    id: 'platinum',
    name: 'PLATINUM PLAN @799 ONLY',
    description: 'Ultra max package',
  },
];


// import './PackageCarousel.css'; // Import the CSS file

 

const CarouselDesign = () => {

  return (
    <div className="carousel-container">

      <Carousel showThumbs={false} infiniteLoop autoPlay>
        {packages.map((pkg, index) => (
          <Link className="btn" to={`/${pkg.id}`} >
          <div key={index} className="package-slide">

            {/* <h2>{pkg.id}</h2> */}
            <h2>{pkg.name}</h2>
            <h4>{pkg.description}</h4>

          </div>
          </Link>
        ))}
      </Carousel>

    </div>

  );

};

 


export default CarouselDesign;