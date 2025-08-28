import React from "react";

export default function MobileContact() {
  const openWhatsApp = () => {
    const phoneNumber = "917683061117"; // without +
    const message = "Hello, I would like to know more about your services!";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section style={{ padding: "20px", textAlign: "center" }}>
      <h2>Contact Us (Mobile)</h2>
      <p>Email: support@officebanao.com</p>
      <p>Phone: +91-7683061117</p>

      <button
        onClick={openWhatsApp}
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          background: "#25D366",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        💬 Send Message
      </button>
    </section>
  );
}
