import type { Metadata } from "next";
import { SeoHero, SeoFocused } from "@/components/seoservices/SeoTop";
import {
  SeoProblems,
  SeoServices,
  SeoResults,
  SeoNeeds,
  SeoBanner,
} from "@/components/seoservices/SeoMid";
import {
  SeoProcess,
  SeoMeasure,
  SeoWhy,
  SeoWhen,
  SeoFaq,
  SeoFinal,
} from "@/components/seoservices/SeoBottom";

export const metadata: Metadata = {
  title: "Professional SEO Services | Search Nexio",
  description:
    "Search Nexio provides professional SEO services built around leads, sales and revenue, not just rankings. Request an SEO review to find where growth is being lost.",
};

export default function SeoServicesPage() {
  return (
    <main>
      <SeoHero />
      <SeoFocused />
      <SeoProblems />
      <SeoServices />
      <SeoResults />
      <SeoNeeds />
      <SeoBanner />
      <SeoProcess />
      <SeoMeasure />
      <SeoWhy />
      <SeoWhen />
      <SeoFaq />
      <SeoFinal />
    </main>
  );
}
