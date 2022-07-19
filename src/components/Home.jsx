import React from 'react'
import Footer from './base/Footer.jsx';
import Navbar from './base/Navbar.jsx';
import RegularListMovie from './base/RegularListMovie.jsx';
import TopMovie from './base/TopTenMovie.jsx';
import BannerListMovie from './base/BannerListMovie.jsx';
const Home = () => {
    return (
        <div className='bg_default'>
            <Navbar />
            <BannerListMovie imgResolution='original' />
            <RegularListMovie title='Popular' endpoint='movie/popular' />
            <RegularListMovie title='Murat, Continue Watching' progress={true} endpoint='movie/upcoming' />
            <RegularListMovie title='Original' heightImg='575' endpoint='tv/popular' />
            <TopMovie title='Top 10' endpoint='movie/popular' />
            <RegularListMovie title='On the agenda' endpoint='trending/all/day' />
            <Footer />
        </div>
    )
}

export default Home
