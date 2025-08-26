// src/components/Footer.js
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>OfficeBanao.in</h2>
        <p>
          Transforming your workspace into a modern, productive, and aesthetic environment.
        </p>

        <div className="footer-contact">
          <p>
            📞 Contact: <a href="tel:7683061117">7683061117</a>
          </p>
          <p>
            🌐 Website: <a href="https://officebanao.in">officebanao.in</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} OfficeBanao.in — All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
