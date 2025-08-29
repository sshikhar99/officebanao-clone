import React, { useEffect } from "react";

export default function SuccessModal({ message, onClose }) {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // auto close after 3s
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "10px",
          textAlign: "center",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          maxWidth: "400px",
          width: "90%",
          animation: "fadeIn 0.3s ease",
        }}
      >
        <h3 style={{ marginBottom: "15px" }}>✅ Success</h3>
        <p style={{ marginBottom: "20px" }}>{message}</p>
        <button
          onClick={onClose}
          style={{
            padding: "10px 20px",
            background: "#333",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
