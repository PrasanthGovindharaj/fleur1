import React from "react";
import "./ProgressSection.css"; 

const ProgressSection = () => {
  const skills = [
    { name: "Design", percentage: 65 },
    { name: "Marketing", percentage: 90 },
    { name: "Development", percentage: 87 },
    { name: "User Experience", percentage: 70 },
  ];

  return (
    <div className="progress-section">
      <div className="text-section">
        <h2>ENGAGING, CREATIVE PAGE AND PURPOSEFUL THEME.</h2>
        <p className="subtitle">
          Express yourself and your business through this amazing theme
        </p>
        <p>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis
          dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut
          imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat
          sed fermentum feugiat, velit mauris egestas quam, ut aliquam exam.
        </p>
      </div>
      <div className="progress-bars">
        {skills.map((skill, index) => (
          <div key={index} className="progress-bar">
            <span className="percentage ">{skill.name} </span>
            <span className="percentage ">{skill.percentage}%</span>
            <div className="progress">
              <div
                className="progress-fill"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressSection;
