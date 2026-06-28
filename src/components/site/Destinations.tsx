import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import dAms from "@/assets/dest-amsterdam.jpg";
import dPar from "@/assets/dest-paris.jpg";
import dBru from "@/assets/dest-brussels.jpg";
import dPra from "@/assets/dest-prague.jpg";
import dZur from "@/assets/dest-zurich.jpg";
import dInt from "@/assets/dest-interlaken.jpg";
import dVie from "@/assets/dest-vienna.jpg";
import { useLang } from "@/lib/i18n";

const images = [dAms, dPar, dBru, dPra, dZur, dInt, dVie];

export function Destinations() {
  const { t, lang } = useLang();
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7 * dir;
    el.scrollBy({ left: lang === "ar" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="destinations" className="bg-background pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="text-balance text-2xl font-bold text-foreground md:text-4xl">
            {t.destinations.title}
          </h2>
          <div className="hidden gap-2 md:flex">
            <button
              onClick={() => scrollBy(-1)}
              aria-label={t.destinations.prev}
              className="grid h-11 w-11 place-items-center rounded-full border border-primary/40 text-primary transition hover:bg-primary hover:text-navy"
            >
              <ChevronLeft className="h-5 w-5 rtl:rotate-180" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label={t.destinations.next}
              className="grid h-11 w-11 place-items-center rounded-full bg-gradient-gold text-navy shadow-gold transition hover:shadow-elegant"
            >
              <ChevronRight className="h-5 w-5 rtl:rotate-180" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {t.destinations.names.map((name, i) => (
              <article
                key={name}
                className="group relative aspect-[4/5] w-[78%] shrink-0 snap-start overflow-hidden rounded-3xl shadow-card-soft sm:w-[44%] lg:w-[23%]"
              >
                <img
                  src={images[i]}
                  alt={name}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-center">
                  <h3 className="text-lg font-bold text-white drop-shadow">{name}</h3>
                  <div className="mx-auto mt-2 h-0.5 w-8 rounded-full bg-primary" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
