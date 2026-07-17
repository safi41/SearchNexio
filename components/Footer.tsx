import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { Ring } from "@/components/decor";

const LINKS = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
];

/* Sasico footer: light ground, link row, then the giant outlined wordmark
   watermark with a citron glow behind the bottom bar. */
export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-ivory">
      {/* spinning ring garnish in the footer corners, echoing the hero */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
        <span className="absolute -left-36 -bottom-28 size-[340px]">
          <Ring
            className="inset-0"
            border="border-ink/10"
            spin="animate-orbit"
            duration="48s"
            dots={[
              { angle: 25, cls: "size-2 bg-ink/50" },
              { angle: 110, cls: "size-1.5 bg-indigo/55" },
              { angle: 205, cls: "size-1.5 bg-ink/40" },
              { angle: 300, cls: "size-2 bg-indigo/45" },
            ]}
          />
          <Ring
            className="inset-[22%]"
            border="border-indigo/12"
            spin="animate-orbit-slow"
            duration="60s"
            dots={[
              { angle: 60, cls: "size-1.5 bg-ink/40" },
              { angle: 150, cls: "size-2 bg-indigo/50" },
              { angle: 250, cls: "size-1.5 bg-ink/35" },
              { angle: 340, cls: "size-1.5 bg-indigo/40" },
            ]}
          />
        </span>
        <span className="absolute -right-32 -top-20 size-[300px]">
          <Ring
            className="inset-0"
            border="border-indigo/12"
            spin="animate-orbit-slow"
            duration="54s"
            dots={[
              { angle: 10, cls: "size-2 bg-indigo/55" },
              { angle: 100, cls: "size-1.5 bg-ink/40" },
              { angle: 190, cls: "size-1.5 bg-indigo/45" },
              { angle: 285, cls: "size-2 bg-ink/45" },
            ]}
          />
          <Ring
            className="inset-[24%]"
            border="border-ink/8"
            spin="animate-orbit"
            duration="42s"
            dots={[
              { angle: 40, cls: "size-1.5 bg-ink/40" },
              { angle: 130, cls: "size-1.5 bg-indigo/45" },
              { angle: 225, cls: "size-2 bg-ink/45" },
              { angle: 315, cls: "size-1.5 bg-indigo/40" },
            ]}
          />
        </span>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-14">
        <div className="flex flex-wrap items-start justify-between gap-x-10 gap-y-8 pb-10">
          <Reveal variant="left" className="max-w-xs">
            <Link
              href="/"
              className="flex items-center gap-2 font-heading text-[19px] font-bold tracking-[-0.02em]"
            >
              <span aria-hidden className="flex items-center">
                <span className="size-4.5 rounded-full bg-ink" />
                <span className="-ml-1.5 size-4.5 rounded-full bg-indigo mix-blend-multiply" />
              </span>
              SearchNexio
            </Link>
            <p className="reveal-item mt-3 text-[13.5px] leading-relaxed text-graphite [transition-delay:140ms]">
              Wherever buyers search, be found.
            </p>
          </Reveal>
          {/* client-review mode: footer nav renders inert, no routing */}
          <Reveal variant="right">
            <nav className="flex flex-wrap gap-x-8 gap-y-3">
              {LINKS.map((link, i) => (
                <span
                  key={link.href}
                  aria-disabled="true"
                  className="reveal-item cursor-default text-[13.5px] font-medium text-graphite"
                  style={{ transitionDelay: `${120 + i * 70}ms` }}
                >
                  {link.label}
                </span>
              ))}
            </nav>
          </Reveal>
        </div>

        {/* watermark */}
        <Reveal delay={120} variant="scale">
          <p
            aria-hidden
            className="pointer-events-none select-none text-center font-heading text-[clamp(4rem,12vw,10.5rem)] font-bold leading-[0.9] tracking-[-0.03em] text-transparent"
            style={{ WebkitTextStroke: "1.5px rgba(11,13,18,0.10)" }}
          >
            SearchNexio
          </p>
        </Reveal>
      </div>

      {/* brand glow rising behind the watermark and bottom bar */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-72 [background:radial-gradient(55%_110%_at_50%_100%,rgba(99,91,255,0.45),rgba(236,234,255,0.55)_45%,transparent_75%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40 [background:radial-gradient(40%_100%_at_0%_0%,rgba(236,234,255,0.8),transparent_70%),radial-gradient(40%_100%_at_100%_0%,rgba(236,234,255,0.6),transparent_70%)]"
      />

      <div className="relative border-t border-line">
        <Reveal
          delay={80}
          className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6"
        >
          <p className="text-[12.5px] text-graphite">
            SearchNexio, 2026 &copy; All rights reserved
          </p>
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-graphite/70">
            Business address and privacy policy live before launch
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface py-1.5 pl-4 pr-1.5 text-[12.5px] font-semibold text-ink transition-colors duration-200 hover:border-ink/30"
          >
            Back to top
            <span
              aria-hidden
              className="grid size-5.5 place-items-center rounded-full bg-ink text-white transition-transform duration-200 group-hover:-translate-y-0.5"
            >
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path
                  d="M6 10V2m0 0L2.5 5.5M6 2l3.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </Reveal>
      </div>
    </footer>
  );
}
