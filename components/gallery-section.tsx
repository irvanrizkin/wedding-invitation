import Image from "next/image";

const images = [
  { src: "/balcony.jpeg", position: "" },
  { src: "/mountain.jpeg", position: "" },
  { src: "/engagement-2.jpeg", position: "" },
  { src: "/engagement-ring.png", position: "object-bottom" },
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Momen Bahagia Kami
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Galeri Foto
          </h2>
          <hr className="mt-4 border-t border-border w-24 mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden group cursor-pointer"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={`Gallery image ${index + 1}`}
                className={`w-full h-full object-cover ${image.position} transition-transform duration-500 group-hover:scale-105`}
                width={500}
                height={500}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
