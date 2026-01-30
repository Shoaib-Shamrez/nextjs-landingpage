import Hero from "@/components/sections/Hero";
import Supporters from "@/components/sections/Supporters";
import DashboardPreview from "@/components/sections/DashboardPreview";
import Stats from "@/components/sections/Stats";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import FeautredSection from "@/components/sections/feauture";
import Security from "@/components/sections/Security";
import Plans from "@/components/sections/Plans";

export default function Home() {
  return (
    <main>
      <Hero />
      <Supporters />
      <DashboardPreview />
      <Stats />
      <Security />
      <Plans />
      {/* <Features /> */}
      <FeautredSection />
      <Testimonials />
      <CTA />
    </main>
  );
}
