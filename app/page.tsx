import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import TrustBullets from "@/components/TrustBullets";
import ProblemSection from "@/components/ProblemSection";
import Results from "@/components/Results";
import FullSurfaceMethod from "@/components/FullSurfaceMethod";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import WhySearchNexio from "@/components/WhySearchNexio";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoStrip />
      <TrustBullets />
      <ProblemSection />
      <Results />
      <FullSurfaceMethod />
      <Services />
      <Industries />
      <WhySearchNexio />
      <Faq />
      <FinalCta />
    </main>
  );
}
