import React from 'react';
import './Navbar.css';

import logo from "../assets/images/logo.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/shop" className="nav-link">Shop</a>
        
        <div className="logo">
          <a href="/"><img src={logo} alt="The Christ Culture Logo" /></a>
        </div>
        
        <a href="/about" className="nav-link">About</a>
      </div>
    </nav>
  );
};

export default Navbar;