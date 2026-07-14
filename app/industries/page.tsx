import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import IndustryList from "@/components/IndustryList";
import { Reveal } from "@/components/motion/primitives";
import { CtaLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Industries We Work With | SearchNexio",
  description:
    "Search visibility for healthcare, tax and financial services, SaaS, ecommerce, and multi-location businesses where trust decides the sale.",
};

export default function IndustriesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Who We Serve"
        lines={["Industries", "We Work With"]}
        intro="We focus on businesses where trust decides the sale, and buyers research everything before choosing."
      />
      <IndustryList />
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <Reveal>
          <div className="border-t border-line pt-10">
            <p className="max-w-xl font-display text-2xl italic leading-snug text-ink/85">
              Not sure if you fit? The visibility review will tell you honestly.
            </p>
            <div className="mt-6">
              <CtaLink href="/#visibility-review">Request a Visibility Review</CtaLink>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
