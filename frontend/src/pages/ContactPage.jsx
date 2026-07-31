import React, { useState } from "react";
import { Mail, Phone, MapPin, ArrowUpRight, Check, Clock, ShieldCheck } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import FAQ from "../components/FAQ";
import { company } from "../data/mock";

const waNumber = company.whatsapp.replace(/[^0-9]/g, "");

const WhatsAppIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.08-.12-.27-.2-.57-.35M12.05 21.8h-.01a9.9 9.9 0 01-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 01-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.86 9.86 0 019.88 9.89c0 5.45-4.43 9.88-9.88 9.88M20.46 3.49A11.8 11.8 0 0012.05 0C5.5 0 .16 5.33.16 11.9c0 2.09.55 4.14 1.59 5.94L.06 24l6.3-1.65a11.9 11.9 0 005.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.17-3.48-8.41" />
  </svg>
);

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle");
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || "Contact form enquiry");
    const body = encodeURIComponent(`Your Name: ${form.name}\nYour Email: ${form.email}\nYour Subject: ${form.subject}\nContact Number: ${form.phone}\n\nMessage: ${form.message}`);
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 5000);
  };

  const methods = [
    { icon: Phone, label: "Phone Number", value: company.phone, href: `tel:${company.phone}` },
    { icon: WhatsAppIcon, label: "WhatsApp", value: company.whatsapp, href: `https://wa.me/91${waNumber}?text=${encodeURIComponent("Hi Shubh Power, I need a consultation.")}`, accent: "#25D366" },
    { icon: Mail, label: "Email Address", value: company.email, href: `mailto:${company.email}` },
    { icon: MapPin, label: "Location", value: company.address, href: "https://maps.google.com/?q=B-681,+Shushant+Lok+Phase+1,+Sector+43,+Gurugram,+122001" },
  ];

  return (
    <>
      <PageHero
        eyebrow="CONTACT US"
        title={<>Contact Us</>}
        subtitle="Need any consultations contact with us."
        image="/images/live/shubh-ev-charger-hero.png"
        imageAlt="Shubh Power EV charging station"
      />

      <section className="py-14 lg:py-20 bg-[#EAF8F4]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-14">
          <Reveal className="flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-8 h-[3px] rounded-full bg-[#16A34A]" />
                <span className="h-mono text-[11px] tracking-[0.15em] text-[#16A34A]">OUR CONTACT DETAIL</span>
              </div>
              <div className="rounded-[22px] border border-[#0F1F14]/10 overflow-hidden divide-y divide-[#0F1F14]/8 bg-white">
                {methods.map((m, i) => (
                  <a key={i} href={m.href} target={m.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="group flex items-center gap-4 p-5 hover:bg-[#F9F7F2] transition-colors">
                    <span className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 text-white" style={{ background: m.accent || "#16A34A" }}>
                      <m.icon className="w-[18px] h-[18px]" />
                    </span>
                    <div className="min-w-0">
                      <div className="h-mono text-[10px] tracking-wide text-[#0F1F14]/45">{m.label.toUpperCase()}</div>
                      <div className="text-[#0F1F14] text-[15px] font-medium mt-0.5">{m.value}</div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#0F1F14]/25 ml-auto group-hover:text-[#16A34A] group-hover:translate-x-0.5 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-[22px] bg-[#0F1F14] text-white p-7">
              <div className="flex items-start gap-3 mb-5">
                <span className="w-9 h-9 rounded-full bg-[#16A34A] flex items-center justify-center shrink-0"><Clock className="w-4 h-4" /></span>
                <div>
                  <div className="font-semibold text-[15px]">Hot Line</div>
                  <div className="text-white/65 text-[14px]">85272 76868</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-full bg-[#16A34A] flex items-center justify-center shrink-0"><ShieldCheck className="w-4 h-4" /></span>
                <div>
                  <div className="font-semibold text-[15px]">GSTIN: {company.gstin}</div>
                  <div className="text-white/65 text-[14px]">{company.address}</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="rounded-[26px] bg-[#F9F7F2] border border-[#0F1F14]/8 p-7 md:p-10">
              <h2 className="h-display text-[28px] md:text-[38px] text-[#0F1F14] tracking-tight">Contact Us For Our Services</h2>
              <p className="text-[#0F1F14]/55 mt-2 text-[15px]">Need any consultations contact with us.</p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="Your Name"><input required value={form.name} onChange={set("name")} className="ci" placeholder="Your name here" /></Field>
                <Field label="Your Email"><input type="email" required value={form.email} onChange={set("email")} className="ci" placeholder="Your email here" /></Field>
                <Field label="Your Subject"><input required value={form.subject} onChange={set("subject")} className="ci" placeholder="Your subject here" /></Field>
                <Field label="Contact Number"><input type="tel" value={form.phone} onChange={set("phone")} className="ci" placeholder="Your phone number here" /></Field>
                <Field label="Message" full>
                  <textarea rows={5} required value={form.message} onChange={set("message")} className="ci resize-y" placeholder="Tell us a few words" />
                </Field>
              </div>

              <button type="submit" className="mt-8 inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[#16A34A] text-white text-[15px] font-medium hover:bg-[#128740] transition-colors">
                {status === "sent" ? "Thanks - we'll be in touch" : "Send Message"}
                <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#16A34A]">
                  {status === "sent" ? <Check className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                </span>
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 lg:pb-24 bg-[#EAF8F4]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="relative rounded-[26px] overflow-hidden min-h-[420px] md:min-h-[480px] bg-white border border-[#0F1F14]/8 shadow-xl">
              <iframe
                title="Shubh Power Solutions Office - Sector 43, Gurugram"
                src="https://maps.google.com/maps?q=28.460914,77.070655&z=16&output=embed"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0F3328]/16 via-transparent to-transparent" />
              <div className="absolute left-5 bottom-5 right-5 md:right-auto md:max-w-sm bg-white rounded-2xl shadow-xl p-5">
                <div className="h-mono text-[10px] tracking-wide text-[#16A34A] mb-1">LOCATION</div>
                <div className="text-[#0F1F14] font-medium text-[15px] leading-snug">{company.address}</div>
                <a href="https://maps.google.com/?q=B-681,+Shushant+Lok+Phase+1,+Sector+43,+Gurugram,+122001" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-3 text-[#16A34A] text-[14px] font-medium">
                  Get directions <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal><FAQ /></Reveal>
    </>
  );
};

const Field = ({ label, full, children }) => (
  <div className={full ? "md:col-span-2" : ""}>
    <label className="h-mono text-[11px] tracking-wide text-[#0F1F14]/50">{label}</label>
    <div className="mt-2">{children}</div>
  </div>
);

export default ContactPage;
