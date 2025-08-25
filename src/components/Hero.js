import React, { useState } from "react";
import "./Hero.css"; // optional if you want separate hero styles

function Hero() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Welcome to OfficeBanao.in</h1>
        <p>We design amazing office spaces</p>
        <button className="btn-primary" onClick={() => setPopupOpen(true)}>Get Free Quote</button>
      </div>

      {popupOpen && (
        <div className="form-popup">
          <div className="form-container">
            <span className="close-btn" onClick={() => setPopupOpen(false)}>&times;</span>
            <h2>Get Your Quote</h2>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Mobile Number" />
            <input type="text" placeholder="Location" />
            <input type="text" placeholder="Requirement" />
            <button className="btn-primary" onClick={() => alert("Thank you! We will contact you.")}>
              Submit
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;
