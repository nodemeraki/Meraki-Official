import HeroIm from "/src/assets/about-img/caroze 2.jpg";

function HeroSection() {
  return (
    <section className="h-[45vh] md:h-[65vh] sm:h-[40vh] bg-body pb-8">
      <div
        className="relative h-full w-[88vw] m-auto rounded-xl md:rounded-2xl overflow-hidden bg-cover bg-center flex items-center justify-center shadow-[0_0_10px_4px_rgba(0,0,0,0.2)]"
        style={{ backgroundImage: `url(${HeroIm})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-25"></div>

        {/* Text */}
        <h2 className="relative text-2xl md:text-3xl font-body font-bold text-black capitalize">
          about us
        </h2>
      </div>
    </section>
  );
}

export default HeroSection;
