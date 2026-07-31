import type { Metadata } from "next";
import { Caveat, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

/* The Sasico pairing: Plus Jakarta Sans carries every heading at 700,
   Inter carries body and UI. */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

/* Handwritten accent for the small "let's build" style annotations. */
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "Search Visibility Agency | SEO, Local SEO & AI Search",
  description:
    "SearchNexio helps businesses get found across Google, Maps, organic search, and AI search with SEO focused on traffic, trust, and growth.",
};

/* Entity rule: this exact sentence must match the About page and every directory listing. */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SearchNexio",
  description:
    "SearchNexio is a search visibility agency helping mid-size businesses and enterprises get found across Google, Maps, and AI search.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jakarta.variable} ${caveat.variable} font-sans`}>
        {/* apply the saved theme before first paint to avoid a light flash */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try{if(localStorage.getItem("theme")==="dark")document.documentElement.classList.add("dark")}catch(e){}',
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <SiteNav />
        {children}
        <Footer />
        <ThemeToggle />
      </body>
    </html>
  );
}
