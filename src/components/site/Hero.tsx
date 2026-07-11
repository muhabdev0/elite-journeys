import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Car, MapPin, Phone, ShieldCheck, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroStyle from "@/assets/hero-slide-style.jpg";
import heroServices from "@/assets/hero-slide-services.jpg";
import heroFeatures from "@/assets/hero-slide-features.jpg";
import heroVideo from "@/assets/hero-slide-cta.mp4.asset.json";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const SLIDE_DURATION = 2500;

export function Hero() {
  const { t, lang } = useLang();
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;

  const features = [
    { icon: Users, label: t.hero.features.drivers },
    { icon: ShieldCheck, label: t.hero.features.safety },
    { icon: MapPin, label: t.hero.features.tours },
    { icon: Car, label: t.hero.features.fleet },
  ];

  const slides = 5;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides);
    }, SLIDE_DURATION);
    return () => window.clearInterval(id);
  }, []);

  const backgrounds = [
    { type: "img" as const, src: heroBg },
    { type: "img" as const, src: heroStyle },
    { type: "img" as const, src: heroServices },
    { type: "img" as const, src: heroFeatures },
    { type: "video" as const, src: heroVideo.url },
  ];

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-24 md:pt-36 md:pb-40 min-h-[85svh] md:min-h-[100svh]"
    >
      {/* Backgrounds — crossfade */}
      <div className="absolute inset-0 -z-20">
        {backgrounds.map((bg, i) => (
          <div
            key={i}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-out",
              i === index ? "opacity-100" : "opacity-0"
            )}
          >
            {bg.type === "img" ? (
              <img
                src={bg.src}
                alt=""
                aria-hidden
                className="h-full w-full object-cover scale-105"
                style={{
                  animation:
                    i === index ? "heroZoom 6s ease-out forwards" : undefined,
                }}
                fetchPriority={i === 0 ? "high" : "low"}
              />
            ) : (
              <video
                src={bg.src}
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            )}
          </div>
        ))}
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-hero" />

      {/* Vignette for text legibility */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent" />

      {/* Slide content */}
      <div className="relative z-10 mx-auto flex min-h-[55svh] max-w-6xl items-center justify-center px-5 md:px-8">
        <div className="w-full text-center">
          {/* Eyebrow persistent */}
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary sm:mb-6 sm:text-xs sm:tracking-[0.35em]">
            {t.hero.eyebrow}
          </p>

          <div className="relative min-h-[220px] sm:min-h-[280px] md:min-h-[340px]">
            {/* Slide 1 — title1 */}
            <SlidePanel active={index === 0}>
              <h1 className="text-balance text-4xl font-bold leading-[1.1] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)] sm:text-5xl md:text-7xl lg:text-8xl">
                {t.hero.title1}
              </h1>
            </SlidePanel>

            {/* Slide 2 — title2 */}
            <SlidePanel active={index === 1}>
              <h2 className="text-balance bg-gradient-gold bg-clip-text text-4xl font-bold italic leading-[1.1] text-transparent drop-shadow-[0_4px_24px_rgba(0,0,0,0.4)] sm:text-5xl md:text-7xl lg:text-8xl">
                {t.hero.title2}
              </h2>
            </SlidePanel>

            {/* Slide 3 — subtitle */}
            <SlidePanel active={index === 2}>
              <p className="mx-auto max-w-3xl text-lg font-medium leading-relaxed text-white/95 drop-shadow-[0_2px_16px_rgba(0,0,0,0.5)] sm:text-2xl md:text-3xl">
                {t.hero.subtitle}
              </p>
            </SlidePanel>

            {/* Slide 4 — features */}
            <SlidePanel active={index === 3}>
              <ul className="mx-auto grid max-w-2xl grid-cols-2 gap-3 sm:flex sm:max-w-4xl sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-6 sm:gap-y-4">
                {features.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-2.5 rounded-full border border-primary/30 bg-white/10 px-3 py-2.5 backdrop-blur-md sm:gap-3 sm:px-5 sm:py-3"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/20 text-primary sm:h-10 sm:w-10">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </span>
                    <span className="min-w-0 truncate text-sm font-semibold text-white sm:text-base md:text-lg">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </SlidePanel>

            {/* Slide 5 — CTAs */}
            <SlidePanel active={index === 4}>
              <div className="flex flex-col items-center gap-5">
                <p className="max-w-xl text-base font-medium text-white/90 sm:text-lg md:text-xl">
                  {t.hero.subtitle}
                </p>
                <div className="flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
                  <a
                    href="#contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-4 text-sm font-semibold text-navy shadow-gold transition hover:-translate-y-0.5 hover:shadow-elegant sm:px-8 sm:py-5 sm:text-base"
                  >
                    {t.hero.ctaPrimary}
                    <Arrow className="h-4 w-4 transition group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 sm:h-5 sm:w-5" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur transition hover:border-primary hover:text-primary sm:px-8 sm:py-5 sm:text-base"
                  >
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                    {t.hero.ctaSecondary}
                  </a>
                </div>
              </div>
            </SlidePanel>
          </div>

          {/* Dots */}
          <div className="mt-8 flex items-center justify-center gap-2 sm:mt-12">
            {Array.from({ length: slides }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Slide ${i + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === index ? "w-8 bg-primary" : "w-4 bg-white/30 hover:bg-white/60"
                )}
              />
            ))}
          </div>
        </div>
      </div>
      </div>

      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }
      `}</style>
    </section>
  );
}

function SlidePanel({ active, children }: { active: boolean; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out",
        active
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <div className="w-full">{children}</div>
    </div>
  );
}
