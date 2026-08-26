"use client";

import Reveal from "@/components/motion/Reveal";
import { CtaLink } from "@/components/ui";

/* The centered mid-page CTA banner on the indigo ground, shared by the
   service pages. Left-aligned banner variants with an eyebrow live in
   CryptoBanner. */
export default function CtaBanner({
  title,
  body,
  cta,
  bodyWide = false,
}: {
  title: string;
  body: string;
  cta: { label: string; href: string };
  bodyWide?: boolean;
}) {
  return (
    <section className="relative overflow-x-clip py-6">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal variant="scale">
          <div className="cta-indigo relative overflow-hidden rounded-[2rem] px-8 py-12 text-center md:px-12">
            <div
              aria-hidden
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.25) 1.5px, transparent 1.5px)",
                backgroundSize: "14px 14px",
              }}
            />
            <div className="relative">
              <h2 className="mx-auto max-w-3xl font-heading text-[clamp(1.7rem,3.2vw,2.4rem)] font-bold leading-[1.14] tracking-[-0.02em] text-white">
                {title}
              </h2>
              <p
                className={`mx-auto mt-5 ${bodyWide ? "max-w-2xl" : "max-w-xl"} text-[15px] leading-relaxed text-white/75`}
              >
                {body}
              </p>
              <div className="mt-8 flex justify-center">
                <CtaLink href={cta.href} variant="glass">
                  {cta.label}
                </CtaLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
