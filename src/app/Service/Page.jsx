import React from "react";
import Image from "next/image";

const Service = () => {
  return (
    <div className="h-full text-justify flex flex-col justify-between items-center border-b-2 mb-5 md:mb-0 md:border-0 fixed-width md:mx-10 custom-padding">
      <div className="mt-4">
        <span className="text-sm font-roboto-mono bg-[#bbfa00] text-black font-bold p-1">
          SERVICES
        </span>
        <h3 className="font-collegium text-2xl mt-3">We can help with...</h3>
        <p className="text-sm font-roboto-mono my-6 ">
          <span className="font-bold">
            STANDARD OPERATING PROCEDURES (SOPs).{" "}
          </span>{" "}
          It all starts with reclaiming ownership over remastered SOPs. The
          ability to say “This is the Way”. To empower project teams that know
          what to do (and why).
        </p>
        <p className="text-sm font-roboto-mono my-6 ">
          <span className="font-bold">
            CONSTRUCTION MANAGEMENT SOFTWARE (CMS).{" "}
          </span>{" "}
          Industry leading experts for CMS (re-)implementations and optimization
          strategy. Hands-on system configurations, user training and support.
        </p>
        <p className="text-sm font-roboto-mono my-6 ">
          <span className="font-bold">
            ERP SALES, IMPLEMENTATION, AND SUPPORT.{" "}
          </span>{" "}
          An ERP partnership that won’t disappoint. We speak your language
          because we’ve had your job. Put an end to siloed systems with our
          turnkey Acumatica + Procore deployments.
        </p>
        <p className="text-sm font-roboto-mono my-6 ">
          <span className="font-bold">
            CUSTOM DEVELOPMENT, INTEGRATIONS, DASHBOARDS & REPORTING.{" "}
          </span>{" "}
          Elevate your insights by connecting your systems and having it flow
          the way you want it to. Then we’ll help build custom visualizations to
          better monitor your success.
        </p>
        <p className="text-sm font-roboto-mono my-6 mb-0">
          <span className="font-bold">BESPOKE SMART FORMS (GoFormz).</span> Near
          fool-proof digital smart forms anyone can use. Pre-populate from
          databases and/or integrate with Procore, PowerBI, or other ERPs.
        </p>
      </div>
      <div className="flex flex-wrap md:h-full mb-6 mb:mb-0">
        {[
          { src: "/logos/procore.png", alt: "Procore logo" },
          { src: "/logos/acumatica.png", alt: "Acumatica logo" },
          { src: "/logos/power-BI.png", alt: "Power BI logo" },
          { src: "/logos/goformz.png", alt: "GoFormz logo" },
          { src: "/logos/agave.png", alt: "Agave logo" },
          { src: "/logos/koncurent.png", alt: "Koncurent logo" },
          { src: "/logos/mobi-clocks.png", alt: "Mobi Clocks logo" },
          { src: "/logos/microsoft-azure.png", alt: "Microsoft Azure logo" },
          { src: "/logos/snowflake.png", alt: "Snowflake logo" },
          { src: "/logos/extractspro.png", alt: "ExtractsPro logo" },
          { src: "/logos/northspyre.png", alt: "Northspyre logo" },
          { src: "/logos/quotetome.png", alt: "QuoteToMe logo" },
          { src: "/logos/buildops.png", alt: "BuildOps logo" },
          { src: "/logos/microsoft.png", alt: "Microsoft logo" },
        ].map((image, index) => (
          <div
            key={index}
            className="w-1/2 px-3 py-2 flex justify-center items-center"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={100}
              height={100}
              className="max-w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
