import { Camera, Car, Crown, UserRound } from "lucide-react";
import sTransport from "@/assets/service-transport.jpg";
import sTours from "@/assets/service-tours.jpg";
import sDriver from "@/assets/service-driver.jpg";
import sVip from "@/assets/service-vip.jpg";
import { useLang } from "@/lib/i18n";

const icons = [Car, Camera, UserRound, Crown];
const images = [sTransport, sTours, sDriver, sVip];

export function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            {t.services.eyebrow}
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-5xl">
            {t.services.title}
          </h2>
          <div className="mx-auto mt-5 h-0.5 w-16 rounded-full bg-primary" />
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <article
                key={item.title}
                className="group relative flex flex-col rounded-3xl bg-card shadow-card-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-elegant"
              >
                <div className="relative overflow-hidden rounded-t-3xl">
                  <img
                    src={images[i]}
                    alt={item.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-52 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 -bottom-7 flex justify-center">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-gold text-navy shadow-gold">
                      <Icon className="h-6 w-6" />
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col px-6 pb-7 pt-12 text-center">
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                  <div className="mt-6">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center rounded-full bg-gradient-gold px-6 py-2 text-xs font-semibold text-navy shadow-gold/50 transition hover:shadow-gold"
                    >
                      {t.services.more}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
