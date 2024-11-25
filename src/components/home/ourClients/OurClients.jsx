import React from "react";
import "./OurClients.css";

import imageOur1 from "../../../image/client-1.png";
import imageOur2 from "../../../image/client-2.png";
import imageOur3 from "../../../image/client-3.png";
import imageOur4 from "../../../image/client-4.png";
import imageOur5 from "../../../image/client-5.png";
import imageOur6 from "../../../image/client-6.png";

const clients = [
  { id: 1, name: "RetroPeople", image: imageOur1 },
  { id: 2, name: "Emma Bradberry", image: imageOur2 },
  { id: 3, name: "Rebecca Photography", image: imageOur3 },
  { id: 4, name: "Anna Grey Florist", image: imageOur4 },
  { id: 5, name: "Bakery", image: imageOur5 },
  { id: 6, name: "Bakery", image: imageOur6 },
];

const OurClients = () => {
  return (
    <section className="our-clients">
      <div className="container">
        <h2>Our Clients</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur gravida nibh vel velit auctor
          aliquet. Aenean sollicitudin, lorem quis bibendum auci elit.
        </p>
        <div className="clients-grid">
          {clients.map((client) => (
            <div className="client" key={client.id}>
              <img src={client.image} alt={client.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
