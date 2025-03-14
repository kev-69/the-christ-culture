import React from 'react';
import './Footer.css'

import { FaInstagram, FaSnapchat, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";


function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 The Christ Culture</p>
      
      <div className="social-icons">
        {/* <a href="https://instagram.com/thechristculture" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram size={20} />
        </a> */}
        <a href="https://snapchat.com/t/Es7OCDgr" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaSnapchat size={20} />
        </a>
        {/* <a href="https://twitter.com/christculture" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaXTwitter size={20} />
        </a> */}
        <a href="https://www.tiktok.com/@the.christ.cultur?_t=ZM-8ug3MPoZh1q&_r=1" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaTiktok size={20} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;