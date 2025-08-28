import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Projects() {
  const location = useLocation();

  const projects = [
    { id: 1, title: "Creative Studio", image: "..." },
    { id: 2, title: "Minimalist Office", image: "..." },
    // etc
  ];

  return (
    <section id="projects" style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Projects</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {projects.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #eee",
              borderRadius: "12px",
              padding: "16px",
              background: "#fff",
              boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              textAlign: "center",
            }}
          >
            <img
              src={p.image}
              alt={p.title}
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "12px",
              }}
            />
            <h3 style={{ margin: 0 }}>{p.title}</h3>
          </div>
        ))}
      </div>

      {/* ✅ Show button ONLY on homepage */}
      {location.pathname === "/" && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Link to="/projects">
            <button
              style={{
                padding: "10px 20px",
                background: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              View All Projects
            </button>
          </Link>
        </div>
      )}
    </section>
  );
}
