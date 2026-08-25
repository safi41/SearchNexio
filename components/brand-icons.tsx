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

export function CoinbaseMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <circle cx="16" cy="16" r="16" fill="#0052FF" />
      <path
        fill="#fff"
        d="M16 6a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-2.4 7.2c0-.66.54-1.2 1.2-1.2h2.4c.66 0 1.2.54 1.2 1.2v5.6c0 .66-.54 1.2-1.2 1.2h-2.4c-.66 0-1.2-.54-1.2-1.2z"
      />
    </svg>
  );
}

/* ---- B2B SaaS platform marks ----
   Recognisable software brands in their own colours, used in the B2B SaaS
   hero orbit. Simplified from each official mark so they read at small
   sizes without losing their identity. */

export function SalesforceMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <circle cx="16" cy="16" r="16" fill="#00A1E0" />
      <path
        fill="#fff"
        d="M14.6 10.3a3.9 3.9 0 0 1 2.8-1.2c1.44 0 2.7.8 3.37 2a4.6 4.6 0 0 1 1.9-.41c2.55 0 4.63 2.1 4.63 4.7s-2.08 4.7-4.64 4.7c-.31 0-.62-.03-.91-.09a3.4 3.4 0 0 1-3 1.76c-.5 0-.99-.11-1.42-.32a3.9 3.9 0 0 1-3.6 2.37 3.87 3.87 0 0 1-3.63-2.5c-.24.05-.5.08-.75.08a3.75 3.75 0 0 1-1.9-6.98 4.31 4.31 0 0 1 7.15-4.11z"
      />
    </svg>
  );
}

export function HubSpotMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <circle cx="16" cy="16" r="16" fill="#FF7A59" />
      <path
        fill="#fff"
        d="M21.3 13.4V11a1.9 1.9 0 0 0 1.1-1.7v-.06a1.9 1.9 0 0 0-1.9-1.9h-.06a1.9 1.9 0 0 0-1.9 1.9v.06a1.9 1.9 0 0 0 1.1 1.7v2.4a5.4 5.4 0 0 0-2.56 1.13l-6.78-5.28a2.16 2.16 0 1 0-1.02 1.32l6.66 5.19a5.4 5.4 0 0 0 .08 6.1l-2.03 2.03a1.75 1.75 0 1 0 1.24 1.24l2-2a5.42 5.42 0 1 0 4.07-9.73zm-1.1 8.13a2.78 2.78 0 1 1 0-5.56 2.78 2.78 0 0 1 0 5.56z"
      />
    </svg>
  );
}

export function SlackMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <circle cx="16" cy="16" r="16" fill="#fff" />
      <path fill="#E01E5A" d="M11.4 18.6a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 1.75-1.75h1.75zm.88 0a1.75 1.75 0 0 1 3.5 0v4.4a1.75 1.75 0 1 1-3.5 0z" />
      <path fill="#36C5F0" d="M14.03 11.55a1.75 1.75 0 1 1 1.75-1.75v1.75zm0 .89a1.75 1.75 0 0 1 0 3.5H9.6a1.75 1.75 0 0 1 0-3.5z" />
      <path fill="#2EB67D" d="M20.6 14.03a1.75 1.75 0 1 1 1.75 1.75H20.6zm-.88 0a1.75 1.75 0 0 1-3.5 0V9.6a1.75 1.75 0 1 1 3.5 0z" />
      <path fill="#ECB22E" d="M17.97 20.6a1.75 1.75 0 1 1-1.75 1.75V20.6zm0-.88a1.75 1.75 0 0 1 0-3.5h4.4a1.75 1.75 0 1 1 0 3.5z" />
    </svg>
  );
}

export function StripeMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <circle cx="16" cy="16" r="16" fill="#635BFF" />
      <path
        fill="#fff"
        d="M14.9 13.2c0-.63.52-.87 1.37-.87 1.23 0 2.79.37 4.02 1.04v-3.8a10.7 10.7 0 0 0-4.02-.74c-3.28 0-5.46 1.71-5.46 4.58 0 4.46 6.14 3.75 6.14 5.67 0 .74-.65 .98-1.55.98-1.34 0-3.06-.55-4.42-1.3v3.85c1.5.65 3.02.92 4.42.92 3.36 0 5.67-1.66 5.67-4.57 0-4.82-6.17-3.96-6.17-5.76z"
      />
    </svg>
  );
}

export function NotionMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <circle cx="16" cy="16" r="16" fill="#fff" />
      <circle cx="16" cy="16" r="15.4" fill="none" stroke="#E6E4DE" strokeWidth="1.2" />
      <path
        fill="#0B0D12"
        d="M9.9 10.1c.5.4.69.37 1.63.31l8.83-.53c.19 0 .03-.19-.03-.22l-1.47-1.06c-.28-.22-.66-.47-1.38-.41l-8.55.62c-.31.03-.38.19-.25.31zm.53 2.06v9.29c0 .5.25.69.81.66l9.7-.56c.56-.03.63-.38.63-.79v-9.23c0-.4-.16-.62-.5-.59l-10.14.6c-.37.03-.5.22-.5.62zm9.57.5c.06.28 0 .56-.28.6l-.47.09v6.87c-.4.22-.78.34-1.1.34-.5 0-.63-.16-1-.63l-3.06-4.81v4.65l.97.22s0 .56-.78.56l-2.16.12c-.06-.13 0-.44.22-.5l.56-.16v-6.15l-.78-.06c-.06-.28.09-.69.53-.72l2.32-.16 3.19 4.9v-4.34l-.81-.09c-.06-.34.19-.6.5-.62z"
      />
    </svg>
  );
}

export function ZoomMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <circle cx="16" cy="16" r="16" fill="#0B5CFF" />
      <path
        fill="#fff"
        d="M8 12.7c0-.86.7-1.55 1.55-1.55h7.6c.86 0 1.55.7 1.55 1.55v6.6c0 .86-.7 1.55-1.55 1.55h-7.6A1.55 1.55 0 0 1 8 19.3zm12.1 1.9 3.2-2.34c.28-.2.7-.01.7.34v6.8c0 .35-.42.54-.7.34l-3.2-2.34z"
      />
    </svg>
  );
}

/* ---- Local search platform marks ----
   The surfaces a local business is actually found on. Google's own G and
   the Maps pin are reused from above. */

export function GoogleBusinessMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <circle cx="16" cy="16" r="16" fill="#fff" />
      <circle cx="16" cy="16" r="15.4" fill="none" stroke="#E6E4DE" strokeWidth="1.2" />
      <path fill="#4285F4" d="M8.4 8.6h5.1l-.9 4.5H7.1z" />
      <path fill="#34A853" d="M13.5 8.6h5.1l.4 4.5h-6.4z" />
      <path fill="#FBBC05" d="M18.6 8.6h5.1l1.2 4.5h-5.9z" />
      <path fill="#EA4335" d="M7.1 13.1h17.8a4 4 0 0 1-7.4 2.1 4 4 0 0 1-6.9 0 4 4 0 0 1-3.5-2.1z" opacity="0.9" />
      <path fill="#4285F4" d="M9.4 16.9h13.2v6.5H9.4z" opacity="0.16" />
      <path fill="#1A73E8" d="M9.4 16.6h13.2v6.8H9.4z" fillOpacity="0" stroke="#1A73E8" strokeWidth="1.5" />
      <path fill="#1A73E8" d="M13.6 18.6h4.8v4.8h-4.8z" />
    </svg>
  );
}

export function AppleMapsMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <defs>
        <linearGradient id="am-g" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4DD07C" />
          <stop offset="55%" stopColor="#2FB1E8" />
          <stop offset="100%" stopColor="#2A6FE8" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="30" height="30" rx="7.5" fill="url(#am-g)" />
      <path fill="#fff" d="M16 7.6a5.4 5.4 0 0 0-5.4 5.4c0 4 5.4 11 5.4 11s5.4-7 5.4-11A5.4 5.4 0 0 0 16 7.6zm0 7.5a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2z" />
    </svg>
  );
}

export function YelpMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <circle cx="16" cy="16" r="16" fill="#FF1A1A" />
      <path
        fill="#fff"
        d="M14.6 6.6v8.9c0 .8-.9 1.2-1.5.7L8.9 13c-.5-.4-.5-1.2 0-1.7a11 11 0 0 1 4.2-2.6c.7-.2 1.5.2 1.5 1zM13.4 17.9c.6-.3 1.3.2 1.3.9v4.4c0 .8-.8 1.3-1.5 1a10 10 0 0 1-3.4-2.4c-.5-.6-.3-1.5.4-1.8zM17.7 17.7l3.9 1.9c.7.3.8 1.2.3 1.7a10.6 10.6 0 0 1-3.1 2.3c-.7.3-1.5-.2-1.5-1v-4.1c0-.7.8-1.1 1.4-.8zM17.5 15.1l3.6-2.2c.7-.4 1.5.1 1.5.9v3.5c0 .8-.8 1.3-1.5 1l-3.6-1.4c-.7-.3-.7-1.3 0-1.8z"
      />
    </svg>
  );
}

export function TripAdvisorMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <circle cx="16" cy="16" r="16" fill="#34E0A1" />
      <circle cx="11" cy="16.4" r="4.6" fill="none" stroke="#0B0D12" strokeWidth="1.9" />
      <circle cx="21" cy="16.4" r="4.6" fill="none" stroke="#0B0D12" strokeWidth="1.9" />
      <circle cx="11" cy="16.4" r="1.7" fill="#0B0D12" />
      <circle cx="21" cy="16.4" r="1.7" fill="#0B0D12" />
      <path d="M11.6 11.4A9.6 9.6 0 0 1 16 10.4c1.6 0 3.1.36 4.4 1" stroke="#0B0D12" strokeWidth="1.7" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* ---- Healthcare platform marks ----
   The surfaces patients actually use to find and evaluate a provider. */

export function HealthgradesMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <circle cx="16" cy="16" r="16" fill="#0B5CAB" />
      <path fill="#fff" d="M10.4 8.6h3.3v5.7h4.6V8.6h3.3v14.8h-3.3v-6h-4.6v6h-3.3z" />
    </svg>
  );
}

export function ZocdocMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <circle cx="16" cy="16" r="16" fill="#FFB000" />
      <path
        fill="#0B0D12"
        d="M9.4 9.4h13.2v2.9l-8.1 7.4h8.3v2.9H9.2v-2.9l8.1-7.4H9.4z"
      />
    </svg>
  );
}

export function WebMDMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <circle cx="16" cy="16" r="16" fill="#0077C8" />
      <path
        fill="#fff"
        d="M4.6 12.4h2.5l1.3 5.1 1.4-5.1h2.2l1.4 5.1 1.3-5.1h2.5l-2.5 8.2h-2.4l-1.4-4.9-1.4 4.9H7.1zM18.8 12.4h2.6l1.9 4.6 1.9-4.6h2.6v8.2h-2.2v-5l-1.7 4.1h-1.2l-1.7-4.1v5h-2.2z"
      />
    </svg>
  );
}

export function NhsMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <circle cx="16" cy="16" r="16" fill="#005EB8" />
      <path
        fill="#fff"
        d="M5.4 11.6h3.3l1.9 5.3h.05l1.05-5.3h2.5l-1.8 8.8H9.2l-2-5.3h-.05l-1.05 5.3H3.6zM15.4 11.6h2.6l-.6 3.1h2.9l.6-3.1h2.6l-1.8 8.8h-2.6l.65-3.4h-2.9l-.65 3.4h-2.6zM28.3 13.9a4.9 4.9 0 0 0-1.9-.4c-.7 0-1.3.1-1.3.6 0 .95 2.7.6 2.7 2.7 0 1.9-1.8 2.4-3.4 2.4a8 8 0 0 1-2.2-.35l.6-1.95c.35.25 1.1.4 1.7.4.55 0 1.4-.1 1.4-.75 0-1.05-2.7-.65-2.7-2.6 0-1.8 1.6-2.35 3.1-2.35.85 0 1.65.1 2.15.35z"
      />
    </svg>
  );
}
