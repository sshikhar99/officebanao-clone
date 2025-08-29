// src/pages/Walkthroughs.js
import React from "react";

export default function Walkthroughs() {
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "60px 20px",
        lineHeight: 1.8,
        color: "#333",
      }}
    >
      <h1 style={{ fontSize: "36px", marginBottom: "20px", textAlign: "center" }}>
        Project Walkthroughs
      </h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        Explore our detailed project walkthroughs to see how we transform raw
        spaces into vibrant, efficient, and inspiring work environments.
      </p>

      <div style={{ display: "grid", gap: "25px" }}>
        <div
          style={{
            border: "1px solid #eee",
            borderRadius: "12px",
            padding: "20px",
            background: "#fff",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
          }}
        >
          <h2 style={{ marginBottom: "12px" }}>Tech Startup HQ</h2>
          <p>
            A modern and collaborative workspace designed for a 200-member
            technology team, featuring flexible workstations and vibrant
            breakout zones.
          </p>
        </div>

        <div
          style={{
            border: "1px solid #eee",
            borderRadius: "12px",
            padding: "20px",
            background: "#fff",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
          }}
        >
          <h2 style={{ marginBottom: "12px" }}>Corporate HQ Redesign</h2>
          <p>
            A corporate office redesigned to reflect brand identity, boost
            employee productivity, and incorporate smart technology for
            day-to-day operations.
          </p>
        </div>

        <div
          style={{
            border: "1px solid #eee",
            borderRadius: "12px",
            padding: "20px",
            background: "#fff",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
          }}
        >
          <h2 style={{ marginBottom: "12px" }}>Creative Studio</h2>
          <p>
            An open and flexible design studio built for designers and
            artists, fostering creativity and innovation.
          </p>
        </div>
      </div>
    </div>
  );
}
