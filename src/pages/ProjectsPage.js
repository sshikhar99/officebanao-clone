// src/pages/ProjectsPage.js
import React from "react";
import useDeviceType from "../hooks/useDeviceType";

// ===== Desktop imports =====
import DesktopNavbar from "../components/Desktop/Navbar";
import DesktopFooter from "../components/Desktop/Footer";
import DesktopProjects from "../components/Desktop/Projects";

// ===== Mobile imports =====
import MobileNavbar from "../components/Mobile/Navbar";
import MobileFooter from "../components/Mobile/Footer";
import MobileProjects from "../components/Mobile/Projects";

export default function ProjectsPage() {
  const isMobile = useDeviceType();

  return (
    <>
      {isMobile ? <MobileNavbar /> : <DesktopNavbar />}

      <section id="projects">
        {isMobile ? <MobileProjects /> : <DesktopProjects />}
      </section>

      {isMobile ? <MobileFooter /> : <DesktopFooter />}
    </>
  );
}
