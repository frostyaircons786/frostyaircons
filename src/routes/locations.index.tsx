import { createFileRoute, Link } from "@tanstack/react-router";

import { Reveal } from "@/components/Reveal";
import { CtaBand, Eyebrow, Section } from "@/components/sections";
import { LOCATIONS, ZONES } from "@/lib/business";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/locations/")({
  component: LocationsIndex,
  head: () => ({
    meta: pageMeta({
      title: "AC Repair Service Areas in Vadodara | Frosty Aircons",
      description:
        "Frosty Aircons provides AC repair, service and gas filling across all zones of Vadodara. Find your locality and book a same-day visit.",
      path: "/locations",
    }),
  }),
});

function LocationsIndex() {
  return (
    <>
      <Section className="bg-muted/40">
        <Reveal className="max-w-3xl">
          <Eyebrow>Service areas</Eyebrow>
          <h1 className="mt-3 text-4xl md:text-5xl">
            <strong>AC repair across Vadodara</strong> — find your area
          </h1>
          <p className="mt-4 text-lg text-ink-soft">
            We cover every major zone of Vadodara. Select your locality to see the AC repair and
            service options available near you.
          </p>
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ZONES.map((zone, zi) => (
            <Reveal key={zone} delay={zi * 80}>
              <div className="h-full rounded-lg border border-border bg-card p-6 shadow-card">
                <p className="text-[11px] font-bold uppercase tracking-widest text-primary">
                  {zone}
                </p>
                <ul className="mt-4 grid gap-2">
                  {LOCATIONS.filter((l) => l.zone === zone).map((l) => (
                    <li key={l.slug}>
                      <Link
                        to="/locations/$slug"
                        params={{ slug: l.slug }}
                        className="text-ink-soft transition-colors hover:text-primary"
                      >
                        AC Repair in {l.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title={<>
          Don't see your area? Call us
        </>}
        text="We service most localities in and around Vadodara. Call or WhatsApp and we will confirm availability for your address."
      />
    </>
  );
}
