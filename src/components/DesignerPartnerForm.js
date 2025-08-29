import React, { useState } from "react";
import SuccessModal from "./SuccessModal";

export default function DesignerPartnerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolio: "",
    experience: "",
    specialization: "",
  });

  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Designer Partner Data Submitted:", formData);
    setSuccessMsg("Your Designer Partner form has been submitted successfully!");
    setFormData({
      name: "",
      email: "",
      portfolio: "",
      experience: "",
      specialization: "",
    });
  };

  const inputStyle = {
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    outline: "none",
    fontSize: "14px",
    width: "100%",
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input
          style={inputStyle}
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          type="text"
          name="portfolio"
          placeholder="Portfolio Link (Dribbble/Behance/Website)"
          value={formData.portfolio}
          onChange={handleChange}
        />
        <input
          style={inputStyle}
          type="text"
          name="experience"
          placeholder="Years of Experience"
          value={formData.experience}
          onChange={handleChange}
        />
        <input
          style={inputStyle}
          type="text"
          name="specialization"
          placeholder="Specialization (e.g. Interiors, UI/UX, Graphics)"
          value={formData.specialization}
          onChange={handleChange}
        />

        <button
          type="submit"
          style={{
            padding: "12px",
            background: "#333",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "15px",
          }}
        >
          Submit
        </button>
      </form>

      <SuccessModal
        message={successMsg}
        onClose={() => setSuccessMsg("")}
      />
    </>
  );
}
