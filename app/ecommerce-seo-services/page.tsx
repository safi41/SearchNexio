import type { Metadata } from "next";
import {
  EcomHero,
  EcomRevenue,
  EcomResults,
  EcomDifferent,
} from "@/components/ecommerce/EcomTop";
import {
  EcomServices,
  EcomProblems,
  EcomMidCta,
  EcomPlatforms,
  EcomProcess,
} from "@/components/ecommerce/EcomMid";
import {
  EcomMeasure,
  EcomWhy,
  EcomWhen,
  EcomFaq,
  EcomForm,
} from "@/components/ecommerce/EcomBottom";

export const metadata: Metadata = {
  title: "Ecommerce SEO Services | Search Nexio",
  description:
    "Search Nexio is an ecommerce SEO agency helping online stores fix category, product and technical SEO issues to grow organic revenue. Request a review.",
};

export default function EcommerceSeoServicesPage() {
  return (
    <main>
      <EcomHero />
      <EcomRevenue />
      <EcomResults />
      <EcomDifferent />
      <EcomServices />
      <EcomProblems />
      <EcomMidCta />
      <EcomPlatforms />
      <EcomProcess />
      <EcomMeasure />
      <EcomWhy />
      <EcomWhen />
      <EcomFaq />
      <EcomForm />
    </main>
  );
}
