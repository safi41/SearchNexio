"use client";

import Reveal from "@/components/motion/Reveal";
import { CtaLink } from "@/components/ui";
import { CRYPTO_BANNERS } from "@/lib/crypto-seo-content";

/* The dark full-width CTA banners the brief places after the industry
   section, the four-step process and pricing. Copy is verbatim; every other
   CTA on the page stays a text link so the page does not read as
   over-promotional. */
export function CryptoBanner({
  which,
}: {
  which: keyof typeof CRYPTO_BANNERS;
}) {
  const b = CRYPTO_BANNERS[which];

  return (
    <section className="relative overflow-x-clip py-6">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal variant="scale">
          <div className="cta-indigo relative overflow-hidden rounded-[2rem] px-8 py-12 md:px-12">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -right-28 -top-28 size-96 rounded-full border border-white/10" />
              <div className="absolute -bottom-24 -left-24 size-80 rounded-full border border-white/10" />
            </div>

            <div className="relative">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-citron">
                {b.eyebrow}
              </p>
              <h2 className="mt-4 max-w-2xl font-heading text-[clamp(1.5rem,2.8vw,2rem)] font-bold leading-[1.14] tracking-[-0.02em] text-white">
                {b.title}
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/70">
                {b.body}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <CtaLink href={b.primaryCta.href} variant="glass">
                  {b.primaryCta.label}
                </CtaLink>
                <a
                  href={b.secondaryCta.href}
                  className="text-[14px] font-semibold text-white underline decoration-white/40 underline-offset-4 transition-colors duration-200 hover:decoration-white"
                >
                  {b.secondaryCta.label}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
