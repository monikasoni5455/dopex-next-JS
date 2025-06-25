import React from "react";

const Feedback = () => {
  return (
    <div className="relative border border-[#bbfa00] text-center p-16 max-w-xl mx-auto text-white">
      <div className="absolute top-20 left-2 flex justify-start gap-2 mb-4">
        <div className="quote-top-arrow bg-[#bbfa00] w-4 h-10"></div>
        <div className="quote-top-arrow bg-[#bbfa00] w-4 h-10"></div>
      </div>
      <h3 className="font-collegium text-2xl mb-2">
        Real Feedback based on Real Results.
      </h3>
      <p className="text-base font-roboto-mono font-normal italic mb-2 text-justify">
        DOPEX far exceeded any expectations we had of working together. We’re
        light years ahead of where we’d be had we done this by ourselves.
      </p>
      <p className="text-sm font-roboto-mono font-bold">
        Project Exec @ 300M GC
      </p>
      <div className="absolute bottom-20 right-2 flex justify-end gap-2 mb-4">
        <div className="quote-down-arrow bg-[#bbfa00] w-4 h-10"></div>
        <div className="quote-down-arrow bg-[#bbfa00] w-4 h-10"></div>
      </div>
    </div>
  );
};

export default Feedback;
