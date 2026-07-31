import React, { useEffect } from "react";
import PageHero from "../components/PageHero";
import { company } from "../data/mock";

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="h-display text-[22px] md:text-[26px] text-[#0F1F14] mb-3">{title}</h2>
    <div className="text-[#0F1F14]/75 leading-relaxed space-y-3">{children}</div>
  </div>
);

const PrivacyPage = () => {
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, []);
  return (
    <>
      <PageHero
        eyebrow="LEGAL"
        title={<>Privacy Policy</>}
        subtitle="How Shubh Power Solutions Pvt. Ltd. collects, uses and protects your information."
      />
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-[820px] mx-auto px-6 lg:px-10">
          <p className="text-[#0F1F14]/55 text-[14px] mb-10">Last updated: this policy applies to the website shubhpower.com.</p>

          <Section title="Who we are">
            <p>
              This website is operated by {company.name} Pvt. Ltd., with its office at {company.address}.
              For any privacy question, contact us at {company.email} or {company.phone}.
            </p>
          </Section>

          <Section title="Information we collect">
            <p>When you submit an enquiry or quote request, we collect the details you provide — such as your name, email, phone number, site location and message. We also collect basic, non-identifying analytics data (such as pages visited and device type) to understand and improve the site.</p>
          </Section>

          <Section title="How we use your information">
            <p>We use your details only to respond to your enquiry, prepare quotations and proposals, and provide the solar and EV charging services you ask about. We do not sell your personal information to anyone.</p>
          </Section>

          <Section title="Cookies and analytics">
            <p>We use cookies to keep the site working and to measure traffic. You can accept all cookies or choose essential-only using the banner shown on your first visit, and you can clear cookies at any time through your browser settings.</p>
          </Section>

          <Section title="Data sharing">
            <p>We may share information with trusted service providers who help us operate the site and deliver our services, and where required by law. These providers are only permitted to use your data to perform services for us.</p>
          </Section>

          <Section title="Your rights">
            <p>You may request access to, correction of, or deletion of the personal information we hold about you. To make a request, email us at {company.email} and we will respond within a reasonable time.</p>
          </Section>

          <Section title="Contact">
            <p>{company.name} Pvt. Ltd.<br />{company.address}<br />{company.email} · {company.phone}</p>
          </Section>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;
