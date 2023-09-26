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
    name: 'Silver Plan',
    description: 'Basic Features',
  },
  {
    id: 'gold',
    name: 'Gold Plan',
    description: 'Enhanced Features',
  },
  {
    id: 'platinum',
    name: 'Platinum Plan',
    description: 'Premium Features',
  },
];


// import './PackageCarousel.css'; // Import the CSS file

 

const CarouselDesign = () => {

  return (
    <div className="carousel-container">

      <Carousel showThumbs={false} infiniteLoop autoPlay>
        {packages.map((pkg, index) => (
          <Link className="btn mw-100" to={`/${pkg.id}`} >
          <div key={index} className="package-slide">

            <h2>{pkg.id}</h2>
            <p>{pkg.name}</p>
            <p>{pkg.description}</p>

          </div>
          </Link>
        ))}
      </Carousel>

    </div>

  );

};

 


export default CarouselDesign;