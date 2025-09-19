// src/pages/Walkthroughs.js
import React from "react";
import { Link } from "react-router-dom";

// import your images
import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";

export const walkthroughs = [
  {
    id: "tech-startup-hq",
    title: "Tech Startup HQ",
    description:
      "A modern and collaborative workspace designed for a 200-member technology team, featuring flexible workstations and vibrant breakout zones.",
    image: project1,
    details:
      "This project includes open workstations, soundproof cabins, breakout zones, and modern lighting to encourage productivity and collaboration.",
  },
  {
    id: "corporate-hq-redesign",
    title: "Corporate HQ Redesign",
    description:
      "A corporate office redesigned to reflect brand identity, boost employee productivity, and incorporate smart technology for day-to-day operations.",
    image: project2,
    details:
      "We revamped the corporate HQ with branding elements, smart meeting rooms, lounge spaces, and ergonomic furniture.",
  },
  {
    id: "creative-studio",
    title: "Creative Studio",
    description:
      "An open and flexible design studio built for designers and artists, fostering creativity and innovation.",
    image: project3,
    details:
      "The creative studio focuses on open layouts, natural lighting, and multi-use creative zones for collaboration.",
  },
];

export default function Walkthroughs() {
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
        style={{ fontSize: "36px", marginBottom: "20px", textAlign: "center" }}
      >
        Project Walkthroughs
      </h1>
      <p style={{ fontSize: "18px", marginBottom: "30px", textAlign: "center" }}>
        Explore our detailed project walkthroughs to see how we transform raw
        spaces into vibrant, efficient, and inspiring work environments.
      </p>

      <div
        style={{
          display: "grid",
          gap: "25px",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        {walkthroughs.map((item) => (
          <Link
            to={`/walkthroughs/${item.id}`}
            key={item.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                border: "1px solid #eee",
                borderRadius: "12px",
                background: "#fff",
                boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                overflow: "hidden",
                transition: "transform 0.3s ease",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                }}
              />
              <div style={{ padding: "20px" }}>
                <h2 style={{ marginBottom: "12px", fontSize: "20px" }}>
                  {item.title}
                </h2>
                <p>{item.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
