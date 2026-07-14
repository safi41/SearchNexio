"use client";

import { MaskedHeading, Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";
import { CtaLink, Eyebrow } from "@/components/ui";
import { SERVICES, type Service } from "@/lib/content";

export default function Services() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-28 md:pb-36">
      <Reveal>
        <Eyebrow>What We Do</Eyebrow>
      </Reveal>
      <MaskedHeading
        className="mt-8 font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] md:text-6xl"
        lines={["What We Do"]}
      />
      <Reveal delay={0.15}>
        <p className="mt-6 max-w-3xl leading-relaxed text-ink/65">
          Everything the Full-Surface Method covers. Visibility problems are
          rarely isolated to one channel. A broken technical foundation ruins
          your AI citations. A messy site migration erases your keyword
          rankings. Poor local listings knock you out of the map pack. We fix
          all of it together because that is how your buyers experience it.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {SERVICES.map((service, i) => (
          <Reveal
            key={service.slug}
            delay={(i % 2) * 0.12}
            className={service.wide ? "md:col-span-2" : ""}
          >
            <ServiceTile service={service} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} className="mt-12">
        <p className="text-ink/65">
          Not sure which piece you need? That is what the visibility review is
          for.
        </p>
        <div className="mt-2">
          <CtaLink href="/#visibility-review" variant="ghost">
            Request a Visibility Review
          </CtaLink>
        </div>
      </Reveal>
    </section>
  );
}

export function ServiceTile({ service }: { service: Service }) {
  return (
    <article className="group relative h-full border border-line bg-surface p-8 transition-colors duration-500 hover:border-teal/40 md:p-10">
      <span
        aria-hidden
        className="absolute right-6 top-6 font-mono text-lg text-copper/50 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-90 group-hover:text-copper"
      >
        +
      </span>
      <h3 className="max-w-md font-display text-2xl font-medium tracking-tight md:text-3xl">
        {service.title}
      </h3>
      <p className="mt-4 max-w-xl font-display italic text-ink/55 transition-colors duration-500 group-hover:text-copper">
        The pain point it solves: {service.pain}
      </p>
      <Stagger className="mt-6 grid gap-3">
        {service.items.map((item) => (
          <StaggerItem key={item.lead}>
            <p className="relative pl-5 text-sm leading-relaxed text-ink/70 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
              <span
                aria-hidden
                className="absolute left-0 top-[0.5em] h-[5px] w-[5px] bg-sage"
              />
              <b className="font-semibold text-ink">{item.lead}</b> {item.text}
            </p>
          </StaggerItem>
        ))}
      </Stagger>
    </article>
  );
}
