import React from "react";

function SubscribeBox() {
  return (
   <section className="bg-body h-[50vh]">
     <div className="bg-primary text-white h-[40vh] md:p-8 flex flex-col rounded-lg text-center w-[85%] mx-auto ">
      <div>
      <h3 className="font-semibold text-lg md:text-xl mb-2">
        Be Up to Date With New Events
      </h3>
      </div>
      <div> 
      <p className="text-xs md:text-sm mb-4 pt-3 tracking-[.25em]">
        Join our mailing list to receive news and announcements.
      </p> </div>
      <div className="flex items-center justify-center mt-4 space-x-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-1 w-[80%] md:w-72 bg-white rounded-full text-black outline-none placeholder:text-sm"
        />
        <button className="bg-[#22DF2E] hover:bg-[#50E650] text-white px-6 py-1 cursor-pointer rounded-full text-sm font-semibold">
          Go
        </button>
      </div>
    </div>
     </section>
  );
}

export default SubscribeBox;