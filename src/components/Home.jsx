import React from 'react'
import Footer from './base/Footer.jsx';
import Navbar from './base/Navbar.jsx';
import RegularListMovie from './base/RegularListMovie.jsx';

const Home = () => {
    return (
        <div className='bg_default'>
            <Navbar home={true}/>
            <RegularListMovie title='Popular' />
            <RegularListMovie title='On the agenda' />
            <Footer />
        </div>
    )
}

export default Home
