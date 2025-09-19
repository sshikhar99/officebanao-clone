import React from "react";
import { Link, useLocation } from "react-router-dom";

// ✅ Import your images from src/assets
import project1 from "../../assets/project1.webp";
import project2 from "../../assets/project2.webp";
import project3 from "../../assets/project3.webp";

export default function Projects() {
  const location = useLocation();

  const projects = [
    { id: 1, title: "Modern Workspace", image: project1 },
    { id: 2, title: "Creative Studio", image: project2 },
    { id: 3, title: "Corporate Office", image: project3 },
  ];

  return (
    <section id="projects" style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Projects</h2>

      {/* ✅ Grid layout for mobile */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "16px",
        }}
      >
        {projects.map((p) => (
          <Link
            key={p.id}
            to={`/projects/${p.id}`} // ✅ dynamic detail page
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                border: "1px solid #eee",
                borderRadius: "12px",
                padding: "12px",
                background: "#fff",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                textAlign: "center",
                transition: "transform 0.2s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
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
          </Link>
        ))}
      </div>

      {/* ✅ Show button ONLY on homepage */}
      {location.pathname === "/" && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Link to="/projects">
            <button
              style={{
                padding: "10px 20px",
                background: "#00bcd4",
                color: "#fff",
                fontWeight: "bold",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "background 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.background = "#0097a7")}
              onMouseOut={(e) => (e.target.style.background = "#00bcd4")}
            >
              View More →
            </button>
          </Link>
        </div>
      )}
    </section>
  );
}
