import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import project1 from "../../assets/project1.webp";
import project2 from "../../assets/project2.webp";
import project3 from "../../assets/project3.webp";

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

      {/* View More Button */}
      <div className="view-more-container">
        <Link to="/projects" className="view-more-btn">
          View More →
        </Link>
      </div>
    </section>
  );
}

export default Projects;
