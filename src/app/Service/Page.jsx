import React from "react";
import Image from "next/image";

const Service = () => {
  return (
    <div className="border-grey-50 border-l p-5 md:p-0 md:pl-[30px] text-justify">
      <span className="uppercase text-sm font-roboto-mono bg-[#bbfa00] text-black font-bold">
        SERVICES
      </span>
      <h3 className="font-collegium text-2xl">We can help with...</h3>
      <p className="text-sm font-roboto-mono font-semibold my-4">
        STANDARD OPERATING PROCEDURES (SOPs). It all starts with reclaiming
        ownership over remastered SOPs. The ability to say “This is the Way”. To
        empower project teams that know what to do (and why).
      </p>
      <p className="text-sm font-roboto-mono font-semibold my-4">
        CONSTRUCTION MANAGEMENT SOFTWARE (CMS). Industry leading experts for CMS
        (re-)implementations and optimization strategy. Hands-on system
        configurations, user training and support.
      </p>
      <p className="text-sm font-roboto-mono font-semibold my-4">
        ERP SALES, IMPLEMENTATION, AND SUPPORT. An ERP partnership that won’t
        disappoint. We speak your language because we’ve had your job. Put an
        end to siloed systems with our turnkey Acumatica + Procore deployments
      </p>
      <p className="text-sm font-roboto-mono font-semibold my-4">
        CUSTOM DEVELOPMENT,INTEGRATIONS, DASHBOARDS & REPORTING. Elevate your
        insights by connecting your systems and having it flow the way you want
        it to. Then we’ll help build custom visualizations to better monitor
        your success.
      </p>
      <p className="text-sm font-roboto-mono font-semibold my-4">
        BESPOKE SMART FORMS (GoFormz). Near fool-proof digital smart forms
        anyone can use. Pre-populate from databases and/or integrate with
        Procore, PowerBI, or other ERPs.
      </p>
      <div className="flex flex-wrap">
        <Image
          src={"/images/procore-logo.png"}
          alt="procore Logo"
          height={100}
          width={100}
          className="grayscale"
        />
        <Image
          src={"/images/acumatica-logo.png"}
          alt="Shield Logo"
          height={100}
          width={100}
        />
        <Image
          src={"/images/power-BI.png"}
          alt="Shield Logo"
          height={100}
          width={100}
        />
        <Image
          src={"/images/goformz-logo.png"}
          alt="goformz-logo"
          height={100}
          width={100}
        />
        <Image
          src={"/images/agave-logo.png"}
          alt="agave logo.png"
          height={100}
          width={100}
        />
        <Image
          src={"/images/koncurent-logo.png"}
          alt="koncurent-logo"
          height={100}
          width={100}
        />
        <Image
          src={"/images/mobi-clocks.png"}
          alt="mobi-clocks"
          height={100}
          width={100}
        />
        <Image
          src={"/images/microsoft-azure.png"}
          alt="mobi-clocks"
          height={100}
          width={100}
        />
      </div>
    </div>
  );
};

export default Service;
