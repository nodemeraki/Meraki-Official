import React from "react";
import HeroRq from "/src/assets/Request/hero.jpg";

function Hero() {
  return (
    <section className="h-[45vh] md:h-[65vh] sm:h-[40vh] bg-body">
      <div
        className="h-full w-[90vw] m-auto rounded-sm md:rounded-md overflow-hidden bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${HeroRq})` }}
      >
        <h2 className="text-2xl font-body text-white capitalize">
          Request a Quote
        </h2>
      </div>
    </section>
  );
}

export default Hero;
