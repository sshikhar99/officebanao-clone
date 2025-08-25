import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className={`nav-links ${open ? 'open' : ''}`}>
        <li><Link to="hero" smooth={true} duration={500} offset={-70}>Home</Link></li>
        <li><Link to="projects" smooth={true} duration={500} offset={-70}>Projects</Link></li>
        <li><Link to="how-we-work" smooth={true} duration={500} offset={-70}>How We Work</Link></li>
        <li><Link to="contact" smooth={true} duration={500} offset={-70}>Contact</Link></li>
      </div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
