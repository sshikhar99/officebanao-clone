// src/components/Navbar.js
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects", isPage: true }, // separate page
  { id: "walkthroughs", label: "Walkthroughs" },
  { id: "resources", label: "Resources" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (id, isPage) => (e) => {
    e.preventDefault();

    if (isPage) {
      // Always navigate to /projects
      if (location.pathname === "/projects") {
        // already there → scroll to top
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      } else {
        navigate("/projects");
      }
      return;
    }

    // For in-page sections (About, Walkthroughs, etc.)
    if (location.pathname !== "/") {
      // coming from /projects (or anywhere else) → go home, then scroll
      navigate("/", { state: { scrollTo: id } });
    } else {
      // Already on Home → just scroll
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <header className="ob-navbar">
      <div className="ob-container">
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate("/", { state: { scrollTo: "home" } });
          }}
          className="ob-logo"
        >
          OfficeBanao.in
        </a>

        {/* Links */}
        <nav className="ob-nav">
          {LINKS.map(({ id, label, isPage }) => (
            <a
              key={id}
              href={isPage ? "/projects" : `/#${id}`}
              onClick={handleClick(id, isPage)}
              className="ob-link"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Call button */}
        <a href="tel:+917683061117" className="ob-call">
          <span className="ob-call-icon">📞</span>
          <span className="ob-call-text">+91 76830 61117</span>
        </a>
      </div>
    </header>
  );
}
