import React, { useState } from "react";
import SuccessModal from "./SuccessModal";

export default function DesignerPartnerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolio: "",
    experience: "",
    specialization: "",
    partnerType: "designer", // ✅ Designer
  });

  const [successMsg, setSuccessMsg] = useState("");

  // 🔗 Google Apps Script Web App URL
  const API_BASE = "https://script.google.com/macros/s/AKfycbxLt6f6VD1z8QXwmQqmfH__jdRDecRxkldJcEVxI4xjxB5fhcBuv6UVOq2hqUYj6ZbN/exec";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg("⚠️ Something went wrong -1");
    try {
      setSuccessMsg("⚠️ Something went wrong 0");
      const res = await fetch(API_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSuccessMsg("⚠️ Something went wrong 1");

      const data = await res.json();
      setSuccessMsg("⚠️ Something went wrong 2");
      if (res.ok) {
        setSuccessMsg("✅ Your Designer Partner form has been submitted successfully!");
        setFormData({
          name: "",
          email: "",
          portfolio: "",
          experience: "",
          specialization: "",
          partnerType: "designer",
        });
      } else {
        setSuccessMsg(`⚠️ Error: ${data.message || "Submission failed"}`);
      }
    } catch (err) {
      console.error("Error submitting Designer Partner form:", err);
      setSuccessMsg("⚠️ Something went wrong. Please try again.");
    }
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
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        <input style={inputStyle} type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input style={inputStyle} type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        <input style={inputStyle} type="text" name="portfolio" placeholder="Portfolio Link (Dribbble/Behance/Website)" value={formData.portfolio} onChange={handleChange} />
        <input style={inputStyle} type="text" name="experience" placeholder="Years of Experience" value={formData.experience} onChange={handleChange} />
        <input style={inputStyle} type="text" name="specialization" placeholder="Specialization (e.g. Interiors, UI/UX, Graphics)" value={formData.specialization} onChange={handleChange} />

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

      <SuccessModal message={successMsg} onClose={() => setSuccessMsg("")} />
    </>
  );
}
