import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li><Link to="about" smooth={true} duration={500} offset={-70}>About</Link></li>
        <li><Link to="projects" smooth={true} duration={500} offset={-70}>Portfolio</Link></li>
        <li><Link to="walkthroughs" smooth={true} duration={500} offset={-70}>Walkthroughs</Link></li>
        <li><Link to="resources" smooth={true} duration={500} offset={-70}>Resources</Link></li>
        <li><Link to="contact" smooth={true} duration={500} offset={-70}>Contact</Link></li>
      </ul>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
