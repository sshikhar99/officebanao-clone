import React from "react";
import { FaUsers } from "react-icons/fa";
import "../components/Desktop/About.css";

const About = () => {
  return (
    <main className="about-page">
      <section className="about" id="about">
        <div className="about-icon">
          <FaUsers />
        </div>
        <h2>About Us</h2>
        <p>
          At <b>OfficeBanao.in</b>, we create world-class office interiors tailored
          to your business needs. From startups to enterprises, we bring{" "}
          <b>innovative design</b> and <b>functionality</b> together to transform
          workspaces into inspiring environments.
        </p>
        <p>
          Our team of experts works on every detail—from concept to execution—
          ensuring that your office is not just aesthetically pleasing but also
          highly functional and future-ready. We aim to craft workspaces that
          boost productivity, collaboration, and employee well-being.
        </p>
      </section>
    </main>
  );
};

export default About;
