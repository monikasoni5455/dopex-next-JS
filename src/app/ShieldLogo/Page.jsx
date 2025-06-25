"use client";

import React, { useState } from "react";
import Image from "next/image";

const ShieldLogo = () => {
  const [imgSrc, setImgSrc] = useState(
    "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
  );

  return (
    <div>
      <Image
        src={imgSrc}
        alt="Shield Logo"
        onError={() =>
          setImgSrc(
            "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
          )
        }
        height={100}
        width={100}
      />
    </div>
  );
};

export default ShieldLogo;
