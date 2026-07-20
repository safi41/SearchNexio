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
