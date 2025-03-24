import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
// import { useState } from "react";
import logo from "/src/assets/home-img/logo.png";
import Facebook from "/src/assets/home-img/Facebook.png";
import LinkedIN from "/src/assets/home-img/linkedin-dark.png";
import Instagram from "/src/assets/home-img/Instagram-dark.png";
import Twitter from "/src/assets/home-img/Twitter-dark.png";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = (e) => {
    if (isMobileMenuOpen && !e.target.closest("nav")) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeMobileMenu);
    return () => document.removeEventListener("click", closeMobileMenu);
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-body text-white pt-5 pb-4 px-11">
      <nav className="w-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-12 ml-7.5" />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div
          className="md:hidden cursor-pointer text-white bg-primary text-2xl py-1 px-1.5"
          onClick={toggleMobileMenu}
        >
          ☰
        </div>

        {/* Navigation Links */}
        <ul
          className={`fixed md:static top-0 right-0 h-[95%] md:h-auto md:bg-transparent md:flex md:items-center md:space-x-6 transition-all duration-300 ease-in-out z-50 md:rounded-none md:py-0 bg-white w-1/2 md:w-auto md:p-0 shadow-lg md:shadow-none transform ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0`}
        >
          <div className="md:hidden text-white bg-primary w-full text-center italic py-10 mb-6">
            <p>Crafting Excellence</p>
            <p>in Every Byte</p>
          </div>
          <li className="text-center">
            {/* <Link
              to="/"
              className="text-black block pt-2 pb-2 hover:text-primary"
            > */}
            <Link to="/" className="text-black block py-2 hover:text-primary">
              Home
            </Link>
          </li>
          <li className="text-center">
            <Link
              to="/service"
              className="text-black block py-2 md:py-0 hover:text-primary"
            >
              Services
            </Link>
          </li>
          <li className="text-center">
            <Link
              to="/portfolio"
              className="text-black block py-2 md:py-0 hover:text-primary"
            >
              Portfolio
            </Link>
          </li>
          <li className="text-center">
            <Link
              to="/about"
              className="text-black block py-2 md:py-0 hover:text-primary"
            >
              About Us
            </Link>
          </li>
          <li className="text-center">
            <Link
              to="/contact"
              className="text-black block py-2 md:py-0 hover:text-primary"
            >
              Contact
            </Link>
          </li>

          {/* Request Quote Button */}
          <li>
            <Link to="/request-quote">
            <button className="bg-primary text-white px-5 py-2 rounded-lg hover:cursor-pointer md:mt-0 md:ml-0 mt-6 ml-[30px]">
              Request a Quote
           </button>

            </Link>
          </li>

          {/* Social Media Icons (Mobile Only) */}
          <div className="flex justify-center space-x-4 mt-10 mb-6 md:hidden">
            <a href="#">
              <img src={Facebook} alt="Facebook" className="w-6" />
            </a>
            <a href="#">
              <img src={LinkedIN} alt="LinkedIn" className="w-6" />
            </a>
            <a href="#">
              <img src={Instagram} alt="Instagram" className="w-6" />
            </a>
            <a href="#">
              <img src={Twitter} alt="Twitter" className="w-6" />
            </a>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
