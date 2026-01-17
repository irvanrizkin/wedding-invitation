import Image from "next/image";

export function CoupleSection() {
  return (
    <section id="hope" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-global text-2xl tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Doa dan Harapan
          </p>
          <h2 className="font-global text-4xl md:text-5xl text-foreground">
            QS. Ar-Rum: 21
          </h2>
          <hr className="mt-4 border-t border-border w-24 mx-auto" />
        </div>

        <div className="items-center max-w-5xl mx-auto">
          <div className="space-y-6">
            <p className="font-global text-lg leading-relaxed text-foreground text-center">
              Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
              pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
              cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di
              antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu
              benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang
              berpikir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
