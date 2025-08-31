import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom"; // ✅ for navigation

// slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Walkthroughs.css";

// Your project images
import project1 from "../../assets/project1.webp";
import project2 from "../../assets/project2.webp";
import project3 from "../../assets/project3.webp";

function Walkthroughs() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <div className="walkthroughs-wrap">
      <h2 className="walkthroughs-title">Walkthroughs</h2>
      <p className="walkthroughs-sub">
        Virtual walkthroughs of our designed spaces.
      </p>

      <Slider {...settings}>
        <div>
          <img src={project1} alt="Project 1 walkthrough" className="walkthrough-img" />
        </div>
        <div>
          <img src={project2} alt="Project 2 walkthrough" className="walkthrough-img" />
        </div>
        <div>
          <img src={project3} alt="Project 3 walkthrough" className="walkthrough-img" />
        </div>
      </Slider>

      {/* ✅ View More button */}
      <div className="walkthroughs-btn-wrap">
        <Link to="/walkthroughs" className="view-more-btn">
          View More Walkthroughs →
        </Link>
      </div>
    </div>
  );
}

export default Walkthroughs;
