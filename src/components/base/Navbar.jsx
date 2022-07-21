import React from 'react'
import ResponsiveNavbar from '../base/Appbar/Appbar';

const Navbar = ({home}) => {
    window.addEventListener("scroll", () => {
        let navigate = document.getElementById("nav");
        navigate.classList.toggle("scrolled", window.scrollY > 0);
    });
    return (
        <ResponsiveNavbar home={home}/>
    )
}

export default Navbar
