// src/components/Mobile/About.js
import React from "react";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function MobileAbout({ isPage = false }) {
  return (
    <section
      id="about"
      style={{
        padding: isPage ? "80px 20px" : "60px 20px",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        fontFamily: "'Poppins', sans-serif",
        scrollMarginTop: "80px", // so navbar won’t overlap
      }}
    >
      {/* Icon */}
      <div
        style={{
          fontSize: "40px",
          color: "#00c7d6",
          marginBottom: "15px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(0,199,214,0.1)",
          borderRadius: "50%",
          width: "70px",
          height: "70px",
        }}
      >
        <FaUsers />
      </div>

      {/* Heading */}
      <h2
        style={{
          fontSize: "22px",
          fontWeight: "700",
          marginBottom: "12px",
          color: "#222",
          position: "relative",
          display: "inline-block",
        }}
      >
        About Us
      </h2>
      <div
        style={{
          width: "50px",
          height: "3px",
          background: "linear-gradient(90deg, #c93cff, #00c7d6, #007bff)",
          margin: "6px auto 18px",
          borderRadius: "2px",
        }}
      />

      {/* Text */}
      <p
        style={{
          fontSize: "15px",
          lineHeight: "1.6",
          color: "#555",
          maxWidth: "500px",
          margin: "0 auto 20px",
        }}
      >
        At <b>OfficeBanao.in</b>, we design modern and functional workspaces
        tailored to your company’s needs. From startups to enterprises, we blend{" "}
        <b>innovation</b> and <b>productivity</b> to create offices that inspire
        collaboration and growth.
      </p>

      {/* Show "See More" button only on home/short version */}
      {!isPage && (
        <Link
          to="/about"
          style={{
            display: "inline-block",
            marginTop: "10px",
            padding: "10px 20px",
            background: "linear-gradient(90deg, #00c7d6, #007bff)",
            color: "#fff",
            borderRadius: "25px",
            fontWeight: "600",
            fontSize: "14px",
            textDecoration: "none",
          }}
        >
          See More →
        </Link>
      )}

      {/* Extra content only if full page */}
      {isPage && (
        <div
          style={{
            marginTop: "25px",
            fontSize: "15px",
            lineHeight: "1.7",
            color: "#444",
          }}
        >
          <p>
            Our team of experts works closely with clients to ensure every detail
            is perfect—from planning to execution. We combine aesthetics with
            functionality so your workspace is not only beautiful but also
            improves productivity.
          </p>
          <p>
            Whether you’re building your first office or redesigning your
            headquarters, we bring innovation, quality, and efficiency into every
            project.
          </p>
        </div>
      )}
    </section>
  );
}
