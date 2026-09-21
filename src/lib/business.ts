// ---------------------------------------------------------------------------
// Single source of truth for all business data (NAP, services, locations).
// Update PHONE here and it changes everywhere: header, footer, CTAs, schema.
// ---------------------------------------------------------------------------

export const PHONE_DISPLAY = "+91 99249 19786";
export const PHONE_RAW = "+919924919786"; // used for tel: links
export const WHATSAPP_NUMBER = "919924919786"; // used for wa.me links
export const WHATSAPP_MESSAGE = "Hi, I need AC service";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;
export const TEL_URL = `tel:${PHONE_RAW}`;

export const BUSINESS = {
  name: "Frosty Aircons AC Repair and Service",
  shortName: "Frosty Aircons",
  email: "Frostyaircons786@gmail.com",
  street: "A-04, Nand Bungalow, Waghodia Rd, opp. Sukan 2, Vrajraj Society, Jalram Nagar, Madhavpura",
  city: "Vadodara",
  state: "Gujarat",
  postalCode: "390016",
  country: "IN",
  hours: "Mon – Sun, 8:00 AM – 9:00 PM",
  geo: { lat: 22.3125, lng: 73.2135 },
} as const;

export const FULL_ADDRESS = `${BUSINESS.street}, ${BUSINESS.city} ${BUSINESS.postalCode}`;

export const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=" +
  encodeURIComponent(`${BUSINESS.street}, Vadodara 390016, Gujarat, India`) +
  "&output=embed";

export const GOOGLE_MAPS_LISTING_URL =
  "https://share.google/8O5Mf6LsbnoAGhahn";

export type Service = {
  slug: string;
  title: string; // short nav/card title
  h1Keyword: string; // bolded focus keyword
  blurb: string;
  icon: string; // lucide icon name key handled in ServiceIcon
};

export const SERVICES: Service[] = [
  {
    slug: "ac-repair-vadodara",
    title: "AC Repair",
    h1Keyword: "AC Repair in Vadodara",
    blurb:
      "Cooling failure, tripping, strange noise or error codes — diagnosed and repaired at your doorstep, usually the same day.",
    icon: "wrench",
  },
  {
    slug: "ac-service-vadodara",
    title: "AC Servicing",
    h1Keyword: "AC Service in Vadodara",
    blurb:
      "Deep jet cleaning of filters, coils, blower and drain line so your unit cools faster and draws less power.",
    icon: "sparkles",
  },
  {
    slug: "ac-gas-filling-vadodara",
    title: "AC Gas Filling",
    h1Keyword: "AC Gas Filling in Vadodara",
    blurb:
      "Leak detection, brazing and correct-pressure R32 / R410A / R22 top-up with electronic gauges.",
    icon: "gauge",
  },
  {
    slug: "ac-installation-vadodara",
    title: "AC Installation",
    h1Keyword: "AC Installation in Vadodara",
    blurb:
      "Split and window AC installation with proper copper piping, levelling, vacuuming and test run.",
    icon: "plug",
  },
  {
    slug: "ac-uninstallation-vadodara",
    title: "AC Uninstallation & Shifting",
    h1Keyword: "AC Uninstallation in Vadodara",
    blurb:
      "Safe gas recovery, dismantling and refitting when you shift home or office anywhere in Vadodara.",
    icon: "truck",
  },
  {
    slug: "window-ac-repair-vadodara",
    title: "Window AC Repair",
    h1Keyword: "Window AC Repair in Vadodara",
    blurb:
      "Older window units restored — fan motor, capacitor, thermostat, drain and compressor work.",
    icon: "square",
  },
  {
    slug: "commercial-ac-amc-vadodara",
    title: "Commercial AC & AMC",
    h1Keyword: "Commercial AC AMC in Vadodara",
    blurb:
      "Scheduled maintenance contracts for shops, clinics, offices and cassette / ductable systems.",
    icon: "building",
  },
];

export type Locality = { slug: string; name: string; zone: string };

export const LOCATIONS: Locality[] = [
  { slug: "alkapuri", name: "Alkapuri", zone: "West Vadodara" },
  { slug: "gotri", name: "Gotri", zone: "West Vadodara" },
  { slug: "vasna-road", name: "Vasna Road", zone: "West Vadodara" },
  { slug: "akota", name: "Akota", zone: "West Vadodara" },
  { slug: "sama", name: "Sama", zone: "North Vadodara" },
  { slug: "nizampura", name: "Nizampura", zone: "North Vadodara" },
  { slug: "chhani", name: "Chhani", zone: "North Vadodara" },
  { slug: "harni", name: "Harni", zone: "North Vadodara" },
  { slug: "waghodia-road", name: "Waghodia Road", zone: "East Vadodara" },
  { slug: "ajwa-road", name: "Ajwa Road", zone: "East Vadodara" },
  { slug: "vip-road", name: "VIP Road", zone: "East Vadodara" },
  { slug: "karelibaug", name: "Karelibaug", zone: "East Vadodara" },
  { slug: "manjalpur", name: "Manjalpur", zone: "South Vadodara" },
  { slug: "tarsali", name: "Tarsali", zone: "South Vadodara" },
  { slug: "makarpura", name: "Makarpura", zone: "South Vadodara" },
  { slug: "vadsar", name: "Vadsar", zone: "South Vadodara" },
  { slug: "old-padra-road", name: "Old Padra Road", zone: "West Vadodara" },
  { slug: "subhanpura", name: "Subhanpura", zone: "North Vadodara" },
  { slug: "fatehgunj", name: "Fatehgunj", zone: "Central Vadodara" },
  { slug: "raopura", name: "Raopura", zone: "Central Vadodara" },
  { slug: "mandvi", name: "Mandvi", zone: "Central Vadodara" },
  { slug: "bhayli", name: "Bhayli", zone: "West Vadodara" },
];

export const ZONES = [
  "West Vadodara",
  "North Vadodara",
  "East Vadodara",
  "South Vadodara",
  "Central Vadodara",
] as const;

export const BRANDS = [
  "LG",
  "Samsung",
  "Voltas",
  "Daikin",
  "Blue Star",
  "Hitachi",
  "Carrier",
];
