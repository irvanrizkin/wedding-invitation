import { HeartIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-4">Rizki & Adel</h2>
        <p className="text-primary-foreground/80 mb-6">
          14 Februari 2026 • Probolinggo, Jawa Timur
        </p>

        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="w-12 h-px bg-primary-foreground/30" />
          <HeartIcon className="w-4 h-4 text-primary-foreground/60" />
          <span className="w-12 h-px bg-primary-foreground/30" />
        </div>

        <p className="text-xs text-primary-foreground/40 mb-8">
          With love, Rizki & Adel
        </p>

        <p className="text-sm text-primary-foreground/60">
          Crafted By : Irvan Rizki Nugraha (irvanrizkin)
        </p>
      </div>
    </footer>
  );
}
