/* Small platform marks for the journey diagram pills. The four surfaces are
   named in the locked copy; the marks make the pills read at a glance. */

export function GoogleG({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden>
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

export function MapsPin({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <path
        d="M12 2a7.2 7.2 0 0 0-7.2 7.2C4.8 14.6 12 22 12 22s7.2-7.4 7.2-12.8A7.2 7.2 0 0 0 12 2Z"
        fill="#EA4335"
      />
      <circle cx="12" cy="9.2" r="2.7" fill="#ffffff" />
    </svg>
  );
}

export function SparkleAI({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <defs>
        <linearGradient id="sparkle-grad" x1="0" y1="0" x2="24" y2="24">
          <stop offset="0%" stopColor="#4285F4" />
          <stop offset="100%" stopColor="#9B72CB" />
        </linearGradient>
      </defs>
      <path
        d="M12 2.5 14.3 9 21 12l-6.7 2.4L12 21.5 9.7 14.4 3 12l6.7-3Z"
        fill="url(#sparkle-grad)"
      />
    </svg>
  );
}

/* Six-spoke mark in a dark chip, standing in for the ChatGPT knot. */
export function ChatGPTMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="11" fill="#0B0D12" />
      <g stroke="#ffffff" strokeWidth="1.9" strokeLinecap="round">
        <path d="M12 5.6v12.8" />
        <path d="M6.5 8.8l11 6.4" />
        <path d="M17.5 8.8l-11 6.4" />
      </g>
      <circle cx="12" cy="12" r="2.1" fill="#0B0D12" />
    </svg>
  );
}

/* Bing — four-facet "b" tile mark. */
export function BingMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <path
        d="M8 3.2 11.2 4.4v10l4-2.3-2-.9-1-3.4 5.5 2v3.9L11.2 20 8 18.2Z"
        fill="#0B8484"
      />
    </svg>
  );
}

/* Gemini — four-point star spark. */
export function GeminiMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <defs>
        <linearGradient id="gemini-grad" x1="2" y1="4" x2="22" y2="20">
          <stop offset="0%" stopColor="#4285F4" />
          <stop offset="55%" stopColor="#9B72CB" />
          <stop offset="100%" stopColor="#D96570" />
        </linearGradient>
      </defs>
      <path
        d="M12 2c.4 5 5 9.6 10 10-5 .4-9.6 5-10 10-.4-5-5-9.6-10-10 5-.4 9.6-5 10-10Z"
        fill="url(#gemini-grad)"
      />
    </svg>
  );
}

/* Perplexity — concentric-ring answer mark. */
export function PerplexityMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="11" fill="#1FB8CD" />
      <g stroke="#ffffff" strokeWidth="1.6" fill="none" strokeLinecap="round">
        <path d="M12 6v12" />
        <path d="M7 8.5 12 12l5-3.5" />
        <path d="M7 15.5 12 12l5 3.5" />
        <path d="M7 8.5v7M17 8.5v7" />
      </g>
    </svg>
  );
}

/* Reddit — snoo head silhouette. */
export function RedditMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="11" fill="#FF4500" />
      <circle cx="8.6" cy="12.4" r="1.3" fill="#fff" />
      <circle cx="15.4" cy="12.4" r="1.3" fill="#fff" />
      <path
        d="M8.4 15c1 .9 2.3 1.3 3.6 1.3s2.6-.4 3.6-1.3"
        stroke="#fff"
        strokeWidth="1.3"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="12" cy="7.4" r="1.1" fill="#fff" />
      <path d="M12 8.4v2.2" stroke="#fff" strokeWidth="1.1" />
    </svg>
  );
}

/* YouTube — play button in a rounded tile. */
export function YouTubeMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <rect x="2" y="5" width="20" height="14" rx="4.5" fill="#FF0000" />
      <path d="M10 8.8v6.4L15.5 12Z" fill="#fff" />
    </svg>
  );
}

/* ChatGPT knot on a mint disc — the light chip variant used in the GEO hero. */
export function ChatGPTKnot({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="11" fill="#E7F6EE" />
      <g stroke="#10A37F" strokeWidth="1.9" strokeLinecap="round">
        <path d="M12 5.6v12.8" />
        <path d="M6.5 8.8l11 6.4" />
        <path d="M17.5 8.8l-11 6.4" />
      </g>
      <circle cx="12" cy="12" r="2.1" fill="#E7F6EE" />
    </svg>
  );
}

/* Perplexity — bare teal knot, no disc (light-surface chips and bubbles). */
export function PerplexityKnot({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <g stroke="#1FB8CD" strokeWidth="1.8" fill="none" strokeLinecap="round">
        <path d="M12 4.5v15" />
        <path d="M6 7.5 12 12l6-4.5" />
        <path d="M6 16.5 12 12l6 4.5" />
        <path d="M6 7.5v9M18 7.5v9" />
      </g>
    </svg>
  );
}

/* Claude — radiating sunburst in Anthropic clay orange. */
export function ClaudeSpark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <g stroke="#D97757" strokeWidth="2.4" strokeLinecap="round">
        <path d="M16 12h6" />
        <path d="M15.2 14.4l4.9 3.5" />
        <path d="M13.2 15.8l1.9 5.7" />
        <path d="M10.8 15.8l-1.9 5.7" />
        <path d="M8.8 14.4l-4.9 3.5" />
        <path d="M8 12H2" />
        <path d="M8.8 9.6 3.9 6.1" />
        <path d="M10.8 8.2 8.9 2.5" />
        <path d="M13.2 8.2l1.9-5.7" />
        <path d="M15.2 9.6l4.9-3.5" />
      </g>
    </svg>
  );
}

/* Anthropic "AI\" logotype strokes — the orbit-bubble version of Claude. */
export function AnthropicLogotype({ width = 40 }: { width?: number }) {
  return (
    <svg width={width} height={(width * 26) / 44} viewBox="0 0 44 26" aria-hidden>
      <g stroke="#C15F3C" strokeWidth="4" fill="none" strokeLinejoin="miter">
        <path d="M3 23 10.5 3 18 23" />
        <path d="M6.6 16.2h7.8" />
        <path d="M24 3v20" />
        <path d="M31.5 3l9 20" />
      </g>
    </svg>
  );
}

/* Microsoft Copilot — three angled gradient ribbons. */
export function CopilotMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <defs>
        <linearGradient id="cop-a" x1="6" y1="3" x2="18" y2="10">
          <stop offset="0%" stopColor="#12B3F8" />
          <stop offset="100%" stopColor="#1D4FD7" />
        </linearGradient>
        <linearGradient id="cop-b" x1="6" y1="14" x2="18" y2="21">
          <stop offset="0%" stopColor="#7B5CF0" />
          <stop offset="100%" stopColor="#E5488F" />
        </linearGradient>
        <linearGradient id="cop-c" x1="4" y1="12" x2="20" y2="12">
          <stop offset="0%" stopColor="#2E8DEE" />
          <stop offset="100%" stopColor="#6A64F1" />
        </linearGradient>
      </defs>
      <path d="M8.7 5.1C9.1 3.9 10.3 3 11.6 3h5.8c1 0 1.7 1 1.4 1.9l-1.4 4.4H7.3Z" fill="url(#cop-a)" />
      <path d="M15.3 18.9c-.4 1.2-1.6 2.1-2.9 2.1H6.6c-1 0-1.7-1-1.4-1.9l1.4-4.4h10.1Z" fill="url(#cop-b)" />
      <path d="M7.3 9.3h10.1l-1 5.4H6.3Z" fill="url(#cop-c)" />
    </svg>
  );
}
