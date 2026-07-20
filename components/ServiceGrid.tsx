"use client";

import { Reveal } from "@/components/motion/primitives";
import { ServiceTile } from "@/components/Services";
import { SERVICES } from "@/lib/content";

export default function ServiceGrid() {
  return (
    <div className="mx-auto grid max-w-6xl gap-5 px-6 md:grid-cols-2">
      {SERVICES.map((service, i) => (
        <Reveal
          key={service.slug}
          delay={(i % 2) * 0.12}
          className={service.wide ? "md:col-span-2" : ""}
        >
          <ServiceTile service={service} iconIndex={i} />
        </Reveal>
      ))}
    </div>
  );
}
