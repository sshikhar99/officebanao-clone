// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Walkthroughs from "./components/Walkthroughs";
import Resources from "./components/Resources";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectsPage from "./pages/ProjectsPage";   // ✅ separate page

// Home page content
function Home() {
  return (
    <div>
      <section id="home"><HeroSection /></section>
      <section id="about"><About /></section>
      <section id="walkthroughs"><Walkthroughs /></section>
      <section id="resources"><Resources /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />             {/* Home */}
        <Route path="/projects" element={<ProjectsPage />} /> {/* Projects */}
      </Routes>
    </Router>
  );
}

export default App;
