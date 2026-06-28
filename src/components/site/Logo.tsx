export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3" aria-label="ALASWANI Tourism & Transport">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-gold shadow-gold">
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-navy" fill="currentColor" aria-hidden>
          <path d="M12 2 2 22h4.2l1.5-3.2h8.6L17.8 22H22L12 2zm-2.8 13.2L12 9.4l2.8 5.8H9.2z" />
        </svg>
      </div>
      {!compact && (
        <div className="leading-tight">
          <div className="font-display-en text-lg font-bold tracking-[0.18em] text-primary">
            ALASWANI
          </div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-white/70">
            Tourism &amp; Transport
          </div>
        </div>
      )}
    </div>
  );
}
