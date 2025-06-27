"use client"

import Head from "./Head/Page"
import HomeHeading from "./HomeHeading/Page";
import ShieldLogo from "./ShieldLogo/Page";
import Problem from "./Problem/Page";
import Fix from "./Fix/Page";
import Experience from "./Experience/page";
import Values from "./Values/Page";
import Feedback from "./Feedback/Page";
import CallToAction from "./CallToAction/Page";
import Service from "./Service/Page";

export default function Home() {
  return (
    <div className="text-justify m-10">
      <Head />
      <div className="flex">
        {/* First div: 70% */}
        <div className="flex-[7] my-5">
          <div className="w-full flex flex-col md:flex-row">
            <div className="flex-[11]"><HomeHeading /></div>
            <div className="flex-[9]"><ShieldLogo /></div>
          </div>

          <div className="w-full flex flex-col md:flex-row md:my-10">
            <div className="flex-1"><Problem /></div>
            <div className="flex-1"><Fix /></div>
          </div>

          <div className="w-full md:hidden block">
            <Service />
          </div>

          <div className="flex flex-col md:flex-row md:border-y md:py-10">
            <div className="flex-1 my-5 md:m-5"><Experience /></div>
            <div className="hidden md:block border-r m-5"></div>
            <div className="flex-1 my-5 md:m-5"><Values /></div>
          </div>

          <div>
            <Feedback />
          </div>
        </div>

        {/* Second div: 30% */}
        <div className="hidden md:block flex-[3] my-5">
          <Service />
        </div>
      </div>

      <CallToAction />
    </div >
  );
}
