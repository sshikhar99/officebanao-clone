// src/layout/Layout.jsx
import React from "react";
import useDeviceType from "../hooks/useDeviceType";

// Navbars & Footers
import DesktopNavbar from "../components/Desktop/Navbar";
import DesktopFooter from "../components/Desktop/Footer";
import MobileNavbar from "../components/Mobile/Navbar";
import MobileFooter from "../components/Mobile/Footer";

export default function Layout({ children }) {
  const isMobile = useDeviceType();

  return (
    <>
      {/* Navbar */}
      {isMobile ? <MobileNavbar /> : <DesktopNavbar />}

      {/* Page Content */}
      <main>{children}</main>

      {/* Footer */}
      {isMobile ? <MobileFooter /> : <DesktopFooter />}
    </>
  );
}
