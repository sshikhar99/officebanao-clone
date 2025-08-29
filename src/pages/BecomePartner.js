import React from "react";
import VendorPartnerForm from "../components/VendorPartnerForm";
import DesignerPartnerForm from "../components/DesignerPartnerForm";

export default function BecomePartner() {
  return (
    <div style={{ padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        Become a Partner
      </h1>

      {/* Vendor Partner Section */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ marginBottom: "10px" }}>Execution / Vendor Partner</h2>
        <p style={{ marginBottom: "20px" }}>
          Join us as an Execution Partner and collaborate on exciting projects.
        </p>
        <div
          style={{
            border: "1px solid #eee",
            padding: "25px",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          }}
        >
          <VendorPartnerForm />
        </div>
      </section>

      {/* Designer Partner Section */}
      <section>
        <h2 style={{ marginBottom: "10px" }}>Designer Partner</h2>
        <p style={{ marginBottom: "20px" }}>
          Are you a designer? Become our partner and showcase your creativity.
        </p>
        <div
          style={{
            border: "1px solid #eee",
            padding: "25px",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(14, 93, 220, 0.05)",
          }}
        >
          <DesignerPartnerForm />
        </div>
      </section>
    </div>
  );
}
