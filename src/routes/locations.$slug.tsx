import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { CallButton, WhatsAppButton } from "@/components/ActionButtons";
import { ContactForm } from "@/components/ContactForm";
import { MapEmbed, Section, ServicesGrid, Testimonials } from "@/components/sections";
import { LOCATIONS, GOOGLE_MAPS_LISTING_URL, PHONE_DISPLAY, PHONE_RAW } from "@/lib/business";
import { pageMeta, serviceSchema, canonicalLink } from "@/lib/seo";

export const Route = createFileRoute("/locations/$slug")({
  component: LocationPage,
  head: ({ params }) => {
    const location = LOCATIONS.find((l) => l.slug === params.slug);
    const title = location
      ? `AC Repair in ${location.name}, Vadodara | Frosty Aircons`
      : "AC Repair in Vadodara | Frosty Aircons";
    const description = location
      ? `Same-day AC repair, service and gas filling in ${location.name}, Vadodara. Book Frosty Aircons for transparent pricing and 30-day warranty.`
      : "Same-day AC repair and service in Vadodara.";
    return {
      meta: pageMeta({ title, description, path: `/locations/${params.slug}` }),
      links: [
        canonicalLink(`/locations/${params.slug}`),
      ],
      scripts: location
        ? [
            {
              type: "application/ld+json",
              innerHTML: JSON.stringify(
                serviceSchema({
                  name: `AC Repair in ${location.name}`,
                  description,
                  areaName: location.name,
                  url: `https://frostyaircons.com/locations/${location.slug}`,
                }),
              ),
            },
          ]
        : undefined,
    };
  },
});

function LocationPage() {
  const { slug } = Route.useParams();
  const location = LOCATIONS.find((l) => l.slug === slug);
  if (!location) throw notFound();

  return (
    <>
      <Section className="bg-muted/40">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              <MapPin className="h-4 w-4" /> {location.zone}
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl">
              <strong>AC Repair in {location.name}, Vadodara</strong> — same-day service
            </h1>
            <p className="mt-4 text-lg text-ink-soft">
              Frosty Aircons provides AC repair, servicing, gas filling and installation in{" "}
              {location.name} and nearby neighbourhoods. Our technicians reach most addresses in
              this area within a few hours.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CallButton label={`Call ${PHONE_DISPLAY}`} />
              <WhatsAppButton label="Chat on WhatsApp" />
            </div>
            <p className="mt-4 text-sm text-ink-soft">
              <Phone className="mr-1 inline-block h-4 w-4 text-primary" />
              Direct line: {" "}
              <a href={`tel:${PHONE_RAW}`} className="font-semibold hover:text-primary">
                {PHONE_DISPLAY}
              </a>
            </p>
          </Reveal>
          <Reveal delay={100}>
            <MapEmbed title={`Frosty Aircons service coverage map for ${location.name}, Vadodara`} />
          </Reveal>
        </div>
      </Section>

      <Section id="services">
        <ServicesGrid heading={false} />
      </Section>

      <Section className="bg-muted/40">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            Book a visit
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl">
            Request AC service in <strong>{location.name}</strong>
          </h2>
          <p className="mt-3 text-ink-soft">
            Fill the form and we will call you back to confirm the slot. For urgent cooling
            breakdowns, calling directly is faster.
          </p>
        </Reveal>
        <div className="mt-8 max-w-2xl">
          <ContactForm />
        </div>
      </Section>

      <Section id="reviews">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            Reviews
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl">
            What customers near <strong>{location.name}</strong> say
          </h2>
        </Reveal>
        <div className="mt-10">
          <Testimonials />
        </div>
      </Section>
    </>
  );
}
