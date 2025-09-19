import React from "react";
import { useNavigate } from "react-router-dom";

function Resources() {
  const navigate = useNavigate();

  const resources = [
    {
      id: 1,
      title: "Office Design Handbook",
      desc: "A complete guide to creating functional, modern workspaces.",
    },
    {
      id: 2,
      title: "Cost Optimization Tips",
      desc: "Learn how to design premium interiors while saving money.",
    },
    {
      id: 3,
      title: "Case Studies",
      desc: "Explore how we transformed client spaces with smart designs.",
    },
  ];

  const sectionStyle = {
    maxWidth: "1100px",
    margin: "0 auto",
    textAlign: "center",
    padding: "60px 20px",
  };

  const titleStyle = {
    fontSize: "32px",
    fontWeight: 700,
    marginBottom: "10px",
  };

  const subStyle = {
    color: "#666",
    marginBottom: "40px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
  };

  const cardStyle = {
    background: "#fff",
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    textAlign: "left",
  };

  const linkStyle = {
    display: "inline-block",
    marginTop: "12px",
    color: "#00bcd4",
    textDecoration: "none",
    fontWeight: 600,
  };

  const buttonStyle = {
    marginTop: "40px",
    padding: "12px 28px",
    background: "#00bcd4",
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  };

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>Resources</h2>
      <p style={subStyle}>
        Helpful resources to guide you through the interior design journey.
      </p>

      <div style={gridStyle}>
        {resources.map((res) => (
          <div
            key={res.id}
            style={cardStyle}
            onClick={() => navigate(`/resources/${res.id}`)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 12px 28px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 8px 24px rgba(0,0,0,0.08)";
            }}
          >
            <h3 style={{ marginBottom: "10px" }}>{res.title}</h3>
            <p>{res.desc}</p>
            <span style={linkStyle}>Learn More →</span>
          </div>
        ))}
      </div>

      {/* ✅ View All Button */}
      <div style={{ textAlign: "center" }}>
        <button
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.background = "#0097a7")}
          onMouseOut={(e) => (e.target.style.background = "#00bcd4")}
          onClick={() => navigate("/resources/all")}
        >
          View All Resources →
        </button>
      </div>
    </section>
  );
}

export default Resources;
