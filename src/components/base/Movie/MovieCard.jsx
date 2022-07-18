import { Box, CardMedia, Rating } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import './movie.css';


const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";

const MovieCard = ({ movie }) => {
  return (
    <Card id={movie.id} sx={{ display: 'block'}} className="card-movie">
      <CardMedia
        component="img"
        sx={{}}
        image={`${BASE_IMAGE_URL}${movie.poster_path}`}
        alt="Movie poster"
        className='movie-popular'
      />

    </Card>
  );
}

export default MovieCard;