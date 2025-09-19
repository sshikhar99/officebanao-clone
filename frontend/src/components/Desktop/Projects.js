import React from "react";
import { Link, useLocation } from "react-router-dom"; 
import "./Projects.css";
import project1 from "../../assets/project1.webp";
import project2 from "../../assets/project2.webp";
import project3 from "../../assets/project3.webp";

function Projects() {
  const location = useLocation(); 

  const projects = [
    { id: 1, img: project1, title: "Modern Workspace" },
    { id: 2, img: project2, title: "Creative Studio" },
    { id: 3, img: project3, title: "Corporate Office" },
  ];

  return (
    <section id="portfolio" className="projects">
      <h2>Our Projects</h2>
      <div className="projects-gallery">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}   // ✅ dynamic link
            className="project-card"
          >
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
          </Link>
        ))}
      </div>

      {/* ✅ Show "View More" only on homepage */}
      {location.pathname === "/" && (
        <div className="view-more-container">
          <Link to="/projects" className="view-more-btn">
            View More →
          </Link>
        </div>
      )}
    </section>
  );
}

export default Projects;
