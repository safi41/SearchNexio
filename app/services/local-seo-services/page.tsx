import type { Metadata } from "next";
import {
  LocalHero,
  LocalDriveBusiness,
  LocalProblems,
  LocalServices,
  LocalWhoWeHelp,
} from "@/components/localseo/LocalTop";
import {
  LocalReceive,
  LocalProcess,
  LocalMeasure,
  LocalResults,
  LocalWhy,
  LocalEngagements,
  LocalLimitations,
  LocalFaq,
  LocalFinalCta,
} from "@/components/localseo/LocalBottom";

export const metadata: Metadata = {
  title: "Local SEO Services That Drive Calls and Leads | SearchNexio",
  description:
    "SearchNexio provides local SEO services that connect Google Maps visibility, Business Profile management, and local organic search to measurable calls, bookings, and qualified leads.",
};

export default function LocalSeoServicesPage() {
  return (
    <main>
      <LocalHero />
      <LocalDriveBusiness />
      <LocalProblems />
      <LocalServices />
      <LocalWhoWeHelp />
      <LocalReceive />
      <LocalProcess />
      <LocalMeasure />
      <LocalResults />
      <LocalWhy />
      <LocalEngagements />
      <LocalLimitations />
      <LocalFaq />
      <LocalFinalCta />
    </main>
  );
}
