import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono, Newsreader, Public_Sans } from "next/font/google";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import ScanTracker from "@/components/motion/ScanTracker";
import SmoothScroll from "@/components/motion/SmoothScroll";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

/* display face reserved for the hero hook only */
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
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
    <html lang="en">
      <body
        className={`${newsreader.variable} ${publicSans.variable} ${plexMono.variable} ${bricolage.variable} font-sans`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Fixed chrome must stay outside the smooth-scroll transform. */}
        <ScanTracker />
        <SiteNav />
        <SmoothScroll>
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
