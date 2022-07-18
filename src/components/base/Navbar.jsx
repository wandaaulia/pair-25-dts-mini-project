import React from 'react'

const Navbar = () => {
    window.addEventListener("scroll", () => {
        let navigate = document.getElementById("nav");
        navigate.classList.toggle("scrolled", window.scrollY > 0);
    });
    return (
        <div className='navbar' id='nav'>
            <img src={require("../../assets/img/logo-m.png")} className='logo_nav' alt="" />
        </div>
    )
}

export default Navbar
