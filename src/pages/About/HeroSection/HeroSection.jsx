import HeroIm from "/src/assets/about-img/caroze 1.png";

function HeroSection() {
  return (
    <section className="h-[45vh] md:h-[65vh] sm:h-[40vh] bg-body pb-8">
      <div
        className="h-full w-[90vw] m-auto rounded-sm md:rounded-md overflow-hidden bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${HeroIm})` }}
      >
        <h2 className="text-2xl font-body font-bold text-black capitalize">
          about us
        </h2>
      </div>
    </section>
  );
}

export default HeroSection;

// function HeroSection() {
//   return (
//     <section className="h-[75vh] bg-body">
//       <div
//         className="h-[70vh] w-[90vw] m-auto rounded-sm overflow-hidden bg-cover bg-center flex items-center justify-center"
//         style={{ backgroundImage: `url(${HeroIm})` }}
//       >
//         <h2 className="text-3xl font-body font-bold text-black capitalize">
//           about us
//         </h2>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;
