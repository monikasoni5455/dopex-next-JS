import React from "react";

const Feedback = () => {
  return (
    <div className="relative text-center text-white h-full">
      <div className="m-16 flex flex-col justify-center items-center">
        <div className="absolute top-0 left-5 flex justify-start gap-2 mb-4">
          <div className="quote-top-arrow bg-[#bbfa00] w-4 h-10"></div>
          <div className="quote-top-arrow bg-[#bbfa00] w-4 h-10"></div>
        </div>
        <div className="my-5 px-20">
          <h3 className="font-collegium text-2xl mb-2">
            Real Feedback based on Real Results.
          </h3>
          <p className="text-base font-roboto-mono font-normal italic mb-2 text-justify">
            DOPEX far exceeded any expectations we had of working together.
            We’re light years ahead of where we’d be had we done this by
            ourselves.
          </p>
          <p className="text-sm font-roboto-mono font-bold">
            Project Exec @ 300M GC
          </p>
        </div>
        <div className="absolute bottom-0 right-5 flex justify-end gap-2 mb-4">
          <div className="quote-down-arrow bg-[#bbfa00] w-4 h-10"></div>
          <div className="quote-down-arrow bg-[#bbfa00] w-4 h-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
