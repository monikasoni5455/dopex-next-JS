import React from "react";

const CallToAction = () => {
  return (
    <div className="text-center border-y py-8 md:mx-5 mb-10 md:flex flex-col justify-center items-center">
      <h3 className="font-collegium text-2xl py-2 md:p-2 line-spacing-1">
        Take OWNERSHIP of your Operations
      </h3>
      <p className="max-w-[650px] text-sm font-roboto-mono md:px-2 md:m-4 my-2">
        Don’t waste more time. Shoot us an email and share how you think we can
        help. We’ll respond quickly, and we won’t waste yours.
      </p>
      <button className="font-collegium px-16 py-2 text-black bg-[#bbfa00] rounded-4xl mt-3 mb-2">
        Email us
      </button>
    </div>
  );
};

export default CallToAction;
