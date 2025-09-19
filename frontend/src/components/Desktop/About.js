import React from "react";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./About.css";

const HomeAbout = () => {
  return (
    <section className="about" id="about">
      <div className="about-icon">
        <FaUsers />
      </div>
      <h2>About Us</h2>
      <p>
        At <b>OfficeBanao.in</b>, we design world-class office interiors for startups and enterprises.
        We blend <b>innovation</b> and <b>functionality</b> to transform workspaces.
      </p>

      {/* ✅ Styled button via CSS */}
      <Link to="/about" className="see-more-btn">
        See More →
      </Link>
    </section>
  );
};

export default HomeAbout;
