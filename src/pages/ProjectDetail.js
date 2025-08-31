import React from "react";
import { useParams, Link } from "react-router-dom";
import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";

const projectData = {
  1: { title: "Modern Workspace", image: project1, description: "A sleek modern office design blends minimalism with functionality, creating a space that feels open, stylish, and efficient. Clean lines, neutral tones, and smart layouts enhance focus while promoting collaboration. With ergonomic furniture and contemporary finishes, it transforms the workplace into an inspiring hub for creativity and productivity." },
  2: { title: "Creative Studio", image: project2, description: "Perfect for startups and creators, this workspace is designed to fuel innovation and growth. It combines flexibility, style, and functionality to adapt to evolving needs. With collaborative zones, modern aesthetics, and inspiring interiors, it empowers teams to think bigger, work smarter, and bring bold ideas to life." },
  3: { title: "Corporate Office", image: project3, description: "A professional corporate setup reflects sophistication, efficiency, and brand identity. Designed with precision, it balances private cabins, collaborative zones, and executive areas to support seamless workflows. With premium finishes, ergonomic furniture, and modern technology, it creates a polished environment that enhances productivity, professionalism, and client confidence." },
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
