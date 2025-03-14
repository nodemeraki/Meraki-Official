import HeroImage from "../../assets/about/about.png";

const AboutHero = () => {
  return (
    <>
      <div className="w-full relative">
        <img src={HeroImage} alt="Shaking hands" />
        <h1 className="absolute inset-0 flex items-center justify-center font-extrabold text-[#0F0D0D] text-4xl md:text-[52px] leading-[57px] tracking-[7%]">
          About Us
        </h1>
      </div>

      <div>
        <p className="max-w-[520px] mx-auto my-2.5 xl:my-11 font-normal text-lg md:text-[39px] md:leading-[45.7px] text-center">
          The Principle that guide <span className="text-[#F96662]">Us</span>
        </p>
      </div>
    </>
  );
};

export default AboutHero;
