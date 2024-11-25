import React from "react";
import "./FooterHome.css";
import imageFooter from "../../../image/logo-light.png";
import instagramName1 from "../../../image/istockphoto-1395880805-612x612.jpg"
import instagramName2 from "../../../image/istockphoto-1395880805-612x612.jpg"
import instagramName3 from "../../../image/istockphoto-1395880805-612x612.jpg"
import instagramName4 from "../../../image/istockphoto-1395880805-612x612.jpg"
import instagramName5 from "../../../image/istockphoto-1395880805-612x612.jpg"
import instagramName6 from "../../../image/istockphoto-1395880805-612x612.jpg"
import instagramName7 from "../../../image/istockphoto-1395880805-612x612.jpg"
import instagramName8 from "../../../image/istockphoto-1395880805-612x612.jpg"

const FooterHome = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, nam ut vero scribentur, mel veritus
            omnesque ei. Mutat labores mea ex, mei cu option indoctum, sumo
            errem partiendo ex cum.
          </p>
          <form className="newsletter-form">
            <label htmlFor="email">Subscribe to our newsletter</label>
            <div className="email-input">
              <input type="email" id="email" placeholder="Enter Your Email*" />
              <button type="submit">&#8594;</button>
            </div>
          </form>
        </div>

        <div className="footer-section tweets">
          <h3>Latest Tweets</h3>
          <p>Couldn't connect with Twitter</p>
        </div>

        <div className="footer-section instagram">
          <h3>Instagram</h3>
          <div className="instagram-images">
            <img src={instagramName1} alt="Placeholder 1" />
            <img src={instagramName2} alt="Placeholder 2" />
            <img src={instagramName3} alt="Placeholder 3" />
            <img src={instagramName4} alt="Placeholder 4" />
            <img src={instagramName5} alt="Placeholder 5" />
            <img src={instagramName6} alt="Placeholder 6" />
            <img src={instagramName7} alt="Placeholder 7" />
            <img src={instagramName8} alt="Placeholder 8" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div>
          <img src={imageFooter} alt="footerImage" />
        </div>
        <div>
          <ul className="footer-nav">
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <p>© 2017 Qode Interactive, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterHome;
