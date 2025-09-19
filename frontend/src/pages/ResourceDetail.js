import React from "react";
import { useParams, Link } from "react-router-dom";

const resourceData = {
  1: {
    title: "Office Design Trends 2025",
    content: `
      Explore the top trends shaping modern workspaces this year,
      including biophilic design, smart lighting, and flexible work zones.
      These trends aim to improve collaboration, comfort, and sustainability.
    `,
  },
  2: {
    title: "Space Planning Guide",
    content: `
      Learn how to plan office layouts effectively by balancing open areas,
      private spaces, and collaboration hubs. Discover space-saving hacks
      and ergonomic furniture options.
    `,
  },
  3: {
    title: "Cost Optimization Handbook",
    content: `
      Strategies to reduce interior design costs without compromising quality.
      Covers material selection, modular furniture, and phased construction.
    `,
  },
  4: {
    title: "Employee Productivity Research",
    content: `
      Studies show that lighting, acoustics, and ergonomics significantly
      influence employee performance. Learn how to design with productivity in mind.
    `,
  },
};

export default function ResourceDetail() {
  const { id } = useParams();
  const resource = resourceData[id];

  if (!resource) {
    return (
      <h2 style={{ textAlign: "center", padding: "50px" }}>
        Resource not found
      </h2>
    );
  }

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}>
      <h1>{resource.title}</h1>
      <p style={{ fontSize: "16px", lineHeight: "1.6", marginTop: "20px" }}>
        {resource.content}
      </p>

      {/* ✅ Back button */}
      <div style={{ marginTop: "30px" }}>
        <Link to="/resources">
          <button
            style={{
              padding: "10px 20px",
              background: "#00bcd4",
              color: "#fff",
              fontWeight: "bold",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "background 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.background = "#0097a7")}
            onMouseOut={(e) => (e.target.style.background = "#00bcd4")}
          >
            ← Back to Resources
          </button>
        </Link>
      </div>
    </div>
  );
}
