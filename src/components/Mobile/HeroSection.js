// components/Mobile/HeroSection.js
import React from "react";

export default function MobileHero() {
  return (
    <section
      style={{
        padding: "60px 20px",
        textAlign: "center",
        fontFamily: "'Poppins', sans-serif",
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)", // matches dark tone
        color: "#fff",
      }}
    >
      <h1 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "15px" }}>
        Welcome to <span style={{ color: "#f8b400" }}>OfficeBanao</span>
      </h1>
      <p style={{ fontSize: "16px", marginBottom: "25px", lineHeight: "1.6" }}>
        We design modern and functional workspaces for startups and enterprises.
      </p>
      <a
        href="#projects"
        style={{
          display: "inline-block",
          padding: "12px 25px",
          backgroundColor: "#f8b400",
          color: "#222",
          fontWeight: "600",
          borderRadius: "30px",
          textDecoration: "none",
          fontSize: "14px",
        }}
      >
        View Projects
      </a>
    </section>
  );
}
