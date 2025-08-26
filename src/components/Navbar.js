import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);

      const ids = ["home", "about", "projects", "walkthroughs", "resources", "contact"];
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
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        <div className="navbar-logo" onClick={() => scrollToSection("home")}>
          OfficeBanao.in
        </div>

        <ul className="navbar-links">
          <li className={activeSection === "home" ? "active" : ""} onClick={() => scrollToSection("home")}>Home</li>
          <li className={activeSection === "about" ? "active" : ""} onClick={() => scrollToSection("about")}>About</li>
          <li className={activeSection === "projects" ? "active" : ""} onClick={() => scrollToSection("projects")}>Projects</li>
          <li className={activeSection === "walkthroughs" ? "active" : ""} onClick={() => scrollToSection("walkthroughs")}>Walkthroughs</li>
          <li className={activeSection === "resources" ? "active" : ""} onClick={() => scrollToSection("resources")}>Resources</li>
          <li className={activeSection === "contact" ? "active" : ""} onClick={() => scrollToSection("contact")}>Contact</li>
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
