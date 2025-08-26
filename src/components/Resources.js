import React from "react";

function Resources() {
  const resources = [
    {
      title: "Office Design Handbook",
      desc: "A complete guide to creating functional, modern workspaces.",
      link: "#",
    },
    {
      title: "Cost Optimization Tips",
      desc: "Learn how to design premium interiors while saving money.",
      link: "#",
    },
    {
      title: "Case Studies",
      desc: "Explore how we transformed client spaces with smart designs.",
      link: "#",
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
  };

  const linkStyle = {
    display: "inline-block",
    marginTop: "12px",
    color: "#00bcd4",
    textDecoration: "none",
    fontWeight: 600,
  };

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>Resources</h2>
      <p style={subStyle}>
        Helpful resources to guide you through the interior design journey.
      </p>

      <div style={gridStyle}>
        {resources.map((res, i) => (
          <div
            key={i}
            style={cardStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-6px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <h3 style={{ marginBottom: "10px" }}>{res.title}</h3>
            <p>{res.desc}</p>
            <a href={res.link} style={linkStyle}>
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Resources;
