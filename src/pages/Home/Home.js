import * as React from 'react';
import { Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import CarouselDesign from './CarouselDesign'

const Home = () => {

    return(
        <Stack spacing={3} alignItems={"center"}>
            <CarouselDesign/>
        </Stack>
    )
}

export default Home;