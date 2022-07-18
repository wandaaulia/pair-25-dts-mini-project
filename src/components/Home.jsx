import React from 'react'
import Navbar from './base/Navbar.jsx';
import RegularListMovie from './base/RegularListMovie.jsx';
const Home = () => {
    return (
        <div className='bg_default'>
            <Navbar />
            <RegularListMovie title='Popular' />
            <RegularListMovie title='On the agenda' />
        </div>
    )
}

export default Home
