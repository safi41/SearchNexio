import Reveal from "@/components/motion/Reveal";
import { Badge, CtaLink } from "@/components/ui";

/* Sasico's closing move: a full-width citron banner card with a dotted-map
   texture, centered copy, and a dark pill CTA. */
export default function FinalCta() {
  return (
    <section id="visibility-review" className="px-6 pb-20 pt-4">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-citron px-6 py-16 text-center md:py-20">
          {/* dotted texture */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-25 [background-image:radial-gradient(rgba(11,13,18,0.5)_1px,transparent_1px)] [background-size:14px_14px] [mask-image:radial-gradient(ellipse_60%_80%_at_50%_50%,#000,transparent_80%)]"
          />
          <div className="relative">
            <span className="inline-block rounded-full bg-white px-4 py-1.5 text-[13px] font-medium text-ink-solid">
              The Visibility Review
            </span>
            <h2 className="mx-auto mt-6 max-w-3xl font-heading text-[clamp(2rem,4.4vw,3.25rem)] font-bold leading-[1.1] tracking-[-0.02em] text-ink-solid">
              Find out where you are invisible.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-[14.5px] leading-relaxed text-ink-solid/75">
              This is a manual, analyst-led review conducted by our senior
              team, not a generic software report. It takes us a few business
              days to compile. You get a surface-by-surface map showing exactly
              where you appear across Google, Maps, and AI search, where your
              direct competitors are winning instead, where your current
              footprint is leaking revenue, and what we would fix first.
              Whether you choose to work with SearchNexio or fix the issues
              yourself, you will finally know exactly where your business
              stands.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <CtaLink href="/contact" variant="dark" disabled>
                Request a Visibility Review
              </CtaLink>
              <CtaLink href="/contact" variant="ghost" disabled>
                Book a Call
              </CtaLink>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
