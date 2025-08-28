import React from "react";
import { useNavigate } from "react-router-dom";

export default function MobileProjects() {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Modern Workspace Design",
      description: "A sleek and functional office design tailored for startups.",
      image: "https://images.unsplash.com/photo-1587614382346-ac6d0b72d5d5?auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 2,
      title: "Collaborative Office Hub",
      description: "Spaces built to enhance collaboration and productivity.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 3,
      title: "Minimalist Design",
      description: "Clean, modern aesthetics with functional furniture solutions.",
      image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=600&q=60",
    },
  ];

  return (
    <section style={{ padding: "20px" }} id="projects">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Our Projects</h2>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {projects.map((project) => (
          <div 
            key={project.id} 
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              overflow: "hidden",
              background: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
            <div style={{ padding: "12px" }}>
              <h3 style={{ margin: "0 0 8px", fontSize: "18px" }}>{project.title}</h3>
              <p style={{ margin: "0 0 12px", fontSize: "14px", color: "#555" }}>
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button 
          style={{ 
            padding: "10px 20px", 
            border: "none", 
            borderRadius: "6px", 
            background: "#00BFA6", 
            color: "#fff", 
            fontWeight: "bold", 
            cursor: "pointer" 
          }}
          onClick={() => navigate("/projects")}
        >
          View All Projects →
        </button>
      </div>
    </section>
  );
}
