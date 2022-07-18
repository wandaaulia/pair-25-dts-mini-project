import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import tmdb from '../../../apis/tmdb';
import MovieCard from './MovieCard';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import './movie.css';
const MovieList = () => {
    const [moviesPopular, setMoviesPopular] = useState([]);
    

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const fetchedMovies = await tmdb.get("/movie/popular");
                setMoviesPopular(fetchedMovies.data.results);
            } catch (error) {
                console.log(error);
            }
        }

        fetchMovies();
    }, []);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            mt: 3,
            mx: 5,
        }}>
        <Swiper id="main" navigation={true} slidesPerView={5} modules={[Navigation]} className="mySwiper"> 
        {
                moviesPopular.map(movie => (
                <SwiperSlide key={movie.id}>
                     <MovieCard movie={movie} key={movie.id}/>
                </SwiperSlide>
                ))
            }
         </Swiper>
        </Box>
    );
}

export default MovieList;
