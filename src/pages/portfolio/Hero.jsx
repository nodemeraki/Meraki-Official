import heroImage from "../../assets/portfolio/hero.png";
import heroMobile from "../../assets/portfolio/hero-mobile.png";

const Hero = () => {
  return (
    <section>
      <div className="w-full relative mt-10">
        <picture>
          <source media="(min-width: 1280px)" srcSet={heroImage} />
          <img className="h-full w-full" src={heroMobile} alt="Hero Image" />
        </picture>

        <h1 className="absolute inset-0 flex items-center justify-center font-extrabold text-[#0F0D0D] text-4xl md:text-[52px] leading-[57px] tracking-[7%] font-Lato">
          Our work
        </h1>
      </div>

      <div>
        <p className="max-w-[650px] mx-auto my-2.5 xl:my-20 font-normal text-lg xl:text-[33px] xl:leading-[47px] text-[#044358] text-center">
          Our work is a mirror of who we are in all the services we provide to
          our clients.
        </p>
      </div>
    </section>
  );
};

export default Hero;
