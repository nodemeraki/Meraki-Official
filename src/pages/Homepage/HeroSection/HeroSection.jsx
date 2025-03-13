import React from "react";
import heroImage from "/src/assets/home-img/Hero.png";

function HeroSection() {
  return (
    <section className="h-screen bg-[#F7F7F7]">
      <div
        className="relative flex items-center mb-[10%] bg-center bg-contain bg-no-repeat w-[92%] h-full m-auto"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="flex flex-col">
          <div className="font-homeHero flex flex-col items-left uppercase font-lexend font[700] font-bold text-[3.5rem] mb-[6%] ml-[10rem] leading-[4.3rem]">
            <h1>we make your</h1>
            <h1>business look</h1>
            <h1 className="text-primary">Great</h1>
          </div>
          <div>
            <button className="rounded-sm text-white mt-[0.5rem] py-2 px-3 font-body ml-[10rem] bg-secondary hover:bg-green-500">
              Get free consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
