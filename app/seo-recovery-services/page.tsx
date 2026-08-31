import type { Metadata } from "next";
import {
  RecoveryHero,
  RecoveryDropped,
  RecoveryFit,
} from "@/components/recovery/RecoveryTop";
import {
  RecoveryCauses,
  RecoveryDiagnose,
  RecoveryMidCta,
  RecoveryLevels,
  RecoveryProcess,
} from "@/components/recovery/RecoveryMid";
import {
  RecoveryScenarios,
  RecoveryMeasure,
  RecoveryBanner,
  RecoveryWhy,
  RecoveryQuote,
  RecoveryFaq,
  RecoveryForm,
} from "@/components/recovery/RecoveryBottom";

export const metadata: Metadata = {
  title: "SEO Recovery Services | Search Nexio",
  description:
    "SEO recovery services for lost traffic and rankings. Search Nexio diagnoses Google updates, migrations, technical issues and content changes, then prioritizes the recovery work that matters most.",
};

export default function SeoRecoveryServicesPage() {
  return (
    <main>
      <RecoveryHero />
      <RecoveryDropped />
      <RecoveryFit />
      <RecoveryCauses />
      <RecoveryDiagnose />
      <RecoveryMidCta />
      <RecoveryLevels />
      <RecoveryProcess />
      <RecoveryScenarios />
      <RecoveryMeasure />
      <RecoveryBanner />
      <RecoveryWhy />
      <RecoveryQuote />
      <RecoveryFaq />
      <RecoveryForm />
    </main>
  );
}
