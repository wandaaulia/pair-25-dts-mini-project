import React, { useEffect, useState } from 'react'
import Footer from './base/Footer.jsx';
import Navbar from './base/Navbar.jsx';
import RegularListMovie from './base/RegularListMovie.jsx';
import { useDispatch, useSelector } from 'react-redux'
import { fetchApi } from '../store/reducer.js'
import { useParams } from "react-router-dom";
const MovieDetail = () => {
    const staticState = useSelector(state => state.apis)
    const dispatch = useDispatch()
    const [movie, setMovie] = useState([])
    const { id } = useParams();

    // let [vm, setVm] = useState('')
    // setVm(useParams())
    const fetchData = async () => {
        try {
            let data = {
                path: `movie/${id}`
            }
            const res = await dispatch(fetchApi(data));
            setMovie(res)

        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {

        fetchData()
    }, [])
    return (
        <div className='bg_default'>
            <Navbar />
            <div className="movie_detail_hero" style={{
                backgroundImage: `url(${staticState.host_img}original${movie.backdrop_path})`
            }}>
                <div className='temp_overview'>
                    <p className="title_movie_detail">{movie.original_title}</p>
                    <p className="color_default">{movie.overview}</p>
                    <div className="h100px"></div>
                </div>
            </div>
            <RegularListMovie title='Popular' endpoint='movie/popular' />
            <RegularListMovie title='Murat, Continue Watching' progress={true} endpoint='movie/upcoming' />
            <RegularListMovie title='On the agenda' endpoint='trending/all/day' />
            <Footer />
        </div>
    )
}

export default MovieDetail
