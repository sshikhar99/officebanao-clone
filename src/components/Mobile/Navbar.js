import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (id) => {
    setIsOpen(false); // close menu
    navigate("/", { state: { scrollTo: id } }); // scroll to section
  };

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

        {[
          { id: "home", label: "Home" },
          { id: "about", label: "About" },
          { id: "projects", label: "Projects" },
          { id: "walkthroughs", label: "Walkthroughs" },
          { id: "resources", label: "Resources" },
          { id: "contact", label: "Contact" },
        ].map((item) => (
          <div
            key={item.id}
            onClick={() => handleNavClick(item.id)}
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
