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
    <div className="max-w-[1200px] flex justify-center items-center mx-8">
      <div>
        <Head />
        <div className="md:flex">
          {/* First div: 70% */}
          <div className="flex-[7] my-5 md:ml-10">
            <div className="md:w-full flex flex-col-reverse md:flex-row justify-center items-center">
              <div className="flex-1 md:mr-5 mb-10 md:m-7"><HomeHeading /></div>
              <div className="flex-1 lg:ml-5"><ShieldLogo /></div>
            </div>

            <div className="w-full flex flex-col justify-center md:flex-row md:my-8">
              <div className="flex-1 md:mr-5"><Problem /></div>
              <div className="flex-1 md:mx-5"><Fix /></div>
            </div>

            <div className="w-full md:hidden block">
              <Service />
            </div>

            <div className="flex flex-col md:flex-row md:border-y md:py-5 md:mx-5">
              <div className="flex-1"><Experience /></div>
              <div className="hidden md:block border-r mx-5"></div>
              <div className="flex-1 my-5"><Values /></div>
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
      </div>
    </div >
  );
}
