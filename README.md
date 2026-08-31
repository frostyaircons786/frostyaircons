# Remix of Frosty Aircons Launch

Build a professional local-service business website for an air conditioner repair

company. This must look like a custom-designed WordPress business website —

NOT like a generic AI-generated template. Avoid centered-everything layouts,

stock gradient blobs, and generic SaaS-style hero sections.

BUSINESS INFO

- Name: Frosty Aircons AC Repair and Service

- Address: GF 04, Nand Bunglow, Opp Sukan 2, Waghodia Road, Vadodara 390016

- Phone: +91-XXXXXXXXXX (use this as a placeholder, make it a single editable

  constant/variable so it can be updated everywhere at once later)

- Service area: Vadodara city and 20+ surrounding localities

BRAND / LOGO

- Logo = the text "Frosty Aircons" next to a minimal line-art AC fan-blade icon

  (3-4 blade spinning fan glyph, not a snowflake, not a stock icon-pack icon).

- Generate a matching favicon using just the fan icon.

- Primary color: a cool blue/teal palette suggesting cooling/AC, with one warm

  accent color for CTAs (e.g., an orange or amber) so buttons stand out.

TYPOGRAPHY

- Use "Space Grotesk" for all headings (bold weight) and "Karla" for body text.

  These must be loaded properly (Google Fonts) and used consistently.

- Bold the primary focus keyword phrase inside H1s, H2s and intro paragraphs

  (e.g. "**AC Repair in Vadodara**") — naturally, not keyword-stuffed.

HEADER (sticky on both desktop and mobile)

- Custom shaped header — NOT a plain flat white bar. Use a subtle angled

  bottom edge or gradient border, with the fan icon subtly rotating on hover.

- Nav: Home, Services (dropdown listing all 7 services), Locations (dropdown/

  mega-menu listing service areas), About, Contact, and a prominent "Call Now"

  + WhatsApp button on the right.

- On mobile: sticky header collapses into a hamburger menu; Services and

  Locations expand as accordions inside the mobile menu.

WHATSAPP INTEGRATION

- Floating WhatsApp button, fixed bottom-right corner, visible on every page.

- Use the authentic WhatsApp brand mark: white phone-handset icon on a

  #25D366 green circle with a subtle shadow, gentle pulse/bounce animation.

- Clicking it opens https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20need%20AC%20service

  in a new tab.

- Also place a WhatsApp "Chat with us" button in the header and inside every

  service/location page's CTA sections.

FOOTER (detailed, same on every page)

- Company blurb + address + phone + email + hours (Mon-Sun 8am-9pm, adjust

  as placeholder).

- Column of all 7 services (linked).

- Column of service locations grouped by zone (linked) — show top areas with

  a "View all areas" link to /locations.

- Embedded Google Map iframe pointed at the address above.

- Social icons (placeholders), copyright line.

- On mobile: Services and Locations columns become collapsible

  dropdown/accordion sections (tap to expand/collapse), not one long scroll.

ANIMATIONS

- Scroll-reveal fade/slide-up on each section as user scrolls.

- Hover micro-interactions on buttons and service cards (lift + shadow).

- Animated counters in a stats strip (e.g., "10+ Years Experience",

  "5000+ AC Units Serviced", "20+ Areas Covered", "Same-Day Service").

- A subtly rotating fan icon in the hero section.

PAGES TO BUILD IN THIS FIRST PASS

1. Homepage — hero with headline "Trusted AC Repair & Service in Vadodara",

   subheading mentioning coverage across 20+ areas, primary CTA buttons

   (Call Now / WhatsApp Now), services overview grid (all 7, linking to their

   pages — build placeholder links even though only one service page exists

   yet), why-choose-us section, service-area highlights, testimonials

   section (use 4-5 realistic placeholder reviews), FAQ accordion, final CTA

   with contact form (Name, Phone, Area, Service Needed, Message).

2. One fully detailed SERVICE page: "AC Repair in Vadodara"

   URL: /services/ac-repair-vadodara

   Include: H1 with bolded focus keyword, detailed intro (what the service

   covers), common AC problems we fix (gas leakage, cooling issues, noise,

   water leakage, remote/PCB faults, compressor issues), our repair process

   as a numbered/step section, pricing approach (transparent, no hidden

   charges — do not invent exact prices), why choose Frosty Aircons for this

   service, brands we service (LG, Samsung, Voltas, Daikin, Blue Star,

   Hitachi, Carrier — as text, not logos), a "we also serve you in these

   areas" section linking to the locations hub, FAQs specific to AC repair,

   and a final booking CTA (Call + WhatsApp).

3. One fully detailed LOCATION page: "AC Repair & Service in Alkapuri,

   Vadodara"

   URL: /locations/alkapuri

   Include: H1 with bolded location+service keyword, why residents of

   Alkapuri choose us, response time claim (e.g., "same-day service in

   Alkapuri"), list of all 7 services linking to their pages, local

   landmarks/context sentence to make it feel genuinely localized (not

   copy-pasted), testimonial from an "Alkapuri resident", FAQ section, map

   embed, and final CTA.

4. Build a shared, reusable page template/component so that generating the

   remaining 6 service pages and remaining location pages later only

   requires swapping content, not rebuilding layout.

SEO / GOOGLE BUSINESS PROFILE READINESS

- Add LocalBusiness + Service schema (JSON-LD) on every page with the

  business NAP (name, address, phone) exactly matching across all pages.

- Unique <title> and <meta description> per page, following the pattern:

  Title: "{Service} in {Area} | Frosty Aircons"

  Description: natural, benefit-led, includes phone/CTA.

- Proper heading hierarchy (one H1 per page), descriptive alt text on images,

  clean semantic HTML.

- Add an XML sitemap placeholder and robots.txt allowing indexing.

Do not use lorem ipsum anywhere — write real, specific, helpful placeholder

content for an AC repair business in Vadodara. Keep the design consistent

and production-ready so it can scale to ~30+ pages later without redesign.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://frosty-air-pro.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2ac9a186-7dc0-45ac-b19b-08abba575580).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
