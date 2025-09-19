import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "917683061117"; // your WhatsApp number
    const text = `New Inquiry from OfficeBanao\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

    // open WhatsApp with prefilled message
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
    <section className="contact-section" id="contact">
      <h2>Contact Us</h2>
      <p>Have a project in mind? Let’s build your dream office together.</p>
      <div className="contact-details">
        <p>
          <strong>Phone:</strong> 7683061117
        </p>
        <p>
          <strong>Email:</strong> info@officebanao.in
        </p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your Message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
