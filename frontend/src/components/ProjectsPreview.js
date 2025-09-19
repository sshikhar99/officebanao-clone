// src/components/ProjectsPreview.js
import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectsPreview() {
  const navigate = useNavigate();

  // Just sample preview projects
  const projects = [
    { id: 1, title: "Office Design 1", description: "Modern workspace" },
    { id: 2, title: "Office Design 2", description: "Minimalist interiors" },
    { id: 3, title: "Office Design 3", description: "Smart design solutions" },
  ];

  return (
    <section id="projects" className="projects-preview">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((p) => (
          <div key={p.id} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
      <button
        className="see-all-btn"
        onClick={() => navigate("/projects")}
      >
        See All Projects →
      </button>
    </section>
  );
}

export default ProjectsPreview;
