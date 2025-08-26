import React from "react";
import "./Projects.css";
import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";

function Projects() {
  const images = [project1, project2, project3];

  return (
    <section id="portfolio" className="projects">
      <h2>Our Projects</h2>
      <div className="projects-gallery">
        {images.map((img, index) => (
          <div key={index} className="project-card">
            <img src={img} alt={`Project ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;