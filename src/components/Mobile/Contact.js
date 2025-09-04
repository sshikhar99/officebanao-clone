import React, { useState } from "react";

export default function MobileContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const openWhatsApp = () => {
    if (!name || !email || !message) {
      alert("Please fill all fields before sending.");
      return;
    }

    const phoneNumber = "917683061117"; // your WhatsApp number
    const text = `📩 New Inquiry from OfficeBanao\n\n👤 Name: ${name}\n📧 Email: ${email}\n💬 Message: ${message}`;

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );

    // reset form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section style={{ padding: "20px", textAlign: "center" }}>
      <h2 style={{ marginBottom: "10px" }}>Contact Us</h2>
      <p style={{ margin: "4px 0" }}>Email: support@officebanao.com</p>
      <p style={{ margin: "4px 0" }}>Phone: +91-7683061117</p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          marginTop: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
        <textarea
          placeholder="Your Message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
            resize: "none",
          }}
        ></textarea>

        <button
          onClick={openWhatsApp}
          style={{
            padding: "14px",
            background: "#25D366",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          💬 Send Message on WhatsApp
        </button>
      </div>
    </section>
  );
}
