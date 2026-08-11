import React from "react";
import { Eye, Target, Gem, Check } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import CountUp from "../components/CountUp";
import Testimonials from "../components/Testimonials";
import CTABanner from "../components/CTABanner";
import { brand, stats, values, promises, leadership, operationalTeam, timeline } from "../data/mock";

const aboutHeroCopy =
  "Welcome to Shubh Power Solutions Private Limited, established in 2010 with its office in Gurugram, Haryana, India. We are a leading provider of comprehensive power solutions in Delhi and the National Capital Region - delivering affordable power, reducing carbon footprint and promoting energy efficiency across industries.";

const Person = ({ m, i }) => (
  <Reveal delay={Math.min((i % 4) * 0.05, 0.2)} className="group rounded-[24px] bg-white p-3 shadow-xl border border-white/10 card-lift">
    <div className="relative rounded-[18px] overflow-hidden aspect-[4/5] bg-[#F5F3EC]">
      <img src={m.image} alt={m.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0F1F14]/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    <div className="p-3 pb-2">
      <div className="h-display text-[19px] text-[#0F1F14] leading-tight">{m.name}</div>
      <div className="text-[#0F1F14]/55 text-[13px] mt-0.5">{m.role}{m.meta ? ` - ${m.meta}` : ""}</div>
    </div>
  </Reveal>
);

const AboutPage = () => (
  <div className="site-preview-type about-preview-type">
    <PageHero
      eyebrow="ABOUT US"
      title={<>Fifteen years of<br />engineering India's<br />clean-energy backbone.</>}
      subtitle={aboutHeroCopy}
      image="/images/live/10nlc_solar.jpg"
      imageAlt="Shubh Power solar farm"
    />

    <section className="relative py-16 lg:py-24 bg-[#EAF8F4] overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#FBFAF7] to-transparent" />
      <div className="relative max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <div className="flex items-center gap-2.5 mb-5 rounded-full bg-white/80 border border-[#16A34A]/14 w-max px-4 py-2">
            <span className="w-8 h-[3px] rounded-full bg-[#16A34A]" />
            <span className="h-mono text-[11px] tracking-[0.18em] text-[#16A34A]">WELCOME</span>
          </div>
          <h2 className="h-display text-[34px] md:text-[48px] lg:text-[56px] leading-[1.02] tracking-tight text-[#0F1F14]">
            Shubh Power Solutions Private Limited
          </h2>
          <p className="mt-6 text-[#0F1F14]/70 text-[16px] leading-relaxed">{brand.intro}</p>
          <div className="mt-8 grid grid-cols-3 gap-3 max-w-xl">
            {[
              ["2010", "Established"],
              ["146+", "Customers"],
              ["30+ MW", "Solar power project executed"],
            ].map(([n, l]) => (
              <div key={l} className="rounded-[18px] bg-white border border-[#0F1F14]/8 p-4 shadow-sm">
                <div className="h-display text-[24px] sm:text-[30px] text-[#16A34A] leading-none">{n}</div>
                <div className="mt-2 h-mono text-[9px] sm:text-[10px] text-[#0F1F14]/52">{l}</div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1} className="relative">
          <div className="rounded-[32px] bg-white/72 border border-[#0F1F14]/8 p-4 sm:p-5 shadow-2xl">
            <div className="grid grid-cols-2 gap-4">
            <div className="rounded-[24px] overflow-hidden aspect-[4/5] bg-[#F5F3EC] shadow-lg float-soft">
              <img src="/images/hero/solarpr/1.png" alt="Shubh Power solar project" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[24px] overflow-hidden aspect-[4/5] bg-[#F5F3EC] mt-8 sm:mt-12 shadow-lg float-soft float-delay">
              <img src="/images/hero/solarpr/2.png" alt="Shubh Power EV charging station" loading="lazy" className="w-full h-full object-cover" />
            </div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-8 sm:bottom-10 rounded-[18px] bg-white px-5 py-4 shadow-2xl border border-[#0F1F14]/8 min-w-[240px] text-center">
              <div className="h-mono text-[10px] text-[#16A34A]">SOLAR - BESS - EV CPO</div>
              <div className="h-display text-[22px] text-[#0F1F14] mt-1">Built for real sites</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {[
            { icon: Eye, label: "OUR VISION", body: brand.vision },
            { icon: Target, label: "OUR MISSION", body: brand.mission },
          ].map((v) => (
            <Reveal key={v.label} className="about-glow-card rounded-[26px] bg-[#0F3328] border border-[#7DE0C3]/20 p-7 sm:p-8 lg:p-10 text-white overflow-hidden">
              <span className="w-12 h-12 rounded-full bg-[#16A34A] flex items-center justify-center mb-6 shadow-lg"><v.icon className="w-5 h-5 text-white" /></span>
              <div className="h-mono text-[11px] tracking-[0.15em] text-[#7DE0C3] mb-3">{v.label}</div>
              <p className="text-white/82 text-[18px] sm:text-[20px] leading-relaxed">{v.body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6 lg:mt-8 rounded-[28px] bg-[#F5F3EC] p-6 sm:p-8 lg:p-10 border border-[#0F1F14]/8">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 rounded-full bg-[#F58220] flex items-center justify-center"><Gem className="w-4 h-4 text-white" /></span>
            <div className="h-mono text-[11px] tracking-[0.15em] text-[#F58220]">OUR VALUES</div>
          </div>
          <p className="text-[#0F1F14]/75 text-[18px] leading-relaxed mb-8">{brand.values}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <div key={v.title} className="value-tile rounded-[20px] bg-white border border-[#0F1F14]/8 p-5" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="h-display text-[20px] text-[#0F1F14] mb-2">{v.title}</div>
                <p className="text-[#0F1F14]/60 text-[14px] leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <Reveal className="rounded-[28px] bg-[#F1EADB] px-8 sm:px-10 lg:px-16 py-12 lg:py-14 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-start">
              <div className="flex items-start gap-1 leading-none">
                <span className="h-display text-[40px] sm:text-[52px] lg:text-[64px] text-[#16A34A] leading-none tracking-tight"><CountUp value={s.value} /></span>
              </div>
              <div className="text-[#0F1F14]/55 mt-3 text-[12px] lg:text-[13px] uppercase tracking-[0.08em]">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>

    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#EAF8F4] via-white to-[#F1FAF4] text-[#0F1F14]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 grid lg:grid-cols-[0.72fr_1.28fr] gap-12 lg:gap-16 items-start">
        <Reveal className="lg:sticky lg:top-28">
          <div className="inline-flex items-center gap-2.5 mb-5 rounded-full bg-white border border-[#16A34A]/16 px-4 py-2 shadow-sm">
            <span className="w-8 h-[3px] rounded-full bg-[#16A34A]" />
            <span className="h-mono text-[12px] tracking-[0.2em] text-[#16A34A]">OUR JOURNEY</span>
          </div>
          <h2 className="h-display text-[36px] md:text-[52px] tracking-tight text-[#0F1F14]">
            Fifteen years, milestone by milestone.
          </h2>
          <p className="mt-5 text-[#0F1F14]/62 text-[16px] leading-relaxed max-w-sm">
            A connected path from Gurugram incorporation to solar projects and EV CPO rollout.
          </p>
        </Reveal>
        <div className="relative">
          <div className="absolute left-[17px] top-3 bottom-3 w-[3px] rounded-full bg-gradient-to-b from-[#16A34A] via-[#7DE0C3] to-[#F58220]" />
          <div className="space-y-5">
            {timeline.map((t) => (
              <Reveal key={t.year} className="relative pl-14">
                <div className="absolute left-0 top-3 w-9 h-9 rounded-full bg-white border-2 border-[#16A34A] shadow-md flex items-center justify-center">
                  <span className="w-3 h-3 rounded-full bg-[#F58220]" />
                </div>
                <div className="rounded-[24px] bg-white border border-[#0F1F14]/8 p-5 sm:p-6 shadow-sm hover:shadow-xl transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-5">
                    <div className="h-display text-[34px] text-[#16A34A] leading-none min-w-[94px]">{t.year}</div>
                    <h3 className="h-display text-[22px] md:text-[26px] text-[#0F1F14] leading-tight">{t.title}</h3>
                  </div>
                  <p className="mt-3 text-[#0F1F14]/66 text-[15px] leading-relaxed">{t.body}</p>
                  {t.highlight && (
                    <div className="mt-4 inline-flex rounded-full bg-[#16A34A]/10 border border-[#16A34A]/20 px-4 py-2 h-mono text-[11px] tracking-[0.14em] text-[#0E7A38]">
                      {t.highlight}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 lg:py-24 bg-[#EAF8F4]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
        <Reveal className="mb-12 max-w-2xl">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-8 h-[3px] rounded-full bg-[#16A34A]" />
            <span className="h-mono text-[11px] tracking-[0.18em] text-[#16A34A]">BENEFITS ON PRODUCTS AND INNOVATIONS</span>
          </div>
          <h2 className="h-display text-[32px] md:text-[44px] tracking-tight text-[#0F1F14]">Our team ensures</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {promises.map((p) => (
            <Reveal key={p.title} className="about-promise-card rounded-[24px] border border-[#0F1F14]/10 bg-white p-6 sm:p-7 hover:shadow-lg transition-shadow">
              <span className="w-11 h-11 rounded-full bg-[#E6F4E9] flex items-center justify-center mb-5"><Check className="w-5 h-5 text-[#16A34A]" /></span>
              <h3 className="h-display text-[19px] text-[#0F1F14] mb-2">{p.title}</h3>
              <p className="text-[#0F1F14]/60 text-[14px] leading-relaxed">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section id="team" className="py-16 lg:py-24 bg-[#0F3328] text-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
        <Reveal className="mb-12 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2.5 mb-4 px-4 py-2 rounded-full bg-white/10 border border-white/14">
            <span className="w-2 h-2 rounded-full bg-[#7DE0C3]" />
            <span className="h-mono text-[11px] tracking-[0.18em] text-[#7DE0C3]">OUR TEAM</span>
          </div>
          <h2 className="h-display text-[36px] md:text-[56px] tracking-tight text-white">Meet Our Core Team</h2>
        </Reveal>

        <div className="team-band mb-7">
          <h3 className="h-mono text-[12px] sm:text-[13px] tracking-[0.15em] text-white">THE LEADERSHIP TEAM</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 mb-16 max-w-[880px] mx-auto">
          {leadership.map((m, i) => <Person key={m.name} m={{ ...m, meta: "" }} i={i} />)}
        </div>

        <div className="team-band team-band-green mb-7">
          <h3 className="h-mono text-[12px] sm:text-[13px] tracking-[0.15em] text-white">THE POWERHOUSE BEHIND OUR SUCCESS</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-7">
          {operationalTeam.map((m, i) => <Person key={m.name} m={m} i={i} />)}
        </div>
      </div>
    </section>

    <Reveal><Testimonials /></Reveal>
    <Reveal><CTABanner title="Save the Environment & Save your Money!" ctaLabel="Contact Us" /></Reveal>
  </div>
);

export default AboutPage;
