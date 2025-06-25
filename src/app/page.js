import Image from "next/image";
import Head from "./Head/Page"
import HomeHeading from "./HomeHeading/Page";
import ShieldLogo from "./ShieldLogo/Page";
import Problem from "./Problem/Page";
import Fix from "./Fix/Page";
import Experience from "./Experience/page";
import Values from "./Values/Page";
import Feedback from "./Feedback/Page";
import CallToAction from "./CallToAction/Page";

export default function Home() {
  return (
    <div>
      <Head />
      <HomeHeading />
      <ShieldLogo />
      <Problem />
      <Fix />
      <Experience />
      <Values />
      <Feedback />
      <CallToAction />
    </div>
  );
}
