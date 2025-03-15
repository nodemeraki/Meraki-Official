import React from "react";
import arrowLeft from "/src/assets/home-img/left-arrow.png";
import arrowRight from "/src/assets/home-img/right-arrow.png";
import Quote from "/src/assets/home-img/qoute.png";
import Man from "/src/assets/home-img/man.png";

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur. Locus ut lectus bibendum iaculis tempor vel  ipsum dolor sit amet consectetur. Locus ut lectus bibendum iaculis tempor...",
    name: "Ugbuchie",
    surname: "Chukwuemeka",
    image: Man,
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet consectetur. Locus ut lectus bibendum iaculis tempor vel ac ipsum dolor sit amet consectetur. Locus ut lectus bibendum iaculis tempor...",
    name: "Ugbuchie",
    surname: "Chukwuemeka",
    image: Man,
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet consectetur. Locus ut lectus bibendum iaculis tempor vel ac ipsum dolor sit amet consectetur. Locus ut lectus bibendum iaculis tempor...",
    name: "Ugbuchie",
    surname: "Chukwuemeka",
    image: Man,
  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit amet consectetur. Locus ut lectus bibendum iaculis tempor vel ac ipsum dolor sit amet consectetur. Locus ut lectus bibendum iaculis tempor...",
    name: "Ugbuchie",
    surname: "Chukwuemeka",
    image: Man,
  },
];

function Clients() {
  return (
    <section className="bg-[#F7F7F7] py-12 flex flex-col items-center font-header">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Our clients say it all
      </h2>

      {/* Testimonials Container */}
      <div className="flex flex-wrap justify-center gap-6 max-w-8xl">
        {testimonials.map((client) => (
          <div
            key={client.id}
            className="bg-white shadow-lg rounded-xl p-6 w-[250px] md:w-[280px] lg:w-[240px] text-left"
          >
            <div className="text-xl font-bold mb-2 flex justify-center">
              <img src={Quote} alt="quote" className="w-7 h-5 mt-3 mb-4" />
            </div>
            <p className="text-sm text-black mb-4">{client.text}</p>
            {/* Client Info */}
            <div className="flex items-center gap-2">
              <img
                src={client.image}
                alt="Client"
                className="w-12 h-12 rounded-full border-2 border-[#136ACD]"
              />
              <div className="text-left leading-tight">
                <p className="font-bold mt-2">{client.name}</p>
                <p className="font-bold">{client.surname}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center mt-6 space-x-4">
        {/* Left Arrow */}
        <button className="p-2 bg-secondary text-white rounded-full hover:bg-[#5EF960] cursor-pointer">
          <img src={arrowLeft} alt="Left Arrow" className="w-2 h-2" />
        </button>

        {/* Indicator Dots */}
        <div className="flex space-x-2">
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
        </div>

        {/* Right Arrow */}
        <button className="p-2 bg-secondary text-white rounded-full hover:bg-[#5EF960] cursor-pointer">
          <img src={arrowRight} alt="Right Arrow" className="w-2 h-2" />
        </button>
      </div>
    </section>
  );
}

export default Clients;
