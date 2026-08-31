import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { CallButton, WhatsAppButton } from "@/components/ActionButtons";
import { ContactForm } from "@/components/ContactForm";
import { MapEmbed, Section } from "@/components/sections";
import { BUSINESS, FULL_ADDRESS, PHONE_DISPLAY, PHONE_RAW, WHATSAPP_URL } from "@/lib/business";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: pageMeta({
      title: "Contact Frosty Aircons | AC Repair & Service in Vadodara",
      description:
        "Call or WhatsApp Frosty Aircons for same-day AC repair in Vadodara. Visit us at Waghodia Road or request a callback online.",
      path: "/contact",
    }),
  }),
});

function Contact() {
  return (
    <>
      <Section className="bg-muted/40">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Contact us
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl">
              <strong>AC repair in Vadodara</strong> — one call away
            </h1>
            <p className="mt-4 text-lg text-ink-soft">
              Need urgent AC repair, gas filling or installation? Call us directly or send a WhatsApp
              message. For non-urgent requests, fill the form and we will call back within a few
              hours.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href={`tel:${PHONE_RAW}`}
                className="rounded-lg border border-border bg-card p-5 shadow-card transition-colors hover:border-primary/30"
              >
                <Phone className="h-6 w-6 text-primary" />
                <p className="mt-3 font-[family-name:var(--font-display)] font-bold text-ink">
                  Phone
                </p>
                <p className="mt-1 text-sm text-ink-soft">{PHONE_DISPLAY}</p>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border bg-card p-5 shadow-card transition-colors hover:border-primary/30"
              >
                <Mail className="h-6 w-6 text-primary" />
                <p className="mt-3 font-[family-name:var(--font-display)] font-bold text-ink">
                  WhatsApp
                </p>
                <p className="mt-1 text-sm text-ink-soft">Chat with our team</p>
              </a>
              <div className="rounded-lg border border-border bg-card p-5 shadow-card">
                <MapPin className="h-6 w-6 text-primary" />
                <p className="mt-3 font-[family-name:var(--font-display)] font-bold text-ink">
                  Address
                </p>
                <p className="mt-1 text-sm text-ink-soft">{FULL_ADDRESS}</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-5 shadow-card">
                <Clock className="h-6 w-6 text-primary" />
                <p className="mt-3 font-[family-name:var(--font-display)] font-bold text-ink">
                  Working hours
                </p>
                <p className="mt-1 text-sm text-ink-soft">{BUSINESS.hours}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <CallButton label={`Call ${PHONE_DISPLAY}`} />
              <WhatsAppButton label="Chat on WhatsApp" />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <h2 className="text-2xl md:text-3xl">Visit our service centre</h2>
          <p className="mt-2 text-ink-soft">
            Located on Waghodia Road, Vadodara. Drop in for spare parts, AMC enquiries or to schedule
            a service visit.
          </p>
        </Reveal>
        <div className="mt-6">
          <MapEmbed title="Frosty Aircons service centre location on Google Maps" />
        </div>
      </Section>
    </>
  );
}
