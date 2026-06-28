import { Facebook, Instagram, Phone, Youtube } from "lucide-react";
import { Logo } from "./Logo";
import { useLang } from "@/lib/i18n";

const phone = "+31 6 44444226";
const waLink = "https://wa.me/31644444226";

function TikTok({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M19.6 6.7a5.6 5.6 0 0 1-3.4-1.2 5.6 5.6 0 0 1-2-3.5h-3v13a2.6 2.6 0 1 1-1.9-2.5V9.4a5.7 5.7 0 1 0 4.9 5.6V9.7a8.7 8.7 0 0 0 5.4 1.8z" />
    </svg>
  );
}

export function Footer() {
  const { t } = useLang();

  return (
    <footer id="contact" className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
          {/* WhatsApp + phone */}
          <div className="flex items-center justify-center gap-4 md:justify-start">
            <a
              href={waLink}
              aria-label="WhatsApp"
              className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#25D366] text-white shadow-elegant transition hover:scale-105"
            >
              <Phone className="h-5 w-5" />
            </a>
            <div className="min-w-0">
              <a href={`tel:${phone.replace(/\s/g, "")}`} className="block text-lg font-bold tracking-wide text-primary">
                {phone}
              </a>
              <p className="text-xs text-white/70">{t.footer.support}</p>
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center">
            <Logo />
          </div>

          {/* Socials */}
          <div className="flex items-center justify-center gap-3 md:justify-end">
            <span className="text-sm text-white/70">{t.footer.follow}</span>
            {[Instagram, Facebook, TikTok, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 text-center text-xs text-white/50">
          © {new Date().getFullYear()} ALASWANI Tourism &amp; Transport · {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
