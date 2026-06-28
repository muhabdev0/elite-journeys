import { useLang } from "@/lib/i18n";

export function StatsStrip() {
  const { t } = useLang();
  const items = [t.stats.years, t.stats.trips, t.stats.satisfaction, t.stats.destinations];

  return (
    <div className="relative z-20 mx-auto -mt-28 max-w-6xl px-5 md:-mt-32 md:px-8">
      <div className="grid grid-cols-2 gap-y-6 rounded-3xl bg-navy px-6 py-8 shadow-elegant md:grid-cols-4 md:gap-0 md:px-10 md:py-10">
        {items.map((it, i) => (
          <div
            key={i}
            className={`flex flex-col items-center gap-1 text-center md:border-white/10 ${
              i > 0 ? "md:border-s" : ""
            }`}
          >
            <div className="font-display-en text-3xl font-bold text-primary md:text-4xl">
              {it.value}
            </div>
            <div className="text-xs text-white/75 md:text-sm">{it.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
