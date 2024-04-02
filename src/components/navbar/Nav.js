import React from 'react'
import { NavLink } from 'react-router-dom'
import "../navbar/nav.css";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light ">
    
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active nav-link">
        <NavLink to="/home">Home </NavLink>
        </li>
        <li className="nav-item active nav-link">
        <NavLink to="/shop">Shop </NavLink>
        </li>
        <li className="nav-item active nav-link">
        <NavLink to="/sale">Sale </NavLink>
        </li>
        <li className="nav-item active nav-link">
        <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className='icon pb-2'>
        <i className="bi bi-search"></i></li>
        <li className='icon pb-2'><i class="bi bi-bag"></i></li>
        <li className='icon pb-2'><i class="bi bi-list"></i></li>
        
       
      </ul>
    </div>
  </nav>
  )
}

export default Nav