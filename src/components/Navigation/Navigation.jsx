import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className='app__nav'>
        <div className='nav__blok'>
          <NavLink className='active' to='/profile'>Profile</NavLink>
        </div>
        <div className='nav__blok'>
          <NavLink className='active' to='/messages'>Messages</NavLink>
        </div>
        <div className='nav__blok'>
          <NavLink className='active' to='/news'>News</NavLink>
        </div>
        <div className='nav__blok'>
          <NavLink className='active' to='/music'>Music</NavLink>
        </div>
        <div className='nav__blok'>
          <NavLink className='active' to='/settings'>Settings</NavLink>
        </div>
      </nav>
    )
}

export default Navigation;