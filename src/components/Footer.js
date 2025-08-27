// src/components/Footer.js
import React from "react";
import "./Footer.css"; // if you want to style separately

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo">OfficeBanao.in</h2>
        <p className="footer-text">
          Transforming your workspace into a modern, productive, and aesthetic environment.
        </p>
        <p className="footer-contact">
          📞 Contact: <a href="tel:+917683061117">7683061117</a>
          <br />
          🌐 Website: <a href="https://officebanao.in">officebanao.in</a>
        </p>
        <p className="footer-bottom">
          © 2025 OfficeBanao.in — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
