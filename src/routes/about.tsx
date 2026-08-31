import { createFileRoute } from "@tanstack/react-router";
import { Award, CheckCircle, Shield, Users, Wrench } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { CtaBand, Eyebrow, Section } from "@/components/sections";
import { pageMeta } from "@/lib/seo";
import serviceImage from "@/assets/ac-repair-service.jpg";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: pageMeta({
      title: "About Frosty Aircons | AC Repair & Service in Vadodara",
      description:
        "Learn about Frosty Aircons — Vadodara's trusted AC repair and service team. Trained technicians, genuine spares, transparent pricing and 30-day warranty.",
      path: "/about",
    }),
  }),
});

const values = [
  {
    icon: Users,
    title: "Customer first",
    text: "We explain the fault, the fix and the cost before touching your AC. No surprises at billing.",
  },
  {
    icon: Wrench,
    title: "Technical rigour",
    text: "Every repair follows a checklist: diagnose, quote, repair, test and handover. Skipping steps is not an option.",
  },
  {
    icon: Shield,
    title: "Honest spares",
    text: "We use genuine or OEM-grade parts and show you the old component when replaced.",
  },
  {
    icon: Award,
    title: "Accountability",
    text: "Repairs carry a 30-day warranty. If the same issue returns, we make it right.",
  },
];

function About() {
  return (
    <>
      <Section className="bg-muted/40">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>About us</Eyebrow>
            <h1 className="mt-3 text-4xl md:text-5xl">
              <strong>Frosty Aircons</strong> — Vadodara's AC repair partner
            </h1>
            <p className="mt-4 text-lg text-ink-soft">
              We are a local air conditioning repair and service company based on Waghodia Road,
              Vadodara. Over the last decade we have repaired, serviced and installed thousands of
              AC units across homes, clinics, shops and offices in every zone of the city.
            </p>
            <p className="mt-4 text-ink-soft">
              Our team is small by design: trained technicians who know inverter PCBs, refrigerant
              pressures, copper brazing and deep cleaning — not just surface-level servicing. We
              believe a repair should last, which is why we back our work with a 30-day warranty
              and use genuine spares wherever possible.
            </p>
            <ul className="mt-6 space-y-2 text-ink-soft">
              {[
                "10+ years of AC service experience in Vadodara",
                "5000+ AC units serviced and repaired",
                "Same-day response across 20+ localities",
                "GST-compliant invoices for every job",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-hidden rounded-2xl shadow-card">
              <img
                src={serviceImage}
                alt="Frosty Aircons technician performing AC repair service in Vadodara"
                width={640}
                height={480}
                className="h-auto w-full object-cover"
                loading="eager"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal className="max-w-2xl text-center">
          <Eyebrow>Our values</Eyebrow>
          <h2 className="mt-3 text-3xl md:text-4xl">
            What drives every <strong>AC repair we do</strong>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="h-full rounded-lg border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift">
                <span className="grid h-11 w-11 place-items-center rounded-md bg-primary-soft text-primary">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/40">
        <Reveal className="max-w-3xl">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="mt-3 text-3xl md:text-4xl">
            A simple process from <strong>booking to billing</strong>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Book a visit",
              text: "Call, WhatsApp or fill the form. Share your area, AC type and the problem.",
            },
            {
              step: "02",
              title: "Inspection & quote",
              text: "Our technician diagnoses the fault and gives a fixed-price quote before starting work.",
            },
            {
              step: "03",
              title: "Repair & warranty",
              text: "We complete the repair, test the unit and hand over a GST invoice with 30-day warranty.",
            },
          ].map((s, i) => (
            <Reveal key={s.step} delay={i * 80}>
              <div className="relative h-full rounded-lg border border-border bg-card p-6 shadow-card">
                <span className="font-[family-name:var(--font-display)] text-5xl font-bold text-primary/15">
                  {s.step}
                </span>
                <h3 className="mt-2 text-lg">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title={<>
          Book your AC service with Frosty Aircons
        </>}
        text="Experience transparent, warranty-backed AC repair and service in Vadodara."
      />
    </>
  );
}
