import type { Metadata } from "next";
import GeoHero from "@/components/geo/GeoHero";
import GeoBuildVisibility from "@/components/geo/GeoBuildVisibility";
import GeoWhyMatters from "@/components/geo/GeoWhyMatters";
import GeoComparison from "@/components/geo/GeoComparison";
import GeoServices from "@/components/geo/GeoServices";

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
    </main>
  );
}
