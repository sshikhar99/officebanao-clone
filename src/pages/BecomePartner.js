import React from "react";
import useDeviceType from "../hooks/useDeviceType";

// Forms
import VendorPartnerForm from "../components/VendorPartnerForm";
import DesignerPartnerForm from "../components/DesignerPartnerForm";

export default function BecomePartner() {
  const isMobile = useDeviceType();

  return (
    <div
      style={{
        padding: isMobile ? "20px 15px" : "60px 20px",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "50px",
          fontSize: isMobile ? "28px" : "36px",
        }}
      >
        Become a Partner
      </h1>

      {/* Vendor Partner Section */}
      <section style={{ marginBottom: "70px" }}>
        <h2 style={{ marginBottom: "12px" }}>Execution / Vendor Partner</h2>
        <p style={{ marginBottom: "25px", fontSize: "16px", lineHeight: 1.6 }}>
          Join us as an Execution Partner and collaborate on exciting projects.
        </p>
        <div
          style={{
            border: "1px solid #eee",
            padding: isMobile ? "20px" : "30px",
            borderRadius: "12px",
            boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
          }}
        >
          <VendorPartnerForm />
        </div>
      </section>

      {/* Designer Partner Section */}
      <section>
        <h2 style={{ marginBottom: "12px" }}>Designer Partner</h2>
        <p style={{ marginBottom: "25px", fontSize: "16px", lineHeight: 1.6 }}>
          Are you a designer? Become our partner and showcase your creativity.
        </p>
        <div
          style={{
            border: "1px solid #eee",
            padding: isMobile ? "20px" : "30px",
            borderRadius: "12px",
            boxShadow: "0 6px 16px rgba(14, 93, 220, 0.08)",
          }}
        >
          <DesignerPartnerForm />
        </div>
      </section>
    </div>
  );
}
