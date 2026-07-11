import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { StatsStrip } from "@/components/site/StatsStrip";
import { Services } from "@/components/site/Services";
import { Destinations } from "@/components/site/Destinations";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ALASWANI · Luxury Tourism & Transport in Europe" },
      {
        name: "description",
        content:
          "Private European tours, reliable luxury transport, and professional Arabic-speaking drivers. Discover Europe in true style with ALASWANI.",
      },
      { property: "og:title", content: "ALASWANI · Luxury Tourism & Transport in Europe" },
      {
        property: "og:description",
        content:
          "Private tours, premium fleet, Arabic-speaking drivers across 15+ European destinations.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <Services />
        <Destinations />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
