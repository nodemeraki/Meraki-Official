import React from "react";
import Facebook from "/src/assets/home-img/Facebook_white.png";
import LinkedIn from "/src/assets/home-img/LinkedIN.png";
import Instagram from "/src/assets/home-img/Instagram.png";
import Twitter from "/src/assets/home-img/Twitter.png";
import FooterBg from "/src/assets/home-img/footer.png";

function Footer() {
  return (
    <footer
      className="text-white py-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${FooterBg})` }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12">
        {/* Our Focus Section */}
        <div className="flex-1 ml-7">
          <h3 className="text-xl mb-4">Our Focus</h3>
          <p className="text-sm leading-relaxed mb-4">
            We have much planned for the future, working with great minds and
            clients.
          </p>
          <p className="font-bold text-lg">+234057005399</p>
          <p className="hover:underline cursor-pointer">info@merakinode.com</p>
          {/* Social Media Icons */}
          <div className="mt-4">
            <p>Follow Us:</p>
            <div className="flex space-x-3 mt-2">
              <img src={Facebook} alt="Facebook" className="w-5 h-5 cursor-pointer hover:scale-110 transition" />
              <img src={LinkedIn} alt="LinkedIn" className="w-5 h-5 cursor-pointer hover:scale-110 transition" />
              <img src={Instagram} alt="Instagram" className="w-5 h-5 cursor-pointer hover:scale-110 transition" />
              <img src={Twitter} alt="Twitter" className="w-5 h-5 cursor-pointer hover:scale-110 transition" />
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flex-1 text-center ml-24 md:text-left">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/services" className="hover:text-primary transition">Services</a>
            </li>
            <li>
              <a href="/portfolio" className="hover:text-primary transition">Portfolio</a>
            </li>
            <li>
              <a href="/about" className="hover:text-primary transition">About Us</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-primary transition">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Business Hours Section */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
          <div className="text-sm space-y-2">
            <p><strong>Monday:</strong> 9:00 am - 7:00 pm</p>
            <p><strong>Tuesday:</strong> 9:00 am - 7:00 pm</p>
            <p><strong>Wednesday:</strong> 9:00 am - 7:00 pm</p>
            <p><strong>Thursday:</strong> 9:00 am - 7:00 pm</p>
            <p><strong>Friday:</strong> 9:00 am - 7:00 pm</p>
            <p><strong>Saturday:</strong> 9:00 am - 2:00 pm</p>
            <p><strong>Sunday:</strong> Closed</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
