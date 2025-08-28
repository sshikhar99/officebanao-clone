import React from "react";
import { useNavigate } from "react-router-dom";

export default function MobileProjects() {
  const navigate = useNavigate();

  return (
    <section style={{ padding: "20px", textAlign: "center" }}>
      <h2>Projects (Mobile)</h2>
      <p>Here are some of our featured projects for mobile view.</p>
      <button 
        style={{ marginTop: "10px", padding: "8px 16px" }}
        onClick={() => navigate("/projects")}
      >
        View All Projects
      </button>
    </section>
  );
}
