import React, { useState } from "react";
import "./Header.css";
import logo from "/src/assets/logo.png";
import Facebook from "/src/assets/dark-icons/Facebook.png";
import LinkedIN from "/src/assets/dark-icons/linkedin-dark.png";
import Instagram from "/src/assets/dark-icons/Instagram-dark.png";
import Twitter from "/src/assets/dark-icons/Twitter-dark.png";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <nav>
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="hamburger" onClick={toggleMobileMenu}>
          ☰
        </div>

        {/* Navigation Menu */}
        <ul
          className={isMobileMenuOpen ? "nav-links mobile-active" : "nav-links"}
        >
          <div className="mobile-header">
            <p>Crafting Excellence </p>
            <p>in Every Byte</p>
          </div>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact" className="navContact">
              Contact
            </a>
          </li>
          <button className="request-quote-btn">Request a Quote</button>
          <div className="social-icons">
            <a href="#">
              <img src={Facebook} alt="logo" className="icon" />
            </a>
            <a href="#">
              <img src={LinkedIN} alt="logo" className="icon" />
            </a>
            <a href="#">
              <img src={Instagram} alt="logo" className="icon" />
            </a>
            <a href="#">
              <img src={Twitter} alt="logo" className="icon" />
            </a>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
