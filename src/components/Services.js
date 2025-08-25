import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="service-card">
          <img src="https://img.icons8.com/color/96/interior-design.png" alt="Interior Design" />
          <h3>Interior Design</h3>
          <p>Transform your spaces with elegant and functional designs tailored to your lifestyle.</p>
        </div>

        <div className="service-card">
          <img src="https://img.icons8.com/color/96/blueprint.png" alt="Office Design" />
          <h3>Office Design</h3>
          <p>Smart and stylish office designs to enhance productivity and brand presence.</p>
        </div>

        <div className="service-card">
          <img src="https://img.icons8.com/color/96/sofa.png" alt="Custom Furniture" />
          <h3>Custom Furniture</h3>
          <p>High-quality furniture pieces designed to fit your unique requirements.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
