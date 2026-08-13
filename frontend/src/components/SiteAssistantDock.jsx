import React, { useEffect, useMemo, useRef, useState } from "react";
import { Bot, ChevronRight, MessageCircle, Send, X } from "lucide-react";
import { brand, company, solarSolutions, evCategories, solarProjects, evProjects, faqs } from "../data/mock";

const normalize = (value) => String(value || "").toLowerCase().replace(/\s+/g, " ").trim();

const quickActions = [
  "About Shubh Power",
  "Solar solutions",
  "EV charging",
  "Completed projects",
  "Contact details",
];

const replyFor = (input) => {
  const q = normalize(input);
  const phone = company.phone;

  if (!q) {
    return {
      title: "Ask me anything about Shubh Power",
      body: "I can help with solar solutions, EV charging, projects, blogs, and contact details.",
    };
  }

  if (q.includes("about") || q.includes("who are you") || q.includes("story") || q.includes("company")) {
    return {
      title: "About Shubh Power",
      body: `${brand.full} is based in Gurugram and works across solar EPC, battery storage and EV charging.`,
      bullets: ["Founded in 2010", "Office: Gurugram, Haryana", "End-to-end EPC and O&M"],
      cta: { label: "Open About page", href: "/about" },
    };
  }

  if (q.includes("solar") || q.includes("bess") || q.includes("generator") || q.includes("panel") || q.includes("epc") || q.includes("pv")) {
    return {
      title: "Solar power solutions",
      body: `Our solar portfolio includes ${solarSolutions.map((s) => s.title).join(", ")}.`,
      bullets: solarSolutions.slice(0, 4).map((s) => s.title),
      cta: { label: "Open Solar page", href: "/solar" },
    };
  }

  if (q.includes("ev") || q.includes("charging") || q.includes("cpo") || q.includes("fleet") || q.includes("residential") || q.includes("commercial") || q.includes("public") || q.includes("retail")) {
    return {
      title: "EV charging solutions",
      body: `We support ${evCategories.map((c) => c.title).join(", ")} with site planning, installation and maintenance.`,
      bullets: evCategories.map((c) => c.title),
      cta: { label: "Open EV page", href: "/ev-charging" },
    };
  }

  if (q.includes("project") || q.includes("portfolio") || q.includes("completed") || q.includes("ongoing")) {
    return {
      title: "Projects overview",
      body: `The site currently shows ${solarProjects.length} solar completed projects and ${evProjects.length} EV completed projects.`,
      bullets: ["Completed projects page", "Solar and EV portfolios", "Ongoing projects"],
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
      body: `${brand.full} can be reached at ${phone} by phone or ${company.whatsapp} on WhatsApp.`,
      bullets: [company.email, company.address, `GSTIN: ${company.gstin}`],
      cta: { label: "Open Contact page", href: "/contact" },
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
      cta: { label: "Open Contact page", href: "/contact" },
    };
  }

  return {
    title: "I can help with the site",
    body: "Ask me about Shubh Power, solar solutions, EV charging, projects, blogs, or contact details.",
    cta: { label: "Open Contact page", href: "/contact" },
  };
};

const initialMessages = [
  {
    role: "assistant",
    title: "Hi, I am the Shubh Power assistant.",
    body: "Ask me about our solar work, EV charging, projects, blog, or contact details.",
  },
];

const SiteAssistantDock = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(initialMessages);
  const bottomRef = useRef(null);
  const buttons = useMemo(() => quickActions, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, open]);

  const sendPrompt = (value) => {
    const text = String(value || "").trim();
    if (!text) return;
    const response = replyFor(text);
    setMessages((current) => [...current, { role: "user", body: text }, { role: "assistant", ...response }]);
    setInput("");
    setOpen(true);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    sendPrompt(input);
  };

  return (
    <div className="fixed bottom-24 right-4 sm:right-5 z-50">
      {open ? (
        <div className="assistant-dock w-[calc(100vw-2rem)] sm:w-[360px] max-w-[360px] overflow-hidden rounded-[28px] border border-white/12 bg-[#10241B]/96 text-white shadow-[0_24px_80px_rgba(0,0,0,0.34)]">
          <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-4">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#16A34A] text-white shadow-lg">
                <Bot className="h-5 w-5" />
              </span>
              <div>
                <div className="h-mono text-[12px] tracking-[0.18em] text-[#7DE0C3]">SHUBH POWER</div>
                <div className="text-[16px] font-semibold">Customer Support</div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/15"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="max-h-[42vh] overflow-y-auto px-4 py-4">
            <div className="mb-4 flex flex-wrap gap-2">
              {buttons.map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => sendPrompt(label)}
                className="rounded-full border border-white/12 bg-white/8 px-3.5 py-2 text-[13px] text-white/88 hover:bg-white/14"
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="space-y-3">
              {messages.map((m, i) => (
                <div key={`${m.role}-${i}`} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[92%] rounded-[20px] px-4 py-3 text-[15px] leading-relaxed ${
                      m.role === "user"
                        ? "bg-[#16A34A] text-white"
                        : "bg-white/8 text-white/92 border border-white/10"
                    }`}
                  >
                    {m.title ? <div className="mb-1.5 text-[14px] font-semibold">{m.title}</div> : null}
                    <div className="text-[15px] leading-relaxed">{m.body}</div>
                    {m.bullets?.length ? (
                      <ul className="mt-3 space-y-1.5 text-[14px] text-white/80">
                        {m.bullets.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <ChevronRight className="mt-0.5 h-3.5 w-3.5 text-[#7DE0C3]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {m.cta ? (
                        <a href={m.cta.href} className="mt-3 inline-flex items-center rounded-full bg-white px-3.5 py-2 text-[13px] font-medium text-[#0F1F14]">
                        {m.cta.label}
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>
          </div>

          <div className="border-t border-white/10 p-4">
            <form onSubmit={onSubmit} className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                aria-label="Chat message"
                className="h-11 flex-1 rounded-full border border-white/12 bg-white px-4 text-[15px] text-[#0F1F14] outline-none placeholder:text-[#0F1F14]/35"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#16A34A] text-white transition-colors hover:bg-[#128740]"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
            <div className="mt-3 flex justify-end">
              <button
                type="button"
                onClick={() => setMessages(initialMessages)}
                className="rounded-full border border-white/12 bg-white/8 px-3 py-2 text-[13px] text-white/82 hover:bg-white/14"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Open chat"
        className="assistant-dock inline-flex items-center gap-2 rounded-full border border-white/12 bg-[#10241B] px-4 py-3 text-white shadow-[0_16px_42px_rgba(0,0,0,0.22)]"
      >
        <MessageCircle className="h-4 w-4 text-[#7DE0C3]" />
        <span className="text-[15px] font-medium">Chat</span>
      </button>
    </div>
  );
};

export default SiteAssistantDock;
