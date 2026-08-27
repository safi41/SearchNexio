import type { Metadata } from "next";
import {
  CryptoHero,
  CryptoTrustedBy,
  CryptoQualifiedDemand,
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
import { CryptoBanner } from "@/components/crypto/CryptoBanner";

export const metadata: Metadata = {
  title: "Crypto SEO Services | SEO for Web3 & Blockchain | SearchNexio",
  description:
    "Crypto SEO services for exchanges, DeFi, wallets, Web3 and blockchain companies. Build qualified demand across Google and AI search.",
};

export default function CryptoSeoPage() {
  return (
    <main>
      <CryptoHero />
      <CryptoTrustedBy />
      <CryptoQualifiedDemand />
      <CryptoDifferent />
      <CryptoServices />
      <CryptoResults />
      <CryptoAudiences />
      <CryptoBanner which="opportunity" />
      <CryptoTrust />
      <CryptoDeliverables />
      <CryptoProcess />
      <CryptoBanner which="visibility" />
      <CryptoMeasure />
      <CryptoWhy />
      <CryptoEngagements />
      <CryptoBanner which="pricing" />
      <CryptoLimitations />
      <CryptoFaq />
      <CryptoForm />
    </main>
  );
}
