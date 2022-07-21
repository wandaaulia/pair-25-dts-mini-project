import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApi } from '../../store/reducer.js'
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const RegularListMovie = ({ title, endpoint = 'discover/movie', imgResolution = 'w500' }) => {
    const dispatch = useDispatch()

    const staticState = useSelector(state => state.apis)
    const navigate = useNavigate()
    const toDetail = item => {
        navigate(`/movie/${item.id}`, { replace: true })
    }
    const [movie, setMovie] = useState([])
    const [swiperIdx, setSwiperIdx] = useState(0)
    const fetchData = async () => {
        try {
            let data = {
                path: endpoint
            }
            const res = await dispatch(fetchApi(data));
            setMovie(res.results.slice(0, 10))

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
                                    <div className='item_movie d-flex' onClick={() => toDetail(item)}>
                                        <img src={require(`../../assets/img/top_${i + 1}.png`)} alt="" />
                                        <img className='img_top_movie' src={`${staticState.host_img}${imgResolution}${item.poster_path}`} alt="" style={{ height: `195px` }} />
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
