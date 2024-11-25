import React from "react";
import "./PlaneData.css";

const PlaneData = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-icon">
              <i className={`bi bi-${stat.icon}`}></i>
            </div>
            <h2 className="stat-number">{stat.number}</h2>
            <p className="stat-title">{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const statsData = [
  { icon: "star", number: 168, title: "Design" },
  { icon: "cursor", number: 2590, title: "Marketing" },
  { icon: "heart", number: 347, title: "Development" },
  { icon: "suit-spade", number: 191, title: "User Experience" },
];

export default PlaneData;
