import type { Metadata } from "next";
import AiSearchHero from "@/components/aisearch/AiSearchHero";
import {
  AiSearchBuildVisibility,
  AiSearchMeaning,
  AiSearchServices,
} from "@/components/aisearch/AiSearchIntro";
import { AiSearchWorkCovers, AiSearchPlatforms } from "@/components/aisearch/AiSearchWork";
import {
  AiSearchProcess,
  AiSearchReceive,
  AiSearchMeasure,
} from "@/components/aisearch/AiSearchProcess";
import {
  AiSearchWhy,
  AiSearchIndustries,
  AiSearchWays,
  AiSearchLimitations,
  AiSearchFaq,
  AiSearchForm,
} from "@/components/aisearch/AiSearchClose";

export const metadata: Metadata = {
  title: "AI Search Optimization Services | Search Nexio",
  description:
    "Improve visibility across Google AI Overviews, ChatGPT, Gemini and Perplexity with AI search optimization services built around SEO, content, authority and measurable reporting.",
};

export default function AiSearchOptimizationServicesPage() {
  return (
    <main>
      <AiSearchHero />
      <AiSearchBuildVisibility />
      <AiSearchMeaning />
      <AiSearchServices />
      <AiSearchWorkCovers />
      <AiSearchPlatforms />
      <AiSearchProcess />
      <AiSearchReceive />
      <AiSearchMeasure />
      <AiSearchWhy />
      <AiSearchIndustries />
      <AiSearchWays />
      <AiSearchLimitations />
      <AiSearchFaq />
      <AiSearchForm />
    </main>
  );
}
