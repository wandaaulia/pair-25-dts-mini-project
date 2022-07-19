import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApi } from '../../store/reducer.js'

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const RegularListMovie = ({ endpoint = 'discover/movie', imgResolution = 'w500' }) => {
    const dispatch = useDispatch()

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
                                <div className='item_movie'>
                                    <img className='img_movie' src={`${staticState.host_img}${imgResolution}${item.backdrop_path}`} alt="" style={{ height: `70vh` }} />

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
