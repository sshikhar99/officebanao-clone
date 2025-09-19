import React from "react";
import project1 from "../../assets/project1.webp";
import project2 from "../../assets/project2.webp";
import project3 from "../../assets/project3.webp";
import { Link } from "react-router-dom";

export default function MobileWalkthroughs({ isPage = false }) {
  const walkthroughs = [
    { id: 1, title: "Tech Startup HQ", img: project1 },
    { id: 2, title: "Corporate HQ Redesign", img: project2 },
    { id: 3, title: "Creative Studio", img: project3 },
  ];

  // show only first 2 if not on the dedicated page
  const visibleItems = isPage ? walkthroughs : walkthroughs.slice(0, 2);

  return (
    <section style={{ padding: "20px", textAlign: "center" }} id="walkthroughs">
      <h2 style={{ marginBottom: "15px" }}>Walkthroughs</h2>
      <div style={{ display: "grid", gap: "15px" }}>
        {visibleItems.map((w) => (
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

      {/* Show See All button only on homepage */}
      {!isPage && (
        <div style={{ marginTop: "20px" }}>
          <Link
            to="/walkthroughs"
            style={{
              display: "inline-block",
              padding: "10px 16px",
              borderRadius: "8px",
              background: "#00c7d6",
              color: "#fff",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            See All Walkthroughs →
          </Link>
        </div>
      )}
    </section>
  );
}
