import { useLang } from "@/lib/i18n";

const WA_URL = "https://wa.me/31644444226";

export function WhatsAppFloat() {
  const { lang } = useLang();
  const label = lang === "ar" ? "تواصل عبر واتساب" : "Chat on WhatsApp";

  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fixed bottom-6 end-6 z-[60] group flex items-center gap-3"
    >
      <span className="hidden sm:inline-block rounded-full bg-navy/90 px-4 py-2 text-sm font-medium text-white shadow-elegant opacity-0 -translate-x-2 rtl:translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition">
        {label}
      </span>
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.7)] transition hover:scale-110">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
        <svg viewBox="0 0 32 32" className="relative h-8 w-8" fill="currentColor" aria-hidden>
          <path d="M16.003 3C8.82 3 3 8.82 3 16c0 2.29.6 4.52 1.74 6.49L3 29l6.68-1.75A12.94 12.94 0 0 0 16.003 29C23.185 29 29 23.18 29 16S23.185 3 16.003 3zm0 23.6c-2.02 0-4-.54-5.72-1.57l-.41-.24-3.96 1.04 1.06-3.86-.27-.4A10.55 10.55 0 0 1 5.4 16c0-5.85 4.76-10.6 10.6-10.6 2.83 0 5.49 1.1 7.5 3.11a10.55 10.55 0 0 1 3.1 7.49c0 5.85-4.76 10.6-10.6 10.6zm5.82-7.94c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.34-.5-2.56-1.58-.95-.85-1.58-1.89-1.77-2.21-.18-.32-.02-.5.14-.66.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.55-.08-.16-.71-1.71-.98-2.34-.26-.62-.52-.53-.71-.54l-.6-.01c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.4 5.39 4.77.75.32 1.34.52 1.8.67.76.24 1.44.21 1.99.13.61-.09 1.88-.77 2.14-1.51.27-.74.27-1.37.19-1.51-.08-.13-.29-.21-.61-.37z"/>
        </svg>
      </span>
    </a>
  );
}
