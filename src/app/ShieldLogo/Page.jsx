"use client";

import React, { useState } from "react";
import Image from "next/image";

const ShieldLogo = () => {
  const [imgSrc, setImgSrc] = useState("/logos/Dopex_Shield-circle.png");

  return (
    <div className="flex justify-center items-center my-10 mx-5 md:m-0">
      <Image
        src={imgSrc}
        alt="Shield Logo"
        onError={() =>
          setImgSrc(
            "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
          )
        }
        height={170}
        width={170}
        className=""
      />
    </div>
  );
};

export default ShieldLogo;
