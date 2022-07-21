/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApi } from '../../store/reducer.js'
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const RegularListMovie = ({ endpoint = 'discover/movie', imgResolution = 'w500' }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const toDetail = item => {
        navigate(`/movie/${item.id}`, { replace: true })
    }
    const staticState = useSelector(state => state.apis)

    const [movie, setMovie] = useState([])
    const fetchData = async () => {
        try {
            let data = {
                path: endpoint
            }
            const res = await dispatch(fetchApi(data));
            setMovie(res.results)

        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <Swiper id="main" navigation={true} slidesPerView={1} modules={[Navigation]} className="mySwiper">
                {
                    movie.map((item, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <div className='item_movie d-flex' onClick={() => toDetail(item)}>
                                    <div className="banner_info_movie">
                                        <div className="child_info">
                                            <h1 className='color_default'>{item.original_title}</h1>
                                            <div className="d-flex">
                                                <p className="color_default my-3">English</p>
                                            </div>
                                            <p className="color_default">{item.overview}</p>
                                        </div>

                                    </div>
                                    <div className='temp_img_banner'
                                        style={{ backgroundImage: `linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%), url(${staticState.host_img}${imgResolution}${item.backdrop_path})` }}>
                                    </div>

                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div >
    )
}

export default RegularListMovie
