// src/App.js
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import useDeviceType from "./hooks/useDeviceType";
import ScrollToTop from "./components/ScrollToTop";

// ===== Desktop components =====
import DesktopNavbar from "./components/Desktop/Navbar";
import DesktopFooter from "./components/Desktop/Footer";
import DesktopHero from "./components/Desktop/HeroSection";
import DesktopAbout from "./components/Desktop/About";
import DesktopProjects from "./components/Desktop/Projects";
import DesktopWalkthroughs from "./components/Desktop/Walkthroughs";
import DesktopResources from "./components/Desktop/Resources";
import DesktopContact from "./components/Desktop/Contact";
import TrustedBrands from "./components/Desktop/TrustedBrands"; // ✅ instead of TrustedPartners
import Blogs from "./pages/Blogs"
import BecomePartner from "./pages/BecomePartner"
;


// ===== Mobile components =====
import MobileNavbar from "./components/Mobile/Navbar";
import MobileFooter from "./components/Mobile/Footer";
import MobileHero from "./components/Mobile/HeroSection";
import MobileAbout from "./components/Mobile/About";
import MobileProjects from "./components/Mobile/Projects";
import MobileWalkthroughs from "./components/Mobile/Walkthroughs";
import MobileResources from "./components/Mobile/Resources";
import MobileContact from "./components/Mobile/Contact";


// Pages
import ProjectsPage from "./pages/ProjectsPage";

// ===== Desktop Home =====
function DesktopHome() {
  return (
    <>
      <DesktopNavbar />
      <section id="home"><DesktopHero /></section>
      <section id="about"><DesktopAbout /></section>
      <section id="projects"><DesktopProjects /></section>
      <section id="walkthroughs"><DesktopWalkthroughs /></section>
      <section id="brands"><TrustedBrands /></section> {/* ✅ Added */}
      <section id="resources"><DesktopResources /></section>
      <section id="contact"><DesktopContact /></section>
      <DesktopFooter />
    </>
  );
}

// ===== Mobile Home =====
function MobileHome() {
  return (
    <>
      <MobileNavbar />
      <section id="home"><MobileHero /></section>
      <section id="about"><MobileAbout /></section>
      <section id="projects"><MobileProjects /></section>
      <section id="walkthroughs"><MobileWalkthroughs /></section>
      <section id="brands"><TrustedBrands /></section> {/* ✅ Added */}
      <section id="resources"><MobileResources /></section>
      <section id="contact"><MobileContact /></section>
      <MobileFooter />
    </>
  );
}

// ===== ScrollToSection handler =====
function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const targetId = location.state.scrollTo;

      // Try multiple times in case DOM not ready yet
      const tryScroll = (attempts = 5) => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (attempts > 0) {
          setTimeout(() => tryScroll(attempts - 1), 150);
        }
      };

      tryScroll();
    }
  }, [location]);

  return null;
}

export default function App() {
  const isMobile = useDeviceType();

  return (
    <>
      <ScrollToTop />
      <ScrollToSection />

      <Routes>
        <Route path="/" element={isMobile ? <MobileHome /> : <DesktopHome />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/become-partner" element={<BecomePartner />} />
      </Routes>
    </>
  );
}