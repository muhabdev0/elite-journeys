import { useEffect, useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const sections = ["home", "services", "tours", "about", "contact"] as const;
type SectionKey = (typeof sections)[number];

const sectionHrefs: Record<SectionKey, string> = {
  home: "#top",
  services: "#services",
  tours: "#destinations",
  about: "#about",
  contact: "#contact",
};

export function Header() {
  const { t, lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<SectionKey>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-navy/85 backdrop-blur-md shadow-elegant"
          : "bg-gradient-to-b from-black/40 to-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <button
          onClick={toggle}
          aria-label="Switch language"
          className="hidden md:inline-flex shrink-0 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur transition hover:border-primary/60 hover:text-primary"
        >
          <Globe className="h-4 w-4" />
          {t.langSwitch}
        </button>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {sections.map((key) => (
            <a
              key={key}
              href={sectionHrefs[key]}
              onClick={() => setActive(key)}
              className={cn(
                "relative py-1 font-medium text-white/85 transition hover:text-primary",
                active === key && "text-primary"
              )}
            >
              {t.nav[key]}
              {active === key && (
                <span className="absolute -bottom-1 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-primary" />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Logo />
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Open menu"
          aria-expanded={open}
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out bg-navy/95 backdrop-blur-md",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {sections.map((key) => (
            <a
              key={key}
              href={sectionHrefs[key]}
              onClick={() => {
                setActive(key);
                setOpen(false);
              }}
              className="rounded-lg px-3 py-3 text-base font-medium text-white/90 transition hover:bg-white/5 hover:text-primary"
            >
              {t.nav[key]}
            </a>
          ))}
          <button
            onClick={() => {
              toggle();
              setOpen(false);
            }}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-primary/60 px-4 py-3 text-sm font-medium text-primary"
          >
            <Globe className="h-4 w-4" /> {t.langSwitch}
          </button>
        </nav>
      </div>
      {/* Suppress unused-var warning when lang changes trigger re-render */}
      <span className="sr-only">{lang}</span>
    </header>
  );
}
