"use client";

import FaqSection from "@/components/FaqSection";
import { GEO_FAQS } from "@/lib/geo-content";

/* FAQ: the shared card-style accordion with FAQPage schema. */
export default function GeoFaq() {
  return (
    <FaqSection
      variant="cards"
      maxWidthClass="max-w-4xl"
      title="Frequently asked questions"
      faqs={GEO_FAQS}
    />
  );
}
