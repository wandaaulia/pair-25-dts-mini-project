import React from 'react'
import ResponsiveNavbar from '../base/Appbar/Appbar';

const Navbar = ({home}) => {
    window.addEventListener("scroll", () => {
        let navigate = document.getElementById("nav");
        navigate.classList.toggle("scrolled", window.scrollY > 0);
    });
    return (
<<<<<<< HEAD
        <div id='nav' className='navbar'>
            <ResponsiveNavbar />
        </div>
=======
        <ResponsiveNavbar home={home}/>
>>>>>>> 09efabac824563bdc864d1a5e73f1967a6735128
    )
}

export default Navbar
