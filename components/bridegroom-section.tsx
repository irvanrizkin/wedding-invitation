import { HeartIcon } from "lucide-react";

export function BrideGroomSection() {
  return (
    <section id="bridegroom" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-global text-2xl text-muted-foreground mb-4">
            Assalaamu'alaikum warahmatullahi wabarakaatuh
          </p>
          <h2 className="font-global text-2xl text-foreground">
            Dengan memohon Rahmat & Ridho Allah SWT, kami mengundang
            Bapak/Ibu/Sdr(i) dalam acara Resepsi Pernikahan putra putri kami
          </h2>
          <hr className="mt-4 border-t border-border w-24 mx-auto" />
        </div>

        <div className="relative z-10 text-center px-6 py-20">
          <h1 className="font-global text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground mb-4">
            Rayhananda Rizki Nugraha
          </h1>
          <p className="font-global text-base md:text-lg font-medium tracking-[0.3em] uppercase text-foreground/80 mb-6">
            Putra Kedua
          </p>
          <p className="font-global text-base md:text-lg font-medium tracking-[0.3em] uppercase text-foreground/80 mb-6">
            Bapak Saptono Tri Nugroho dan Ibu Mawang Sri Komala
          </p>

          <div className="flex items-center justify-center gap-4 mt-7 mb-6">
            <span className="w-16 h-px bg-border" />
            <HeartIcon className="w-5 h-5 text-accent" />
            <span className="w-16 h-px bg-border" />
          </div>

          <h1 className="font-global text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground mb-6">
            Adela Laurents Oktavia
          </h1>

          <p className="font-global text-base md:text-lg font-medium tracking-[0.3em] uppercase text-foreground/80 mb-6">
            Putri Pertama
          </p>
          <p className="font-global text-base md:text-lg font-medium tracking-[0.3em] uppercase text-foreground/80 mb-6">
            Bapak Novi Andrianto dan Ibu Siti Umiati
          </p>
        </div>
      </div>
    </section>
  );
}
