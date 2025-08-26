import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Us</h2>
      <p>
        Have a project in mind? Let’s build your dream office together.
      </p>
      <div className="contact-details">
        <p><strong>Phone:</strong> 7683061117</p>
        <p><strong>Email:</strong> info@officebanao.in</p>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
