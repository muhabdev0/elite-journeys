import logoEn from "@/assets/logo-en.png";
import { useLang } from "@/lib/i18n";

export function Logo({ compact = false }: { compact?: boolean }) {
  const { lang } = useLang();
  const alt =
    lang === "ar" ? "الأسواني للسياحة والنقل" : "ALASWANI Tourism & Transport";

  return (
    <img
      src={logoEn}
      alt={alt}
      className={
        compact
          ? "h-9 w-auto object-contain"
          : "h-10 w-auto max-w-[200px] object-contain sm:h-11 sm:max-w-[240px]"
      }
    />
  );
}
