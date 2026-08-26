"use client";

import Link from "next/link";
import type { ReactNode } from "react";

/* Sasico-style primitives: everything is a pill, every CTA carries the
   circle-arrow chip, every section opens with a tinted badge over a bold
   centered Jakarta heading. */

/* Tinted pill badge that sits above section headings. */
export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block self-start rounded-full bg-lilac px-4 py-1.5 text-[13px] font-medium text-indigo">
      {children}
    </span>
  );
}

/* Kept for subpage compatibility: renders as the badge. */
export function Eyebrow({
  children,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return <Badge>{children}</Badge>;
}

/* The circle-arrow chip inside every Sasico button. */
export function ArrowChip({
  tone = "ink",
}: {
  tone?: "ink" | "citron" | "indigo" | "white";
}) {
  const tones = {
    ink: "bg-ink-solid text-citron",
    citron: "bg-citron text-ink-solid",
    indigo: "bg-indigo text-white",
    white: "bg-white text-indigo",
  };
  return (
    <span
      aria-hidden
      className={`grid size-6 place-items-center rounded-full ${tones[tone]} transition-transform duration-200 group-hover:translate-x-0.5`}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M2 6h8m0 0L6.5 2.5M10 6l-3.5 3.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function CtaLink({
  href,
  children,
  variant = "solid",
  disabled = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost" | "dark" | "glass";
  tone?: "light" | "dark";
  disabled?: boolean;
}) {
  const base =
    "group inline-flex items-center gap-2.5 rounded-full py-2.5 pl-6 pr-2.5 text-[14.5px] font-semibold transition-colors duration-200";
  const styles =
    variant === "glass"
      ? `${base} border border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20`
      : variant === "dark"
        ? `${base} bg-ink-solid text-white hover:bg-ink-solid/85`
      : variant === "ghost"
        ? `${base} border border-line bg-surface text-ink hover:border-ink/30`
        : `${base} bg-citron text-ink-solid hover:bg-citron-deep`;
  const chip = (
    <ArrowChip
      tone={
        variant === "glass"
          ? "white"
          : variant === "dark"
            ? "citron"
            : variant === "ghost"
              ? "indigo"
              : "ink"
      }
    />
  );

  if (disabled) {
    return (
      <span aria-disabled="true" className={`${styles} cursor-default`}>
        <span>{children}</span>
        {chip}
      </span>
    );
  }
  return (
    <Link href={href} className={styles}>
      <span>{children}</span>
      {chip}
    </Link>
  );
}

/* Centered section opener: badge, bold Jakarta H2, optional gray subtext. */
export function SectionHead({
  badge,
  title,
  sub,
}: {
  badge: string;
  title: ReactNode;
  sub?: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Badge>{badge}</Badge>
      <h2 className="mt-5 font-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.12] tracking-[-0.02em]">
        {title}
      </h2>
      {sub && (
        <p className="mx-auto mt-5 max-w-2xl text-[15.5px] leading-relaxed text-graphite">
          {sub}
        </p>
      )}
    </div>
  );
}

/* Icon tile: the rounded lilac square behind feature glyphs. */
export function IconTile({ children }: { children: ReactNode }) {
  return (
    <span className="grid size-13 place-items-center rounded-2xl bg-gradient-to-b from-lilac to-lilac/40 text-indigo transition-transform duration-300 ease-soft group-hover:scale-110">
      {children}
    </span>
  );
}


/* The bordered uppercase section badge used by the service-page section
   openers. The lilac Badge above is the hero/eyebrow variant. */
export function SectionBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-line bg-surface px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.12em] text-indigo">
      {children}
    </span>
  );
}

/* The four-point star used in eyebrows and glass badges. */
export function Sparkle({ size = 13, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden className={className}>
      <path
        d="M12 2c.4 5 5 9.6 10 10-5 .4-9.6 5-10 10-.4-5-5-9.6-10-10 5-.4 9.6-5 10-10Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* Text input for the closing forms, shared so the field styling cannot
   drift between pages. */
export function Field({
  label,
  type = "text",
  required = false,
  full = false,
}: {
  label: string;
  type?: string;
  required?: boolean;
  full?: boolean;
}) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="text-[12.5px] font-semibold text-ink">
        {label}
        {required && <span className="text-indigo"> *</span>}
      </span>
      <input
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-line bg-ivory/50 px-4 py-3 text-[14px] outline-none transition-colors duration-200 focus:border-indigo/50 focus:bg-surface"
      />
    </label>
  );
}
