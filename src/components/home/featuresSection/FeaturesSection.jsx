import React from "react";
import "./FeaturesSection.css"; // Create a CSS file for styling

const FeaturesSection = () => {
  const features = [
    {
      icon: <i className="bi bi-globe-americas"></i>,
      title: "Discover What's Possible",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsum.",
    },
    {
      icon: <i className="bi bi-cursor"></i>,
      title: "People Really Matter",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsum.",
    },
    {
      icon: <i className="bi bi-heart"></i>,
      title: "Having a Plan Feels Good",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsum.",
    },
  ];

  return (
    <section class="ice-cream-section">
      <div className="features-section">
        <div className="features-container">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
