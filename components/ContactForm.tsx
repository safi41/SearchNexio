"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/primitives";
import { Magnetic } from "@/components/motion/interactive";

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
            <div className="border border-line bg-surface p-10">
              <p className="font-display text-2xl font-medium tracking-tight">
                Request received.
              </p>
              <p className="mt-3 text-ink/65">
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
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/60">
                    {field.label}
                  </span>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    autoComplete={field.autoComplete}
                    required
                    className="border border-line bg-surface px-4 py-3 text-ink outline-none transition-colors duration-300 focus:border-teal"
                  />
                </label>
              ))}
              <Magnetic className="mt-2 self-start">
                <button
                  type="submit"
                  className="group relative inline-flex items-center gap-3 overflow-hidden bg-copper px-7 py-4 text-sm font-medium tracking-wide text-white"
                >
                  <span className="absolute inset-0 translate-y-full bg-copper-deep transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
                  <span className="relative">Request a Visibility Review</span>
                  <span
                    aria-hidden
                    className="relative transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </button>
              </Magnetic>
            </form>
          )}
        </Reveal>
        <Reveal delay={0.15}>
          <div className="border-l border-line pl-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal">
              What you get
            </p>
            <p className="mt-4 leading-relaxed text-ink/70">
              A surface-by-surface map showing exactly where you appear across
              Google, Maps, and AI search, where your direct competitors are
              winning instead, where your current footprint is leaking revenue,
              and what we would fix first.
            </p>
            <p className="mt-4 leading-relaxed text-ink/70">
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
