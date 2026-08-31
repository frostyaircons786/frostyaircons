import { WhatsAppGlyph } from "./brand";
import { WHATSAPP_URL } from "@/lib/business";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Frosty Aircons on WhatsApp"
      className="wa-pulse fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white transition-transform duration-200 hover:scale-110"
    >
      <WhatsAppGlyph className="h-8 w-8" />
    </a>
  );
}
