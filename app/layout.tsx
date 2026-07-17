import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";

/* One family sitewide; hierarchy comes from size and tracking, never bold
   display type. Variable axis gives us the 340/380 display weights. */
const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
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
      <body className={`${interTight.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <SiteNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
