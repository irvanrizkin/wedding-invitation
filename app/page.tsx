import { HeroSection } from "@/components/hero-section";
import { CoupleSection } from "@/components/couple-section";
import { DetailsSection } from "@/components/details-section";
import { BrideGroomSection } from "@/components/bridegroom-section";
import { GallerySection } from "@/components/gallery-section";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import BackgroundMusic from "@/components/background-music";

export default async function WeddingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <BrideGroomSection />
      <CoupleSection />
      <DetailsSection />
      <GallerySection />
      <Footer />
      <BackgroundMusic />
    </main>
  );
}
