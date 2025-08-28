import React from "react";

export default function MobileWalkthroughs() {
  const walkthroughs = [
    {
      id: 1,
      title: "Modern Workspace Tour",
      description: "Take a 3D walkthrough of our modern office design.",
      thumbnail: "https://images.unsplash.com/photo-1587614382346-ac6d0b72d1a4?auto=format&fit=crop&w=600&q=60",
      link: "#",
    },
    {
      id: 2,
      title: "Creative Studio Walkthrough",
      description: "Experience our open-concept creative studio design.",
      thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=60",
      link: "#",
    },
    {
      id: 3,
      title: "Enterprise Office Tour",
      description: "Explore our enterprise-level workspace setup.",
      thumbnail: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=60",
      link: "#",
    },
  ];

  return (
    <section style={{ padding: "20px" }} id="walkthroughs">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Walkthroughs</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {walkthroughs.map((item) => (
          <a
            key={item.id}
            href={item.link}
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
              src={item.thumbnail}
              alt={item.title}
              style={{ width: "100%", height: "160px", objectFit: "cover" }}
            />
            <div style={{ padding: "12px" }}>
              <h3 style={{ margin: "0 0 8px", fontSize: "18px" }}>{item.title}</h3>
              <p style={{ margin: "0", fontSize: "14px", color: "#555" }}>
                {item.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
