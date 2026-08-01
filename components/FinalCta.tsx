import Reveal from "@/components/motion/Reveal";
import { CtaLink } from "@/components/ui";

/* Sasico's closing move: a full-width indigo banner card with a dotted-map
   texture, orbit-ring decor, centered copy and the citron pill CTA. */
export default function FinalCta() {
  return (
    <section id="visibility-review" className="px-6 pb-20 pt-4">
      <Reveal>
        <div className="cta-indigo relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] px-6 py-16 text-center transition-shadow duration-500 ease-soft hover:shadow-[0_30px_80px_rgba(99,91,255,0.28)] md:py-20">
          {/* dotted texture */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.55)_1px,transparent_1px)] [background-size:14px_14px] [mask-image:radial-gradient(ellipse_60%_80%_at_50%_50%,#000,transparent_80%)]"
          />
          {/* orbit rings, matching the other CTA panels */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -right-28 -top-28 size-96 rounded-full border border-white/10" />
            <div className="absolute -right-10 -top-10 size-56 rounded-full border border-white/10" />
            <div className="absolute -bottom-24 -left-24 size-80 rounded-full border border-white/10" />
            <span className="absolute right-[34%] top-12 size-1.5 rounded-full bg-citron/80" />
            <span className="absolute left-[38%] bottom-14 size-1.5 rounded-full bg-white/40" />
          </div>

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[13px] font-medium text-white backdrop-blur-sm">
              <svg width="13" height="13" viewBox="0 0 24 24" aria-hidden className="text-citron">
                <path d="M12 2c.4 5 5 9.6 10 10-5 .4-9.6 5-10 10-.4-5-5-9.6-10-10 5-.4 9.6-5 10-10Z" fill="currentColor" />
              </svg>
              The Visibility Review
            </span>
            <h2 className="mx-auto mt-6 max-w-3xl font-heading text-[clamp(2rem,4.4vw,3.25rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
              Find out where you are <span className="text-citron">invisible</span>.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-[14.5px] leading-relaxed text-white/75">
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
              <CtaLink href="/contact" disabled>
                Request a Visibility Review
              </CtaLink>
              <CtaLink href="/contact" variant="glass" disabled>
                Book a Call
              </CtaLink>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
