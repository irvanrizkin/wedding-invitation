import Image from "next/image";

export function StorySection() {
  return (
    <section id="story" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-global text-2xl tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Rangkaian Cerita
          </p>
          <h2 className="font-global text-4xl md:text-5xl text-foreground">
            Kisah Kami
          </h2>
          <hr className="mt-4 border-t border-border w-24 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center max-w-5xl mx-auto mb-6">
          <div className="relative">
            <div className="aspect-3/4 overflow-hidden">
              <Image
                src="/mountain.jpeg"
                alt="Mountain Photo"
                className="w-full h-full object-cover"
                width={800}
                height={1067}
              />
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="font-global text-2xl font-bold">Awal Kisah</h1>
            <p className="font-global text-lg leading-relaxed text-foreground text-justify">
              Berawal dari sebuah ketidaksengajaan, mengubah satu sapaan yang
              tumbuh menjadi ribuan percakapan. Dan ternyata hati kita pun
              menemukan kenyamanan
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center max-w-5xl mx-auto mb-6">
          <div className="space-y-6">
            <h1 className="font-global text-2xl font-bold">
              Menjalin Hubungan
            </h1>
            <p className="font-global text-lg leading-relaxed text-foreground text-justify">
              Dahulu kita adalah dua cahaya yang berkelana, terpencar jauh di
              luasnya Tata Surya.... ​tapi kini orbit kita telah menyatu dalam
              satu cerita, mengukir garis takdir yang paling berharga. Mengubah{" "}
              <strong>aku</strong> dan <strong>kamu</strong> menjadi{" "}
              <strong>kita</strong>
            </p>
          </div>

          <div className="relative">
            <div className="aspect-3/4 overflow-hidden">
              <Image
                src="/balcony.jpeg"
                alt="Balcony Photo"
                className="w-full h-full object-cover"
                width={800}
                height={1067}
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center max-w-5xl mx-auto mb-6">
          <div className="relative">
            <div className="aspect-3/4 overflow-hidden">
              <Image
                src="/engagement-2.jpeg"
                alt="Engagement Phone Photo"
                className="w-full h-full object-cover"
                width={800}
                height={1067}
              />
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="font-global text-2xl font-bold">Lamaran</h1>
            <p className="font-global text-lg leading-relaxed text-foreground text-justify">
              Berawal dari dua jiwa yang saling mencari makna, menelusuri jalan
              takdir dalam balutan doa, sebuah lamaran tulus menjadi awal
              cerita, mengikat dua hati menuju arah yang sama....
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-20 items-center max-w-5xl mx-auto mb-6">
          <div className="relative">
            <div className="aspect-3/4 overflow-hidden">
              <Image
                src="/ring-separate.jpeg"
                alt="Balcony Photo"
                className="w-full h-full object-contain"
                width={800}
                height={1067}
              />
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="font-global text-2xl font-bold text-center">
              Menikah
            </h1>
            <p className="font-global text-lg leading-relaxed text-foreground text-center">
              Kini tiba saatnya bagi kita untuk menyatukan jiwa, mengikat janji
              suci di hadapan Yang Maha Kuasa, satu detak yang seirama, serta
              satu tujuan yang akhirnya bermuara pada janji suci untuk setia dan
              menua bersama.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-3/4 overflow-hidden">
              <Image
                src="/ring-join.jpeg"
                alt="Balcony Photo"
                className="w-full h-full object-contain "
                width={800}
                height={1067}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
