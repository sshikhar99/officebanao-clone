import React from "react";
import { Link } from "react-router-dom";

export default function Resources() {
  const resources = [
    {
      id: 1,
      title: "Office Design Trends 2025",
      description: "Latest insights on workplace design and innovation.",
    },
    {
      id: 2,
      title: "Space Planning Guide",
      description: "Tips on how to maximize your office space efficiently.",
    },
    {
      id: 3,
      title: "Cost Optimization Handbook",
      description:
        "Learn strategies to reduce interior design costs without compromising quality.",
    },
    {
      id: 4,
      title: "Employee Productivity Research",
      description:
        "Studies on how workplace design impacts team performance.",
    },
  ];

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "60px 20px",
        lineHeight: 1.8,
        color: "#333",
      }}
    >
      <h1
        style={{
          fontSize: "36px",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        Resources
      </h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        Access our collection of resources to learn about workplace trends,
        design ideas, and cost-saving strategies for office interiors.
      </p>

      <div style={{ display: "grid", gap: "20px" }}>
        {resources.map((res) => (
          <div
            key={res.id}
            style={{
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              background: "#fff",
              boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
            }}
          >
            <h2 style={{ fontSize: "22px", marginBottom: "8px" }}>
              {res.title}
            </h2>
            <p style={{ fontSize: "16px", marginBottom: "12px" }}>
              {res.description}
            </p>

            {/* ✅ Learn More link to dynamic resource page */}
            <Link
              to={`/resources/${res.id}`}
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#00c4ff",
                textDecoration: "none",
              }}
            >
              Learn More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
