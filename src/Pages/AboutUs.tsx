import Experience from "@/components/custom/Experience";
import { BreadcrumbWithCustomSeparator } from "../components/shared/BreadScrum";
import Hero from "@/components/custom/AboutUs/Hero";
import Mission from "@/components/custom/AboutUs/Mission";
import Feature from "@/components/Feature";
import Intro from "@/components/custom/AboutUs/Intro";
import Team from "@/components/custom/AboutUs/Team";
import { Stripe } from "@/components";
import Allumini from "@/components/custom/AboutUs/Allumini";
import Testmonials from "@/components/custom/Testmonials";


const aboutBreadScrum = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About Us",
    to: "/about",
    active: true,
  },
];
const AboutUs = () => {
  return (
    <div className="w-full">
      <Stripe />
      <div className="w-[90%] mx-auto p-3 my-5">
        <BreadcrumbWithCustomSeparator links={aboutBreadScrum} />
      </div>
      <Hero />
      <Intro />
      <Mission />
      <Testmonials />
      <Team />
      <div id="feature">
        <Feature />
      </div>
      <Experience />
      <Allumini />
    </div>
  );
};

export default AboutUs;
