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
    <div className="max-w-[1200px] mx-8 mt-5">
      <Head />
      <div className="md:flex justify-center">
        <div className="my-5 md:ml-5 md:pr-6 flex flex-col justify-between">
          <div className="md:w-full flex flex-col-reverse md:flex-row justify-around md:justify-start items-center">
            {/* <div className="mb-10 fixed-width"><HomeHeading /></div> */}
            <div className="mb-10 md:w-[50%] md:mr-9"><HomeHeading /></div>
            <div className="md:w-[46%]"><ShieldLogo /></div>
          </div>

          <div className="w-full flex flex-col justify-around items-center md:items-start md:justify-start md:flex-row md:my-8">
            {/* <div className="fixed-width"><Problem /></div> */}
            <div className="md:w-[50%] md:mr-9"><Problem /></div>
            <div className="md:w-[46%]"><Fix /></div>
          </div>

          <div className="w-full md:hidden block pt-6 md:py-0">
            <Service />
          </div>

          <div className="w-full flex flex-col items-center md:flex-row md:flex-start md:items-stretch md:border-y-2 md:py-7">
            <div className="my-5 md:my-0 w-1\2 md:w-[49.8%]"><Experience /></div>

            {/* Vertical Divider */}
            <div className="hidden md:block bg-gray-300 mx-8 md:w-[0.4%]"></div>

            <div className="my-5 md:my-0 w-1\2 md:w-[49.8%]"><Values /></div>
          </div>
          <div className="flex justify-center items-center py-4 md:py-0">
            <Feedback />
          </div>
        </div>

        <div className="hidden md:block my-5 md:border-l-2">
          <Service />
        </div>
      </div>
      <CallToAction />
    </div >
  );
}
