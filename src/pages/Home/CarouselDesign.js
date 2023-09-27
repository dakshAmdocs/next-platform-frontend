import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Card, CardContent, Typography, Button, Grid, Container, Stack } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
//import Carousel from 'react-bootstrap/Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import './CarouselDesign.css';

const packages = [
  {
    id: 'silver',
    name: 'SILVER PLAN',
    price:  '@199 ONLY',
    description: 'Basic Features',
  },
  {
    id: 'gold',
    name: 'GOLD PLAN',
    price: '@399 ONLY',
    description: 'Value for money',
  },
  {
    id: 'platinum',
    name: 'PLATINUM PLAN',
    price: '@799 ONLY',
    description: 'Ultra max package',
  },
];


// import './PackageCarousel.css'; // Import the CSS file

const CarouselDesign = () => {

  return (
    <div className="carousel-container">
     
      <Carousel showThumbs={false} infiniteLoop autoPlay>
        {packages.map((pkg, index) => (
            <div className="cardStyle">
          <div key={index} className="package-slide">

            {/* <h2>{pkg.id}</h2> */}
            <h2>{pkg.name}</h2>
            <h3>{pkg.price}</h3>
            <h4>{pkg.description}</h4>
            <Link to={`/${pkg.id}`}><button class="btn btn-primary">See More</button></Link>
          </div>
          </div>
      
        ))}
      </Carousel>

    </div>

  );

};

 


export default CarouselDesign;