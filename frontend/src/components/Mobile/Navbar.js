import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (id, special, isPage) => {
    setIsOpen(false); // close menu

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

    // Projects page
    if (id === "projects" || isPage) {
      navigate("/projects");
      return;
    }

    // Special items (About, Walkthroughs, Resources)
    if (special) {
      if (location.pathname === "/") {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        navigate(`/${id}`);
      }
      return;
    }

    // Default → scroll on home
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About", special: true },
    { id: "projects", label: "Our Work", isPage: true },
    { id: "walkthroughs", label: "Walkthroughs", special: true },
    { id: "resources", label: "Resources", special: true },
    { id: "blogs", label: "Blogs" },
    { id: "partner", label: "Become a Partner" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 20px",
        background: "#111",
        color: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <div
        style={{ fontWeight: "bold", fontSize: "18px", cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        OfficeBanao
      </div>

      {/* Call button */}
      <a
        href="tel:+917683061117"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          background: "#00c4ff",
          color: "#fff",
          padding: "6px 12px",
          borderRadius: "30px",
          fontWeight: "600",
          fontSize: "14px",
          textDecoration: "none",
          whiteSpace: "nowrap",
        }}
      >
        📞 <span className="phone-text">+91 76830 61117</span>
      </a>

      {/* Hamburger Button */}
      <div
        style={{ cursor: "pointer", fontSize: "26px" }}
        onClick={() => setIsOpen(true)}
      >
        ☰
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.4)",
            zIndex: 999,
          }}
        />
      )}

      {/* Slide-in Drawer */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: isOpen ? "0" : "-70%",
          width: "70%",
          height: "100vh",
          background: "#222",
          color: "#fff",
          transition: "right 0.3s ease-in-out",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          paddingTop: "60px",
        }}
      >
        {/* Close Button */}
        <div
          style={{
            position: "absolute",
            top: "15px",
            right: "20px",
            fontSize: "26px",
            cursor: "pointer",
          }}
          onClick={() => setIsOpen(false)}
        >
          ✕
        </div>

        {/* Nav Links */}
        {navItems.map((item) => (
          <div
            key={item.id}
            onClick={() => handleNavClick(item.id, item.special, item.isPage)}
            style={{
              padding: "16px 20px",
              borderBottom: "1px solid #333",
              cursor: "pointer",
              fontSize: "18px",
            }}
          >
            {item.label}
          </div>
        ))}
      </div>
    </nav>
  );
}
