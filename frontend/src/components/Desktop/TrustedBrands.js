import React from "react";

// Import local images
import okaya from "../../assets/brands/okaya.png";
import blusmart from "../../assets/brands/blusmart.png";
import amway from "../../assets/brands/amway.png";
import medcell from "../../assets/brands/medcell.png";
import ihg from "../../assets/brands/ihg.png";
import pioneer from "../../assets/brands/pioneer.png";

export default function TrustedBrands() {
  const brands = [
    { id: 1, name: "Okaya", logo: okaya },
    { id: 2, name: "BluSmart", logo: blusmart },
    { id: 3, name: "Amway", logo: amway },
    { id: 4, name: "Medcell", logo: medcell },
    { id: 5, name: "IHG", logo: ihg },
    { id: 6, name: "Pioneer Urban", logo: pioneer },
  ];

  return (
    <section
      style={{ padding: "60px 20px", textAlign: "center", background: "#fff" }}
    >
      <h2 style={{ fontSize: "26px", marginBottom: "40px", fontWeight: "600" }}>
        Trusted <span style={{ color: "#00bcd4" }}>Brands</span>
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "30px",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        {brands.map((brand) => (
          <img
            key={brand.id}
            src={brand.logo}
            alt={brand.name}
            style={{
              maxHeight: "60px",
              maxWidth: "120px",
              objectFit: "contain",
            }}
          />
        ))}
      </div>
    </section>
  );
}
