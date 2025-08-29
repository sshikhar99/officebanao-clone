// src/pages/Resources.js
import React from "react";

export default function Resources() {
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
      <h1 style={{ fontSize: "36px", marginBottom: "20px", textAlign: "center" }}>
        Resources
      </h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        Access our collection of resources to learn about workplace trends,
        design ideas, and cost-saving strategies for office interiors.
      </p>

      <ul style={{ fontSize: "18px", lineHeight: 1.8 }}>
        <li>
          <strong>Office Design Trends 2025:</strong> Latest insights on
          workplace design and innovation.
        </li>
        <li>
          <strong>Space Planning Guide:</strong> Tips on how to maximize your
          office space efficiently.
        </li>
        <li>
          <strong>Cost Optimization Handbook:</strong> Learn strategies to
          reduce interior design costs without compromising quality.
        </li>
        <li>
          <strong>Employee Productivity Research:</strong> Studies on how
          workplace design impacts team performance.
        </li>
      </ul>
    </div>
  );
}
