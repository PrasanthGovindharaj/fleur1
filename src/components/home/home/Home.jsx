import React from "react";
import "./home.css";
import image1 from "../../../image/pngtree-image-of-a-beautiful-girl-with-flowers-on-a-dark-background-picture-image_2487740.jpg";
import image2 from "../../../image/image.png";
import image3 from "../../../image/pngtree-an-asian-bride-holding-a-bouquet-of-flowers-picture-image_2482473.jpg";

const Home = () => {
  return (
    <section>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active ">
            <img src={image1} className="d-block w-100" alt="Slide 1"  />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center top-50 start-50 translate-middle">
              <h1>This is Beauty</h1>
              <h5>Designed with love & Care, Fleur is all you ever wanted</h5>
              <p>
                Duis sed odio sit amet nibh Vulputate cursus a sit ament mauris.
                Morbi accumsani ipsum velit Nam nec tellus a odio tincidunt
                auctor elit Duis sed odio sit ament nibh
              </p>
              <button className="btn btn-primary mt-3">purchase</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt="Slide 2" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center top-50 start-50 translate-middle">
              <h1>Style & Grace</h1>
              <h5>Make your beautiful website with Fleur</h5>
              <button className="btn btn-primary mt-3">purchase</button>
            </div>
          </div>

          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="Slide 3" />
            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center top-50 start-50 translate-middle">
              <h1>Simply charming</h1>
              <h5>Full of amazing templates and layouts</h5>
              <button className="btn btn-primary mt-3">purchase</button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden bg-white text-dark">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Home;
