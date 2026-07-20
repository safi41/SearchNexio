import Reveal from "@/components/motion/Reveal";
import { Ring } from "@/components/decor";
import { Badge, CtaLink } from "@/components/ui";
import { SURFACES } from "@/lib/content";

/* Sasico-style hero: centered stack over a faint grid with lilac corner
   washes and the spinning ring garnish. */

/* Sasico's ambient garnish: two concentric spinning rings in each corner,
   4-5 dots riding every ring, plus scattered plus marks. Decoration only,
   hidden on small screens. */
function HeroDecor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
      <span className="absolute left-[21%] top-[36%] font-heading text-[17px] font-light text-indigo/50">+</span>
      <span className="absolute right-[22%] top-[40%] font-heading text-[13px] font-light text-indigo/40">+</span>

      {/* left corner: two concentric rings, counter-rotating */}
      <span className="absolute -left-44 -top-16 size-[400px]">
        <Ring
          className="inset-0"
          border="border-ink/10"
          spin="animate-orbit"
          duration="16s"
          dots={[
            { angle: 15, cls: "size-2 bg-ink/60" },
            { angle: 105, cls: "size-1.5 bg-ink/40" },
            { angle: 195, cls: "size-2 bg-indigo/60" },
            { angle: 290, cls: "size-1.5 bg-ink/45" },
          ]}
        />
        <Ring
          className="inset-[21%]"
          border="border-ink/8"
          spin="animate-orbit-slow"
          duration="21s"
          dots={[
            { angle: 45, cls: "size-1.5 bg-ink/45" },
            { angle: 140, cls: "size-2 bg-indigo/55" },
            { angle: 230, cls: "size-1.5 bg-ink/35" },
            { angle: 320, cls: "size-1.5 bg-ink/50" },
          ]}
        />
      </span>

      {/* right corner: two concentric rings, counter-rotating */}
      <span className="absolute -right-48 top-[14%] size-[440px]">
        <Ring
          className="inset-0"
          border="border-indigo/15"
          spin="animate-orbit-slow"
          duration="19s"
          dots={[
            { angle: 0, cls: "size-2 bg-indigo/70" },
            { angle: 80, cls: "size-1.5 bg-ink/45" },
            { angle: 160, cls: "size-2 bg-ink/55" },
            { angle: 240, cls: "size-1.5 bg-indigo/50" },
            { angle: 315, cls: "size-1.5 bg-ink/40" },
          ]}
        />
        <Ring
          className="inset-[22%]"
          border="border-ink/10"
          spin="animate-orbit"
          duration="14s"
          dots={[
            { angle: 30, cls: "size-1.5 bg-ink/50" },
            { angle: 120, cls: "size-2 bg-indigo/55" },
            { angle: 215, cls: "size-1.5 bg-ink/40" },
            { angle: 300, cls: "size-2 bg-ink/55" },
          ]}
        />
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-[104px]">
      {/* backdrop: faint grid behind the headline, citron washes at corners */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-[720px] wash-lilac" />
      <div
        aria-hidden
        className="grid-pattern absolute left-1/2 top-16 h-[440px] w-[680px] -translate-x-1/2 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,#000_35%,transparent_75%)]"
      />

      <HeroDecor />

      <div className="relative mx-auto max-w-5xl px-6 pt-10 text-center">
        <Reveal>
          <Badge>Search Visibility Agency</Badge>
        </Reveal>
        <Reveal delay={60} duration={550}>
          <h1 className="mx-auto mt-6 max-w-4xl font-heading text-[clamp(2.8rem,6.4vw,5.1rem)] font-bold leading-[1.14] tracking-[-0.025em]">
            Get Found{" "}
            <span className="relative inline-block whitespace-nowrap text-indigo">
              Everywhere
              <svg
                aria-hidden
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 300 16"
                fill="none"
                preserveAspectRatio="none"
              >
                <path d="M6 10C70 4 210 3 294 6" stroke="#635BFF" strokeWidth="4" strokeLinecap="round" />
                <path d="M150 14c50-4 96-4 124-3" stroke="#635BFF" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>{" "}
            Buyers Search
          </h1>
        </Reveal>
        <Reveal delay={120} duration={550}>
          <p className="mx-auto mt-6 max-w-2xl text-[16.5px] leading-relaxed text-graphite">
            Your buyers now decide on {SURFACES.slice(0, 3).join(", ")}, and{" "}
            {SURFACES[3]} before they ever click. We make sure you show up in
            every one of those moments, then turn that visibility into leads
            and revenue.
          </p>
        </Reveal>

        <Reveal delay={180} duration={550}>
          <div className="mx-auto mt-9 flex flex-wrap items-center justify-center gap-4">
            <CtaLink href="/#visibility-review">Request a Visibility Review</CtaLink>
            <CtaLink href="/case-studies" variant="ghost" disabled>
              View case studies
            </CtaLink>
          </div>
          <p className="mt-6 pb-24 text-[13px] text-graphite">
            Built for healthcare, finance, SaaS, and multi-location businesses.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
