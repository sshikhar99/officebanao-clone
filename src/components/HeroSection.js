// src/components/HeroSection.js
import React from "react";
import { Link } from "react-scroll";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          Get Premium Office Interiors <br />
          <span className="gradient-text">your employees will love!</span>
        </h1>
        <p>
          Achieve your ideal office space in <b>75 days</b> with our
          brand-centric designs, engineered for cost efficiency and operational
          excellence.
        </p>
        <div className="hero-buttons">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="btn enquire-btn"
          >
            Enquire Now
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="btn projects-btn"
          >
            View Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
