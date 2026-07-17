"use client";

import Link from "next/link";
import type { ReactNode } from "react";

/* Survey-tick eyebrow: the "+" is a map surveyor's mark, set in mono like an instrument label. */
export function Eyebrow({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={`font-mono text-xs uppercase tracking-[0.32em] ${
        tone === "dark" ? "text-paper/60" : "text-teal"
      }`}
    >
      <span className="mr-3 text-copper" aria-hidden>
        +
      </span>
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
  /* client-review mode: same face, no routing */
  if (disabled) {
    if (variant === "solid") {
      return (
        <span
          aria-disabled="true"
          className="inline-flex cursor-default items-center gap-3 bg-copper px-7 py-4 text-sm font-medium tracking-wide text-white"
        >
          <span>{children}</span>
          <span aria-hidden>&rarr;</span>
        </span>
      );
    }
    return (
      <span
        aria-disabled="true"
        className={`inline-flex cursor-default items-center gap-3 py-4 text-sm font-medium tracking-wide ${
          tone === "dark" ? "text-paper" : "text-teal"
        }`}
      >
        <span>{children}</span>
        <span aria-hidden>&rarr;</span>
      </span>
    );
  }

  if (variant === "solid") {
    return (
      <Link
        href={href}
        className="group relative inline-flex items-center gap-3 overflow-hidden bg-copper px-7 py-4 text-sm font-medium tracking-wide text-white"
      >
        <span className="absolute inset-0 translate-y-full bg-copper-deep transition-transform duration-500 ease-soft group-hover:translate-y-0" />
        <span className="relative">{children}</span>
        <span
          aria-hidden
          className="relative transition-transform duration-500 ease-soft group-hover:translate-x-1"
        >
          &rarr;
        </span>
      </Link>
    );
  }
  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center gap-3 py-4 text-sm font-medium tracking-wide ${
        tone === "dark" ? "text-paper" : "text-teal"
      }`}
    >
      <span className="relative">
        {children}
        <span
          aria-hidden
          className={`absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 transition-transform duration-500 ease-soft group-hover:origin-left group-hover:scale-x-100 ${
            tone === "dark" ? "bg-paper" : "bg-copper"
          }`}
        />
      </span>
      <span
        aria-hidden
        className="transition-transform duration-500 ease-soft group-hover:translate-x-1"
      >
        &rarr;
      </span>
    </Link>
  );
}
