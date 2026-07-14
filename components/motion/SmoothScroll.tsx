"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";
import { gsap, useGSAP, ScrollSmoother, ScrollTrigger, MOTION_OK } from "@/components/motion/gsap";

/* Buttery scroll + data-speed / data-lag parallax for the whole site.
   Fixed chrome (nav, scan tracker) must live OUTSIDE this wrapper. */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  const smoother = useRef<ScrollSmoother | null>(null);
  const pathname = usePathname();

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      smoother.current = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.1,
        effects: true,
      });
      return () => {
        smoother.current?.kill();
        smoother.current = null;
      };
    });
  });

  /* Same-page hash links must route through the smoother, not native jumps. */
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor || !smoother.current) return;
      const url = new URL(anchor.href, location.href);
      if (url.pathname !== location.pathname || !url.hash) return;
      const target = document.querySelector(url.hash);
      if (!target) return;
      e.preventDefault();
      smoother.current.scrollTo(target, true, "top 96px");
      history.pushState(null, "", url.hash);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  /* Route changes: back to top, then re-measure every trigger on the new page. */
  useEffect(() => {
    smoother.current?.scrollTo(0, false);
    window.scrollTo(0, 0);
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, [pathname]);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
