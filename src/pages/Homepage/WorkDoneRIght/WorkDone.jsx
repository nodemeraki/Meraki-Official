import React from "react";
import Brand from "/src/assets/home-img/Brand.png";
import Ux from "/src/assets/home-img/UX.png";
import Web from "/src/assets/home-img/web_app-dev.png";

function WorkDone() {
  return (
    <section className="relative bg-body text-white h-[85vh] w-full flex flex-col">
      <div className="font-header text-2xl text-black">
        <h3 className="text-center text-4xl my-10 font-bold">
          Our work done <span className="text-[red]">right</span>
        </h3>
      </div>
      {/* Picture*/}
      <div className="flex gap-12 justify-center">
        <div className="w-80 h-60">
          <img
            src={Brand}
            alt="brand"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div className="w-80 h-60">
          <img
            src={Ux}
            alt="UX"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div className="w-80 h-60">
          <img
            src={Web}
            alt="web"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
      </div>
      {/* Picture overlay */}
      <div className="capitalize font-body text-md">
        <div className="flex justify-center items-center absolute top-29 left-21.5 w-80 h-60 bg-[rgba(0,0,0,0.7)] rounded-md">
          company branding
        </div>
        <div className="flex justify-center items-center absolute top-29 left-113 w-80 h-60 bg-[rgba(0,0,0,0.7)] rounded-md">
          UI/UX design
        </div>
        <div className="flex flex-col justify-center items-center absolute top-29 right-21 w-80 h-60 bg-[rgba(0,0,0,0.7)] rounded-md">
          <p>web/mobile app</p>
          <p>development</p>
        </div>
      </div>
      {/* Green button */}
      <div className="text-center mt-12 border-b border-[#000000] pb-5 w-[85vw] m-auto">
        <button className="py-2 px-10 bg-secondary rounded-md cursor-pointer">
          View all
        </button>
      </div>
    </section>
  );
}

export default WorkDone;
