import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className='app__nav'>
        <div className='nav__blok'>
          <NavLink activeClassName='active' to='/profile'>Profile</NavLink>
        </div>
        <div className='nav__blok'>
          <NavLink activeClassName='active' to='/messages'>Messages</NavLink>
        </div>
        <div className='nav__blok'>
          <NavLink activeClassName='active' to='/news'>News</NavLink>
        </div>
        <div className='nav__blok'>
          <NavLink activeClassName='active' to='/music'>Music</NavLink>
        </div>
        <div className='nav__blok'>
          <NavLink activeClassName='active' to='/settings'>Settings</NavLink>
        </div>
      </nav>
    )
}

export default Navigation;