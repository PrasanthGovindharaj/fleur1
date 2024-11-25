import React, { useState } from "react";
import "./navbar.css";
import logoImage from "../image/logo-light.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className={`header ${isMenuOpen ? "showMenu" : ""}`}>
      <nav className="navbar">
        <i
          className={`menu bi ${isMenuOpen ? "bi-x-lg" : "bi-list"}`}
          aria-label={isMenuOpen ? "close" : "open"}
          onClick={toggleMenu}
        ></i>
        <img src={logoImage} alt="logo" className="logo-image" />

        <ul className={`nav-menu ${isMenuOpen ? "show" : ""}`}>
          <li>
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="/pages" className="nav-link">
              Pages
            </a>
          </li>
          <li>
            <a href="/portfolio" className="nav-link">
              Portfolio
            </a>
          </li>
          <li>
            <a href="/blog" className="nav-link">
              Blog
            </a>
          </li>
          <li>
            <a href="/shop" className="nav-link">
              Shop
            </a>
          </li>
          <li>
            <a href="/elements" className="nav-link">
              Elements
            </a>
          </li>
        </ul>
        <div>
          <a href="/cart" className="nav-logo">
            <i className="bi bi-cart3"></i>
          </a>
          <a href="/search" className="nav-logo search-btn">
            <i className="bi bi-search"></i>
          </a>
          <a href="/dots" className="nav-logo logo-btn">
            <i className="bi bi-three-dots-vertical"></i>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
