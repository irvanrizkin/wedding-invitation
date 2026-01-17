import Image from "next/image";

export function HeroSection({ name }: { name: string }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-20">
        <p className="font-global font-bold italic text-base md:text-lg text-foreground/80 mb-6">
          Kepada Yth. Bpk/Ibu/Sdr(i)<br></br> {name}
        </p>

        <div className="aspect-square overflow-hidden group cursor-pointer">
          <Image
            src={"/engagement-ring.png"}
            alt={`Gallery image`}
            className={`w-full h-full object-cover object-bottom transition-transform duration-500 group-hover:scale-105`}
            width={500}
            height={500}
          />
        </div>

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
