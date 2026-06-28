import { ArrowLeft, ArrowRight, Car, MapPin, Phone, ShieldCheck, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroVan from "@/assets/hero-van.png";
import { useLang } from "@/lib/i18n";

export function Hero() {
  const { t, lang } = useLang();
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;

  const features = [
    { icon: Users, label: t.hero.features.drivers },
    { icon: ShieldCheck, label: t.hero.features.safety },
    { icon: MapPin, label: t.hero.features.tours },
    { icon: Car, label: t.hero.features.fleet },
  ];

  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-40 md:pt-40 md:pb-56">
      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <img
          src={heroBg}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-5 md:grid-cols-2 md:px-8">
        {/* Text */}
        <div className="relative z-10 text-center md:text-start">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            {t.hero.eyebrow}
          </p>
          <h1 className="text-balance text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {t.hero.title1}
            <span className="mt-2 block text-primary italic">{t.hero.title2}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-white/85 md:mx-0 md:text-lg">
            {t.hero.subtitle}
          </p>

          {/* Feature chips */}
          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-4 md:justify-start">
            {features.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm text-white/90">
                <span className="grid h-9 w-9 place-items-center rounded-full border border-primary/40 bg-white/5 text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="font-medium">{label}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-gold px-7 py-4 text-sm font-semibold text-navy shadow-gold transition hover:shadow-elegant hover:-translate-y-0.5"
            >
              {t.hero.ctaPrimary}
              <Arrow className="h-4 w-4 transition group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-4 text-sm font-semibold text-white backdrop-blur transition hover:border-primary hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Van */}
        <div className="relative z-0 mt-6 md:mt-0">
          <div className="absolute inset-x-10 bottom-0 -z-10 h-24 rounded-full bg-black/50 blur-2xl" />
          <img
            src={heroVan}
            alt="Luxury black Mercedes V-Class van"
            className="mx-auto w-full max-w-xl drop-shadow-2xl md:scale-110"
          />
        </div>
      </div>
    </section>
  );
}
