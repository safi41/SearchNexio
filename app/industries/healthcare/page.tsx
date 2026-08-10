import type { Metadata } from "next";
import {
  HealthHero,
  HealthTrustedBy,
  HealthBringPatients,
  HealthSearchStages,
  HealthDifferent,
} from "@/components/healthcare/HealthTop";
import {
  HealthServices,
  HealthTestimonial,
  HealthResults,
  HealthAudiences,
  HealthTrust,
  HealthDeliverables,
} from "@/components/healthcare/HealthMid";
import {
  HealthProcess,
  HealthMeasure,
  HealthWhy,
  HealthEngagements,
  HealthLimitations,
  HealthFaq,
  HealthForm,
} from "@/components/healthcare/HealthBottom";

export const metadata: Metadata = {
  title: "Healthcare SEO Services for Patient Growth | Search Nexio",
  description:
    "Search Nexio provides healthcare SEO services designed to connect your treatments, providers and locations with patients searching for care, and to measure what happens after they find you.",
};

export default function HealthcareSeoPage() {
  return (
    <main>
      <HealthHero />
      <HealthTrustedBy />
      <HealthBringPatients />
      <HealthSearchStages />
      <HealthDifferent />
      <HealthServices />
      <HealthTestimonial />
      <HealthResults />
      <HealthAudiences />
      <HealthTrust />
      <HealthDeliverables />
      <HealthProcess />
      <HealthMeasure />
      <HealthWhy />
      <HealthEngagements />
      <HealthLimitations />
      <HealthFaq />
      <HealthForm />
    </main>
  );
}
