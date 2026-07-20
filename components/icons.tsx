/* Minimal 20x20 stroke glyphs for feature and step tiles. */

const p = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function MapIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" {...p}>
      <path d="M8 4 3 6v12l5-2 6 2 5-2V4l-5 2-6-2Z" />
      <path d="M8 4v12M14 6v12" />
    </svg>
  );
}

export function WrenchIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" {...p}>
      <path d="M13.5 8.5a4 4 0 0 1-5.3 5L4 17.7 6.3 20l4.2-4.2a4 4 0 0 0 5-5.3l-2.7 2.7-2.5-2.5 2.7-2.7Z" />
    </svg>
  );
}

export function ChartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" {...p}>
      <path d="M4 18V9M9 18V4M14 18v-6M19 18V7" />
    </svg>
  );
}

export function RocketIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" {...p}>
      <path d="M11 15c5-3 7-7 7-11-4 0-8 2-11 7l4 4Z" />
      <path d="M7 11 4 12l2 2-2 4 4-2 2 2 1-3" />
    </svg>
  );
}

export function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" {...p}>
      <path d="M11 3 4 6v5c0 4 3 6.5 7 8 4-1.5 7-4 7-8V6l-7-3Z" />
      <path d="m8 11 2 2 4-4" />
    </svg>
  );
}

export function SearchIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" {...p}>
      <circle cx="10" cy="10" r="5.5" />
      <path d="m14.5 14.5 4 4" />
    </svg>
  );
}

export function PinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" {...p}>
      <path d="M11 20s6-6.2 6-10.5a6 6 0 1 0-12 0C5 13.8 11 20 11 20Z" />
      <circle cx="11" cy="9.5" r="2" />
    </svg>
  );
}

export function ListIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 22 22" {...p}>
      <path d="M8 6h10M8 11h10M8 16h10" />
      <path d="M4 6h.01M4 11h.01M4 16h.01" strokeWidth={2.4} />
    </svg>
  );
}

export function CursorIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 22 22" {...p}>
      <path d="M4 3l7 16 2.2-6.2L19.5 10 4 3Z" />
      <path d="m13 13 5 5" />
    </svg>
  );
}

export function BotIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" {...p}>
      <rect x="4" y="7" width="14" height="10" rx="3" />
      <path d="M11 4v3M8 12h.01M14 12h.01" />
    </svg>
  );
}
