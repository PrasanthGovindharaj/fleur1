import React from "react";
import imagecard1 from "../../../image/blog-post-img-12.jpg";
import imagecard2 from "../../../image/blog-post-img-9.jpg";
import imagecard3 from "../../../image/blog-post-img-10.jpg";
import imagecard4 from "../../../image/blog-post-img-11.jpg";
import "./Solutions.css"; // Custom CSS for image styling

const cardData = [
  {
    id: 1,
    title: "Something Special",
    text: "Proin gravida nibh vel velit auctor aliquet aenean sollicitudin.",
    img: imagecard1,
    date: "April 24, 2016",
    category: "Planning",
  },
  {
    id: 2,
    title: "Connect Your Worlds",
    text: "Proin gravida nibh vel velit auctor aliquet aenean sollicitudin.",
    img: imagecard2,
    date: "January 24, 2016",
    category: "Fashion",
  },
  {
    id: 3,
    title: "Choose Your Style",
    text: "Proin gravida nibh vel velit auctor aliquet aenean sollicitudin.",
    img: imagecard3,
    date: "February 24, 2016",
    category: "Decoration",
  },
  {
    id: 4,
    title: "Express Yourself",
    text: "Proin gravida nibh vel velit auctor aliquet aenean sollicitudin.",
    img: imagecard4,
    date: "March 15, 2016",
    category: "Lifestyle",
  },
];

const Card = ({ title, text, img, date, category }) => (
  <div className="col">
    <div className="card">
      <img src={img} className="card-img custom-image" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <p className="text-muted ">
          {category} | {date}
        </p>
      </div>
    </div>
  </div>
);

const Solutions = () => {
  const slides = [];
  for (let i = 0; i < cardData.length; i += 3) {
    slides.push(cardData.slice(i/3, i + 3));
  }

  return (
    <section className="solutions bg-light">
      <div className="container">
        <h2 className="text-center ">We're Sharing Everything</h2>
        <p className="text-center ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida
          nibh vel velit auctor aliquet aenean sollicitudin.
        </p>
        <div
          id="carouselExample"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="row ">
                  {slide.map((card) => (
                    <Card key={card.id} {...card} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
