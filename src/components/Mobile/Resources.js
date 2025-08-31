import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaLightbulb, FaBuilding } from "react-icons/fa";

export default function MobileResources({ isPage = false }) {
  const navigate = useNavigate();

  const resources = [
    {
      id: 1,
      title: "Office Design Handbook",
      description: "A complete guide to creating functional, modern workspaces.",
      icon: <FaBookOpen />,
    },
    {
      id: 2,
      title: "Cost Optimization Tips",
      description: "Learn how to design premium interiors while saving money.",
      icon: <FaLightbulb />,
    },
    {
      id: 3,
      title: "Case Studies",
      description: "Explore how we transformed client spaces with smart designs.",
      icon: <FaBuilding />,
    },
  ];

  return (
    <section
      id="resources"
      style={{
        padding: isPage ? "70px 20px" : "50px 20px",
        backgroundColor: "#f9f9f9",
        fontFamily: "'Poppins', sans-serif",
        scrollMarginTop: "80px",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          textAlign: "center",
          marginBottom: "10px",
          fontSize: "22px",
          fontWeight: "700",
          color: "#222",
          position: "relative",
          display: "inline-block",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        Resources
      </h2>
      <div
        style={{
          width: "60px",
          height: "3px",
          background: "linear-gradient(90deg, #c93cff, #00c7d6, #007bff)",
          margin: "6px auto 20px",
          borderRadius: "2px",
        }}
      />

      {/* Subtitle */}
      <p
        style={{
          textAlign: "center",
          marginBottom: "25px",
          color: "#555",
          fontSize: "15px",
          lineHeight: "1.6",
        }}
      >
        Helpful guides and insights to navigate your office interior journey.
      </p>

      {/* Resource Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {resources.map((resource) => (
          <div
            key={resource.id}
            style={{
              border: "1px solid #eee",
              borderRadius: "14px",
              padding: "18px",
              background: "#fff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
              textAlign: "center",
              transition: "transform 0.2s ease",
            }}
          >
            {/* Icon */}
            <div
              style={{
                fontSize: "28px",
                color: "#00c7d6",
                marginBottom: "12px",
              }}
            >
              {resource.icon}
            </div>

            {/* Title */}
            <h3 style={{ margin: "0 0 8px", fontSize: "18px", color: "#111" }}>
              {resource.title}
            </h3>

            {/* Description */}
            <p
              style={{
                margin: "0 0 12px",
                fontSize: "14px",
                color: "#555",
                lineHeight: "1.5",
              }}
            >
              {resource.description}
            </p>

            {/* ✅ Learn More (navigates to detail page) */}
            <button
              onClick={() => navigate(`/resources/${resource.id}`)}
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#00bfa6",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              Learn More →
            </button>
          </div>
        ))}
      </div>

      {/* See All Button (only on homepage) */}
      {!isPage && (
        <div style={{ textAlign: "center", marginTop: "25px" }}>
          <button
            onClick={() => navigate("/resources")}
            style={{
              background: "linear-gradient(90deg, #00c7d6, #007bff)",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "25px",
              border: "none",
              fontWeight: "600",
              fontSize: "15px",
              cursor: "pointer",
              boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.opacity = "0.9")
            }
            onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
          >
            See All Resources →
          </button>
        </div>
      )}
    </section>
  );
}
