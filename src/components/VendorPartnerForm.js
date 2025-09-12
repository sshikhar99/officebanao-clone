// frontend/src/components/VendorPartnerForm.js
import React, { useState } from "react";
import SuccessModal from "./SuccessModal";

export default function VendorPartnerForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    services: "",
    location: "",
    partnerType: "vendor", // ✅ Vendor
  });

  const [successMsg, setSuccessMsg] = useState("");

  const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE}/api/partner`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccessMsg("✅ Your Vendor Partner form has been submitted successfully!");
        setFormData({
          companyName: "",
          contactPerson: "",
          email: "",
          phone: "",
          services: "",
          location: "",
          partnerType: "vendor",
        });
      } else {
        setSuccessMsg(`⚠️ Error: ${data.message || "Submission failed"}`);
      }
    } catch (err) {
      console.error("Error submitting Vendor Partner form:", err);
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
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input style={inputStyle} type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} required />
        <input style={inputStyle} type="text" name="contactPerson" placeholder="Contact Person" value={formData.contactPerson} onChange={handleChange} required />
        <input style={inputStyle} type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        <input style={inputStyle} type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
        <input style={inputStyle} type="text" name="services" placeholder="Services Offered (e.g. Civil, Electrical, Carpentry)" value={formData.services} onChange={handleChange} />
        <input style={inputStyle} type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />

        <button type="submit" style={{ padding: "12px", background: "#333", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "15px" }}>
          Submit
        </button>
      </form>

      <SuccessModal message={successMsg} onClose={() => setSuccessMsg("")} />
    </>
  );
}
