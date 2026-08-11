import React, { useEffect, useMemo, useRef, useState } from "react";
import { Bot, ChevronUp, MessageCircle, PhoneCall, Send, Sparkles, X } from "lucide-react";
import { brand, company, solarSolutions, evCategories, solarProjects, evProjects, faqs } from "../data/mock";

const normalize = (value) => value.toLowerCase().replace(/\s+/g, " ").trim();

const quickPrompts = [
  "About Shubh Power",
  "Solar solutions",
  "EV charging",
  "Completed projects",
  "Contact details",
];

const replyFor = (input) => {
  const q = normalize(input);
  const phone = company.phone;
  const whatsapp = company.whatsapp;
  const solarNames = solarSolutions.map((s) => s.title).join(", ");
  const evNames = evCategories.map((c) => c.title).join(", ");

  if (!q) {
    return {
      title: "Try asking me about the website",
      body: "I can answer about the company, solar solutions, EV charging, projects, blogs, and contact details.",
    };
  }

  if (q.includes("about") || q.includes("who are you") || q.includes("story") || q.includes("company")) {
    return {
      title: "About Shubh Power",
      body: `${brand.full} is based in Gurugram and works across solar EPC, battery storage and EV charging. We build and operate complete clean-energy infrastructure in-house.`,
      bullets: [
        "Founded in 2010",
        "Office: Gurugram, Haryana",
        "End-to-end EPC, O&M and EV CPO delivery",
      ],
    };
  }

  if (q.includes("solar") || q.includes("bess") || q.includes("generator") || q.includes("panel") || q.includes("epc") || q.includes("pv")) {
    return {
      title: "Solar power solutions",
      body: `Our solar portfolio includes ${solarNames}.`,
      bullets: solarSolutions.slice(0, 4).map((s) => s.title),
      cta: { label: "Open Solar Page", href: "/solar" },
    };
  }

  if (q.includes("ev") || q.includes("charging") || q.includes("cpo") || q.includes("fleet") || q.includes("residential") || q.includes("commercial") || q.includes("public") || q.includes("retail")) {
    return {
      title: "EV charging solutions",
      body: `We support ${evNames} with site planning, installation, monitoring and maintenance.`,
      bullets: evCategories.map((c) => c.title),
      cta: { label: "Open EV Page", href: "/ev-charging" },
    };
  }

  if (q.includes("project") || q.includes("portfolio") || q.includes("completed") || q.includes("ongoing")) {
    return {
      title: "Projects overview",
      body: `The site currently shows ${solarProjects.length} solar completed projects and ${evProjects.length} EV completed projects, plus ongoing work where available.`,
      bullets: ["Completed projects page", "Solar and EV portfolios", "Current ongoing projects"],
      cta: { label: "View Projects", href: "/projects" },
    };
  }

  if (q.includes("blog") || q.includes("journal") || q.includes("article") || q.includes("news")) {
    return {
      title: "Blog and insights",
      body: "The blog shares field notes on solar economics, rooftop systems, subsidies and clean-energy deployment.",
      bullets: ["Latest articles", "Field notes", "Project learnings"],
      cta: { label: "Open Blog", href: "/blogs" },
    };
  }

  if (q.includes("contact") || q.includes("phone") || q.includes("whatsapp") || q.includes("email") || q.includes("address") || q.includes("location")) {
    return {
      title: "Contact details",
      body: `${brand.full} can be reached at ${phone} by phone or ${whatsapp} on WhatsApp.`,
      bullets: [company.email, company.address, `GSTIN: ${company.gstin}`],
      cta: { label: "Contact page", href: "/contact" },
    };
  }

  const faqMatch = faqs.find((item) => {
    const words = normalize(item.q).split(" ").filter(Boolean);
    return words.some((word) => word.length > 4 && q.includes(word));
  });

  if (faqMatch) {
    return {
      title: faqMatch.q,
      body: faqMatch.a,
      cta: { label: "Talk to us", href: `tel:${phone}` },
    };
  }

  return {
    title: "I can help with the site",
    body: "Ask me about Shubh Power, solar solutions, EV charging, projects, blogs, or contact details.",
    bullets: ["About", "Solar", "EV Charging", "Projects", "Blogs", "Contact"],
    cta: { label: "Call us", href: `tel:${phone}` },
  };
};

const initialMessages = [
  {
    role: "assistant",
    title: "Hi, I’m the Shubh Power assistant.",
    body: "Ask me about our solar work, EV charging, projects, blog, or contact details. I use the site content only.",
  },
];

const SiteAssistantDock = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(initialMessages);
  const bottomRef = useRef(null);
  const phoneLink = `tel:${company.phone}`;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, open]);

  const sendPrompt = (value) => {
    const text = value.trim();
    if (!text) return;
    const response = replyFor(text);
    setMessages((current) => [
      ...current,
      { role: "user", body: text },
      { role: "assistant", ...response },
    ]);
    setInput("");
    setOpen(true);
  };

  const suggestions = useMemo(() => quickPrompts, []);

  return (
    <div className="fixed bottom-24 right-4 sm:right-5 z-50 flex items-end gap-3">
      {open ? (
        <div className="assistant-dock w-[calc(100vw-2rem)] sm:w-[360px] max-w-[360px] overflow-hidden rounded-[24px] border border-white/15 bg-[#0F1F14]/92 text-white shadow-[0_24px_80px_rgba(0,0,0,0.32)]">
          <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-4">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#16A34A] text-white shadow-lg">
                <Bot className="h-5 w-5" />
              </span>
              <div>
                <div className="h-mono text-[10px] tracking-[0.18em] text-[#7DE0C3]">RULE-BASED ASSISTANT</div>
                <div className="text-[14px] font-semibold">Shubh Power Guide</div>
              </div>
            </div>
            <button type="button" onClick={() => setOpen(false)} className="rounded-full bg-white/10 p-2 text-white/80 hover:bg-white/16">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="max-h-[48vh] space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div key={`${m.role}-${i}`} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[90%] rounded-[18px] px-4 py-3 text-[14px] leading-relaxed ${m.role === "user" ? "bg-[#16A34A] text-white" : "bg-white/8 text-white/90 border border-white/10"}`}>
                  {m.title ? <div className="font-semibold mb-1.5 text-[13px]">{m.title}</div> : null}
                  <div>{m.body}</div>
                  {m.bullets?.length ? (
                    <ul className="mt-3 space-y-1.5 text-[13px] text-white/78">
                      {m.bullets.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <ChevronUp className="mt-0.5 h-3 w-3 rotate-90 text-[#7DE0C3]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {m.cta ? (
                    <a href={m.cta.href} className="mt-3 inline-flex items-center gap-2 rounded-full bg-white text-[#0F1F14] px-3.5 py-2 text-[12px] font-medium">
                      {m.cta.label}
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <div className="border-t border-white/10 p-4">
            <div className="mb-3 flex flex-wrap gap-2">
              {suggestions.map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => sendPrompt(label)}
                  className="rounded-full border border-white/12 bg-white/6 px-3 py-1.5 text-[12px] text-white/84 hover:bg-white/12"
                >
                  {label}
                </button>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendPrompt(input);
              }}
              className="flex items-center gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                className="h-11 flex-1 rounded-full border border-white/10 bg-white/8 px-4 text-[14px] text-white outline-none placeholder:text-white/45"
              />
              <button type="submit" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#16A34A] text-white hover:bg-[#128740]">
                <Send className="h-4 w-4" />
              </button>
            </form>
            <div className="mt-3 flex items-center gap-2">
              <a href={phoneLink} className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#0F1F14] px-4 py-2.5 text-[13px] font-medium">
                <PhoneCall className="h-4 w-4 text-[#16A34A]" />
                Call now
              </a>
              <button type="button" onClick={() => setMessages(initialMessages)} className="rounded-full border border-white/12 bg-white/8 px-3 py-2 text-[12px] text-white/80 hover:bg-white/12">
                Reset
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <div className="flex flex-col items-end gap-3">
        <a
          href={phoneLink}
          className="inline-flex items-center gap-2 rounded-full bg-white/92 px-3 py-2 text-[13px] font-medium text-[#0F1F14] shadow-[0_14px_35px_rgba(15,31,20,0.18)] backdrop-blur-xl"
        >
          <PhoneCall className="h-4 w-4 text-[#16A34A]" />
          Call
        </a>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="assistant-dock inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#0F1F14] px-4 py-3 text-white shadow-[0_16px_42px_rgba(0,0,0,0.22)]"
        >
          <MessageCircle className="h-4 w-4 text-[#7DE0C3]" />
          <span className="text-[14px] font-medium">Chat</span>
          <Sparkles className="h-4 w-4 text-[#F58220]" />
        </button>
      </div>
    </div>
  );
};

export default SiteAssistantDock;
