import React, { useState } from "react";

export default function MobileContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const openWhatsApp = () => {
    const phoneNumber = "917683061117"; // your WhatsApp number in intl format
    const text = `New Inquiry from OfficeBanao\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section style={{ padding: "20px", textAlign: "center" }}>
      <h2>Contact Us</h2>
      <p>Email: support@officebanao.com</p>
      <p>Phone: +91-7683061117</p>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "15px" }}>
        <input
          type="text"
          placeholder="Your Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <textarea
          placeholder="Your Message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
        ></textarea>

        <button
          onClick={openWhatsApp}
          style={{
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
      </div>
    </section>
  );
}
