"use client";

import React, { useState } from "react";
import EmailModal from "../EmailModal";
import toast from "react-hot-toast";

const CallToAction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEmailClick = () => {
    const email = "info@dopex.co";

    try {
      const loadingToast = toast.loading("Opening email client...");

      const timeout = setTimeout(() => {
        toast.dismiss(loadingToast);
        toast.error(
          "It looks like your browser doesn't have a default email app set up. Please manually send an email to info@dopex.co.",
          {
            duration: 4000, // stays until user closes it
          }
        );
      }, 2500); // fallback if client doesn't open

      window.location.href = `mailto:${email}`;

      window.addEventListener("blur", () => {
        clearTimeout(timeout);
        toast.dismiss(loadingToast);
      });
    } catch (error) {
      toast.error(
        "Something went wrong while trying to open your email client.",
        {
          duration: 4000,
        }
      );
      console.error("Mailto error:", error);
    }
  };
  return (
    <div className="text-center border-y-2 py-8 md:mx-5 mb-10 md:flex flex-col justify-center items-center">
      <h3 className="font-collegium text-2xl py-2 md:p-2 line-spacing-1">
        Take OWNERSHIP of your Operations
      </h3>
      <p className="max-w-[650px] text-sm font-roboto-mono md:px-2 md:m-4 my-2">
        Don’t waste more time. Shoot us an email and share how you think we can
        help. We’ll respond quickly, and we won’t waste yours.
      </p>

      {/* button to open custom email modal/component */}
      {/* <button
        onClick={() => setIsModalOpen(true)}
        className="font-collegium px-16 py-2 text-black bg-[#bbfa00] rounded-4xl mt-3 mb-2 hover:cursor-pointer hover:cursor-pointer"
      >
        Email us
      </button> */}

      {/* a to open native/build-in email app in user's machine */}
      {/* <a
        href="mailto:info@dopex.co"
        className="font-collegium px-16 py-2 text-black bg-[#bbfa00] rounded-4xl mt-3 mb-2 inline-block hover:cursor-pointer"
      >
        Email us
      </a> */}

      {/* button to check whether the user has permission for opening the native email/application or not*/}
      <button
        onClick={handleEmailClick}
        className="font-collegium px-16 py-2 text-black bg-[#bbfa00] rounded-4xl mt-3 mb-2 inline-block hover:cursor-pointer"
      >
        Email us
      </button>

      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default CallToAction;
