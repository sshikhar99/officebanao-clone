import React from "react";
import "./Header.css";
import phoneIcon from "../assets/phone-icon.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">OfficeBanao</div>
      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Portfolio</a>
        <a href="#walkthroughs">Walkthroughs</a>
        <a href="#resources">Resources</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="contact">
        <img src={phoneIcon} alt="phone" />
        <span>+91 7683061117</span>
      </div>
    </header>
  );
};

export default Header;
