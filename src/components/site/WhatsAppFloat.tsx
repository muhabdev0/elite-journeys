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
        <svg viewBox="0 0 32 32" className="relative h-7 w-7" fill="currentColor" aria-hidden>
          <path d="M19.11 17.29c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.06 2.88 1.21 3.08c.15.2 2.09 3.2 5.07 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM16.02 5.33c-5.9 0-10.7 4.8-10.7 10.7 0 1.88.49 3.72 1.42 5.34L5.2 26.67l5.44-1.42c1.56.85 3.31 1.3 5.09 1.3h.01c5.9 0 10.7-4.8 10.7-10.7 0-2.86-1.11-5.55-3.13-7.57a10.63 10.63 0 0 0-7.29-2.95zm0 19.6h-.01c-1.59 0-3.15-.43-4.51-1.24l-.32-.19-3.23.85.86-3.15-.21-.33a8.9 8.9 0 0 1-1.36-4.74c0-4.91 4-8.91 8.91-8.91 2.38 0 4.61.93 6.29 2.61a8.85 8.85 0 0 1 2.61 6.31c-.01 4.91-4.01 8.79-8.93 8.79z" />
        </svg>
      </span>
    </a>
  );
}
