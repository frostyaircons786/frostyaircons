import { Phone } from "lucide-react";
import { WhatsAppGlyph } from "./brand";
import { PHONE_DISPLAY, TEL_URL, WHATSAPP_URL } from "@/lib/business";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-all duration-200 font-[family-name:var(--font-display)]";

export function CallButton({ className = "", label }: { className?: string; label?: string }) {
  return (
    <a
      href={TEL_URL}
      className={`${base} bg-accent text-accent-foreground shadow-cta hover:-translate-y-0.5 hover:brightness-105 ${className}`}
    >
      <Phone className="h-4 w-4" aria-hidden="true" />
      {label ?? `Call Now ${PHONE_DISPLAY}`}
    </a>
  );
}

export function WhatsAppButton({
  className = "",
  label = "Chat on WhatsApp",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} border border-[#25D366]/30 bg-[#25D366] text-white hover:-translate-y-0.5 hover:brightness-105 ${className}`}
    >
      <WhatsAppGlyph className="h-4.5 w-4.5" />
      {label}
    </a>
  );
}

export function GhostButton({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`${base} border border-border bg-card text-ink hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-card ${className}`}
    >
      {children}
    </span>
  );
}
