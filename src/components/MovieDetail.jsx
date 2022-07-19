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
    const [yt, setYt] = useState('')
    const { id } = useParams();

    // let [vm, setVm] = useState('')
    // setVm(useParams())
    const youtubesearchapi = require('youtube-search-api');
    const fetchData = async () => {
        try {
            let data = {
                path: `movie/${id}`
            }
            const res = await dispatch(fetchApi(data));
            setMovie(res)
            youtubesearchapi.GetListByKeyword(res.original_title, [false], [1]).then(data => {
                setYt(data.items[0])
            })
            document.querySelector('.movie_detail_hero').style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${staticState.host_img}original${res.backdrop_path})`
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
            <div className="movie_detail_hero" >
                <div className='temp_overview'>
                    <p className="title_movie_detail">{movie.original_title}</p>
                    <p className="color_default">{movie.overview}</p>
                    <div className="h100px"></div>
                </div>
            </div>
            {/* <iframe width="100%" style={{ height: '100vh ' }}
                src={`https://www.youtube.com/embed/${yt.id}`}>
            </iframe> */}
            <RegularListMovie title='Popular' endpoint='movie/popular' />
            <RegularListMovie title='Murat, Continue Watching' progress={true} endpoint='movie/upcoming' />
            <RegularListMovie title='On the agenda' endpoint='trending/all/day' />
            <Footer />
        </div>
    )
}

export default MovieDetail
