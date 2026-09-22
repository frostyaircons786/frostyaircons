import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Minus, Star } from "lucide-react";
import { Reveal, Counter } from "./Reveal";
import { CallButton, WhatsAppButton } from "./ActionButtons";
import { FanIcon } from "./brand";
import { LOCATIONS, MAP_EMBED_SRC, SERVICES, GOOGLE_MAPS_LISTING_URL } from "@/lib/business";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
      <Minus className="h-4 w-4" /> {children}
    </p>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 md:py-20 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function StatsStrip() {
  const stats = [
    { to: 10, suffix: "+", label: "Years of AC experience" },
    { to: 5000, suffix: "+", label: "AC units serviced" },
    { to: 20, suffix: "+", label: "Areas covered in Vadodara" },
    { to: 24, suffix: " hrs", label: "Typical response time" },
  ];
  return (
    <div className="surface-cool grid-lines">
      <div className="container-page grid grid-cols-2 divide-y divide-white/15 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90} className="px-2 py-8 lg:px-8">
            <p className="font-[family-name:var(--font-display)] text-4xl font-bold text-white">
              <Counter to={s.to} suffix={s.suffix} />
            </p>
            <p className="mt-1 text-sm text-white/70">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function ServicesGrid({ heading = true }: { heading?: boolean }) {
  return (
    <div>
      {heading && (
        <Reveal className="max-w-2xl">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="mt-3 text-3xl md:text-4xl">
            Complete <strong>AC repair and service in Vadodara</strong>
          </h2>
          <p className="mt-3 text-ink-soft">
            Seven core services, one team. Whether it is a dead compressor in Manjalpur or an annual
            maintenance contract for a clinic in Alkapuri, the same trained technicians handle it.
          </p>
        </Reveal>
      )}
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.slug} delay={i * 70}>
            <Link
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group flex h-full flex-col rounded-lg border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/35 hover:shadow-lift"
            >
              <span className="grid h-11 w-11 place-items-center rounded-md bg-primary-soft text-primary-deep">
                <FanIcon className="h-6 w-6 transition-transform duration-700 group-hover:rotate-180" />
              </span>
              <h3 className="mt-4 text-lg">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{s.blurb}</p>
              <span className="mt-4 text-sm font-semibold text-primary">
                View details <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border overflow-hidden rounded-lg border border-border bg-card">
      {items.map((item, i) => (
        <div key={item.q}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-[family-name:var(--font-display)] font-semibold text-ink transition-colors hover:bg-muted"
          >
            {item.q}
            <ChevronDown
              className={`h-4 w-4 shrink-0 text-primary transition-transform ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          {open === i && (
            <p className="px-5 pb-5 text-sm leading-relaxed text-ink-soft">{item.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export function Testimonials() {
  const reviews = [
    {
      name: "Hiral Shah",
      area: "Alkapuri",
      text: "Our bedroom split AC stopped cooling on a Sunday afternoon. Frosty Aircons answered on WhatsApp within minutes and the technician reached in about two hours. Turned out to be a gas leak at the flare joint — fixed, refilled and tested the same day.",
    },
    {
      name: "Rakesh Patel",
      area: "Manjalpur",
      text: "Got both my window ACs serviced before summer. They removed the units, jet-washed the coils outside and reinstalled them properly. Cooling improved noticeably and the electricity bill dropped.",
    },
    {
      name: "Dr. Neha Trivedi",
      area: "Gotri",
      text: "We have an AMC with them for our clinic's four cassette units. Visits happen on schedule without reminders and they always share what was checked. Very professional team.",
    },
    {
      name: "Imran Vohra",
      area: "Waghodia Road",
      text: "The PCB of my inverter AC failed. They diagnosed it clearly, showed me the faulty board and gave the cost before starting. No hidden charges at the end, which is rare.",
    },
    {
      name: "Sanjay Mehta",
      area: "Sama",
      text: "Shifted homes and needed the AC uninstalled and refitted. Gas was recovered properly, copper piping reused where fine, and they cleaned up after the work. Fair rate too.",
    },
  ];
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {reviews.map((r, i) => (
        <Reveal key={r.name} delay={i * 70}>
          <figure className="flex h-full flex-col rounded-lg border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
            <div className="flex gap-0.5 text-accent">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
              “{r.text}”
            </blockquote>
            <figcaption className="mt-4 border-t border-border pt-3">
              <span className="block font-[family-name:var(--font-display)] font-bold text-ink">
                {r.name}
              </span>
              <span className="text-xs text-muted-foreground">{r.area}, Vadodara</span>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}

export function AreaLinks({ limit = 22 }: { limit?: number }) {
  return (
    <div className="flex flex-wrap gap-2">
      {LOCATIONS.slice(0, limit).map((l) => (
        <Link
          key={l.slug}
          to="/locations/$slug"
          params={{ slug: l.slug }}
          className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-ink-soft transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
        >
          {l.name}
        </Link>
      ))}
      <Link
        to="/locations"
        className="rounded-full bg-primary-deep px-3.5 py-1.5 text-sm font-semibold text-primary-foreground"
      >
        All areas →
      </Link>
    </div>
  );
}

export function CtaBand({
  title,
  text,
}: {
  title: ReactNode;
  text: string;
}) {
  return (
    <div className="surface-cool grid-lines">
      <div className="container-page flex flex-col items-start justify-between gap-6 py-14 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 className="text-3xl text-white md:text-4xl">{title}</h2>
          <p className="mt-3 text-white/75">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <CallButton />
          <WhatsAppButton />
        </div>
      </div>
    </div>
  );
}

export function MapEmbed({ title }: { title: string }) {
  return (
    <a
      href={GOOGLE_MAPS_LISTING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-lg border border-border shadow-card"
      aria-label="Open Frosty Aircons on Google Maps"
    >
      <iframe
        title={title}
        src={MAP_EMBED_SRC}
        width="100%"
        height="320"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: 0, pointerEvents: "none" }}
      />
      <span className="absolute inset-0" />
    </a>
  );
}
