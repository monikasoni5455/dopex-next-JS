"use client";

import React, { useState } from "react";
import Image from "next/image";

const ShieldLogo = () => {
  const [imgSrc, setImgSrc] = useState("/images/Dopex_Shield-circle.png");

  return (
    <div className="flex justify-center items-center my-10 md:m-0">
      <Image
        src={imgSrc}
        alt="Shield Logo"
        onError={() =>
          setImgSrc(
            "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
          )
        }
        height={200}
        width={200}
      />
    </div>
  );
};

export default ShieldLogo;
