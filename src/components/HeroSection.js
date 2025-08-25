import React, { useState } from "react";
import "../App.css";
import heroBg from "../assets/hero-bg.jpg";

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const mobile = form.mobile.value;
  const email = form.email.value;
  const area = form.area.value;
  const requirement = form.requirement.value;

  // Create WhatsApp message
  const message = `New OfficeBanao Inquiry:\nName: ${name}\nMobile: ${mobile}\nEmail: ${email}\nArea: ${area}\nRequirement: ${requirement}`;

  // Replace your WhatsApp number here in international format (no + or 0)
  const whatsappNumber = "917617816254"; 

  // Open WhatsApp chat with pre-filled message
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, "_blank");

  form.reset();
  closeModal();
};


  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-content">
        <h1>Transform Your Office</h1>
        <p>Premium interior designs for modern businesses</p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={openModal}>
            Get Started
          </button>
          <button className="btn-secondary">View Projects</button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Get Your Free Quote</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Name" required />
              <input type="text" name="mobile" placeholder="Mobile" required />
              <input type="email" name="email" placeholder="Email" required />
              <input type="text" name="area" placeholder="Area / Location" required />
              <textarea name="requirement" placeholder="Requirement" required></textarea>
              <button type="submit" className="btn-primary">Submit</button>
            </form>
            <button className="btn-secondary close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
