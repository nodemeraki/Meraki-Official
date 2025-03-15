import React from "react";
import trust from "/src/assets/home-img/trustHomePage.png";

function Trust() {
  return (
    <section className="h-[85vh] w-full px-18 pt-6 pb-6 bg-body flex gap-16">
      {/* image div */}
      <div className="h-[70vh] w-[45vw] rounded-md">
        <img
          src={trust}
          alt="trustHomePage"
          className="h-full w-full object-cover"
        />
      </div>
      {/* second trust section div */}
      <div className="h-[70vh] w-[45vw]">
        <div className="uppercase">
          <h2 className="font-header text-3xl font-[600] tracking-wider">
            tech company you can
          </h2>
          <h2 className="font-header text-3xl font-[600] tracking-wider text-[red]">
            trust
          </h2>
        </div>
        <div>
          <p className="font-body text-xl leading-6 mt-8 w-120">
            Merakinode is a media agency brand that focuses on the growth of
            people by connecting them with ideas and information to build the
            most successful businesses and brands
          </p>
        </div>
        <div>
          <p className="font-body text-xl mt-18">Trust by</p>
        </div>
        {/* trusted bt area */}
        <div className="flex gap-5 mt-10">
          <div className="w-20 h-14 bg-white rounded-sm shadow-[0_4px_6px_rgba(0,0,0,0.5)]"></div>
          <div className="w-20 h-14 bg-white rounded-sm shadow-[0_4px_6px_rgba(0,0,0,0.5)]"></div>
          <div className="w-20 h-14 bg-white rounded-sm shadow-[0_4px_6px_rgba(0,0,0,0.5)]"></div>
          <div className="w-20 h-14 bg-white rounded-sm shadow-[0_4px_6px_rgba(0,0,0,0.5)]"></div>
          <div className="w-20 h-14 bg-white rounded-sm shadow-[0_4px_6px_rgba(0,0,0,0.5)]"></div>
        </div>
      </div>
    </section>
  );
}

export default Trust;
