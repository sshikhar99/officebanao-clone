// src/pages/WalkthroughDetail.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import { walkthroughs } from "./Walkthroughs"; // import the array
import "../components/Desktop/About.css"; // ✅ reuse the CSS where .see-more-btn is defined

export default function WalkthroughDetail() {
  const { id } = useParams(); // get id from URL
  const walkthrough = walkthroughs.find((w) => w.id === id);

  if (!walkthrough) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Walkthrough not found</h2>
        <Link to="/walkthroughs" className="see-more-btn">
          ← Back to Walkthroughs
        </Link>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "60px 20px",
        lineHeight: 1.8,
        color: "#333",
      }}
    >
      <img
        src={walkthrough.image}
        alt={walkthrough.title}
        style={{
          width: "100%",
          height: "400px",
          objectFit: "cover",
          borderRadius: "12px",
          marginBottom: "20px",
        }}
      />
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        {walkthrough.title}
      </h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        {walkthrough.details}
      </p>

      {/* ✅ Use the same button style as See More */}
      <Link to="/walkthroughs" className="see-more-btn">
        ← Back to Walkthroughs
      </Link>
    </div>
  );
}
