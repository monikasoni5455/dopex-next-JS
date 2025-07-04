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
    // <div className="max-w-[1200px] flex justify-center items-center mx-8">
    //   <div>
    //     <Head />
    //     <div className="md:flex">
    //       {/* First div: 70% */}
    //       <div className="flex-[7] my-5 md:ml-10">
    //         <div className="md:w-full flex flex-col-reverse md:flex-row justify-center items-center">
    //           <div className="flex-1 md:mr-5 mb-10 md:m-7"><HomeHeading /></div>
    //           <div className="flex-1 lg:ml-5"><ShieldLogo /></div>
    //         </div>

    //         <div className="w-full flex flex-col justify-center md:flex-row md:my-8">
    //           <div className="flex-1 md:mr-5"><Problem /></div>
    //           <div className="flex-1 md:mx-5"><Fix /></div>
    //         </div>

    //         <div className="w-full md:hidden block">
    //           <Service />
    //         </div>

    //         <div className="flex flex-col md:flex-row md:border-y md:py-5 md:mx-5">
    //           <div className="flex-1"><Experience /></div>
    //           <div className="hidden md:block border-r mx-5"></div>
    //           <div className="flex-1 my-5"><Values /></div>
    //         </div>

    //         <div>
    //           <Feedback />
    //         </div>
    //       </div>

    //       {/* Second div: 30% */}
    //       <div className="hidden md:block flex-[3] my-5">
    //         <Service />
    //       </div>
    //     </div>

    //     <CallToAction />
    //   </div>
    // </div >


    <div className="max-w-[1200px] mx-8 mt-5">
      <Head />
      <div className="md:flex justify-center">
        <div className="my-5 md:ml-5 md:pr-6 flex flex-col justify-between">
          <div className="md:w-full flex flex-col-reverse md:flex-row justify-around items-center">
            <div className="mb-10 fixed-width"><HomeHeading /></div>
            <div className="fixed-width"><ShieldLogo /></div>
          </div>

          <div className="w-full flex flex-col justify-around items-center md:items-start md:flex-row md:my-8">
            <div className="fixed-width"><Problem /></div>
            <div className="fixed-width"><Fix /></div>
          </div>

          <div className="w-full md:hidden block pt-6 md:py-0">
            <Service />
          </div>

          <div className="w-full flex flex-col items-center md:flex-row md:justify-center md:items-stretch md:border-y md:py-7">
            <div className="fixed-width my-5 md:my-0 w-1\2"><Experience /></div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-px bg-gray-300 mx-8"></div>

            <div className="fixed-width my-5 md:my-0 w-1\2"><Values /></div>
          </div>
          <div className="flex justify-center items-center py-4 md:py-0">
            <Feedback />
          </div>
        </div>

        <div className="hidden md:block my-5 md:border-l">
          <Service />
        </div>
      </div>
      <CallToAction />
    </div >
  );
}
