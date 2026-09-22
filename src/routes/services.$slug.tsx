import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle, MapPin, Phone } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { CallButton, WhatsAppButton } from "@/components/ActionButtons";
import { ContactForm } from "@/components/ContactForm";
import {
  AreaLinks,
  CtaBand,
  FaqList,
  MapEmbed,
  Section,
  Testimonials,
} from "@/components/sections";
import { LOCATIONS, GOOGLE_MAPS_LISTING_URL, PHONE_DISPLAY, PHONE_RAW, SERVICES } from "@/lib/business";
import { pageMeta, serviceSchema, canonicalLink } from "@/lib/seo";
import { ServiceIcon } from "@/components/ServiceIcon";

export const Route = createFileRoute("/services/$slug")({
  component: ServicePage,
  head: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    const title = service
      ? `${service.h1Keyword} | Frosty Aircons`
      : "AC Services in Vadodara | Frosty Aircons";
    const description = service
      ? `Book ${service.title.toLowerCase()} in Vadodara with Frosty Aircons. Same-day service, transparent pricing, genuine spares and 30-day warranty.`
      : "Book AC services in Vadodara with Frosty Aircons.";
    return {
      meta: pageMeta({ title, description, path: `/services/${params.slug}` }),
      links: [
        canonicalLink(`/services/${params.slug}`),
      ],
      scripts: service
        ? [
            {
              type: "application/ld+json",
              innerHTML: JSON.stringify(
                serviceSchema({
                  name: service.h1Keyword,
                  description,
                  url: `https://frostyaircons.com/services/${service.slug}`,
                }),
              ),
            },
          ]
        : undefined,
    };
  },
});

const serviceFaq: Record<string, { q: string; a: string }[]> = {
  "ac-repair-vadodara": [
    {
      q: "What types of AC faults do you repair?",
      a: "We handle cooling failure, water leakage, compressor issues, PCB errors, unusual noise, tripping and remote/sensor problems in split, window, cassette and ductable units.",
    },
    {
      q: "How quickly can you repair my AC in Vadodara?",
      a: "Most repair calls in Vadodara are attended the same day or within 24 hours, depending on your area and spare-part availability.",
    },
  ],
  "ac-service-vadodara": [
    {
      q: "What is included in a standard AC service?",
      a: "Filter cleaning, coil jet-wash, blower cleaning, drain line flush, gas pressure check, electrical inspection and a test run.",
    },
    {
      q: "How often should I service my AC?",
      a: "For regular home use in Vadodara, every 3–4 months is ideal. Heavy-use rooms or commercial spaces may need monthly servicing.",
    },
  ],
  "ac-gas-filling-vadodara": [
    {
      q: "How do I know if my AC needs gas filling?",
      a: "Weak cooling, ice formation on coils, hissing sound or low pressure readings usually indicate low refrigerant. We check for leaks before refilling.",
    },
    {
      q: "Which refrigerants do you handle?",
      a: "We top up and recharge R22, R410A and R32 systems using electronic gauges for the correct pressure.",
    },
  ],
  "ac-installation-vadodara": [
    {
      q: "Do you install both split and window ACs?",
      a: "Yes. We install split, window and inverter ACs with proper copper piping, levelling, vacuuming and test run.",
    },
    {
      q: "Is installation material included in the quote?",
      a: "We quote copper pipe, insulation, drain hose, brackets and labour separately so you know exactly what you are paying for.",
    },
  ],
  "ac-uninstallation-vadodara": [
    {
      q: "Do you recover gas before uninstalling an AC?",
      a: "Yes. We recover refrigerant safely, cap the lines and pack the unit for transport before reinstalling it at your new location.",
    },
    {
      q: "Can you shift an AC within Vadodara?",
      a: "Absolutely. We uninstall, transport and reinstall AC units anywhere in Vadodara, reusing copper piping where it is safe to do so.",
    },
  ],
  "window-ac-repair-vadodara": [
    {
      q: "Do you still repair old window ACs?",
      a: "Yes. We repair fan motors, capacitors, thermostats, compressors and coils in window AC units of all ages.",
    },
    {
      q: "Is it worth repairing an old window AC?",
      a: "If the compressor and coils are in reasonable condition, repair is usually cost-effective. We will tell you honestly if replacement makes more sense.",
    },
  ],
  "commercial-ac-amc-vadodara": [
    {
      q: "What does a commercial AMC include?",
      a: "Scheduled preventive visits, filter and coil cleaning, gas pressure checks, breakdown support and priority spare-part sourcing for cassette and ductable systems.",
    },
    {
      q: "Can you service clinics and shops on off-hours?",
      a: "Yes. We schedule AMC visits around your operating hours to avoid disrupting patients or customers.",
    },
  ],
};

const defaultFaq = [
  {
    q: "Do you offer same-day service in Vadodara?",
    a: "Yes. Most requests are attended the same day or within 24 hours across Vadodara.",
  },
  {
    q: "Is there a warranty on repairs?",
    a: "We provide a 30-day warranty on repairs. If the same issue recurs, we fix it at no extra labour cost.",
  },
];

function ServicePage() {
  const { slug } = Route.useParams();
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) throw notFound();

  const faq = serviceFaq[slug] ?? defaultFaq;

  return (
    <>
      <Section className="bg-muted/40">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              <ServiceIcon icon={service.icon} className="h-4 w-4" /> {service.title}
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl">
              <strong>{service.h1Keyword}</strong> — Frosty Aircons
            </h1>
            <p className="mt-4 text-lg text-ink-soft">{service.blurb}</p>
            <ul className="mt-6 space-y-2">
              {[
                "Same-day service across Vadodara",
                "Fixed quote before work starts",
                "Genuine or OEM-grade spares",
                "30-day warranty on repairs",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-ink-soft">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
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
            <MapEmbed title={`Frosty Aircons ${service.title} coverage in Vadodara`} />
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl">
              What our <strong>{service.title.toLowerCase()}</strong> includes
            </h2>
            <p className="mt-3 text-ink-soft">
              Every visit starts with a proper diagnosis. We do not guess — we inspect, quote and
              then repair. Below is what you can expect when you book {service.title.toLowerCase()}{" "}
              with Frosty Aircons in Vadodara.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "On-time technician arrival",
                "Full system diagnosis",
                "Transparent written quote",
                "Quality spare parts if needed",
                "Complete testing before handover",
                "GST invoice and warranty card",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-ink-soft">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-lg border border-border bg-card p-6 shadow-card">
              <h3 className="text-lg">Book this service</h3>
              <p className="mt-2 text-sm text-ink-soft">
                Fill the form and we will confirm your slot for {service.title.toLowerCase()}.
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-muted/40">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">FAQ</p>
          <h2 className="mt-3 text-3xl md:text-4xl">
            Common questions about <strong>{service.title.toLowerCase()}</strong>
          </h2>
        </Reveal>
        <div className="mt-10 max-w-3xl">
          <FaqList items={faq} />
        </div>
      </Section>

      <Section id="reviews">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">Reviews</p>
          <h2 className="mt-3 text-3xl md:text-4xl">
            Vadodara customers trust us for <strong>{service.title.toLowerCase()}</strong>
          </h2>
        </Reveal>
        <div className="mt-10">
          <Testimonials />
        </div>
      </Section>

      <Section>
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">Areas</p>
          <h2 className="mt-3 text-3xl md:text-4xl">
            <strong>{service.title}</strong> near you in Vadodara
          </h2>
          <p className="mt-3 text-ink-soft">
            We provide {service.title.toLowerCase()} across all major localities of Vadodara. Select
            your area to see location-specific details.
          </p>
        </Reveal>
        <div className="mt-8">
          <AreaLinks limit={22} />
        </div>
      </Section>

      <CtaBand
        title={<>
          Book {service.title.toLowerCase()} in Vadodara today
        </>}
        text={`Call or WhatsApp Frosty Aircons for ${service.title.toLowerCase()} across Vadodara. Same-day service, upfront pricing and 30-day warranty.`}
      />
    </>
  );
}
