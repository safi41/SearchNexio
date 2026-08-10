import type { Metadata } from "next";
import {
  CryptoHero,
  CryptoTrustedBy,
  CryptoQualifiedDemand,
  CryptoSearchStages,
  CryptoDifferent,
} from "@/components/crypto/CryptoTop";
import {
  CryptoServices,
  CryptoResults,
  CryptoAudiences,
  CryptoTrust,
  CryptoDeliverables,
} from "@/components/crypto/CryptoMid";
import {
  CryptoProcess,
  CryptoMeasure,
  CryptoWhy,
  CryptoEngagements,
  CryptoLimitations,
  CryptoFaq,
  CryptoForm,
} from "@/components/crypto/CryptoBottom";

export const metadata: Metadata = {
  title: "Crypto SEO Services for Qualified Growth | Search Nexio",
  description:
    "Search Nexio provides crypto SEO services designed to connect cryptocurrency, blockchain and Web3 businesses with qualified users through organic search, and to measure what happens after they find you.",
};

export default function CryptoSeoPage() {
  return (
    <main>
      <CryptoHero />
      <CryptoTrustedBy />
      <CryptoQualifiedDemand />
      <CryptoSearchStages />
      <CryptoDifferent />
      <CryptoServices />
      <CryptoResults />
      <CryptoAudiences />
      <CryptoTrust />
      <CryptoDeliverables />
      <CryptoProcess />
      <CryptoMeasure />
      <CryptoWhy />
      <CryptoEngagements />
      <CryptoLimitations />
      <CryptoFaq />
      <CryptoForm />
    </main>
  );
}
