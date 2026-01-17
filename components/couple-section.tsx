import Image from "next/image";

export function CoupleSection() {
  return (
    <section id="story" className="py-24 md:py-32 bg-secondary">
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

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center max-w-5xl mx-auto">
          {/* Couple Image */}
          <div className="relative">
            <div className="aspect-3/4 overflow-hidden">
              <Image
                src="/engagement.jpeg"
                alt="Emma and James"
                className="w-full h-full object-cover"
                width={800}
                height={1067}
              />
            </div>
            {/*<div className="absolute -bottom-6 -right-6 w-32 h-32 border border-border bg-card flex items-center justify-center">
              <p className="font-serif text-lg text-foreground text-center leading-tight">
                Since
                <br />
                2021
              </p>
            </div>*/}
          </div>

          {/* Story */}
          <div className="space-y-6">
            <p className="font-global text-lg leading-relaxed text-foreground text-justify">
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
