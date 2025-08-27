// src/pages/ProjectsPage.js
import React from "react";
import "./ProjectsPage.css";

import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";

function ProjectsPage() {
  const projects = [
    { id: 1, title: "Modern Workspace", img: project1 },
    { id: 2, title: "Minimalist Office", img: project2 },
    { id: 3, title: "Corporate Interiors", img: project3 },
  ];

  return (
    <div className="projects-page">
      <h1>Our Projects</h1>
      <p className="subtitle">
        Explore our collection of premium office interiors.
      </p>

      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.id} className="project-card">
            <img src={p.img} alt={p.title} />
            <h3>{p.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
