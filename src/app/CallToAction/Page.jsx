import React from "react";

const CallToAction = () => {
  return (
    <div className="text-center border-y py-10 mx-5">
      <h3 className="font-collegium text-2xl p-2">
        Take OWNERSHIP of your Operations
      </h3>
      <p className="text-sm font-roboto-mono font-semibold px-2 m-4">
        Don’t waste more time. Shoot us an email and share how you think we can
        help. We’ll respond quickly, and we won’t waste yours.
      </p>
      <button className="font-collegium px-16 py-2 text-black bg-[#bbfa00] rounded-4xl">
        Email us
      </button>
    </div>
  );
};

export default CallToAction;
