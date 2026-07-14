import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ar" | "en";

type Dict = typeof translations.ar;

export const translations = {
  ar: {
    dir: "rtl" as const,
    nav: {
      home: "الرئيسية",
      services: "خدماتنا",
      tours: "الجولات",
      blog: "المدونة",
      about: "عن الشركة",
      contact: "اتصل بنا",
    },
    langSwitch: "English",
    hero: {
      eyebrow: "ALASWANI · سياحة ونقل",
      title1: "اكتشف أوروبا",
      title2: "بأسلوبٍ راقٍ",
      subtitle:
        "رحلات سياحية خاصة · نقل موثوق · سائقون عرب محترفون يتحدثون لغتك",
      ctaPrimary: "احجز رحلتك الآن",
      ctaSecondary: "تواصل معنا",
      features: {
        drivers: "سائقون عرب",
        safety: "راحة وأمان",
        tours: "جولات خاصة",
        fleet: "أسطول فاخر",
      },
    },
    stats: {
      years: { value: "+8", label: "سنوات خبرة" },
      trips: { value: "+5000", label: "رحلة مكتملة" },
      satisfaction: { value: "+98%", label: "رضا العملاء" },
      destinations: { value: "+15", label: "وجهة أوروبية" },
    },
    services: {
      eyebrow: "خدماتنا",
      title: "كل ما تحتاجه لرحلة مثالية",
      more: "المزيد",
      items: [
        {
          title: "نقل خاص",
          desc: "تنقلات مطار وجولات يومية بأسطول فاخر ومريح.",
        },
        {
          title: "جولات سياحية",
          desc: "جولات خاصة لأهم الوجهات السياحية في أوروبا.",
        },
        {
          title: "سائقون عرب",
          desc: "سائقون محترفون يتحدثون العربية لخدمتك.",
        },
        {
          title: "خدمات VIP",
          desc: "خدمات فاخرة. استقبال مميز وتجربة لا تُنسى.",
        },
      ],
    },
    destinations: {
      title: "وجهاتنا المميزة",
      names: ["أمستردام", "باريس", "بروكسل", "براغ", "زيورخ", "إنترلاكن", "فيينا"],
      prev: "السابق",
      next: "التالي",
    },
    footer: {
      support: "تواصل معنا على مدار الساعة",
      follow: "تابعنا",
      rights: "جميع الحقوق محفوظة",
    },
    blog: {
      eyebrow: "المدونة",
      title: "أحدث المقالات والأدلة",
      subtitle:
        "نصائح مختارة، أدلة وجهات، وقصص من طرقات أوروبا لنساعدك في تخطيط رحلة لا تُنسى.",
      readMore: "اقرأ المزيد",
      back: "العودة إلى المدونة",
      related: "مقالات ذات صلة",
    },
  },
  en: {
    dir: "ltr" as const,
    nav: {
      home: "Home",
      services: "Services",
      tours: "Tours",
      blog: "Blog",
      about: "About",
      contact: "Contact",
    },
    langSwitch: "العربية",
    hero: {
      eyebrow: "ALASWANI · Tourism & Transport",
      title1: "Discover Europe",
      title2: "In True Style",
      subtitle:
        "Private tours · reliable transport · professional Arabic-speaking drivers at your service",
      ctaPrimary: "Book Your Trip Now",
      ctaSecondary: "Contact Us",
      features: {
        drivers: "Arabic-speaking drivers",
        safety: "Safety & comfort",
        tours: "Private tours",
        fleet: "Luxury fleet",
      },
    },
    stats: {
      years: { value: "+8", label: "Years of experience" },
      trips: { value: "+5000", label: "Completed trips" },
      satisfaction: { value: "+98%", label: "Client satisfaction" },
      destinations: { value: "+15", label: "European destinations" },
    },
    services: {
      eyebrow: "OUR SERVICES",
      title: "Everything you need for the perfect trip",
      more: "Learn more",
      items: [
        {
          title: "Private Transport",
          desc: "Airport transfers and daily rides with a luxury, comfortable fleet.",
        },
        {
          title: "Sightseeing Tours",
          desc: "Curated private tours to Europe's most iconic destinations.",
        },
        {
          title: "Arabic Drivers",
          desc: "Professional drivers fluent in Arabic for a seamless experience.",
        },
        {
          title: "VIP Services",
          desc: "Premium service, refined welcome and a truly memorable journey.",
        },
      ],
    },
    destinations: {
      title: "Our Featured Destinations",
      names: ["Amsterdam", "Paris", "Brussels", "Prague", "Zurich", "Interlaken", "Vienna"],
      prev: "Previous",
      next: "Next",
    },
    footer: {
      support: "Reach us 24/7",
      follow: "Follow us",
      rights: "All rights reserved",
    },
    blog: {
      eyebrow: "THE BLOG",
      title: "Latest Articles & Guides",
      subtitle:
        "Curated tips, destination guides, and stories from the roads of Europe to help you plan an unforgettable trip.",
      readMore: "Read more",
      back: "Back to Blog",
      related: "Related articles",
    },
  },
} as const;

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict; toggle: () => void };

const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (stored === "ar" || stored === "en") setLangState(stored);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = translations[lang].dir;
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  return (
    <LangContext.Provider
      value={{
        lang,
        setLang,
        toggle: () => setLang(lang === "ar" ? "en" : "ar"),
        t: translations[lang] as Dict,
      }}
    >
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
