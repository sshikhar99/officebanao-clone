import React from "react";
import project1 from "../../assets/project1.webp";
import project2 from "../../assets/project2.webp";
import project3 from "../../assets/project3.webp";

export default function MobileWalkthroughs() {
  const walkthroughs = [
    { id: 1, title: "3D Office Tour", img: project1 },
    { id: 2, title: "Furniture Showcase", img: project2 },
    { id: 3, title: "Virtual Workspace", img: project3 },
  ];

  return (
    <section style={{ padding: "20px", textAlign: "center" }}>
      <h2 style={{ marginBottom: "15px" }}>Walkthroughs </h2>
      <div style={{ display: "grid", gap: "15px" }}>
        {walkthroughs.map((w) => (
          <div
            key={w.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "10px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={w.img}
              alt={w.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <h3 style={{ marginTop: "10px" }}>{w.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
