import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CaseStudyGrid from "@/components/CaseStudyGrid";
import { Reveal } from "@/components/motion/primitives";
import { CtaLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Case Studies | SearchNexio",
  description:
    "Real engagements, real numbers. Every case study shows exactly what we did, how we did it, and how long the process took.",
};

export default function CaseStudiesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Results"
        lines={["Case Studies"]}
        intro="What this looks like when it works. Real engagements, real numbers. Every case study shows exactly what we did, how we did it, and how long the process took, including the ones where results took longer than expected."
      />
      <CaseStudyGrid />
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45">
            Numbers publish only as figures each client would confirm if called
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 border-t border-line pt-10">
            <p className="max-w-xl font-display text-2xl italic leading-snug text-ink/85">
              Want to know what these numbers would look like for your business?
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
