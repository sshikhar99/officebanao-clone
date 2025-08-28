import React from "react";

export default function MobileResources() {
  const resources = [
    {
      id: 1,
      title: "Office Design Guide",
      description: "Learn how to create a productive workspace with our step-by-step design guide.",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=60",
      link: "#",
    },
    {
      id: 2,
      title: "Productivity Hacks",
      description: "Discover tips to boost collaboration and efficiency in modern offices.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=60",
      link: "#",
    },
    {
      id: 3,
      title: "Furniture Essentials",
      description: "Explore must-have furniture for startups and enterprises.",
      image: "https://images.unsplash.com/photo-1598300056393-4f5d9fbc1e55?auto=format&fit=crop&w=600&q=60",
      link: "#",
    },
  ];

  return (
    <section style={{ padding: "20px" }} id="resources">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Resources</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {resources.map((resource) => (
          <a
            key={resource.id}
            href={resource.link}
            style={{
              textDecoration: "none",
              color: "inherit",
              border: "1px solid #ddd",
              borderRadius: "12px",
              overflow: "hidden",
              background: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={resource.image}
              alt={resource.title}
              style={{ width: "100%", height: "160px", objectFit: "cover" }}
            />
            <div style={{ padding: "12px" }}>
              <h3 style={{ margin: "0 0 8px", fontSize: "18px" }}>{resource.title}</h3>
              <p style={{ margin: "0", fontSize: "14px", color: "#555" }}>
                {resource.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
