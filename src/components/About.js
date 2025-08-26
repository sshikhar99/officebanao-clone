import React from "react";
import { FaUsers } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
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
    </section>
  );
};

export default About;