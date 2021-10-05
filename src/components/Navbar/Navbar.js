import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
// import * as faIcons from 'react-icons/fa';
const Navbar = () => {
  return (
    <>
      <nav className='nav-items'>
        <div className='nav-menu-items'>
          <div className='navbar'>
            {/* <NavLink to='#'  className='menu-bar'>
              <faIcons.FaBars />
            </NavLink> */}
          </div>
          <NavLink to='/' activeClassName='nav-item'>
            Home
          </NavLink>

          <NavLink to='/studentdata' className='nav-item'>
            Students
          </NavLink>

          <NavLink to='/search' className='nav-item'>
           Search
          </NavLink>
          <NavLink to='/login' className='nav-item-right'>
            Login IN
          </NavLink>
          <NavLink to='/signup' className='nav-item-right'>
            Sign Up
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
