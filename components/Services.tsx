import Reveal from "@/components/motion/Reveal";
import { CtaLink, Eyebrow } from "@/components/ui";
import { SERVICES, type Service } from "@/lib/content";

/* White tile grid on ivory; density stays calm, indigo carries the accents. */
export default function Services() {
  return (
    <section className="border-t border-line py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <Eyebrow>What We Do</Eyebrow>
          <h2 className="mt-4 text-[clamp(1.8rem,3.4vw,2.75rem)] font-[380] leading-[1.1] tracking-[-0.025em]">
            Everything the Full-Surface Method covers.
          </h2>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-graphite">
            Visibility problems are rarely isolated to one channel. A broken
            technical foundation ruins your AI citations. A messy site
            migration erases your keyword rankings. Poor local listings knock
            you out of the map pack. We fix all of it together because that is
            how your buyers experience it.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug} delay={i * 60} className="h-full">
              <ServiceTile service={service} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <p className="text-[15px] text-graphite">
            Not sure which piece you need? That is what the visibility review
            is for.
          </p>
          <CtaLink href="/#visibility-review" variant="ghost">
            Request a Visibility Review
          </CtaLink>
        </Reveal>
      </div>
    </section>
  );
}

/* Light tile shared with the /services page grid. */
export function ServiceTile({ service }: { service: Service }) {
  return (
    <article className="h-full rounded-2xl border border-line bg-surface p-7 transition-colors duration-200 hover:border-indigo/40 md:p-8">
      <h3 className="text-[17px] font-semibold tracking-[-0.01em]">
        {service.title}
      </h3>
      <p className="mt-2 text-[13.5px] leading-relaxed text-graphite">
        The pain point it solves: {service.pain}
      </p>
      <ul className="mt-5 grid gap-3">
        {service.items.map((item) => (
          <li
            key={item.lead}
            className="relative pl-4 text-[13.5px] leading-relaxed text-graphite"
          >
            <span
              aria-hidden
              className="absolute left-0 top-[0.55em] size-1.5 rounded-full bg-indigo"
            />
            <b className="font-semibold text-ink">{item.lead}</b> {item.text}
          </li>
        ))}
      </ul>
    </article>
  );
}
