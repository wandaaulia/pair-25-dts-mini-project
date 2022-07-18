import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApi } from '../../store/reducer.js'
const RegularListMovie = (props) => {
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
            <p className="title_default">{props.title}</p>
            <div className='temp_list_movie'>
                {
                    movie.map((item, i) => {
                        return (
                            <div className="item_movie color_default" key={i}>
                                <img className='item_movie' src={`${staticState.host_img}${item.poster_path}`} alt="" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RegularListMovie
