import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApi } from '../../store/reducer.js'

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const RegularListMovie = ({ title, endpoint = 'discover/movie', imgResolution = 'w500' }) => {
    const dispatch = useDispatch()

    const staticState = useSelector(state => state.apis)

    const [movie, setMovie] = useState([])
    const [swiperIdx, setSwiperIdx] = useState(0)
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
        <div style={{ padding: `30px 0 30px` }}>
            <p className="title_default pl-20">{title}</p>
            <div className={`temp_list_movie ${swiperIdx < 1 ? 'pl-20' : 'pl-0'}`}>
                <Swiper id="main" navigation={true} slidesPerView={5} slidesPerGroup={5} modules={[Navigation]} className="mySwiper" onSlideChange={(ev) => setSwiperIdx(ev.activeIndex)}>
                    {
                        movie.map((item, i) => {
                            return (
                                <SwiperSlide key={i}>
                                    <div className='item_movie'>
                                        
                                        <img className='img_top_movie' src={`${staticState.host_img}${imgResolution}${item.poster_path}`} alt="" style={{ height: `160px` }} />
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
