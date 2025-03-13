import React from "react";
import BrandIm from "/src/assets/home-img/Brand.png";
import UX from "/src/assets/home-img/UX.png";

const content = [
  {
    id: 1,
    icon: "src/assets/service-img/brandstr.png",
    title: "BRAND STRATEGY",
    description:
      "At MERAKINODE, we are a  well-known brand that boost company’s worth by offering it a competitive advantage in the market place and the development of strategic assistance in determining who you are, design is the method by wish our inner most visions are projected , a logo is more than just an identity , it’s a story its encompasses all the  message with wish the visionaries wants to project in a very simple ,immediate ,instant and unique way , lets tell your story, get a logo now “click here” ",
    image: BrandIm,
  },
  {
    id: 2,
    icon: "src/assets/service-img/icon.png",
    title: "UI/UX (User Experience) DESIGN",
    description:
      "At MERAKINODE employs design concepts and (UI/UX) design to assist businesses in creating customer experiences while interacting with digital products. We produce stunning designs that optimize the overall experience for the audience through a collaborative process. ",
    image: UX,
  },
  {
    id: 3,
    icon: UX,
    title: "WEB/ MOBILE APP DEVELOPMENT",
    description:
      "At MERAKINODE editorial design is taken into account, we provide good typography, graphics, and illustrations to make publications appealing and visually intriguing. books, periodicals, essays, and newspapers, for example “some catalogues or a link to the gallery” .",
    image: "/assets/about-img/digital-marketing.jpg",
  },
  {
    id: 4,
    icon: UX,
    title: "WEB DEVELOPMENT",
    description:
      "We build cutting-edge, scalable, and user-friendly websites to drive business growth and customer interaction...",
    image: "/assets/about-img/web-development.jpg",
  },
  {
    id: 5,
    icon: UX,
    title: "DIGITAL MARKETING",
    description:
      "Our digital marketing strategies help businesses grow by enhancing online visibility and customer engagement...",
    image: "/assets/about-img/digital-marketing.jpg",
  },
  {
    id: 6,
    icon: UX,
    title: "WEB DEVELOPMENT",
    description:
      "We build cutting-edge, scalable, and user-friendly websites to drive business growth and customer interaction...",
    image: "/assets/about-img/web-development.jpg",
  },
];

function Brand() {
  return (
    <section className="py-12 px-6 md:px-16 bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {content.map((item, index) => {
          // Rows 1, 3, 5 → Normal order (text left, image right)
          // Rows 2, 4, 6 → Reverse order (text right, image left)
          const isReverseRow = index % 2 !== 0; // Odd indices (1,3,5) reverse order

          return (
            <div
              key={item.id}
              className={`flex flex-col md:flex-row items-start gap-6 ${
                isReverseRow ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* Text Content */}
              <div className="md:w-1/2">
                <div className="flex items-center gap-3">
                  <img src={item.icon} alt="Icon" className="w-8 h-8" />
                  <h3 className="text-xl font-semibold font-lora text-gray-800">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>

              {/* Image Container */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Brand;
