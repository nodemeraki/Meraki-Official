import React from "react";
import "./Footer.css";
import Facebook from "/src/assets/icons/Facebook_white.png";
import LinkedIN from "/src/assets/icons/LinkedIN.png";
import Instagram from "/src/assets/icons/Instagram.png";
import Twitter from "/src/assets/icons/Twitter.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Our Focus Section */}
        <div className="footer-section">
          <h3 class="italic-text">Our focus</h3>
          <div className="ourfocus-paragraph">
            We have much planned for the future, working with great minds and
            clients.
          </div>
          <p>
            <strong>+234057005399</strong>
          </p>
          <p className="info-footer">info@merakinode.com</p>
          <div className="footer-social-icons">
            <p>Follow Us:</p>
            <div className="icons-padding ">
              <img src={Facebook} alt="logo" className="icon" />
              <img src={LinkedIN} alt="logo" className="icon" />
              <img src={Instagram} alt="logo" className="icon" />
              <img src={Twitter} alt="logo" className="icon" />
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section footer-section-quick">
          <h3 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Quick link
          </h3>
          <ul>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Business Hour Section */}
        <div className="footer-section footer-section-business">
          <h3>Business Hour</h3>
          <p>
            <strong>Monday</strong> 9:00 am - 7:00 pm
          </p>
          <p>
            <strong>Tuesday</strong> 9:00 am - 7:00 pm
          </p>
          <p>
            <strong>Wednesday</strong> 9:00 am - 7:00 pm
          </p>
          <p>
            <strong>Thursday</strong> 9:00 am - 7:00 pm
          </p>
          <p>
            <strong>Friday</strong> 9:00 am - 7:00 pm
          </p>
          <p>
            <strong>Saturday</strong> 9:00 am - 2:00 pm
          </p>
          <p>
            <strong>Sunday</strong> Closed
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
