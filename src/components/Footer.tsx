import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ChevronDown,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import { FanIcon, WhatsAppGlyph } from "./brand";
import {
  BUSINESS,
  FULL_ADDRESS,
  LOCATIONS,
  MAP_EMBED_SRC,
  GOOGLE_MAPS_LISTING_URL,
  PHONE_DISPLAY,
  SERVICES,
  TEL_URL,
  WHATSAPP_URL,
  ZONES,
} from "@/lib/business";

export function Footer() {
  const [openCol, setOpenCol] = useState<string | null>(null);

  return (
    <footer className="mt-24 surface-cool grid-lines">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Company */}
        <div>
          <div className="flex items-center gap-2.5">
            <img
              src="/frosty-logo.png"
              alt="Frosty Aircons"
              className="h-10 w-auto object-contain"
            />
            <span className="font-[family-name:var(--font-display)] text-lg font-bold text-white">
              Frosty Aircons
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-100">
            Frosty Aircons is a Vadodara-based air conditioning repair and service company. We
            handle split, window, cassette and ductable units for homes, shops and offices — with
            trained technicians, genuine spares and transparent, upfront pricing.
          </p>
          <ul className="mt-5 space-y-2.5 text-sm text-slate-100">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-200" />
              <a
                href={GOOGLE_MAPS_LISTING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-200 transition-colors"
              >
                {FULL_ADDRESS}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-slate-200" />
              <a href={TEL_URL} className="hover:text-amber-200">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-slate-200" />
              <a href={`mailto:${BUSINESS.email}`} className="hover:text-amber-200">
                {BUSINESS.email}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-slate-200" />
              <span>{BUSINESS.hours}</span>
            </li>
          </ul>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white"
          >
            <WhatsAppGlyph className="h-4 w-4" /> Chat with us
          </a>
        </div>

        {/* Services */}
        <FooterColumn title="Our Services" id="services" openCol={openCol} setOpenCol={setOpenCol}>
          <ul className="space-y-2.5 text-sm text-slate-100">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="transition-colors hover:text-amber-200"
                >
                  {s.title} in Vadodara
                </Link>
              </li>
            ))}
          </ul>
        </FooterColumn>

        {/* Locations */}
        <FooterColumn
          title="Service Areas"
          id="locations"
          openCol={openCol}
          setOpenCol={setOpenCol}
        >
          <div className="space-y-4">
            {ZONES.slice(0, 4).map((zone) => (
              <div key={zone}>
                <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-amber-200">
                  {zone}
                </p>
                <ul className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-slate-100">
                  {LOCATIONS.filter((l) => l.zone === zone)
                    .slice(0, 4)
                    .map((l) => (
                      <li key={l.slug}>
                        <Link
                          to="/locations/$slug"
                          params={{ slug: l.slug }}
                          className="hover:text-amber-200"
                        >
                          {l.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
            <Link
              to="/locations"
              className="inline-block text-sm font-semibold text-amber-300 underline decoration-2 underline-offset-4"
            >
              View all areas →
            </Link>
          </div>
        </FooterColumn>

        {/* Map */}
        <div>
          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-widest text-white">
            Find Us
          </h3>
          <a
            href={GOOGLE_MAPS_LISTING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block overflow-hidden rounded-lg border border-white/15"
            aria-label="Open Frosty Aircons on Google Maps"
          >
            <iframe
              title="Frosty Aircons location on Google Maps, Waghodia Road Vadodara"
              src={MAP_EMBED_SRC}
              width="100%"
              height="210"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0, pointerEvents: "none" }}
            />
          </a>
          <a
            href={GOOGLE_MAPS_LISTING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm font-semibold text-amber-300 underline decoration-2 underline-offset-4"
          >
            View on Google Maps →
          </a>
          <div className="mt-4 flex gap-2">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Frosty Aircons social profile"
                className="grid h-9 w-9 place-items-center rounded-md border border-white/20 text-slate-100 transition-colors hover:bg-white/10 hover:text-amber-200"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-slate-200 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Frosty Aircons AC Repair and Service, Vadodara.</p>
          <p>
            Designed by{" "}
            <a
              href="https://apfpuniversal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-1 underline-offset-2 hover:text-amber-200"
            >
              APFP Universal
            </a>{" "}
            · GST-compliant invoices · 30-day service warranty on repairs
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  id,
  openCol,
  setOpenCol,
  children,
}: {
  title: string;
  id: string;
  openCol: string | null;
  setOpenCol: (v: string | null) => void;
  children: React.ReactNode;
}) {
  const isOpen = openCol === id;
  return (
    <div className="border-t border-white/15 pt-4 md:border-0 md:pt-0">
      <button
        onClick={() => setOpenCol(isOpen ? null : id)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-widest text-white md:pointer-events-none"
      >
        {title}
        <ChevronDown
          className={`h-4 w-4 transition-transform md:hidden ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`mt-4 ${isOpen ? "block" : "hidden"} md:block`}>{children}</div>
    </div>
  );
}
