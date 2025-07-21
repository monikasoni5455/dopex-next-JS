"use client";
import React from "react";

const HomeHeading = () => {
  return (
    <div className="w-full text-justify border-b-2 md:border-0 pb-10 md:pb-0 md:pl-11 md:pr-10 break-all">
      <div className="md:max-w-[300px] md:mx-auto">
        <h4 className="font-collegium text-2xl mt-2">
          Home of the Mercenaries
        </h4>
        <p className="font-roboto-mono text-sm mt-2 font-semibold">
          Your outsourced department of ConTech Mercenaries who knows how to
          help you achieve operational excellence across your tech stack.
        </p>
      </div>
    </div>
  );
};

export default HomeHeading;
