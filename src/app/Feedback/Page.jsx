import React from "react";

const Feedback = () => {
  return (
    <div className="text-center text-white h-full md:m-10">
      <h3 className="text-left md:text-center font-collegium text-2xl mb-2 mt-10 px-18 line-spacing-1">
        Real Feedback based on Real Results.
      </h3>
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="relative px-18 py-4">
          <p className="text-base font-roboto-mono font-normal italic mb-2 text-justify text-[15px]">
            DOPEX far exceeded any expectations we had of working together.
            We’re light years ahead of where we’d be had we done this by
            ourselves.
          </p>
          <p className="text-left md:text-center font-roboto-mono font-bold text-[15px]">
            Project Exec @ 300M GC
          </p>
          <div className="openQuote absolute top-0 left-0 flex justify-start gap-2 mb-4">
            <div className="quote-top-arrow bg-[#bbfa00] w-4 h-10"></div>
            <div className="quote-top-arrow bg-[#bbfa00] w-4 h-10"></div>
          </div>
          <div className="closeQuote absolute bottom-0 right-0 flex justify-end gap-2 mb-4">
            <div className="quote-down-arrow bg-[#bbfa00] w-4 h-10"></div>
            <div className="quote-down-arrow bg-[#bbfa00] w-4 h-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
