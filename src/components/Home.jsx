import React, { useEffect } from 'react'
import Footer from './base/Footer.jsx';
import Navbar from './base/Navbar.jsx';
import RegularListMovie from './base/RegularListMovie.jsx';
import TopMovie from './base/TopTenMovie.jsx';
import BannerListMovie from './base/BannerListMovie.jsx';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const [user, loading] = useAuthState(auth);
    let useName = ''
    if (user) {
        useName = user.displayName ? user.displayName.split(" ")[0] : user.email
    }

    return (
        <div className='bg_default'>
            <Navbar />
            <BannerListMovie imgResolution='original' endpoint='movie/now_playing?' />
            <RegularListMovie title='Popular' endpoint='movie/popular?' />
            {user && !loading ? (
                <RegularListMovie title={`${useName}, Continue Watching`} progress={true} endpoint='movie/upcoming?' />
            ) : <></>}
            <RegularListMovie title='Original' heightImg='575' endpoint='movie/top_rated?' />
            <TopMovie title='Top 10' endpoint='movie/popular?' />
            <RegularListMovie title='On the agenda' endpoint='trending/all/day?' />
            <Footer />
        </div>
    )
}

export default Home
