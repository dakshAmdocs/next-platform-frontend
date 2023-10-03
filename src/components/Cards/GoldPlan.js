import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import { Typography, Button, Container, Grid, Card, CardContent } from '@mui/material';

const style = {
  position: 'absolute',
  top: '55%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'rgb(0,0,0,0.75)',
  // boxShadow: 24,
  color: 'white',
  p: 4,
  borderRadius: 5,
};

function GoldPlan() {

  return (

    <Container maxWidth="sm" sx={style}>

      <Card variant="outlined" sx={style}>

        <CardContent>

          <Typography variant="h3" color="white" gutterBottom>

            Gold Package

          </Typography>

          <Typography variant="body1" gutterBottom>

            Included Features:

          </Typography>

          <ul>

            <li>Amazon Prime Video Content</li>

            <li>Hotstar Premium Content</li>

            <li>Zee Free Content</li>

            <li>2k  Resolution</li>

            <li>No Ads</li>

            <li>Dolby Audio Supported</li>

          </ul>

          <Typography variant="h6" sx={{ mt: 2 }}>

            Price: ₹ 399 /-

          </Typography>

          <Link to="/gold/create-user/Gold">
          <Button variant="contained" color="primary" sx={{ mt: 3, width: '100%' }}>

            Buy Now

          </Button>
          </Link>
          

        </CardContent>

      </Card>

    </Container>

  );

}

 

export default GoldPlan;