import { SparklesIcon } from "lucide-react";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import { getSessionLabel, getSessionTitle } from "@/utils/session";

export function DetailsSection({ sessionNumber }: { sessionNumber: number }) {
  return (
    <section id="details" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-global text-2xl tracking-[0.3em] uppercase text-muted-foreground mb-4">
            {getSessionTitle(sessionNumber)}
          </p>
          <h2 className="font-global text-4xl md:text-5xl text-foreground">
            Waktu dan Tempat
          </h2>
          <hr className="mt-4 border-t border-border w-24 mx-auto" />
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-8 border border-border bg-card hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
              <SparklesIcon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-serif text-3xl text-foreground mb-3">
              Paseban Sena Ballroom
            </h3>
            <p className="text-xl text-muted-foreground mb-3">
              Jl. Suroyo No. 50-52
            </p>
            <p className="text-xl font-medium text-foreground  mb-3">
              Kota Probolinggo, Jawa Timur
            </p>
            <p className="text-xl font-global">
              {getSessionLabel(sessionNumber)}
            </p>
          </div>
        </div>

        <div className="mt-4 max-w-5xl mx-auto">
          <div className="bg-muted rounded-lg">
            <GoogleMapsEmbed
              apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API || ""}
              height={500}
              width="100%"
              mode="place"
              q="Paseban+Sena+Ballroom,+Jl.+Suroyo+No.+50-52,+Probolinggo,+Jawa+Timur"
              center="-7.745954,113.215314"
            />
          </div>
          <div className="text-center mt-4">
            <a
              href="https://maps.app.goo.gl/opb1qDFEE3P1L6KC9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
            >
              Buka di Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
