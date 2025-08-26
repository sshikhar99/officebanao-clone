// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (location.pathname !== "/") return; // only track scroll on homepage

    const onScroll = () => {
      setScrolled(window.scrollY > 8);

      const ids = ["home", "about", "walkthroughs", "resources", "contact"];
      let current = "home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= 120 && r.bottom >= 120) {
          current = id;
          break;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        <div
          className="navbar-logo"
          onClick={() =>
            location.pathname === "/" ? scrollToSection("home") : (window.location.href = "/")
          }
        >
          OfficeBanao.in
        </div>

        <ul className="navbar-links">
          {/* Home link - scroll on homepage, redirect if not */}
          <li
            className={activeSection === "home" && location.pathname === "/" ? "active" : ""}
            onClick={() =>
              location.pathname === "/" ? scrollToSection("home") : (window.location.href = "/")
            }
          >
            Home
          </li>

          {/* About */}
          {location.pathname === "/" ? (
            <li
              className={activeSection === "about" ? "active" : ""}
              onClick={() => scrollToSection("about")}
            >
              About
            </li>
          ) : (
            <li>
              <Link to="/#about">About</Link>
            </li>
          )}

          {/* Projects - always separate page */}
          <li className={location.pathname === "/projects" ? "active" : ""}>
            <Link to="/projects">Projects</Link>
          </li>

          {/* Walkthroughs */}
          {location.pathname === "/" ? (
            <li
              className={activeSection === "walkthroughs" ? "active" : ""}
              onClick={() => scrollToSection("walkthroughs")}
            >
              Walkthroughs
            </li>
          ) : (
            <li>
              <Link to="/#walkthroughs">Walkthroughs</Link>
            </li>
          )}

          {/* Resources */}
          {location.pathname === "/" ? (
            <li
              className={activeSection === "resources" ? "active" : ""}
              onClick={() => scrollToSection("resources")}
            >
              Resources
            </li>
          ) : (
            <li>
              <Link to="/#resources">Resources</Link>
            </li>
          )}

          {/* Contact */}
          {location.pathname === "/" ? (
            <li
              className={activeSection === "contact" ? "active" : ""}
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </li>
          ) : (
            <li>
              <Link to="/#contact">Contact</Link>
            </li>
          )}
        </ul>

        <div className="navbar-contact">
          <a href="tel:+917683061117" className="call-btn" aria-label="Call us">
            <span className="phone-emoji">📞</span>
            <span className="phone-text">+91&nbsp;76830&nbsp;61117</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
