import React from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectShowcase from "./components/ProjectShowcase";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <HeroSection id="hero" />

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Us</h2>
        <p>
          Welcome to OfficeBanao Clone. We specialize in premium office interiors
          designed for modern businesses. Our goal is to create spaces your employees will love.
        </p>
      </section>

      {/* Projects / Portfolio Section */}
      <ProjectShowcase id="projects" />

      {/* Walkthroughs Section */}
      <section id="walkthroughs" className="section">
        <h2>Walkthroughs</h2>
        <p>
          Explore detailed walkthroughs of our past projects to see how we transform office spaces.
        </p>
      </section>

      {/* Resources Section */}
      <section id="resources" className="section">
        <h2>Resources</h2>
        <p>
          Access guides, tips, and tools for designing and optimizing office interiors.
        </p>
      </section>

      <Footer id="contact" />
    </div>
  );
}

export default App;
