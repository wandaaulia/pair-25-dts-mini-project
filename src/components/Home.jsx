import React from 'react'
import Navbar from './base/Navbar.jsx';
import RegularListMovie from './base/RegularListMovie.jsx';
const Home = () => {
    return (
        <div className='bg_default'>
            <Navbar />
            <RegularListMovie title='Popular' progress={false} />
            <RegularListMovie title='Murat, Continue Watching' progress={true} />
            <RegularListMovie title='Original' heightImg='575' progress={false} />
            <RegularListMovie title='On the agenda' progress={false} />
        </div>
    )
}

export default Home
