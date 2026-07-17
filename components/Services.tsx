import Reveal from "@/components/motion/Reveal";
import { CtaLink, IconTile, SectionHead } from "@/components/ui";
import { SearchIcon, PinIcon, BotIcon, ShieldIcon } from "@/components/icons";
import { SERVICES, type Service } from "@/lib/content";

const ICONS = [SearchIcon, PinIcon, BotIcon, ShieldIcon];

/* Sasico feature-card grid: white rounded cards with citron icon tiles. */
export default function Services() {
  return (
    <section className="overflow-x-clip py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHead
            badge="What We Do"
            title="Everything the Full-Surface Method covers."
            sub="Visibility problems are rarely isolated to one channel. A broken technical foundation ruins your AI citations. A messy site migration erases your keyword rankings. We fix all of it together because that is how your buyers experience it."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.slug}
              variant={i % 2 === 0 ? "left" : "right"}
              className="h-full"
            >
              <ServiceTile service={service} iconIndex={i} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <p className="text-[14px] text-graphite">
            Not sure which piece you need? That is what the visibility review
            is for.
          </p>
          <div className="mt-4 flex justify-center">
            <CtaLink href="/#visibility-review">Request a Visibility Review</CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Tile shared with the /services page grid. */
export function ServiceTile({
  service,
  iconIndex = 0,
}: {
  service: Service;
  iconIndex?: number;
}) {
  const Icon = ICONS[iconIndex % ICONS.length];
  return (
    <article className="group h-full rounded-3xl border border-line bg-surface p-8 transition-all duration-300 ease-soft hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(11,13,18,0.08)]">
      <div className="reveal-item [transition-delay:120ms]">
        <IconTile>
          <Icon />
        </IconTile>
      </div>
      <h3 className="reveal-item mt-6 font-heading text-[20px] font-bold tracking-[-0.01em] [transition-delay:190ms]">
        {service.title}
      </h3>
      <p className="reveal-item mt-2.5 text-[13.5px] leading-relaxed text-graphite [transition-delay:260ms]">
        The pain point it solves: {service.pain}
      </p>
      <ul className="reveal-item mt-5 grid gap-3 [transition-delay:330ms]">
        {service.items.map((item) => (
          <li key={item.lead} className="flex gap-2.5 text-[13.5px] leading-relaxed text-graphite">
            <svg
              className="mt-1 shrink-0 text-ink"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden
            >
              <circle cx="7" cy="7" r="6.4" fill="#ECEAFF" />
              <path
                d="m4.4 7.2 1.8 1.8 3.4-3.6"
                stroke="#635BFF"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>
              <b className="font-semibold text-ink">{item.lead}</b> {item.text}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
