import React from "react";
import "./OurAmazingTeam.css";
import imageOur1 from "../../../image/istockphoto-1395880805-612x612.jpg"
import imageOur2 from "../../../image/istockphoto-462861845-170667a.jpg"
import imageOur3 from "../../../image/istockphoto-92176443-170667a.jpg"

const OurAmazingTeam = () => {
  return (
    <section className="team-section">
      <div className="team-header">
        <h1 className="team-title">OUR AMAZING TEAM</h1>
        <p className="team-subtitle">
          Lorem ipsum dolor sit amet, consectetur gravida nibh vel velit auctor
          aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat
          ipsum.
        </p>
      </div>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="team-image">
              <img src={member.image} alt={member.name} />
            </div>
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p className="team-description">{member.description}</p>
            <div className="team-socials">
              {socialLinks.map((icon, i) => (
                <a
                  key={i}
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`bi bi-${icon.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const teamMembers = [
  {
    name: "Cynthia Fowler",
    role: "Senior Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt.",
    image: imageOur1,
  },
  {
    name: "Cynthia Fowler",
    role: "Marketing Manager",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt.",
    image: imageOur2,
  },
  {
    name: "Cynthia Fowler",
    role: "PR Manager",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt.",
    image: imageOur3,
  },
];

const socialLinks = [
  { icon: "twitter", link: "https://twitter.com" },
  { icon: "facebook", link: "https://facebook.com" },
  { icon: "instagram", link: "https://instagram.com" },
  { icon: "linkedin", link: "https://linkedin.com" },
];

export default OurAmazingTeam;
