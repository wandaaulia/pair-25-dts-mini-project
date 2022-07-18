import React from 'react'
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux'
const Home = () => {
    const balance = useSelector(state => state.apis)
    return (
        <div className='bg_default'>
            <Button variant="contained">{balance.env}</Button>
        </div>
    )
}

export default Home
