import heroImage from "./assets/hero.png";
import heroMobile from "./assets/hero-mobile.png";
const Hero = () => {
  return (
    <section>
      <div className="w-full relative">
        {/* Desktop image */}
        <img
          className="h-full hidden xl:block"
          src={heroImage}
          alt="Hero Image"
        />

        {/* mobile image */}
        <img
          className="h-full block xl:hidden"
          src={heroMobile}
          alt="Hero Image"
        />

        <h1 className="hidden absolute inset-0 xl:flex items-center justify-center font-extrabold text-[#0F0D0D] text-[52px] leading-[57px] tracking-[7%]">
          Our work
        </h1>
      </div>

      <div>
        <p className="max-w-[650px] mx-auto my-2.5 xl:my-11 font-normal text-lg xl:text-[33px] xl:leading-[47px] text-[#044358] text-center">
          Our work is a mirror of who we are in all the services we provide to
          our clients.
        </p>
      </div>
    </section>
  );
};

export default Hero;
