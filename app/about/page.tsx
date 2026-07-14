import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About | SearchNexio",
  description:
    "SearchNexio is a search visibility agency helping mid-size businesses and enterprises get found across Google, Maps, and AI search.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Entity rule: the intro is the exact sentence required on the About page. */}
      <PageHeader
        eyebrow="About"
        lines={["About", "SearchNexio"]}
        intro="SearchNexio is a search visibility agency helping mid-size businesses and enterprises get found across Google, Maps, and AI search."
      />
      <AboutContent />
    </main>
  );
}
