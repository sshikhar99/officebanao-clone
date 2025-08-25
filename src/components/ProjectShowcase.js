import React from "react";
import "../App.css";
import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";

const ProjectShowcase = () => {
  const projects = [project1, project2, project3];

  return (
    <section id="projects" className="projects-section">
      <h2>Our Projects</h2>
      <div className="project-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <img src={proj} alt={`Project ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
