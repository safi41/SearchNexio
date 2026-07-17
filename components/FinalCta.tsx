import Reveal from "@/components/motion/Reveal";
import { CtaLink } from "@/components/ui";

/* Dark bookend. A static aurora glow echoes the hero curtain: same hues,
   no motion, per the one-animation rule. */
export default function FinalCta() {
  return (
    <section
      id="visibility-review"
      className="relative overflow-hidden bg-ink text-white"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-40">
        <span className="absolute -right-40 -top-64 block h-[36rem] w-[36rem] rounded-full bg-indigo blur-[110px]" />
        <span className="absolute -right-72 top-16 block h-[28rem] w-[28rem] rounded-full bg-violet blur-[110px] opacity-70" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <h2 className="max-w-3xl text-[clamp(2rem,4vw,3.25rem)] font-[360] leading-[1.08] tracking-[-0.03em]">
            Find out where you are invisible.
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-7 max-w-3xl text-[15px] leading-relaxed text-white/65">
            This is a manual, analyst-led review conducted by our senior team,
            not a generic software report. It takes us a few business days to
            compile. You get a surface-by-surface map showing exactly where you
            appear across Google, Maps, and AI search, where your direct
            competitors are winning instead, where your current footprint is
            leaking revenue, and what we would fix first. Whether you choose to
            work with SearchNexio or fix the issues yourself, you will finally
            know exactly where your business stands.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
            <CtaLink href="/contact" disabled>
              Request a Visibility Review
            </CtaLink>
            <CtaLink href="/contact" variant="ghost" tone="dark" disabled>
              Book a Call
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
