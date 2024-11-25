import React from "react";
import './Testimonials.css'

const Testimonials = () => {
  return (
    <section className=" testimonials">
      <h3 className="text-center">Testimonials</h3>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <div className="text-center mb-4">
              <h5 className="text-dark fst-italic">
                "Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit
                auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci
                elit consequat ipsutis sem nibhid elits sed odio sit amet nibh
                vulputate cursus a sit amet maorbi accumsan ipsum velit."
              </h5>
              <p className="fw-bold">RAYMOND MYERS</p>
              <p className="text-muted">Pingdom</p>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="2000">
            <div className="text-center mb-4">
              <h5 className="text-dark fst-italic">
                "Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit
                auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci
                elit consequat ipsutis sem nibhid elits sed odio sit amet nibh
                vulputate cursus a sit amet maorbi accumsan ipsum velit."
              </h5>
              <p className="fw-bold">NICOLE BURKE</p>
              <p className="text-muted">Google Analytics</p>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="2000">
            <div className="text-center mb-4">
              <h5 className="text-dark fst-italic">
                "Nam nec tellus a odio tincidunt auctor a ornare odio. Lorem
                ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor
                aliquet. Aenean sollicitudin, lorem quis bibendum auci elit
                consequat ipsutis sem nibhid elits sed odio sit amet nibh
                vulputate cursus a sit amet maorbi accumsan ipsum velit."
              </h5>
              <p className="fw-bold">DANIEL MITCHELL</p>
              <p className="text-muted">Google Analytics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
