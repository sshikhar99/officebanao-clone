// src/App.js
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import useDeviceType from "./hooks/useDeviceType";

// Pages
import Blogs from "./pages/Blogs";
import BecomePartner from "./pages/BecomePartner";
import ProjectsPage from "./pages/ProjectsPage";
import About from "./pages/About";
import Walkthroughs from "./pages/Walkthroughs";
import Resources from "./pages/Resources";
import WalkthroughDetails from "./pages/WalkthroughDetails";
import ProjectDetail from "./pages/ProjectDetail";
import BlogDetail from "./pages/BlogDetail";
import ResourceDetail from "./pages/ResourceDetail";
import AllResources from "./pages/AllResources";

// Admin Pages
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

// Layout
import Layout from "./Layout/Layout";

// ===== Desktop Home =====
import DesktopHero from "./components/Desktop/HeroSection";
import DesktopAbout from "./components/Desktop/About";
import DesktopProjects from "./components/Desktop/Projects";
import DesktopWalkthroughs from "./components/Desktop/Walkthroughs";
import DesktopResources from "./components/Desktop/Resources";
import DesktopContact from "./components/Desktop/Contact";
import TrustedBrands from "./components/Desktop/TrustedBrands";

// ===== Mobile Home =====
import MobileHero from "./components/Mobile/HeroSection";
import MobileAbout from "./components/Mobile/About";
import MobileProjects from "./components/Mobile/Projects";
import MobileWalkthroughs from "./components/Mobile/Walkthroughs";
import MobileResources from "./components/Mobile/Resources";
import MobileContact from "./components/Mobile/Contact";

// ===== Desktop Home Component =====
function DesktopHome() {
  return (
    <>
      <section id="home"><DesktopHero /></section>
      <section id="about"><DesktopAbout /></section>
      <section id="projects"><DesktopProjects /></section>
      <section id="walkthroughs"><DesktopWalkthroughs /></section>
      <section id="brands"><TrustedBrands /></section>
      <section id="resources"><DesktopResources /></section>
      <section id="contact"><DesktopContact /></section>
    </>
  );
}

// ===== Mobile Home Component =====
function MobileHome() {
  return (
    <>
      <section id="home"><MobileHero /></section>
      <section id="about"><MobileAbout /></section>
      <section id="projects"><MobileProjects /></section>
      <section id="walkthroughs"><MobileWalkthroughs /></section>
      <section id="brands"><TrustedBrands /></section>
      <section id="resources"><MobileResources /></section>
      <section id="contact"><MobileContact /></section>
    </>
  );
}

// ===== ScrollToSection handler =====
function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const targetId = location.state.scrollTo;

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

// ===== App =====
export default function App() {
  const isMobile = useDeviceType();
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));

  return (
    <>
      <ScrollToTop />
      <ScrollToSection />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <Layout>
              {isMobile ? <MobileHome /> : <DesktopHome />}
            </Layout>
          }
        />

        {/* Internal Pages */}
        <Route path="/projects" element={<Layout><ProjectsPage /></Layout>} />
        <Route path="/blogs" element={<Layout><Blogs /></Layout>} />
        <Route path="/become-partner" element={<Layout><BecomePartner /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/walkthroughs" element={<Layout><Walkthroughs /></Layout>} />
        <Route path="/resources" element={<Layout><Resources /></Layout>} />

        {/* Details Pages */}
        <Route path="/walkthroughs/:id" element={<WalkthroughDetails />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/resources/:id" element={<ResourceDetail />} />
        <Route path="/resources/all" element={<AllResources />} />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            loggedIn ? (
              <AdminDashboard onLogout={() => {
                localStorage.removeItem("token");
                setLoggedIn(false);
              }} />
            ) : (
              <AdminLogin onLogin={() => setLoggedIn(true)} />
            )
          }
        />
      </Routes>
    </>
  );
}
