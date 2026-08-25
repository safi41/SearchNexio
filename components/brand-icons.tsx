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

/* The ChatGPT (OpenAI) hexagonal knot mark, in ink. */
export function OpenAIMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#0B0D12"
        d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.073zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654 2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
      />
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

/* ---- Crypto platform marks ----
   Recognisable brand marks in each project's own colour, used in the crypto
   hero orbit. Drawn from the official geometry so each reads correctly at
   small sizes. */

export function BitcoinMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <circle cx="16" cy="16" r="16" fill="#F7931A" />
      <path
        fill="#fff"
        d="M23.19 14.02c.31-2.09-1.28-3.21-3.46-3.96l.71-2.84-1.73-.43-.69 2.76c-.45-.11-.92-.22-1.39-.32l.7-2.78-1.73-.43-.71 2.84c-.38-.09-.75-.17-1.11-.26v-.01l-2.39-.6-.46 1.85s1.28.29 1.26.31c.7.17.83.64.81 1.01l-.81 3.24c.05.01.11.03.18.06l-.18-.05-1.13 4.54c-.09.21-.3.53-.79.41.02.03-1.26-.31-1.26-.31l-.86 1.98 2.25.56c.42.11.83.22 1.24.32l-.72 2.87 1.73.43.71-2.84c.47.13.93.25 1.38.36l-.71 2.83 1.73.43.72-2.87c2.95.56 5.17.33 6.11-2.34.75-2.15-.04-3.39-1.59-4.2 1.13-.26 1.98-1 2.21-2.54zm-3.96 5.55c-.53 2.15-4.16.99-5.34.69l.95-3.81c1.17.29 4.96.87 4.39 3.12zm.54-5.58c-.49 1.96-3.51.96-4.49.72l.86-3.45c.98.25 4.14.7 3.63 2.73z"
      />
    </svg>
  );
}

export function EthereumMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <circle cx="16" cy="16" r="16" fill="#627EEA" />
      <path fill="#fff" fillOpacity="0.6" d="M16.5 4v8.87l7.5 3.35z" />
      <path fill="#fff" d="M16.5 4 9 16.22l7.5-3.35z" />
      <path fill="#fff" fillOpacity="0.6" d="M16.5 21.97V28l7.5-10.38z" />
      <path fill="#fff" d="M16.5 28v-6.03L9 17.62z" />
      <path fill="#fff" fillOpacity="0.2" d="m16.5 20.57 7.5-4.35-7.5-3.35z" />
      <path fill="#fff" fillOpacity="0.6" d="m9 16.22 7.5 4.35v-7.7z" />
    </svg>
  );
}

export function BinanceMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <circle cx="16" cy="16" r="16" fill="#F3BA2F" />
      <path
        fill="#fff"
        d="m12.12 14.35 3.88-3.88 3.88 3.88 2.26-2.26L16 5.95l-6.14 6.14zM6.4 16l2.26-2.26L10.92 16l-2.26 2.26zm5.72 1.65L16 21.53l3.88-3.88 2.26 2.25L16 26.05l-6.14-6.14-.01-.01zM21.08 16l2.26-2.26L25.6 16l-2.26 2.26zm-2.79-.01L16 13.7l-1.69 1.7-.2.19-.4.4 2.29 2.29 2.29-2.29z"
      />
    </svg>
  );
}

export function SolanaMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <circle cx="16" cy="16" r="16" fill="#000" />
      <defs>
        <linearGradient id="sol-g" x1="8" y1="22" x2="24" y2="10" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#9945FF" />
          <stop offset="100%" stopColor="#14F195" />
        </linearGradient>
      </defs>
      <path
        fill="url(#sol-g)"
        d="M10.2 20.2a.6.6 0 0 1 .43-.18h13.1c.27 0 .4.32.21.51l-2.14 2.14a.6.6 0 0 1-.43.18H8.27a.3.3 0 0 1-.21-.51zM10.2 9.15a.62.62 0 0 1 .43-.18h13.1c.27 0 .4.33.21.52l-2.14 2.14a.6.6 0 0 1-.43.18H8.27a.3.3 0 0 1-.21-.52zM21.8 14.64a.6.6 0 0 0-.43-.18H8.27a.3.3 0 0 0-.21.52l2.14 2.14a.6.6 0 0 0 .43.18h13.1c.27 0 .4-.33.21-.52z"
      />
    </svg>
  );
}

export function LedgerMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <circle cx="16" cy="16" r="16" fill="#0B0D12" />
      <path
        fill="#fff"
        d="M8 8h7.2v2.3H10.3V17H8zm16 0v9h-2.3v-6.7h-4.9V8zM8 19.3h2.3V22h4.9v2.3H8zm13.7 0H24V24h-7.2v-2.3h4.9z"
      />
    </svg>
  );
}

export function TetherMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <circle cx="16" cy="16" r="16" fill="#26A17B" />
      <path
        fill="#fff"
        d="M17.94 15.9v-2.2h5.03V10.4H9.05v3.3h5.03v2.2c-4.09.19-7.16.99-7.16 1.96s3.07 1.78 7.16 1.97v6.27h3.86v-6.28c4.08-.19 7.15-1 7.15-1.96s-3.07-1.77-7.15-1.96zm0 3.28v-.01c-.1.01-.63.04-1.8.04-.94 0-1.6-.03-1.83-.04v.01c-3.62-.16-6.32-.79-6.32-1.54s2.7-1.38 6.32-1.54v2.45c.24.02.92.06 1.85.06 1.12 0 1.68-.05 1.78-.06v-2.45c3.61.16 6.31.79 6.31 1.54s-2.7 1.38-6.31 1.54z"
      />
    </svg>
  );
}
