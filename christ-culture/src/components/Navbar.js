import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import './Navbar.css';

import logo from "../assets/images/logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {isMobile && (
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
        
        {!isMobile && <a href="/shop" className="nav-link">Shop</a>}
        
        <div className="logo">
          <a href="/"><img src={logo} alt="The Christ Culture Logo" /></a>
        </div>
        
        {!isMobile && <a href="/about" className="nav-link">About</a>}
        
        <div className="search-icon">
          <Search size={24} />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="mobile-menu">
          <a href="/shop" className="nav-link">Shop</a>
          <a href="/about" className="nav-link">About</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;