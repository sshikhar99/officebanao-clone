import React from "react";
import "./Portfolio.css";

import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";

function Portfolio() {
  return (
    <section id="projects" className="portfolio">
      <h2>Our Projects</h2>
      <p className="portfolio-subtitle">
        Some of our recent premium office interior designs
      </p>
      <div className="portfolio-grid">
        <div className="portfolio-card">
          <img src={project1} alt="Project 1" />
          <h3>Modern Workspace</h3>
        </div>
        <div className="portfolio-card">
          <img src={project2} alt="Project 2" />
          <h3>Minimalist Office</h3>
        </div>
        <div className="portfolio-card">
          <img src={project3} alt="Project 3" />
          <h3>Corporate Interiors</h3>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
