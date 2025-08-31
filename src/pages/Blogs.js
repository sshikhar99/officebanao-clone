import React from "react";
import { Link } from "react-router-dom";

export default function Blogs() {
  const blogPosts = [
    {
      id: 1,
      title: "How to Design Modern Workspaces",
      date: "Aug 28, 2025",
      excerpt:
        "Discover the key elements of creating a modern, functional, and collaborative workspace...",
    },
    {
      id: 2,
      title: "Top 5 Office Interior Trends in 2025",
      date: "Aug 20, 2025",
      excerpt:
        "From biophilic designs to flexible furniture, here are the trends shaping offices this year...",
    },
    {
      id: 3,
      title: "Why Good Office Design Boosts Productivity",
      date: "Aug 15, 2025",
      excerpt:
        "Learn how thoughtful office layouts and interiors can increase employee happiness and efficiency...",
    },
  ];

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px 20px",
        color: "#222",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>Blogs</h1>
      <p style={{ fontSize: "16px", marginBottom: "30px", color: "#555" }}>
        Explore our latest articles, tips, and insights on office design and
        workspace innovation.
      </p>

      <div style={{ display: "grid", gap: "20px" }}>
        {blogPosts.map((post) => (
          <div
            key={post.id}
            style={{
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              background: "#fff",
              boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.02)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <h2 style={{ fontSize: "22px", marginBottom: "8px" }}>
              {post.title}
            </h2>
            <p
              style={{ fontSize: "14px", color: "#777", marginBottom: "12px" }}
            >
              {post.date}
            </p>
            <p style={{ fontSize: "16px", marginBottom: "15px" }}>
              {post.excerpt}
            </p>

            {/* ✅ Link to dynamic blog detail */}
            <Link
              to={`/blogs/${post.id}`}
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#00c4ff",
                textDecoration: "none",
              }}
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
