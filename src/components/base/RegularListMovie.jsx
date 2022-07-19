import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApi } from '../../store/reducer.js'

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const RegularListMovie = ({ title, progress = false, heightImg = '160' }) => {
    const dispatch = useDispatch()

    const staticState = useSelector(state => state.apis)

    const [movie, setMovie] = useState([])
    const fetchData = async () => {
        try {
            let data = {
                path: 'discover/movie'
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
        <div style={{ padding: '30px 0 30px 20px' }}>
            <p className="title_default">{title}</p>
            <div className='temp_list_movie'>
                <Swiper id="main" navigation={true} slidesPerView={5} modules={[Navigation]} className="mySwiper">
                    {
                        movie.map((item, i) => {
                            return (
                                <SwiperSlide key={i}>
                                    <div className='item_movie'>
                                        <img className='img_movie' src={`${staticState.host_img}${item.poster_path}`} alt="" style={{ height: `${heightImg}px` }} />
                                        <div className="d-flex justify-center">
                                            <div className={progress ? 'parent_progress' : 'dp_none'}>
                                                <div className="value_progress" style={{ width: `${Math.floor(Math.random() * 95) + 1}%` }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div >
    )
}

export default RegularListMovie
