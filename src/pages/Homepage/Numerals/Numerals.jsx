import React from "react";

function Numerals() {
  return (
    <section className="text-center bg-primary capitalize text-white h-[30vh] w-full flex gap-25 justify-center items-center pt-7">
      <div className="w-40 h-28 flex flex-col gap-6">
        <h3 className="text-[#0FFF19] text-4xl font-[600]">5+</h3>
        <p>professional team</p>
      </div>
      <div className="w-40 h-28 flex flex-col gap-6">
        <h3 className="text-4xl font-[600]">17</h3>
        <p>satisfied project</p>
      </div>
      <div className="w-40 h-28 flex flex-col gap-6">
        <h3 className="text-4xl font-[600]">20</h3>
        <p>successful project</p>
      </div>
      <div className="w-40 h-28 flex flex-col gap-6">
        <h3 className="text-4xl font-[600]">9</h3>
        <p>years of experience</p>
      </div>
    </section>
  );
}

export default Numerals;
