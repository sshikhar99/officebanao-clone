// src/pages/AllResources.js
import React from "react";
import { Link } from "react-router-dom";

export default function AllResources() {
  const resources = [
    {
      id: 1,
      title: "Office Design Handbook",
      desc: "A complete guide to creating functional, modern workspaces.",
    },
    {
      id: 2,
      title: "Space Planning Guide",
      desc: "Maximize office space efficiently with smart layouts.",
    },

    {
      id: 3,
      title: "Cost Optimization Tips",
      desc: "Learn how to design premium interiors while saving money.",
    },
   
    
    {
      id: 4,
      title: "Employee Productivity Research",
      desc: "Studies on how design impacts team performance.",
    },
    
  ];

  const sectionStyle = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "60px 20px",
  };

  const titleStyle = {
    fontSize: "36px",
    fontWeight: 700,
    marginBottom: "40px",
    textAlign: "center",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
  };

  const cardStyle = {
    background: "#fff",
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    textAlign: "left",
  };

  return (
    <section style={sectionStyle}>
      <h1 style={titleStyle}>All Resources</h1>

      <div style={gridStyle}>
        {resources.map((res) => (
          <Link
            to={`/resources/${res.id}`}
            key={res.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 28px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(0,0,0,0.08)";
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>{res.title}</h3>
              <p>{res.desc}</p>
              <span style={{ color: "#00bcd4", fontWeight: 600 }}>
                Learn More →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Back link */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <Link to="/resources" style={{ color: "#00bcd4", fontWeight: "600" }}>
          ← Back to Resources
        </Link>
      </div>
    </section>
  );
}
