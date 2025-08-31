import React from "react";
import { useParams, Link } from "react-router-dom";
import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";

const projectData = {
  1: { title: "Modern Workspace", image: project1, description: "A sleek modern office design." },
  2: { title: "Creative Studio", image: project2, description: "Perfect for startups and creators." },
  3: { title: "Corporate Office", image: project3, description: "Professional corporate setup." },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h2>Project not found</h2>
        <Link to="/projects" className="view-more-btn">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px" }}>
      <img
        src={project.image}
        alt={project.title}
        style={{ width: "100%", borderRadius: "12px", marginBottom: "20px" }}
      />
      <h1>{project.title}</h1>
      <p>{project.description}</p>

      {/* ✅ Styled Back Link same as "View More" button */}
      <div style={{ marginTop: "30px" }}>
        <Link to="/projects" className="view-more-btn">
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}
