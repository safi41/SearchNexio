"use client";

import Link from "next/link";
import type { ReactNode } from "react";

/* Aurora Curtain primitives. One filled CTA per band; indigo carries every
   other interactive accent. Hierarchy comes from size and tracking. */

export function Eyebrow({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.2em] ${
        tone === "dark" ? "text-[#B9B2FF]" : "text-indigo"
      }`}
    >
      {children}
    </p>
  );
}

export function CtaLink({
  href,
  children,
  variant = "solid",
  tone = "light",
  disabled = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  tone?: "light" | "dark";
  disabled?: boolean;
}) {
  if (variant === "solid") {
    const solid =
      "inline-flex items-center gap-2 rounded-full bg-citron px-6 py-3.5 text-sm font-medium text-ink shadow-[0_2px_8px_rgba(11,13,18,0.14)] transition-colors duration-200";
    if (disabled) {
      return (
        <span aria-disabled="true" className={`${solid} cursor-default`}>
          {children}
        </span>
      );
    }
    return (
      <Link href={href} className={`${solid} hover:bg-citron-deep`}>
        {children}
      </Link>
    );
  }

  const ghost = `group inline-flex items-center gap-2 py-3.5 text-sm font-medium ${
    tone === "dark" ? "text-white/85 hover:text-white" : "text-indigo hover:text-indigo-deep"
  } transition-colors duration-200`;
  if (disabled) {
    return (
      <span aria-disabled="true" className={`${ghost} cursor-default`}>
        <span>{children}</span>
        <span aria-hidden>&rarr;</span>
      </span>
    );
  }
  return (
    <Link href={href} className={ghost}>
      <span>{children}</span>
      <span
        aria-hidden
        className="transition-transform duration-200 group-hover:translate-x-[3px]"
      >
        &rarr;
      </span>
    </Link>
  );
}
