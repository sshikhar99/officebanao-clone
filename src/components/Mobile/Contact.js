// src/components/Mobile/Contact.js
import React, { useState } from "react";

export default function MobileContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const openWhatsApp = () => {
    const phoneNumber = "917683061117"; // Your WhatsApp number
    const text = `📩 New Inquiry from OfficeBanao\n\n👤 Name: ${name}\n📧 Email: ${email}\n💬 Message: ${message}`;

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );

    // reset
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section style={{ padding: "20px", textAlign: "center" }}>
      <h2>Contact Us</h2>
      <p>Email: support@officebanao.com</p>
      <p>Phone: +91-7683061117</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          openWhatsApp();
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          marginTop: "15px",
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "14px",
          }}
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "14px",
          }}
        />
        <textarea
          placeholder="Your Message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "14px",
            minHeight: "100px",
          }}
        ></textarea>

        <button
          type="submit"
          style={{
            padding: "12px",
            background: "#25D366",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          💬 Send Message
        </button>
      </form>
    </section>
  );
}
