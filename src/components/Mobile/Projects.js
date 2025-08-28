import React from "react";
import { useNavigate } from "react-router-dom";
import project1 from "../../project1.webp";
import project2 from "../../project2.webp";
import project3 from "../../project3.webp";

export default function MobileProjects() {
  const navigate = useNavigate();

  const projects = [
    { id: 1, title: "Modern Workspace", img: project1 },
    { id: 2, title: "Creative Studio", img: project2 },
    { id: 3, title: "Minimalist Office", img: project3 },
  ];

  return (
    <section style={{ padding: "20px", textAlign: "center" }}>
      <h2 style={{ marginBottom: "15px" }}>Projects (Mobile)</h2>
      <div style={{ display: "grid", gap: "15px" }}>
        {projects.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "10px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={p.img}
              alt={p.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <h3 style={{ marginTop: "10px" }}>{p.title}</h3>
          </div>
        ))}
      </div>

      <button
        style={{
          marginTop: "20px",
          padding: "10px 18px",
          background: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
        onClick={() => navigate("/projects")}
      >
        View All Projects
      </button>
    </section>
  );
}
