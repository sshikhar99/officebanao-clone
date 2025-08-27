import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close menu on click (mobile)
    }
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
        {/* Logo */}
        <div
          className="navbar-logo"
          onClick={() => (window.location.href = "/")}
        >
          OfficeBanao.in
        </div>

        {/* Mobile toggle */}
        <div
          className="navbar-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Links */}
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

          {/* Always available Projects link */}
          <li className={location.pathname === "/projects" ? "active" : ""}>
            <Link to="/projects" onClick={() => setMenuOpen(false)}>
              Projects
            </Link>
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

          {/* Contact button also inside menu for mobile */}
          <li className="navbar-contact">
            <a
              href="tel:+917683061117"
              className="call-btn"
              aria-label="Call us"
              onClick={() => setMenuOpen(false)}
            >
              <span className="phone-emoji">📞</span>
              <span className="phone-text">+91&nbsp;76830&nbsp;61117</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;