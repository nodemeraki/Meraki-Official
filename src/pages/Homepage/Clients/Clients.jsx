import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import arrowLeft from "/src/assets/home-img/left-arrow.png";
// import arrowRight from "/src/assets/home-img/right-arrow.png";
import Quote from "/src/assets/home-img/qoute.png";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur. Locus ut lectus bibendum iaculis tempor vel  ipsum dolor sit amet consectetur. Locus ut lectus bibendum iaculis tempor...",
    name: "Ugbuchie",
    surname: "Chukwuemeka",
    image: "/src/assets/home-img/man.png",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet consectetur. Locus ut lectus bibendum iaculis tempor vel ac ipsum dolor sit amet consectetur. Locus ut lectus bibendum iaculis tempor...",
    name: "Ugbuchie",
    surname: "Chukwuemeka",
    image: "/src/assets/home-img/man.png",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet consectetur. Locus ut lectus bibendum iaculis tempor vel ac ipsum dolor sit amet consectetur. Locus ut lectus bibendum iaculis tempor...",
    name: "Ugbuchie",
    surname: "Chukwuemeka",
    image: "/src/assets/home-img/man.png",
  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit amet consectetur. Locus ut lectus bibendum iaculis tempor vel ac ipsum dolor sit amet consectetur. Locus ut lectus bibendum iaculis tempor...",
    name: "Ugbuchie",
    surname: "Chukwuemeka",
    image: "/src/assets/home-img/man.png",
  },
  {
    id: 5,
    text: "Lorem ipsum dolor sit amet consectetur. Locus ut lectus bibendum iaculis tempor vel  ipsum dolor sit amet consectetur. Locus ut lectus bibendum iaculis tempor...",
    name: "Ugbuchie",
    surname: "Chukwuemeka",
    image: "/src/assets/home-img/man.png",
  },
  {
    id: 6,
    text: "Lorem ipsum dolor sit amet consectetur. Locus ut lectus bibendum iaculis tempor vel ac ipsum dolor sit amet consectetur. Locus ut lectus bibendum iaculis tempor...",
    name: "Ugbuchie",
    surname: "Chukwuemeka",
    image: "/src/assets/home-img/man.png",
  },
  {
    id: 7,
    text: "Lorem ipsum dolor sit amet consectetur. Locus ut lectus bibendum iaculis tempor vel ac ipsum dolor sit amet consectetur. Locus ut lectus bibendum iaculis tempor...",
    name: "Ugbuchie",
    surname: "Chukwuemeka",
    image: "/src/assets/home-img/man.png",
  },
  {
    id: 8,
    text: "Lorem ipsum dolor sit amet consectetur. Locus ut lectus bibendum iaculis tempor vel ac ipsum dolor sit amet consectetur. Locus ut lectus bibendum iaculis tempor...",
    name: "Ugbuchie",
    surname: "Chukwuemeka",
    image: "/src/assets/home-img/man.png",
  },
];

const Clients = () => {
  useEffect(() => {
    const swiperInstance = document.querySelector(".swiper").swiper;
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = ".custom-prev";
      swiperInstance.params.navigation.nextEl = ".custom-next";
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);

  return (
    <div className="bg-body py-12 flex flex-col items-center font-header">
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Our clients say it all
      </h3>

      {/* swiper container */}
      <div className="relative w-[90%] mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-10"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              className=" p-6 bg-white rounded-xl shadow-lg mb-14"
            >
              <div className="flex flex-col items-center justify-center">
                <img src={Quote} alt="quote" className="w-7 h-5 mt-3 mb-4" />
              </div>
              <p className="text-left"> {testimonial.text}</p>
              <div className="flex mt-2 gap-3 items-center">
                <img src={testimonial.image} alt={testimonial.name} />
                <h4 className="font-bold">
                  <span className="block">{testimonial.name}</span>
                  <span className="block">{testimonial.surname}</span>
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* {navigation arrows at the bottom} */}
        <div className="flex md:justify-center justify-end items-center mt-6 gap-3">
          <button className="custom-prev bg-secondary hover:bg-[#5EF960] text-white p-2 w-8 h-8 rounded-full flex place-items-center cursor-pointer transform duration-300">
            <ArrowLeft size={20} strokeWidth={3} />
          </button>
          <button className="custom-next bg-secondary hover:bg-[#5EF960] text-white p-2 w-8 h-8 rounded-full flex place-items-center cursor-pointer transform duration-300">
            <ArrowRight size={20} strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clients;

// function Clients() {
//   return (
//     <section className="bg-body py-12 flex flex-col items-center font-header">
//       {/* Section Title */}
//       <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
//         Our clients say it all
//       </h3>

//       {/* Testimonials Container */}
//       <div className="flex flex-wrap justify-center gap-6 max-w-8xl">
//         {testimonials.map((client) => (
//           <div
//             key={client.id}
//             className="bg-white shadow-lg rounded-xl p-6 w-[250px] md:w-[280px] lg:w-[240px] text-left"
//           >
//             <div className="text-xl font-bold mb-2 flex justify-center">
//               <img src={Quote} alt="quote" className="w-7 h-5 mt-3 mb-4" />
//             </div>
//             <p className="text-sm text-black mb-4">{client.text}</p>
//             {/* Client Info */}
//             <div className="flex items-center gap-2">
//               <img
//                 src={client.image}
//                 alt="Client"
//                 className="w-12 h-12 rounded-full border-2 border-[#136ACD]"
//               />
//               <div className="text-left leading-tight">
//                 <p className="font-bold mt-2">{client.name}</p>
//                 <p className="font-bold">{client.surname}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Navigation Controls */}
//       <div className="flex items-center mt-6 space-x-4">
//         {/* Left Arrow */}
//         <button className="p-2 bg-secondary text-white rounded-full hover:bg-[#5EF960] cursor-pointer">
//           <img src={arrowLeft} alt="Left Arrow" className="w-2 h-2" />
//         </button>

//         {/* Indicator Dots */}
//         <div className="flex space-x-2">
//           <span className="w-2 h-2 bg-primary rounded-full"></span>
//           <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
//         </div>

//         {/* Right Arrow */}
//         <button className="p-2 bg-secondary text-white rounded-full hover:bg-[#5EF960] cursor-pointer">
//           <img src={arrowRight} alt="Right Arrow" className="w-2 h-2" />
//         </button>
//       </div>
//     </section>
//   );
// }

// export default Clients;
