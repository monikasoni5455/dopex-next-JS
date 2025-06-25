import React from "react";

const Values = () => {
  return (
    <div className="border border-[#bbfa00]">
      <span className="uppercase text-sm font-roboto-mono bg-[#bbfa00] text-black font-bold p-1">
        THE VALUES OF DOPEX
      </span>
      <h3 className="font-collegium text-2xl p-2">
        We take our values seriously.
      </h3>
      <p className="text-sm font-roboto-mono font-semibold px-2">
        They define how we GSD, how we hire, fire, and award.
      </p>
      <ul className="list-disc pl-6 text-sm font-roboto-mono font-semibold px-2 py-3">
        <li>Authentic Connections</li>
        <li>Proactive Transparency</li>
        <li>Same Team</li>
        <li>Obsessive Curiosity</li>
        <li>Have Fun</li>
      </ul>
      <p className="text-sm font-roboto-mono font-semibold px-2">
        The more aligned we are here, the more effective our partnership will be
        with you.
      </p>
    </div>
  );
};

export default Values;
