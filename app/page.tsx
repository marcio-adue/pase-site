import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelloSection from "@/components/SelloSection";
import Problems from "@/components/Problems";
import WhatWeDo from "@/components/WhatWeDo";
import Modules from "@/components/Modules";
import HowWeWork from "@/components/HowWeWork";
import WhyChoose from "@/components/WhyChoose";
import WhatCompanyGets from "@/components/WhatCompanyGets";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Hero />
      <SelloSection />
      <Problems />
      <WhatWeDo />
      <Modules />
      <HowWeWork />
      <WhyChoose />
      <WhatCompanyGets />
      <Contact />
      <Footer />
    </main>
  );
}
