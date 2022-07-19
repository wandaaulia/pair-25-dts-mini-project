import React from 'react'
import Footer from './base/Footer.jsx';
import Navbar from './base/Navbar.jsx';
import RegularListMovie from './base/RegularListMovie.jsx';

const Home = () => {
    return (
        <div className='bg_default'>
            <Navbar />
            <RegularListMovie title='Popular' progress={false} endpoint='movie/popular' />
            <RegularListMovie title='Murat, Continue Watching' progress={true} endpoint='movie/upcoming' />
            <RegularListMovie title='Original' heightImg='575' progress={false} endpoint='tv/popular' />
            <RegularListMovie title='On the agenda' progress={false} endpoint='trending/all/day' />
            <Footer />
        </div>
    )
}

export default Home
