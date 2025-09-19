// components/Mobile/Footer.js
import React from "react";

export default function MobileFooter() {
  return (
    <footer
      style={{
        backgroundColor: "#222",
        color: "#fff",
        textAlign: "center",
        padding: "20px 10px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <p style={{ margin: "5px 0", fontSize: "14px" }}>
        © {new Date().getFullYear()} OfficeBanao. All Rights Reserved.
      </p>
      <p style={{ margin: "5px 0", fontSize: "12px", opacity: "0.8" }}>
        Designed with ❤️ by OfficeBanao Team
      </p>
    </footer>
  );
}
