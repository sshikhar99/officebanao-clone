import React from "react";
import { Link, useLocation } from "react-router-dom";

// ✅ Import your images from src/assets
import project1 from "../../assets/project1.webp";
import project2 from "../../assets/project2.webp";
import project3 from "../../assets/project3.webp";

export default function Projects() {
  const location = useLocation();

  const projects = [
    { id: 1, title: "Creative Studio", image: project1 },
    { id: 2, title: "Minimalist Office", image: project2 },
    { id: 3, title: "Corporate Hub", image: project3 },
  ];

  return (
    <section id="projects" style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Projects</h2>

      {/* ✅ Grid layout for mobile, aligns images properly */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "16px",
        }}
      >
        {projects.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #eee",
              borderRadius: "12px",
              padding: "12px",
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
                height: "auto",
                borderRadius: "8px",
                marginBottom: "12px",
                objectFit: "cover",
              }}
            />
            <h3 style={{ margin: 0, fontSize: "16px" }}>{p.title}</h3>
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
