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
    <div className="text-justify mb-10">
      <Head />
      <div className="flex my-10 mr-10">
        <div className="md:w-[70%] mx-10">
          <div className="w-full flex flex-col md:flex-row">
            <div className="md:w-[55%] md:mr-6"><HomeHeading /></div>
            <div className="md:w-[45%] md:ml-6"><ShieldLogo /></div>
          </div>
          <div className="w-full flex flex-col md:flex-row md:my-10 p-5">
            <div className="md:w-1/2 md:mr-6"><Problem /></div>
            <div className="md:w-1/2 md:ml-6"><Fix /></div>
          </div>
          <div className="w-full md:hidden block">
            <Service />
          </div>
          <div className="flex flex-col md:flex-row md:border-y">
            <div className="md:w-1/2 md:mr-6"><Experience /></div>
            <div className="hidden md:block border my-5"></div>
            <div className="md:w-1/2 md:ml-6"><Values /></div>
          </div>
          <div>
            <Feedback />
          </div>
        </div>
        <div className="md:w-[30%] hidden md:block">
          <Service />
        </div>
      </div>
      <CallToAction />
    </div >
  );
}
