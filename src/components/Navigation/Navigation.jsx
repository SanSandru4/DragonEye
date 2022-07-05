import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className='app__nav nav'>
        <div className='nav__blok'>
          <Link className='nav__link' to='/profile'>Profile</Link>
        </div>
        <div className='nav__blok'>
          <Link className='nav__link' to='/massages'>Massages</Link>
        </div>
        <div className='nav__blok'>
          <Link className='nav__link' to='/news'>News</Link>
        </div>
        <div className='nav__blok'>
          <Link className='nav__link' to='/music'>Music</Link>
        </div>
        <div className='nav__blok'>
          <Link className='nav__link' to='/settings'>Settings</Link>
        </div>
      </nav>
    )
}

export default Navigation;