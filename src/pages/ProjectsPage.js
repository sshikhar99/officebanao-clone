// src/pages/ProjectsPage.js
import React from "react";
import useDeviceType from "../hooks/useDeviceType";

// ===== Desktop imports =====
import DesktopProjects from "../components/Desktop/Projects";

// ===== Mobile imports =====
import MobileProjects from "../components/Mobile/Projects";

export default function ProjectsPage() {
  const isMobile = useDeviceType();

  return (
    <main>
      <section id="projects">
        {isMobile ? <MobileProjects /> : <DesktopProjects />}
      </section>
    </main>
  );
}
