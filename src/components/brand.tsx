import { Link } from "@tanstack/react-router";

export function FanIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="24" cy="24" r="4" />
      <path d="M24 20c0-6 1-9 5-11.5C33.5 5.8 38 8.9 37 13.3c-.9 3.9-5.2 6.1-9.3 6.6" />
      <path d="M28 24c6 0 9 1 11.5 5 2.7 4.5-.4 9-4.8 8-3.9-.9-6.1-5.2-6.6-9.3" />
      <path d="M24 28c0 6-1 9-5 11.5-4.5 2.7-9-.4-8-4.8.9-3.9 5.2-6.1 9.3-6.6" />
      <path d="M20 24c-6 0-9-1-11.5-5C5.8 14.5 8.9 10 13.3 11c3.9.9 6.1 5.2 6.6 9.3" />
    </svg>
  );
}

export function WhatsAppGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className} fill="currentColor">
      <path d="M16.02 3.5c-6.9 0-12.5 5.6-12.5 12.5 0 2.2.58 4.35 1.68 6.25L3.5 28.5l6.42-1.66a12.44 12.44 0 0 0 6.1 1.57h.01c6.89 0 12.49-5.6 12.49-12.5 0-3.34-1.3-6.48-3.66-8.84a12.42 12.42 0 0 0-8.84-3.57Zm0 22.79h-.01a10.4 10.4 0 0 1-5.28-1.45l-.38-.22-3.81.99 1.02-3.71-.25-.38a10.35 10.35 0 0 1-1.59-5.52c0-5.73 4.67-10.39 10.4-10.39 2.78 0 5.39 1.08 7.35 3.05a10.32 10.32 0 0 1 3.04 7.35c0 5.73-4.66 10.28-10.49 10.28Zm5.7-7.75c-.31-.16-1.85-.91-2.13-1.02-.29-.1-.5-.16-.71.16-.2.31-.81 1.01-1 1.22-.18.21-.36.24-.67.08-.31-.16-1.32-.49-2.51-1.55-.93-.83-1.55-1.85-1.74-2.16-.18-.31-.02-.48.14-.63.14-.14.31-.36.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.25-.61-.51-.53-.71-.54h-.6c-.21 0-.55.08-.83.39-.29.31-1.09 1.06-1.09 2.59s1.11 3.01 1.27 3.22c.16.21 2.2 3.36 5.32 4.71.74.32 1.32.51 1.78.66.75.24 1.43.2 1.97.12.6-.09 1.85-.75 2.11-1.48.26-.73.26-1.36.18-1.49-.08-.13-.28-.21-.59-.37Z" />
    </svg>
  );
}

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-2.5" aria-label="Frosty Aircons home">
      <span
        className={`grid h-10 w-10 place-items-center rounded-md ${
          inverted ? "bg-white/10 text-white" : "bg-primary-soft text-primary-deep"
        }`}
      >
        <FanIcon className="fan-spin-hover h-6 w-6" />
      </span>
      <span className="leading-none">
        <span
          className={`block font-[family-name:var(--font-display)] text-lg font-bold tracking-tight ${
            inverted ? "text-white" : "text-ink"
          }`}
        >
          Frosty Aircons
        </span>
        <span
          className={`block text-[10px] font-semibold uppercase tracking-[0.18em] ${
            inverted ? "text-white/60" : "text-muted-foreground"
          }`}
        >
          AC Repair &amp; Service
        </span>
      </span>
    </Link>
  );
}
