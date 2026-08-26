/* Constants and pure helpers shared by server and client components alike.
   This module carries no directive, so both sides can import it. */

/* Site-wide revolve speed for the hero orbit diagrams. */
export const ORBIT_SPEED = "48s";

/* Splits a title so one phrase can carry the indigo accent, matching the
   heading treatment used across the site. */
export function splitAccent(
  title: string,
  accent: string
): [string, string, string] {
  const i = title.indexOf(accent);
  if (i < 0) return [title, "", ""];
  return [title.slice(0, i), accent, title.slice(i + accent.length)];
}
