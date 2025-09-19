import React from "react";
import useDeviceType from "../hooks/useDeviceType";

// Desktop components
import DesktopNavbar from "./Desktop/Navbar";
import DesktopFooter from "./Desktop/Footer";
import DesktopHero from "./Desktop/HeroSection";
import DesktopAbout from "./Desktop/About";
import DesktopProjects from "./Desktop/Projects";
import DesktopWalkthroughs from "./Desktop/Walkthroughs";
import DesktopResources from "./Desktop/Resources";
import DesktopContact from "./Desktop/Contact";

// Mobile components
import MobileNavbar from "./Mobile/Navbar";
import MobileFooter from "./Mobile/Footer";
import MobileHero from "./Mobile/HeroSection";
import MobileAbout from "./Mobile/About";
import MobileProjects from "./Mobile/Projects";
import MobileWalkthroughs from "./Mobile/Walkthroughs";
import MobileResources from "./Mobile/Resources";
import MobileContact from "./Mobile/Contact";

// Shared Section
import TrustedBrands from "./Desktop/TrustedBrands";

function Home() {
  const isMobile = useDeviceType();

  if (isMobile) {
    return (
      <>
        <MobileNavbar />
        <section id="home"><MobileHero /></section>
        <section id="about"><MobileAbout /></section>
        <section id="projects"><MobileProjects /></section>
        <section id="walkthroughs"><MobileWalkthroughs /></section>
        <section id="brands"><TrustedBrands /></section>
        <section id="resources"><MobileResources /></section>
        <section id="contact"><MobileContact /></section>
        <MobileFooter />
      </>
    );
  }

  return (
    <>
      <DesktopNavbar />
      <section id="home"><DesktopHero /></section>
      <section id="about"><DesktopAbout /></section>
      <section id="projects"><DesktopProjects /></section>
      <section id="walkthroughs"><DesktopWalkthroughs /></section>
      <section id="brands"><TrustedBrands /></section>
      <section id="resources"><DesktopResources /></section>
      <section id="contact"><DesktopContact /></section>
      <DesktopFooter />
    </>
  );
}

export default Home;
