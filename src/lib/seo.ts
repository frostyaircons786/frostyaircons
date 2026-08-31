import { BUSINESS, PHONE_DISPLAY } from "./business";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: BUSINESS.name,
  image: "/fan-icon.png",
  telephone: PHONE_DISPLAY,
  email: BUSINESS.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.street,
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.state,
    postalCode: BUSINESS.postalCode,
    addressCountry: BUSINESS.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS.geo.lat,
    longitude: BUSINESS.geo.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "21:00",
    },
  ],
  areaServed: { "@type": "City", name: "Vadodara" },
};

export function serviceSchema(opts: {
  name: string;
  description: string;
  areaName?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: localBusinessSchema,
    areaServed: {
      "@type": "Place",
      name: opts.areaName ? `${opts.areaName}, Vadodara` : "Vadodara",
    },
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

/** Standard head() meta bundle for a page. */
export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  type?: string;
}) {
  return [
    { title: opts.title },
    { name: "description", content: opts.description },
    { property: "og:title", content: opts.title },
    { property: "og:description", content: opts.description },
    { property: "og:type", content: opts.type ?? "website" },
    { property: "og:url", content: opts.path },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}
