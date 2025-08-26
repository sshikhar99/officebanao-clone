// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import Walkthroughs from "./components/Walkthroughs";
import Resources from "./components/Resources";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <section id="home"><HeroSection /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="walkthroughs"><Walkthroughs /></section>
      <section id="resources"><Resources /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;
