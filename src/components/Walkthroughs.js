import React from "react";
import Slider from "react-slick";

// slick CSS (imported here so you don't have to touch other files)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Your project images
import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";

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

  const wrap = {
    maxWidth: "980px",
    margin: "0 auto",
    textAlign: "center",
  };

  const imgStyle = {
    width: "100%",
    height: "520px",
    objectFit: "cover",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  };

  const title = {
    fontSize: "32px",
    fontWeight: 700,
    marginBottom: "8px",
  };

  const sub = {
    color: "#666",
    marginBottom: "24px",
  };

  return (
    <div style={wrap}>
      <h2 style={title}>Walkthroughs</h2>
      <p style={sub}>Virtual walkthroughs of our designed spaces.</p>

      <Slider {...settings}>
        <div>
          <img src={project1} alt="Project 1 walkthrough" style={imgStyle} />
        </div>
        <div>
          <img src={project2} alt="Project 2 walkthrough" style={imgStyle} />
        </div>
        <div>
          <img src={project3} alt="Project 3 walkthrough" style={imgStyle} />
        </div>
      </Slider>
    </div>
  );
}

export default Walkthroughs;
