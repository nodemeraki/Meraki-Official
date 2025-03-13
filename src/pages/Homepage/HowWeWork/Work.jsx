import React from "react";
import work from "/src/assets/home-img/work.png";

function Work() {
  return (
    <section className="h-[90vh] w-full flex flex-col border-b border-[#000000] bg-body">
      <div>
        <h3 className="text-center text-4xl my-10 font-header font-bold">
          How we <span className="text-[red]">work</span>
        </h3>
      </div>
      <div className="h-[40vh] w-full">
        <img
          src={work}
          alt="work"
          className="h-[60vh] w-full object-cover rounded-md"
        />
      </div>
    </section>
  );
}

export default Work;
