import React from "react";

export default function MobileResources() {
  const resources = [
    {
      id: 1,
      title: "Office Design Handbook",
      description: "A complete guide to creating functional, modern workspaces.",
      link: "#",
    },
    {
      id: 2,
      title: "Cost Optimization Tips",
      description: "Learn how to design premium interiors while saving money.",
      link: "#",
    },
    {
      id: 3,
      title: "Case Studies",
      description: "Explore how we transformed client spaces with smart designs.",
      link: "#",
    },
  ];

  return (
    <section style={{ padding: "20px" }} id="resources">
      <h2 style={{ textAlign: "center", marginBottom: "10px", fontSize: "22px" }}>
        Resources
      </h2>
      <p style={{ textAlign: "center", marginBottom: "20px", color: "#555" }}>
        Helpful resources to guide you through the interior design journey.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {resources.map((resource) => (
          <div
            key={resource.id}
            style={{
              border: "1px solid #eee",
              borderRadius: "12px",
              padding: "16px",
              background: "#fff",
              boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              textAlign: "center",
            }}
          >
            <h3 style={{ margin: "0 0 8px", fontSize: "18px" }}>{resource.title}</h3>
            <p style={{ margin: "0 0 12px", fontSize: "14px", color: "#555" }}>
              {resource.description}
            </p>
            <a
              href={resource.link}
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#00bfa6",
                textDecoration: "none",
              }}
            >
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
