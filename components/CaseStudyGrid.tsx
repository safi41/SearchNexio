"use client";

import { Reveal } from "@/components/motion/primitives";
import { ResultTile } from "@/components/Results";
import { CASE_STUDIES } from "@/lib/content";

export default function CaseStudyGrid() {
  return (
    <div className="mx-auto grid max-w-6xl gap-5 px-6 md:grid-cols-2">
      {CASE_STUDIES.map((study, i) => (
        <Reveal
          key={study.client}
          delay={(i % 2) * 0.12}
          className={study.featured ? "md:col-span-2" : ""}
        >
          <ResultTile study={study} />
        </Reveal>
      ))}
    </div>
  );
}
