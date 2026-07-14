"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, useGSAP);
}

export { gsap, useGSAP, ScrollTrigger, ScrollSmoother, SplitText };

/* One easing family for the whole page keeps motion feeling like a single system. */
export const EASE = "power4.out";
export const EASE_INOUT = "power4.inOut";

/* All entrance/scrub animation registers under this so reduced-motion users
   get the finished layout with zero movement. */
export const MOTION_OK = "(prefers-reduced-motion: no-preference)";
