"use client";

import * as React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react";
import { SectionHeader } from "./section-header";
import { PYCButton } from "./button";
import { useToast } from "@/hooks/use-toast";

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Call us",
    value: "+233 20 000 0000",
    href: "tel:+233200000000",
  },
  {
    icon: Mail,
    label: "Email us",
    value: "info@pycclub.org",
    href: "mailto:info@pycclub.org",
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: "Ho, Volta Region, Ghana",
    href: "#map",
  },
  {
    icon: Clock,
    label: "Office hours",
    value: "Mon–Fri, 8:00 AM – 5:00 PM GMT",
  },
];

const SOCIALS = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Contact() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = React.useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate async submit
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    toast({
      title: "Message sent!",
      description:
        "Thank you for reaching out. Our team will respond within 48 hours.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative bg-surface py-20 md:py-28">
      <div className="section-pad">
        <SectionHeader
          eyebrow="Contact Us"
          title={
            <>
              Let's <span className="text-brand">build together</span>
            </>
          }
          description="Have a question, partnership idea, or just want to say hello? We'd love to hear from you."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Form */}
          <div className="reveal rounded-3xl bg-white border border-[#E3E8F2] p-8 shadow-premium md:p-10">
            <h3 className="font-display text-2xl font-bold text-[#0E1530]">
              Send us a message
            </h3>
            <p className="mt-1 text-sm text-[#5A6485]">
              Fields marked with * are required.
            </p>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name *" name="name" placeholder="Ama Owusu" required />
                <Field
                  label="Email *"
                  name="email"
                  type="email"
                  placeholder="ama@example.com"
                  required
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Phone"
                  name="phone"
                  type="tel"
                  placeholder="+233 XX XXX XXXX"
                />
                <Field
                  label="Subject *"
                  name="subject"
                  placeholder="Volunteer inquiry"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-[#0E1530] mb-1.5"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full rounded-2xl border border-[#E3E8F2] bg-surface px-4 py-3 text-sm text-[#0E1530] placeholder:text-[#5A6485]/60 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-colors resize-y"
                />
              </div>
              <PYCButton
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <span className="size-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="size-4" /> Send Message
                  </>
                )}
              </PYCButton>
            </form>
          </div>

          {/* Info + Map */}
          <div className="reveal reveal-delay-2 space-y-6">
            <div className="rounded-3xl brand-gradient p-8 text-white shadow-premium md:p-10">
              <h3 className="font-display text-2xl font-bold">
                Organization details
              </h3>
              <p className="mt-2 text-sm text-white/75">
                Reach out via any channel below — a real person will respond.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {CONTACT_INFO.map((c) => (
                  <a
                    key={c.label}
                    href={c.href ?? undefined}
                    className="group flex items-start gap-3 rounded-2xl bg-white/8 border border-white/10 p-4 hover:bg-white/12 transition-colors"
                  >
                    <div className="inline-flex size-10 items-center justify-center rounded-xl bg-gold text-[#182368] shrink-0">
                      <c.icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/60">
                        {c.label}
                      </p>
                      <p className="text-sm font-semibold text-white">{c.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3">
                <span className="text-sm text-white/70">Follow us:</span>
                <div className="flex gap-2">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="inline-flex size-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-gold hover:text-[#182368] transition-colors"
                    >
                      <s.icon className="size-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div
              id="map"
              className="relative overflow-hidden rounded-3xl border border-[#E3E8F2] bg-white shadow-premium h-72"
            >
              <iframe
                title="PYC Club office location, Ho, Volta Region, Ghana"
                src="https://www.openstreetmap.org/export/embed.html?bbox=0.6%2C6.55%2C0.78%2C6.65&layer=mapnik&marker=6.6%2C0.7"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute bottom-4 left-4 right-4 rounded-2xl glass-card p-4 shadow-premium">
                <div className="flex items-center gap-3">
                  <div className="inline-flex size-10 items-center justify-center rounded-xl brand-gradient text-white shrink-0">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-[#0E1530]">
                      Progressive Youth Club, Ho
                    </p>
                    <p className="text-xs text-[#5A6485]">
                      Ho, Volta Region, Ghana
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-[#0E1530] mb-1.5"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full h-12 rounded-2xl border border-[#E3E8F2] bg-surface px-4 text-sm text-[#0E1530] placeholder:text-[#5A6485]/60 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-colors"
      />
    </div>
  );
}
