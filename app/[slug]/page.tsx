import { HeroSection } from "@/components/hero-section";
import { CoupleSection } from "@/components/couple-section";
import { DetailsSection } from "@/components/details-section";
import { BrideGroomSection } from "@/components/bridegroom-section";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import BackgroundMusic from "@/components/background-music";
import { neon } from "@neondatabase/serverless";
import { notFound } from "next/navigation";
import { StorySection } from "@/components/story-section";

async function getInviteeById(id: string) {
  const sql = neon(process.env.DATABASE_URL ?? "");
  const response = await sql`SELECT * FROM invitees WHERE public_id = ${id}`;
  return response[0];
}

export default async function WeddingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const invitee = await getInviteeById(slug);

  if (!invitee) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection name={invitee?.name ?? "Tamu Undangan"} />
      <BrideGroomSection sessionNumber={invitee?.session_number ?? 0} />
      <DetailsSection sessionNumber={invitee?.session_number ?? 0} />
      <CoupleSection />
      <StorySection />
      <Footer />
      <BackgroundMusic />
    </main>
  );
}
