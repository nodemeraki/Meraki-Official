import HeroH from "/src/assets/home-img/Hero.jpg";

function HeroSection() {
  return (
    <section className="h-[48vh] md:h-[85vh] sm:h-[40vh] bg-body">
      <div
        className="h-[98%] w-[88vw] m-auto rounded-xl md:rounded-2xl overflow-hidden bg-cover bg-center font-homeHero font-lexend shadow-[0_0_10px_4px_rgba(0,0,0,0.2)]"
        style={{ backgroundImage: `url(${HeroH})` }}
      >
        <h1 className="max-w-[20ch] text-[#040303] text-sm uppercase font-bold md:text-[3.5rem] mb-[4%] ml-[10%] md:ml-[11%] mt-25 leading-6 md:leading-20">
          We make your business look
          <span className="block text-primary">Great</span>
        </h1>
        <button className="rounded-sm text-white md:mt-0 py-2 px-3 font-body ml-[10%] md:ml-[11%] bg-secondary hover:bg-green-500 text-[10px] cursor-pointer md:text-[22px]">
          Get free consultation
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
