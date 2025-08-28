import React from "react";
import "./HeroSection.css";

function HeroSection() {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          Get Premium Office Interiors <span>your employees will love!</span>
        </h1>
        <p>
          Achieve your ideal office space in <strong>75 days</strong> with our
          brand-centric designs, engineered for cost efficiency and operational
          excellence.
        </p>

        <div className="hero-buttons">
          <button className="btn-secondary" onClick={scrollToContact}>
            Enquire Now
          </button>
          <button className="btn-primary" onClick={scrollToProjects}>
            View Projects →
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
