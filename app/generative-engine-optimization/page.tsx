import type { Metadata } from "next";
import GeoHero from "@/components/geo/GeoHero";
import GeoBuildVisibility from "@/components/geo/GeoBuildVisibility";
import GeoWhyMatters from "@/components/geo/GeoWhyMatters";
import GeoComparison from "@/components/geo/GeoComparison";
import GeoServices from "@/components/geo/GeoServices";
import GeoDeliverables from "@/components/geo/GeoDeliverables";
import GeoInPractice from "@/components/geo/GeoInPractice";
import GeoPlatforms from "@/components/geo/GeoPlatforms";
import GeoAuthority from "@/components/geo/GeoAuthority";
import GeoProcess from "@/components/geo/GeoProcess";
import {
  GeoMeasure,
  GeoWhyChoose,
  GeoIndustries,
  GeoEngagements,
  GeoLimitations,
} from "@/components/geo/GeoMeasureWhy";
import GeoFaq from "@/components/geo/GeoFaq";
import GeoAuditForm from "@/components/geo/GeoAuditForm";

export const metadata: Metadata = {
  title: "Generative Engine Optimization Agency | Search Nexio",
  description:
    "Improve how your brand is mentioned, cited and considered across ChatGPT, Gemini, Perplexity and other generative platforms with measurable GEO services.",
};

export default function GenerativeEngineOptimizationPage() {
  return (
    <main>
      <GeoHero />
      <GeoBuildVisibility />
      <GeoWhyMatters />
      <GeoComparison />
      <GeoServices />
      <GeoDeliverables />
      <GeoInPractice />
      <GeoPlatforms />
      <GeoAuthority />
      <GeoProcess />
      <GeoMeasure />
      <GeoWhyChoose />
      <GeoIndustries />
      <GeoEngagements />
      <GeoLimitations />
      <GeoFaq />
      <GeoAuditForm />
    </main>
  );
}
