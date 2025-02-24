import { useState } from "react";
import ServiceButtons from "../../Component/ServiceButtons";

import brandStrategy from "./assets/brand.png";
import design from "./assets/design.png";
import development from "./assets/development.png";
import writing from "./assets/technical-writing.png";
import graphics from "./assets/motion-graphic.png";
import marketing from "./assets/marketing.png";

const Showcase = () => {
  // Define categories
  const services = [
    "Brand Strategy",
    "UI/UX Design",
    "Web App Dev",
    "Motion Graphics",
    "All",
  ];

  // Image data with categories
  const imageData = [
    {
      src: brandStrategy,
      text: "Company Branding",
      category: "Brand Strategy",
    },
    { src: design, text: "UI/UX Design", category: "UI/UX Design" },
    { src: development, text: "Web/App Development", category: "Web App Dev" },
    {
      src: writing,
      text: "Content/Technical Writing",
      category: "Brand Strategy",
    },
    { src: graphics, text: "Motion Graphics", category: "Motion Graphics" },
    { src: marketing, text: "Digital Marketing", category: "Brand Strategy" },
  ];

  // State for selected service
  const [selectedService, setSelectedService] = useState("All");

  // Filter images based on selected service
  const filteredImages =
    selectedService === "All"
      ? imageData
      : imageData.filter((image) => image.category === selectedService);

  return (
    <section className="">
      {/* Reusable Service Buttons */}
      <ServiceButtons
        services={services}
        selectedService={selectedService}
        onSelect={setSelectedService}
      />

      {/* Image Showcase */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="group relative rounded-3xl overflow-hidden transition-all duration-300 max-w-[345px] max-h-[299.04px]"
          >
            <img
              src={image.src}
              alt={image.text}
              className="w-full h-full rounded-3xl object-fill"
            />

            {/* Hover Effect */}
            <div
              className="absolute inset-0 flex items-center justify-center bg-[#252D30C4] bg-opacity-90 opacity-0 group-hover:opacity-77 transition-opacity duration-300"
              aria-hidden="true"
            >
              <p className="text-[#F7F7F7] text-2xl">{image.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Showcase;
