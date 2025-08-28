// src/components/Mobile/About.js
import React from "react";

export default function MobileAbout() {
  return (
    <section
      id="about"
      style={{
        padding: "60px 20px",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "600",
          marginBottom: "15px",
          color: "#222",
        }}
      >
        About Us
      </h2>
      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.6",
          color: "#555",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        We create modern and functional office designs tailored for startups and
        enterprises. Our mission is to deliver innovative, collaborative, and
        productive workspaces that align with your company’s vision.
      </p>
    </section>
  );
}
