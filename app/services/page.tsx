import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServiceGrid from "@/components/ServiceGrid";
import { Reveal } from "@/components/motion/primitives";
import { CtaLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "SEO, Local SEO & AI Search Services | SearchNexio",
  description:
    "Everything the Full-Surface Method covers: revenue-focused SEO, local and multi-location SEO, AI search visibility, and traffic recovery.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="What We Do"
        lines={["Services"]}
        intro="Everything the Full-Surface Method covers. Visibility problems are rarely isolated to one channel. A broken technical foundation ruins your AI citations. A messy site migration erases your keyword rankings. Poor local listings knock you out of the map pack. We fix all of it together because that is how your buyers experience it."
      />
      <ServiceGrid />
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <Reveal>
          <div className="border-t border-line pt-10">
            <p className="max-w-xl font-display text-2xl italic leading-snug text-ink/85">
              Not sure which piece you need? That is what the visibility review
              is for.
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
