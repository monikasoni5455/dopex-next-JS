import React from "react";
import Image from "next/image";

const Service = () => {
  return (
    <div className="h-full border-grey-50 border-l p-5 md:p-0 md:pl-[30px] text-justify">
      <span className="uppercase text-sm font-roboto-mono bg-[#bbfa00] text-black font-bold">
        SERVICES
      </span>
      <h3 className="font-collegium text-2xl">We can help with...</h3>
      <p className="text-sm font-roboto-mono font-semibold my-6">
        STANDARD OPERATING PROCEDURES (SOPs). It all starts with reclaiming
        ownership over remastered SOPs. The ability to say “This is the Way”. To
        empower project teams that know what to do (and why).
      </p>
      <p className="text-sm font-roboto-mono font-semibold my-6">
        CONSTRUCTION MANAGEMENT SOFTWARE (CMS). Industry leading experts for CMS
        (re-)implementations and optimization strategy. Hands-on system
        configurations, user training and support.
      </p>
      <p className="text-sm font-roboto-mono font-semibold my-6">
        ERP SALES, IMPLEMENTATION, AND SUPPORT. An ERP partnership that won’t
        disappoint. We speak your language because we’ve had your job. Put an
        end to siloed systems with our turnkey Acumatica + Procore deployments
      </p>
      <p className="text-sm font-roboto-mono font-semibold my-6">
        CUSTOM DEVELOPMENT,INTEGRATIONS, DASHBOARDS & REPORTING. Elevate your
        insights by connecting your systems and having it flow the way you want
        it to. Then we’ll help build custom visualizations to better monitor
        your success.
      </p>
      <p className="text-sm font-roboto-mono font-semibold my-6">
        BESPOKE SMART FORMS (GoFormz). Near fool-proof digital smart forms
        anyone can use. Pre-populate from databases and/or integrate with
        Procore, PowerBI, or other ERPs.
      </p>
      <div className="flex flex-wrap m-2">
        {[
          { src: "/images/procore-logo.png", alt: "Procore logo" },
          { src: "/images/acumatica-logo.png", alt: "Acumatica logo" },
          { src: "/images/power-BI.png", alt: "Power BI logo" },
          { src: "/images/goformz.png", alt: "GoFormz logo" },
          { src: "/images/agave-logo.png", alt: "Agave logo" },
          { src: "/images/koncurent-logo.png", alt: "Koncurent logo" },
          { src: "/images/mobi-clocks.png", alt: "Mobi Clocks logo" },
          { src: "/images/microsoft-azure.png", alt: "Microsoft Azure logo" },
          { src: "/images/snowflake.png", alt: "Snowflake logo" },
          { src: "/images/extractspro.png", alt: "ExtractsPro logo" },
          { src: "/images/northspyre.png", alt: "Northspyre logo" },
          { src: "/images/quotetome.png", alt: "QuoteToMe logo" },
          { src: "/images/buildops.png", alt: "BuildOps logo" },
          { src: "/images/microsoft.png", alt: "Microsoft logo" },
        ].map((image, index) => (
          <div key={index} className="w-1/2 p-4 flex justify-center">
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
