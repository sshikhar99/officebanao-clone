// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "../components/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Scroll to section on homepage
  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scroll.scrollTo(document.getElementById(id).offsetTop - 60, {
          smooth: true,
          duration: 500,
        });
      }, 300);
    } else {
      scroll.scrollTo(document.getElementById(id).offsetTop - 60, {
        smooth: true,
        duration: 500,
      });
    }
    closeMenu();
  };

  // Track active section
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const sections = ["home", "about", "projects", "walkthroughs", "resources", "contact"];
      let current = "";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 80) {
          current = id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>OfficeBanao.in</Link>
      </div>

      {/* Hamburger for mobile */}
      <div className="hamburger" onClick={handleMenuToggle}>
        {menuOpen ? "✖" : "☰"}
      </div>

      {/* Nav Links */}
      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        {location.pathname === "/" && (
          <>
            <li
              className={activeSection === "home" ? "active" : ""}
              onClick={() => scrollToSection("home")}
            >
              Home
            </li>
            <li
              className={activeSection === "about" ? "active" : ""}
              onClick={() => scrollToSection("about")}
            >
              About
            </li>
          </>
        )}

        {/* Projects always redirect */}
        <li className={location.pathname === "/projects" ? "active" : ""}>
          <Link to="/projects" onClick={closeMenu}>Projects</Link>
        </li>

        {location.pathname === "/" && (
          <>
            <li
              className={activeSection === "walkthroughs" ? "active" : ""}
              onClick={() => scrollToSection("walkthroughs")}
            >
              Walkthroughs
            </li>
            <li
              className={activeSection === "resources" ? "active" : ""}
              onClick={() => scrollToSection("resources")}
            >
              Resources
            </li>
            <li
              className={activeSection === "contact" ? "active" : ""}
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </li>
          </>
        )}

        {/* Phone button in dropdown (mobile) */}
        <div className="navbar-contact mobile-only">
          <a href="tel:+917683061117" className="call-btn" aria-label="Call us">
            📞 +91 76830 61117
          </a>
        </div>
      </ul>

      {/* Phone button desktop */}
      <div className="navbar-contact desktop-only">
        <a href="tel:+917683061117" className="call-btn" aria-label="Call us">
          📞 +91 76830 61117
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
