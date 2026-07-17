"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/primitives";

const FIELDS = [
  { id: "name", label: "Your name", type: "text", autoComplete: "name" },
  { id: "company", label: "Company", type: "text", autoComplete: "organization" },
  { id: "website", label: "Website", type: "url", autoComplete: "url" },
  { id: "email", label: "Work email", type: "email", autoComplete: "email" },
];

/* TODO before launch: wire the submit to the CRM; this renders the flow only. */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-6xl px-6 pb-28">
      <div className="grid gap-16 md:grid-cols-[7fr_5fr]">
        <Reveal>
          {sent ? (
            <div className="rounded-2xl border border-line bg-surface p-10">
              <p className="font-heading text-2xl font-bold tracking-[-0.01em]">
                Request received.
              </p>
              <p className="mt-3 text-graphite">
                Our senior team compiles each review by hand. Expect your
                surface-by-surface map within a few business days.
              </p>
            </div>
          ) : (
            <form
              className="grid gap-6"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              {FIELDS.map((field) => (
                <label key={field.id} className="grid gap-2">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-graphite">
                    {field.label}
                  </span>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    autoComplete={field.autoComplete}
                    required
                    className="rounded-[10px] border border-line bg-surface px-4 py-3 text-ink outline-none transition-colors duration-200 focus:border-indigo"
                  />
                </label>
              ))}
              <button
                type="submit"
                className="mt-2 inline-flex items-center gap-2 self-start rounded-full bg-citron px-6 py-3.5 text-sm font-medium text-ink shadow-[0_2px_8px_rgba(11,13,18,0.14)] transition-colors duration-200 hover:bg-citron-deep"
              >
                Request a Visibility Review
              </button>
            </form>
          )}
        </Reveal>
        <Reveal delay={0.15}>
          <div className="border-l border-line pl-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo">
              What you get
            </p>
            <p className="mt-4 leading-relaxed text-graphite">
              A surface-by-surface map showing exactly where you appear across
              Google, Maps, and AI search, where your direct competitors are
              winning instead, where your current footprint is leaking revenue,
              and what we would fix first.
            </p>
            <p className="mt-4 leading-relaxed text-graphite">
              Whether you choose to work with SearchNexio or fix the issues
              yourself, you will finally know exactly where your business
              stands.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
