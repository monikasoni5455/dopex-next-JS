// import React from "react";

// const Feedback = () => {
//   return (
//     <div className="text-center text-white md:m-10">
//       <h3 className="md:text-center font-collegium text-2xl px-18 line-spacing-1">
//         Real Feedback based on Real Results.
//       </h3>
//       <div className="flex flex-col justify-center items-center mt-5">
//         <div className="relative px-18 py-4">
//           <p className="text-base font-roboto-mono font-normal italic text-justify text-[15px]">
//             DOPEX far exceeded any expectations we had of working together.
//             We’re light years ahead of where we’d be had we done this by
//             ourselves.
//           </p>
//           <p className="mt-5 md:text-center font-roboto-mono font-bold text-[15px]">
//             Project Exec @ 300M GC
//           </p>
//           <div className="openQuote absolute top-0 left-0 flex justify-start gap-2 mb-4">
//             <div className="quote-top-arrow bg-[#bbfa00] w-4 h-10"></div>
//             <div className="quote-top-arrow bg-[#bbfa00] w-4 h-10"></div>
//           </div>
//           <div className="closeQuote absolute bottom-0 right-0 flex justify-end gap-2 mb-4">
//             <div className="quote-down-arrow bg-[#bbfa00] w-4 h-10"></div>
//             <div className="quote-down-arrow bg-[#bbfa00] w-4 h-10"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Feedback;

"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const testimonials = [
  {
    quote:
      "DOPEX far exceeded any expectations we had of working together. We’re light years ahead of where we’d be had we done this by ourselves.",
    author: "Project Exec @ 300M GC",
  },
  {
    quote:
      "Working with DOPEX made our team drastically more efficient. We saw results in days, not months.",
    author: "VP @ Skyline Builders",
  },
  {
    quote:
      "Incredible experience. Their approach and support made us feel 10x more confident about our operations.",
    author: "CTO @ Modern Infra",
  },
];

const Feedback = () => {
  return (
    <div className="text-center text-white md:my-10">
      <h3 className="md:text-center font-collegium text-2xl px-18 line-spacing-1">
        Real Feedback based on Real Results.
      </h3>

      <div className="flex flex-col justify-center items-center mt-5">
        <Carousel
          showArrows={false}
          autoPlay
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          interval={5000}
          className="w-full max-w-2xl"
        >
          {testimonials.map((item, index) => (
            <div key={index} className="relative px-18 py-4">
              <p className="text-base font-roboto-mono font-normal italic text-justify text-[15px]">
                {item.quote}
              </p>
              <p className="my-7 md:text-center font-roboto-mono font-bold text-[15px]">
                {item.author}
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
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Feedback;
