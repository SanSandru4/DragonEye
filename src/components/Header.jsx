import React from "react";
import logo from './../logo-dragon.png'
import './../App.css';

const Header = () => {
    return (
        <header className='app__header header'>
        <img className='header__img' src={logo} alt='logo' />
      </header>
    );
}

export default Header