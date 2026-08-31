import { createFileRoute } from "@tanstack/react-router";
import {
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Shield,
  Star,
  Wrench,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { CallButton, WhatsAppButton } from "@/components/ActionButtons";
import { ContactForm } from "@/components/ContactForm";
import {
  AreaLinks,
  CtaBand,
  Eyebrow,
  FaqList,
  MapEmbed,
  Section,
  ServicesGrid,
  StatsStrip,
  Testimonials,
} from "@/components/sections";
import { BRANDS, BUSINESS, PHONE_DISPLAY, PHONE_RAW, SERVICES } from "@/lib/business";
import { localBusinessSchema, pageMeta } from "@/lib/seo";

import heroImage from "@/assets/hero-technician.jpg";
import serviceImage from "@/assets/ac-repair-service.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: pageMeta({
      title: "AC Repair in Vadodara | Frosty Aircons — Same-Day Service",
      description:
        "Same-day AC repair, service and gas filling in Vadodara. Split, window, cassette and ductable units. Call Frosty Aircons for transparent pricing and 30-day warranty.",
      path: "/",
    }),
    scripts: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify(localBusinessSchema),
      },
    ],
  }),
});

const trustPoints = [
  {
    icon: Wrench,
    title: "Trained technicians",
    text: "Every technician is trained on split, window, cassette and inverter AC systems before visiting a home.",
  },
  {
    icon: Shield,
    title: "Genuine spares",
    text: "We use branded capacitors, PCBs, compressors and refrigerant gas — no cheap substitutes.",
  },
  {
    icon: Star,
    title: "Upfront pricing",
    text: "You get the estimate before work starts. No hidden charges, no last-minute add-ons.",
  },
  {
    icon: Clock,
    title: "Same-day response",
    text: "Most repair requests in Vadodara are attended within 24 hours, often the same day.",
  },
];

const homeFaq = [
  {
    q: "Do you offer same-day AC repair in Vadodara?",
    a: "Yes. For most areas in Vadodara we can send a technician the same day, especially if you call or WhatsApp before 4 PM. Emergency cooling failures are prioritised.",
  },
  {
    q: "What AC brands do you repair?",
    a: "We repair and service LG, Samsung, Voltas, Daikin, Blue Star, Hitachi, Carrier and most other major brands. Our technicians carry common spares for faster resolution.",
  },
  {
    q: "How much does AC servicing cost in Vadodara?",
    a: "A standard split or window AC service starts from an affordable base rate and varies by unit condition. We inspect first and share a fixed quote before starting any paid work.",
  },
  {
    q: "Is gas filling included in AC service?",
    a: "Routine service includes cleaning and inspection. If the refrigerant is low, we quote gas filling separately after leak detection. We only refill gas when the system needs it.",
  },
  {
    q: "Do you provide AMC for offices and clinics?",
    a: "Yes. We offer annual maintenance contracts for commercial cassette, ductable and split AC systems across Vadodara, with scheduled visits and priority breakdown support.",
  },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background pb-16 pt-10 md:pb-24 md:pt-16">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Trusted AC technicians in Vadodara</Eyebrow>
            <h1 className="mt-4 text-4xl leading-[1.1] md:text-5xl lg:text-6xl">
              <strong>AC Repair in Vadodara</strong> — same-day service at your doorstep
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink-soft">
              Split, window, cassette and ductable AC repair, service and gas filling across
              Vadodara. Transparent pricing, genuine spares and a 30-day warranty on repairs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CallButton label={`Call ${PHONE_DISPLAY}`} />
              <WhatsAppButton label="Chat on WhatsApp" />
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-primary" /> 30-day repair warranty
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-primary" /> 24-hour response
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-primary" /> All Vadodara areas
              </span>
            </div>
          </Reveal>

          <Reveal delay={150} className="relative">
            <div className="overflow-hidden rounded-2xl shadow-lift">
              <img
                src={heroImage}
                alt="Frosty Aircons technician servicing a split AC unit in a Vadodara home"
                width={720}
                height={480}
                className="h-auto w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-lg border border-border bg-card p-4 shadow-card md:-left-8">
              <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
                10+
              </p>
              <p className="text-xs text-ink-soft">Years of AC experience</p>
            </div>
          </Reveal>
        </div>
      </section>

      <StatsStrip />

      {/* Services */}
      <Section id="services">
        <ServicesGrid />
      </Section>

      {/* Why us */}
      <Section id="why-us" className="bg-muted/40">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Why homeowners choose us</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-4xl">
              <strong>Reliable AC service</strong> built on transparent work
            </h2>
            <p className="mt-3 text-ink-soft">
              We started Frosty Aircons to fix the common complaints homeowners have with AC
              technicians — late arrivals, vague bills and repeated failures. Our process is built
              around clear communication and lasting repairs.
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <li key={point.title} className="flex gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary-soft text-primary">
                    <point.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-[family-name:var(--font-display)] font-bold text-ink">
                      {point.title}
                    </p>
                    <p className="text-sm leading-relaxed text-ink-soft">{point.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-hidden rounded-2xl shadow-card">
              <img
                src={serviceImage}
                alt="AC service in progress — cleaning coils and checking refrigerant pressure"
                width={640}
                height={480}
                className="h-auto w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Brands */}
      <Section>
        <Reveal className="text-center">
          <Eyebrow>Brands we service</Eyebrow>
          <h2 className="mt-3 text-3xl md:text-4xl">
            <strong>Authorised-quality repair</strong> for leading AC brands
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {BRANDS.map((brand) => (
              <span
                key={brand}
                className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-ink shadow-card"
              >
                {brand}
              </span>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Areas */}
      <Section id="areas" className="bg-muted/40">
        <Reveal className="max-w-2xl">
          <Eyebrow>Service areas</Eyebrow>
          <h2 className="mt-3 text-3xl md:text-4xl">
            <strong>AC repair across every zone of Vadodara</strong>
          </h2>
          <p className="mt-3 text-ink-soft">
            From Alkapuri and Gotri to Waghodia Road and Manjalpur, our technicians cover all major
            localities of Vadodara. Click your area to see dedicated service details.
          </p>
        </Reveal>
        <div className="mt-8">
          <AreaLinks limit={22} />
        </div>
      </Section>

      {/* Reviews */}
      <Section id="reviews">
        <Reveal className="max-w-2xl">
          <Eyebrow>Customer reviews</Eyebrow>
          <h2 className="mt-3 text-3xl md:text-4xl">
            What Vadodara residents say about <strong>Frosty Aircons</strong>
          </h2>
        </Reveal>
        <div className="mt-10">
          <Testimonials />
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="bg-muted/40">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Book a visit</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-4xl">
              Request a callback or <strong>call us now</strong>
            </h2>
            <p className="mt-3 text-ink-soft">
              Tell us your area and the AC problem. We will confirm the slot and reach your
              doorstep with the right tools and spares.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <p className="font-[family-name:var(--font-display)] font-bold text-ink">
                    Phone
                  </p>
                  <a
                    href={`tel:${PHONE_RAW}`}
                    className="text-ink-soft transition-colors hover:text-primary"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <p className="font-[family-name:var(--font-display)] font-bold text-ink">
                    Address
                  </p>
                  <p className="text-ink-soft">{BUSINESS.street}, Vadodara {BUSINESS.postalCode}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <p className="font-[family-name:var(--font-display)] font-bold text-ink">
                    Working hours
                  </p>
                  <p className="text-ink-soft">{BUSINESS.hours}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <MapEmbed title="Frosty Aircons location on Google Maps" />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <Reveal className="max-w-2xl">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-3 text-3xl md:text-4xl">
            Common questions about <strong>AC repair in Vadodara</strong>
          </h2>
        </Reveal>
        <div className="mt-10 max-w-3xl">
          <FaqList items={homeFaq} />
        </div>
      </Section>

      <CtaBand
        title={<>
          Get your AC cooling again today
        </>}
        text="Call or WhatsApp Frosty Aircons now. We cover all Vadodara areas with same-day repair and service."
      />
    </>
  );
}
