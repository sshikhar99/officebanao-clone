// src/components/Home.js
import React from "react";
import HeroSection from "./HeroSection";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";   // ✅ Import Footer

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Portfolio />
      <Contact />
      <Footer />   {/* ✅ Add Footer at the bottom */}
    </>
  );
}

export default Home;
