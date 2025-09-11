import { Helmet } from "react-helmet";
import Hero from "@/components/sections/hero";
import ServicesOverview from "@/components/sections/services-overview";
import Framework from "@/components/sections/framework";
import InteractiveProcess from "@/components/process/interactive-process";
import WhyChooseUs from "@/components/sections/testimonials";
import Team from "@/components/sections/team";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>CAPLEO Sage Solutions | Calgary Data Engineering & Digital Transformation</title>
        <meta name="description" content="Transform your Calgary business with data-driven insights, digital transformation advisory, and design enhancement. Free assessment available." />
      </Helmet>
      
      <div data-testid="home-page">
        <Hero />
        <ServicesOverview />
        <Framework />
        <InteractiveProcess />
        <WhyChooseUs />
        <Team />
      </div>
    </>
  );
}
