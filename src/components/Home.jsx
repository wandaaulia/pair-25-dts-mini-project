import React from 'react'
import Button from '@mui/material/Button';
import ResponsiveNavbar from './base/Appbar/Appbar';
import tmdb from '../apis/tmdb';
import MovieList from './base/Movie/MovieList';

const Home = () => {
    return (
        <>
        <ResponsiveNavbar/> 
            {/* <Button variant="contained">Hello World</Button> */}
            <MovieList />
        </>
    )
}

export default Home
