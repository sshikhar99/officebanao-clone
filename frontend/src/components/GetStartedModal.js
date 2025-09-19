import React, { useState } from "react";
import "./GetStartedModal.css";

const GetStartedModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    area: "",
    requirement: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Name: ${formData.name}\nMobile: ${formData.mobile}\nEmail: ${formData.email}\nArea: ${formData.area}\nRequirement: ${formData.requirement}`;
    const whatsappUrl = `https://wa.me/917683061117?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>Get Started</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
          <input type="tel" name="mobile" placeholder="Mobile" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="text" name="area" placeholder="Area" onChange={handleChange} required />
          <textarea name="requirement" placeholder="Requirement" onChange={handleChange} required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default GetStartedModal;