import React from 'react'
import ResponsiveNavbar from '../base/Appbar/Appbar';

const Navbar = () => {
    window.addEventListener("scroll", () => {
        let navigate = document.getElementById("nav");
        navigate.classList.toggle("scrolled", window.scrollY > 0);
    });
    return (
        <div id='nav' className='navbar'>
            <ResponsiveNavbar />
        </div>
    )
}

export default Navbar
