import React from "react";
import "./HeroSection.css";
import HemoImage1 from "../../../image/h1-slide-2-img-1.png"
import HemoImage2 from "../../../image/h1-slide-2-img-3.png";
import HemoImage3 from "../../../image/h1-slide-2-img-2.png"
const HeroSection = () => {
  return (
    <section>
    <div className="hero-section">
      <h1 className="hero-title">SIMPLE AND CLEAN SOLUTIONS</h1>
      <p className="hero-subtitle">
        Lorem ipsum dolor sit amet, consectetur gravida nibh vel velit auctor
        aliquet. Aenean sollicitudin, lorem quis bibendum aucti elit consequat
        ipsum.
      </p>
      <div className="image-container">
        <img
          src={HemoImage1}
          alt="Tablet with hands"
          className="image tablet-left"
        />
        <img
          src={HemoImage2}
          alt="Tablet with portrait"
          className="image tablet-center"
        />
        <img
          src={HemoImage3}
          alt="Tablet with chair"
          className="image tablet-right"
        />
      </div>
      
    </div>
    </section>
  );
};

export default HeroSection;
