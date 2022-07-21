import React, { useEffect, useState } from 'react'
import Footer from './base/Footer.jsx';
import Navbar from './base/Navbar.jsx';
import RegularListMovie from './base/RegularListMovie.jsx';
import { useDispatch, useSelector } from 'react-redux'
import { fetchApi } from '../store/reducer.js'
import { useParams } from "react-router-dom";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const MovieDetail = () => {
    const staticState = useSelector(state => state.apis)
    const dispatch = useDispatch()
    const [movie, setMovie] = useState([])
    const [yt, setYt] = useState('')
    const { id } = useParams();

    const youtubesearchapi = require('youtube-search-api');
    const [isPlaying, setIsPlaying] = useState(false)
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
            document.querySelector('.movie_detail_hero').style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${staticState.host_img}original${res.backdrop_path ? res.backdrop_path : res.poster_path})`
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchData()
        window.scrollTo(0, 0);
    }, [id])
    
    return (
        <div className='bg_default'>
            <Navbar />
            {
                !isPlaying ? (
                    <div className="movie_detail_hero">
                        <div className='temp_overview'>
                            <p className="title_movie_detail">{movie.original_title}</p>
                            <p className="color_default">{movie.overview}</p>
                            <div className="d-flex my-3">
                                <button className='btn_play' onClick={() => setIsPlaying(true)}>
                                    <PlayArrowIcon />
                                    <p className="txt_play">Play</p>
                                </button>
                                <button className='btn_info'>
                                    <InfoOutlinedIcon style={{ color: 'white' }} />
                                    <p className="txt_play color_default">More Information</p>
                                </button>
                            </div>
                            <div className="h100px"></div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <iframe width="100%" style={{ height: '100vh ' }}
                            src={`https://www.youtube.com/embed/${yt.id}`}>
                        </iframe>
                    </div>
                )
            }

            <div style={{ padding: '20px' }}>
                <p className=" color_default">Description</p>
                <p className=" color_default">{movie.overview} </p>
            </div>

            <RegularListMovie title='Popular' endpoint='movie/popular' />
            <RegularListMovie title='Murat, Continue Watching' progress={true} endpoint='movie/upcoming' />
            <RegularListMovie title='On the agenda' endpoint='trending/all/day' />
            <Footer />
        </div>
    )
}

export default MovieDetail
