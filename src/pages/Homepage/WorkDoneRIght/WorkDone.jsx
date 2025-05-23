import { useState } from "react";
import ServiceImageData from "../../../components/ServiceImageData";
import { ChevronLeft, ChevronRight } from "lucide-react";

import brandStrategy from "/src/assets/shared-images/Brand.png";
import design from "/src/assets/shared-images/UX.png";
import development from "/src/assets/shared-images/web-app-dev.png";

// Image data
const workImages = [
  {
    src: brandStrategy,
    text: "Company Branding",
    id: "branding",
  },
  {
    src: design,
    text: "UI/UX Design",
    id: "ui-ux",
  },
  {
    src: development,
    text: "Web/App Development",
    id: "web-dev",
  },
];

const WorkDone = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // function to navigate images
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % workImages.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? workImages.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="relative mx-auto container my-16 px-4 font-header text-2xl text-black">
      <h3 className="text-center text-4xl my-10 font-bold">
        Our work done <span className="text-[red]">right</span>
      </h3>

      {/* desktop view" show all */}
      <div className="hidden md:flex gap-6 md:justify-center">
        {workImages.map((image) => (
          <ServiceImageData
            key={image.id}
            image={image}
            isLinked={false}
            className="w-full h-auto"
          />
        ))}
      </div>

      {/* mobile view: display one at a time */}
      <div className="relative md:hidden flex items-center justify-center">
        <div className="w-full flex justify-center">
          <ServiceImageData image={workImages[activeIndex]} isLinked={false} />
        </div>

        {/* prev button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 bg-black/60 text-white p-2 rounded-full hover:bg-black"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 bg-black/60 text-white p-2 rounded-full hover:bg-black"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {workImages.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === index ? "bg-secondary" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>

      {/* Green button */}

      <div className="text-center mt-12 border-b border-[#000000] pb-5 w-[85vw] m-auto">
        <button className="py-2 px-10 bg-secondary rounded-md cursor-pointer">
          View all
        </button>
      </div>
    </div>
  );
};

export default WorkDone;

// function WorkDone() {
//   return (
//     <section className="relative bg-body text-white h-[85vh] w-full flex flex-col">
//       <div className="font-header text-2xl text-black">
//         <h3 className="text-center text-4xl my-10 font-bold">
//           Our work done <span className="text-[red]">right</span>
//         </h3>
//       </div>
//       {/* Picture*/}
//       <div className="flex gap-12 justify-center">
//         <div className="w-80 h-60">
//           <img
//             src={Brand}
//             alt="brand"
//             className="h-full w-full object-cover rounded-md"
//           />
//         </div>
//         <div className="w-80 h-60">
//           <img
//             src={Ux}
//             alt="UX"
//             className="h-full w-full object-cover rounded-md"
//           />
//         </div>
//         <div className="w-80 h-60">
//           <img
//             src={Web}
//             alt="web"
//             className="h-full w-full object-cover rounded-md"
//           />
//         </div>
//       </div>
//       {/* Picture overlay */}
//       <div className="capitalize font-body text-md">
//         <div className="flex justify-center items-center absolute top-29 left-21.5 w-80 h-60 bg-[rgba(0,0,0,0.7)] rounded-md">
//           company branding
//         </div>
//         <div className="flex justify-center items-center absolute top-29 left-113 w-80 h-60 bg-[rgba(0,0,0,0.7)] rounded-md">
//           UI/UX design
//         </div>
//         <div className="flex flex-col justify-center items-center absolute top-29 right-21 w-80 h-60 bg-[rgba(0,0,0,0.7)] rounded-md">
//           <p>web/mobile app</p>
//           <p>development</p>
//         </div>
//       </div>
//       {/* Green button */}
//       <div className="text-center mt-12 border-b border-[#000000] pb-5 w-[85vw] m-auto">
//         <button className="py-2 px-10 bg-secondary rounded-md cursor-pointer">
//           View all
//         </button>
//       </div>
//     </section>
//   );
// }

// export default WorkDone;
