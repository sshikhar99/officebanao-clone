import React, { useState } from "react";
import "./GetStartedForm.css";

const GetStartedForm = ({ closeForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    area: "",
    requirement: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open WhatsApp with pre-filled message
    const message = `Name: ${formData.name}%0AMobile: ${formData.mobile}%0AEmail: ${formData.email}%0AArea: ${formData.area}%0ARequirement: ${formData.requirement}`;
    window.open(`https://wa.me/917683061117?text=${message}`, "_blank");
  };

  return (
    <div className="popup-overlay" onClick={closeForm}>
      <div className="popup-form" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeForm}>
          &times;
        </button>
        <h2>Get Started</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" required onChange={handleChange} />
          <input type="text" name="mobile" placeholder="Mobile" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
          <input type="text" name="area" placeholder="Area" required onChange={handleChange} />
          <textarea name="requirement" placeholder="Requirement" required onChange={handleChange}></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default GetStartedForm;