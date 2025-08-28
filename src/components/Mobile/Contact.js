// components/Mobile/Contact.js
import React from "react";

export default function MobileContact() {
  return (
    <section
      id="contact"
      style={{
        padding: "40px 20px",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "600",
          marginBottom: "15px",
          color: "#333",
        }}
      >
        Contact Us
      </h2>
      <p style={{ margin: "8px 0", fontSize: "16px", color: "#555" }}>
        📧 support@officebanao.com
      </p>
      <p style={{ margin: "8px 0", fontSize: "16px", color: "#555" }}>
        📞 +91-7683061117
      </p>

      <div style={{ marginTop: "20px" }}>
        <button
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            fontWeight: "500",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </div>
    </section>
  );
}
