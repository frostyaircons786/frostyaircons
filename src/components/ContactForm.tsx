import { useState } from "react";
import { SERVICES, LOCATIONS, WHATSAPP_NUMBER } from "@/lib/business";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  return (
    <form
      className="grid gap-4 rounded-lg border border-border bg-card p-6 shadow-card sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitting(true);
        const fd = new FormData(e.target as HTMLFormElement);
        const name = fd.get("name") || "";
        const phone = fd.get("phone") || "";
        const area = fd.get("area") || "";
        const service = fd.get("service") || "";
        const message = fd.get("message") || "";

        const lines = [
          `Hi, I need AC service`,
          ``,
          `*Name:* ${name}`,
          `*Phone:* ${phone}`,
          `*Area:* ${area}`,
          `*Service:* ${service}`,
          message ? `*Problem:* ${message}` : "",
        ].filter(Boolean);

        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
        window.open(url, "_blank", "noopener,noreferrer");
        setSubmitting(false);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name" htmlFor="name">
          <input id="name" name="name" required placeholder="e.g. Hiral Shah" className={input} />
        </Field>
        <Field label="Phone number" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="10-digit mobile number"
            className={input}
          />
        </Field>
        <Field label="Your area" htmlFor="area">
          <select id="area" name="area" required defaultValue="" className={input}>
            <option value="" disabled>
              Select your area
            </option>
            {LOCATIONS.map((l) => (
              <option key={l.slug} value={l.name}>
                {l.name}
              </option>
            ))}
            <option value="Other">Other area in Vadodara</option>
          </select>
        </Field>
        <Field label="Service needed" htmlFor="service">
          <select id="service" name="service" required defaultValue="" className={input}>
            <option value="" disabled>
              Select a service
            </option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Describe the problem" htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="e.g. Split AC runs but does not cool, and there is water dripping from the indoor unit."
          className={input}
        />
      </Field>
      <button
        type="submit"
        disabled={submitting}
        className="mt-1 inline-flex items-center justify-center rounded-md bg-[#25D366] px-6 py-3 font-[family-name:var(--font-display)] font-bold text-white shadow-cta transition-transform hover:-translate-y-0.5 disabled:opacity-70"
      >
        {submitting ? "Opening WhatsApp…" : "Send on WhatsApp"}
      </button>
      <p className="text-xs text-muted-foreground">
        You will be redirected to WhatsApp with your details pre-filled. No spam, ever.
      </p>
    </form>
  );
}

const input =
  "w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/25";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block font-[family-name:var(--font-display)] text-xs font-bold uppercase tracking-widest text-ink-soft"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
