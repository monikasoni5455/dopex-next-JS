import React from "react";

const Problem = () => {
  return (
    <div className="box md:text-justify px-7 py-6 custom-border mb-50 text-justify ">
      <span className="text-sm font-roboto-mono bg-[#bbfa00] text-black font-bold p-1">
        WE UNDERSTAND YOUR PROBLEM
      </span>
      <h3 className="font-collegium text-2xl py-2 line-spacing-1">
        You bought the tools, but you’re still using spreadsheets to run the
        jobs.
      </h3>
      <p className="text-sm font-roboto-mono py-2">
        <span className="font-bold">
          New software won’t fix weak processes.{" "}
        </span>{" "}
        But it will splinter work-streams and erode margins.
      </p>
    </div>
  );
};

export default Problem;
