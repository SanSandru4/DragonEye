import React from "react";
import './../App.css';

const Navigation = () => {
    return (
        <nav className='app__nav nav'>
        <div className='nav__blok'>
          <a className='nav__link' href='#s'>Profile</a>
        </div>
        <div className='nav__blok'>
          <a className='nav__link' href='#s'>Massages</a>
        </div>
        <div className='nav__blok'>
          <a className='nav__link' href='#s'>News</a>
        </div>
        <div className='nav__blok'>
          <a className='nav__link' href='#s'>Music</a>
        </div>
        <div className='nav__blok'>
          <a className='nav__link' href='#s'>Settings</a>
        </div>
      </nav>
    )
}

export default Navigation;