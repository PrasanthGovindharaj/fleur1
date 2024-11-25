import React, { useState } from "react";
import "./DataSection.css";
import Artistic1 from '../../../image/h1-slide-2-img-1.png'
import Artistic2 from '../../../image/h1-slide-2-img-2.png'
import Artistic3 from '../../../image/h1-slide-2-img-3.png'
import Modern1 from "../../../image/blog-post-img-10.jpg"
import Modern2 from "../../../image/blog-post-img-11.jpg"
import Modern3 from "../../../image/blog-post-img-12.jpg";
import Photography1 from "../../../image/istockphoto-1395880805-612x612.jpg";
import Photography2 from "../../../image/istockphoto-92176443-170667a.jpg";
import Photography3 from "../../../image/istockphoto-462861845-170667a.jpg";
import Print1 from "../../../image/pngtree-an-asian-bride-holding-a-bouquet-of-flowers-picture-image_2482473.jpg";
import Print2 from "../../../image/pngtree-image-of-a-beautiful-girl-with-flowers-on-a-dark-background-picture-image_2487740.jpg";
import Print3 from "../../../image/blog-post-img-9.jpg";

const images = {
  all: [
    {
      src: Artistic1,
      alt: "Artistic Image 1",
      id: "card",
    },
    {
      src: Artistic2,
      alt: "Artistic Image 2",
      id: "card",
    },
    {
      src: Artistic3,
      alt: "Artistic Image 3",
      id: "card",
    },
    {
      src: Modern1,
      alt: "Modern Image 1",
      id: "card",
    },
    {
      src: Modern2,
      alt: "Modern Image 2",
      id: "card",
    },
    {
      src: Modern3,
      alt: "Modern Image 3",
      id: "card",
    },
    {
      src: Photography1,
      alt: "Photography Image 1",
      id: "card",
    },
    {
      src: Photography2,
      alt: "Photography Image 2",
      id: "card",
    },
    {
      src: Photography3,
      alt: "Photography Image 3",
      id: "card",
    },
    {
      src: Print1,
      alt: "Print Image 1",
      id: "card",
    },
    {
      src: Print2,
      alt: "Print Image 2",
      id: "card",
    },
    {
      src: Print3,
      alt: "Print Image 3",
      id: "card",
    },
  ],
  artistic: [
    {
      src: Artistic1,
      alt: "Artistic Image 1",
      id: "card",
    },
    {
      src: Artistic2,
      alt: "Artistic Image 2",
      id: "card",
    },
    {
      src: Artistic3,
      alt: "Artistic Image 3",
      id: "card",
    },
  ],
  modern: [
    {
      src:Modern1,
      alt: "Modern Image 1",
      id: "card",
    },
    {
      src: Modern2,
      alt: "Modern Image 2",
      id: "card",
    },
    {
      src: Modern3,
      alt: "Modern Image 3",
      id: "card",
    },
  ],
  photography: [
    {
      src: Photography1,
      alt: "Photography Image 1",
      id: "card",
    },
    {
      src: Photography2,
      alt: "Photography Image 2",
      id: "card",
    },
    {
      src: Photography3,
      alt: "Photography Image 3",
      id: "card",
    },
  ],
  print: [
    {
      src: Print1,
      alt: "Print Image 1",
      id: "card",
    },
    {
      src: Print2,
      alt: "Print Image 2",
      id: "card",
    },
    {
      src: Print3,
      alt: "Print Image 3",
      id: "card",
    },
  ],
};

function DataSection() {
  const [category, setCategory] = useState("all");

  const handleCategoryChange = (category) => {
    setCategory(category);
  };
  const displayedImages =
    category === "all" ? images.all.slice(0, 8) : images[category];

  return (
    <div className="container mt-5">
      <h5 className="hero-title">Our Amazing Work</h5>
      <p className="hero-subtitle">
        Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor
        aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat
        ipsutis sem niuis sed odio sit amet nibh
      </p>

      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container-fluid">
          <ul className="navbar-nav mx-auto">
            {["all", "artistic", "modern", "photography", "print"].map(
              (cat) => (
                <li className="nav-item" key={cat}>
                  <a
                    href="#card"
                    className={`nav-link link ${
                      category === cat ? "active" : ""
                    }`}
                    onClick={() => handleCategoryChange(cat)}
                    aria-label={`View ${cat} images`}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>

      <div className="row">
        {displayedImages.map((image, index) => (
          <div className="col-12 col-md-3 mb-3" key={index}>
            <div className="card">
              <img src={image.src} className="card-img-top" alt={image.alt} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataSection;
