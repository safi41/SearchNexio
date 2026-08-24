import type { Metadata } from "next";
import {
  SaasHero,
  SaasResults,
  SaasBuiltFor,
  SaasFails,
} from "@/components/saas/SaasTop";
import {
  SaasServices,
  SaasProcess,
  SaasJourney,
  SaasProductLed,
} from "@/components/saas/SaasMid";
import {
  SaasAiSearch,
  SaasMidCta,
  SaasWhy,
  SaasFaq,
  SaasForm,
} from "@/components/saas/SaasBottom";

export const metadata: Metadata = {
  title: "B2B SaaS SEO Agency for Pipeline Growth | Search Nexio",
  description:
    "B2B SaaS SEO focused on qualified demand. Grow visibility across Google and AI search and turn it into more demos, trials and sales opportunities.",
};

export default function B2bSaasSeoAgencyPage() {
  return (
    <main>
      <SaasHero />
      <SaasResults />
      <SaasBuiltFor />
      <SaasFails />
      <SaasServices />
      <SaasProcess />
      <SaasJourney />
      <SaasProductLed />
      <SaasAiSearch />
      <SaasMidCta />
      <SaasWhy />
      <SaasFaq />
      <SaasForm />
    </main>
  );
}
