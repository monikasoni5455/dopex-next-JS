import React from "react";

const Fix = () => {
  return (
    <div className="w-full md:py-6 text-justify border-y-2 py-10 md:border-0 md:pr-10 md:pl-4">
      <div className="md:max-w-[300px]">
        <span
          className="uppercase text-sm font-roboto-mono bg-[#bbfa00] text-black font-bold 
      p-[3px]"
        >
          SO WHAT’S THE FIX?
        </span>
        <h3 className="font-collegium text-2xl py-2 line-spacing-1">
          Take OWNERSHIP and redefine your processes.
        </h3>
        <p className="text-sm font-roboto-mono py-2">
          <span className="font-roboto-mono font-bold">Don’t allow</span> status
          quo to be the tail that wags the dog.{" "}
          <span className="font-roboto-mono font-bold">Don’t allow</span>{" "}
          bandwidth, expertise, or internal turf wars to get in the way of your
          progress.{" "}
          <span className="font-roboto-mono font-bold">Don’t allow</span>{" "}
          software to dictate how you do things.
        </p>
      </div>
    </div>
  );
};

export default Fix;
