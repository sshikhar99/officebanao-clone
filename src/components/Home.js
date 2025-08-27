// src/pages/Home.js
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Projects from "../components/Projects";
import Walkthroughs from "../components/Walkthroughs";
import Resources from "../components/Resources";
import Contact from "../components/Contact";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let targetId = null;

    // Case 1: Navigated with state (from Navbar click)
    if (location.state?.scrollTo) {
      targetId = location.state.scrollTo;
    }

    // Case 2: Navigated with hash in URL (like /#about or /#resources)
    else if (location.hash) {
      targetId = location.hash.replace("#", "");
    }

    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // slight delay ensures DOM is ready
      }

      // Clear state so it works again next time
      navigate(location.pathname + location.hash, { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <div>
      <section id="home">
        <HeroSection />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="walkthroughs">
        <Walkthroughs />
      </section>

      <section id="resources">
        <Resources />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Home;
