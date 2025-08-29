import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About", special: true },          // ✅ scroll OR page
  { id: "projects", label: "OurWork", isPage: true },      // separate page
  { id: "walkthroughs", label: "Walkthroughs", special: true }, // ✅ scroll OR page
  { id: "resources", label: "Resources", special: true },  // ✅ scroll OR page
  { id: "blogs", label: "Blogs", isPage: true },
  { id: "partner", label: "Become a Partner", isPage: true },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (id, isPage, special) => (e) => {
    e.preventDefault();

    // Blogs
    if (id === "blogs") {
      navigate("/blogs");
      return;
    }

    // Partner
    if (id === "partner") {
      navigate("/become-partner");
      return;
    }

    // Projects
    if (isPage) {
      if (location.pathname === "/projects") {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      } else {
        navigate("/projects");
      }
      return;
    }

    // About / Walkthroughs / Resources special behavior
    if (special) {
      if (location.pathname === "/") {
        // Already on home → scroll to section
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        // On other page → navigate to dedicated page
        navigate(`/${id}`);
      }
      return;
    }

    // Default in-page section scroll
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
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
          {LINKS.map(({ id, label, isPage, special }) => (
            <a
              key={id}
              href={isPage ? `/${id}` : `/#${id}`}
              onClick={handleClick(id, isPage, special)}
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
