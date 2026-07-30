import type { Metadata } from "next";
import AiSearchHero from "@/components/aisearch/AiSearchHero";
import {
  AiSearchBuildVisibility,
  AiSearchMeaning,
  AiSearchServices,
} from "@/components/aisearch/AiSearchIntro";

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
    </main>
  );
}
