import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';





export default function OutlinedCard(props) {
    console.log(props)
  return (
    <Box >
      <Card variant="outlined" ><React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        &#8377;{props.planPrice}
      </Typography>
      <Typography variant="h5" component="div">
        {props.planName}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {props.planDetails}
      </Typography>
      <Typography variant="body2">
       
        <br />
        
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" href={`/${props.planName}`} >Upgrade Now</Button>
    </CardActions>
  </React.Fragment></Card>
    </Box>
  );
}
