import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Logo, WhatsAppGlyph } from "./brand";
import { LOCATIONS, PHONE_DISPLAY, SERVICES, TEL_URL, WHATSAPP_URL, ZONES } from "@/lib/business";

const navLink =
  "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-ink/80 transition-colors hover:text-primary font-[family-name:var(--font-display)]";

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  useEffect(() => {
    setOpen(false);
    setOpenAccordion(null);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      <div className="relative pb-3.5">
        {/* angled background layer — clip-path lives here so dropdowns are never clipped */}
        <div
          aria-hidden
          className="header-edge pointer-events-none absolute inset-0 border-b border-primary/10 bg-card/95 backdrop-blur-md shadow-card"
        />
        {/* thin utility strip */}
        <div className="surface-cool relative hidden md:block">
          <div className="container-page flex items-center justify-between py-1.5 text-xs">
            <p className="opacity-90">
              Same-day AC repair across Vadodara · Open Mon–Sun, 8 AM – 9 PM
            </p>
            <p className="opacity-90">Waghodia Road, Jalram Nagar, Vadodara 390016</p>
          </div>
        </div>

        <div className="container-page relative flex items-center justify-between gap-4 py-3">
          <Logo />

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">

            <Link to="/" className={navLink} activeProps={{ className: "text-primary" }}>
              Home
            </Link>

            <div className="group/menu relative pb-1">
              <button className={navLink} aria-haspopup="true">
                Services <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <div className="invisible absolute left-0 top-full z-50 w-72 translate-y-1 rounded-lg border border-border bg-card p-2 opacity-0 shadow-lift transition-all duration-200 group-hover/menu:visible group-hover/menu:translate-y-0 group-hover/menu:opacity-100 group-focus-within/menu:visible group-focus-within/menu:translate-y-0 group-focus-within/menu:opacity-100">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="block rounded-md px-3 py-2 text-sm text-ink/80 transition-colors hover:bg-primary-soft hover:text-primary-deep"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="group/menu relative pb-1">
              <button className={navLink} aria-haspopup="true">
                Locations <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <div className="invisible absolute left-1/2 top-full z-50 w-[42rem] -translate-x-1/2 translate-y-1 rounded-lg border border-border bg-card p-5 opacity-0 shadow-lift transition-all duration-200 group-hover/menu:visible group-hover/menu:translate-y-0 group-hover/menu:opacity-100 group-focus-within/menu:visible group-focus-within/menu:translate-y-0 group-focus-within/menu:opacity-100">
                <div className="grid grid-cols-3 gap-x-6 gap-y-4">
                  {ZONES.map((zone) => (
                    <div key={zone}>
                      <p className="mb-1.5 text-[11px] font-bold uppercase tracking-widest text-primary">
                        {zone}
                      </p>
                      <ul className="space-y-1">
                        {LOCATIONS.filter((l) => l.zone === zone).map((l) => (
                          <li key={l.slug}>
                            <Link
                              to="/locations/$slug"
                              params={{ slug: l.slug }}
                              className="text-sm text-ink/75 hover:text-primary"
                            >
                              {l.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <Link
                  to="/locations"
                  className="mt-4 inline-block text-sm font-semibold text-accent-foreground underline decoration-accent decoration-2 underline-offset-4"
                >
                  View all service areas →
                </Link>
              </div>
            </div>

            <Link to="/about" className={navLink} activeProps={{ className: "text-primary" }}>
              About
            </Link>
            <Link to="/contact" className={navLink} activeProps={{ className: "text-primary" }}>
              Contact
            </Link>
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-[#25D366]/40 bg-[#25D366]/10 px-3 py-2.5 text-sm font-semibold text-[#128C4A] transition-colors hover:bg-[#25D366]/20"
            >
              <WhatsAppGlyph className="h-4 w-4" /> Chat with us
            </a>
            <a
              href={TEL_URL}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-bold text-accent-foreground shadow-cta transition-transform hover:-translate-y-0.5 font-[family-name:var(--font-display)]"
            >
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md border border-border text-ink lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-6rem)] overflow-y-auto border-b border-border bg-card px-5 pb-6 shadow-lift lg:hidden">
          <nav className="divide-y divide-border" aria-label="Mobile">
            <Link to="/" className="block py-3 font-semibold text-ink">
              Home
            </Link>

            <MobileAccordion
              label="Services"
              isOpen={openAccordion === "services"}
              onToggle={() => setOpenAccordion(openAccordion === "services" ? null : "services")}
            >
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="block py-2 text-sm text-ink/75"
                >
                  {s.title}
                </Link>
              ))}
            </MobileAccordion>

            <MobileAccordion
              label="Locations"
              isOpen={openAccordion === "locations"}
              onToggle={() => setOpenAccordion(openAccordion === "locations" ? null : "locations")}
            >
              {LOCATIONS.slice(0, 12).map((l) => (
                <Link
                  key={l.slug}
                  to="/locations/$slug"
                  params={{ slug: l.slug }}
                  className="block py-2 text-sm text-ink/75"
                >
                  {l.name}
                </Link>
              ))}
              <Link to="/locations" className="block py-2 text-sm font-semibold text-primary">
                View all areas →
              </Link>
            </MobileAccordion>

            <Link to="/about" className="block py-3 font-semibold text-ink">
              About
            </Link>
            <Link to="/contact" className="block py-3 font-semibold text-ink">
              Contact
            </Link>
          </nav>

          <div className="mt-5 grid gap-2">
            <a
              href={TEL_URL}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 font-bold text-accent-foreground shadow-cta"
            >
              <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-3 font-bold text-white"
            >
              <WhatsAppGlyph className="h-5 w-5" /> WhatsApp us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function MobileAccordion({
  label,
  isOpen,
  onToggle,
  children,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between py-3 font-semibold text-ink"
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180 text-primary" : ""}`}
        />
      </button>
      {isOpen && <div className="pb-3 pl-3">{children}</div>}
    </div>
  );
}
