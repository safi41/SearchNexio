import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Request a Visibility Review | SearchNexio",
  description:
    "A manual, analyst-led review of where you appear across Google, Maps, and AI search, and where your competitors are winning instead.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Visibility Review"
        lines={["Request a", "Visibility Review"]}
        intro="This is a manual, analyst-led review conducted by our senior team, not a generic software report. It takes us a few business days to compile."
      />
      <ContactForm />
    </main>
  );
}
