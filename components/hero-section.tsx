import { HeartIcon } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/wedding-hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-20">
        <p className="text-base md:text-lg font-medium tracking-[0.3em] uppercase text-foreground/80 mb-6">
          Kepada <strong>Irvan Rizki Nugraha</strong>
        </p>

        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tight text-foreground mb-4">
          Rizki
        </h1>

        <div className="flex items-center justify-center gap-4 my-6">
          <span className="w-16 h-px bg-border" />
          <HeartIcon className="w-5 h-5 text-accent" />
          <span className="w-16 h-px bg-border" />
        </div>

        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tight text-foreground mb-8">
          Adel
        </h1>

        <p className="text-base md:text-lg font-medium tracking-[0.2em] uppercase text-foreground/80 mb-2">
          Memohon kehadiran Anda
        </p>
        <p className="text-base md:text-lg font-medium tracking-[0.2em] uppercase text-foreground/80 mb-12">
          Pada hari pernikahan kami
        </p>

        <div className="inline-block border border-border px-10 py-6 bg-card/50 backdrop-blur-sm">
          <p className="font-serif text-3xl md:text-4xl text-foreground mb-1">
            Sesi 1: 13.00 - 14.00 WIB
          </p>
          <p className="text-sm tracking-widest uppercase text-muted-foreground">
            Sabtu, 14 Februari 2026
          </p>
        </div>

        {/* Scroll indicator */}
        {/*<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-border rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-muted-foreground rounded-full" />
          </div>
        </div>*/}
        <div className="mt-12 animate-bounce">
          <a
            href="#bridegroom"
            className="inline-block bg-accent text-background font-semibold px-8 py-4 rounded-full hover:bg-accent/90 transition-colors"
          >
            Buka Undangan
          </a>
        </div>
      </div>
    </section>
  );
}
