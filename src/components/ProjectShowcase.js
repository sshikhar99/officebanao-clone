import React from "react";
import "./ProjectShowcase.css";
import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";

const projects = [
  { id: 1, img: project1, title: "Modern Office Interior" },
  { id: 2, img: project2, title: "Collaborative Workspace" },
  { id: 3, img: project3, title: "Creative Studio Design" },
];

const ProjectShowcase = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">Our Projects</h2>
      <div className="project-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.id}>
            <img src={p.img} alt={p.title} />
            <div className="overlay">
              <h3>{p.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;