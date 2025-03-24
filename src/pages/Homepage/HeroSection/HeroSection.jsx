function HeroSection() {
  return (
    <section className="bg-body">
      <div className="relative flex items-center bg-[url('src/assets/home-img/Hero.png')] bg-contain md:bg-cover bg-center bg-no-repeat w-[90vw] md:h-screen mx-auto rounded-2xl">
        <div className="font-homeHero font-lexend">
          <h1 className="max-w-[20ch] text-[#040303] text-sm uppercase font-bold md:text-[3.5rem] mb-[6%] ml-[20%] md:ml-[15%] mt-4 leading-6 md:leading-20">
            We make your business look
            <span className="block text-primary">Great</span>
          </h1>

          <button className="rounded-sm text-white md:mt-5 py-2 px-3 font-body ml-[10%] md:ml-[15%] bg-secondary hover:bg-green-500 text-[10px] md:text-[22px]">
            Get free consultation
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
