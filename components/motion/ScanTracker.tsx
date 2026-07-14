"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger, MOTION_OK } from "@/components/motion/gsap";

/* Copper hairline across the top of the viewport tracking read progress. */
export default function ScanTracker() {
  const barRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const setBar = gsap.quickSetter(barRef.current, "scaleX");
        ScrollTrigger.create({
          start: 0,
          end: "max",
          onUpdate: (self) => setBar(self.progress),
        });
      });
    },
    { scope: barRef }
  );

  return (
    <div
      ref={barRef}
      aria-hidden
      className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left scale-x-0 bg-copper"
    />
  );
}
