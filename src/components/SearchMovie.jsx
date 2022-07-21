import React from 'react'
import Navbar from './base/Navbar'

const SearchMovie = () => {
    return (
        <div className='bg_default'>
            <Navbar />
            <div style={{ paddingTop: '80px' }}>
                <div className="d-flex justify-center" style={{ padding: '0 50px' }}>
                    <input type="text" placeholder='search' />
                </div>
            </div>
        </div>
    )
}

export default SearchMovie
