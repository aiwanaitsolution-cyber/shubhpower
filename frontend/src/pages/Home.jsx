import React from "react";
import Reveal from "../components/Reveal";
import Hero from "../components/Hero";
import About from "../components/About";
import SolarSolutions from "../components/SolarSolutions";
import EVCharging from "../components/EVCharging";
import SmartBenefits from "../components/SmartBenefits";
import SmartSavings from "../components/SmartSavings";
import Projects from "../components/Projects";
import Brands from "../components/Brands";
import Testimonials from "../components/Testimonials";
import Promises from "../components/Promises";
import CTABanner from "../components/CTABanner";

const Home = () => (
  <div className="site-preview-type home-preview-type">
    <Hero />
    <Reveal><About /></Reveal>
    <Reveal><SolarSolutions /></Reveal>
    <Reveal><EVCharging /></Reveal>
    <Reveal><SmartBenefits /></Reveal>
    <Reveal>
      <SmartSavings
        eyebrow="EV CHARGING"
        titleTop="Why Go Electric"
        titleBottom="With Shubh Power?"
        image="/images/hero/evp/public_infra.png"
        imageEyebrow="EV CHARGING"
        imageTitle="Smart charging for fleets, businesses, and communities."
        accordionItems={[
          {
            title: "Why choose EV charging?",
            body: "EV charging infrastructure helps homes, businesses, and fleets charge reliably while preparing for a cleaner transport future.",
          },
          {
            title: "How does EV charging stay efficient?",
            body: "Smart load management balances power across connected chargers so operations stay efficient and downtime stays low.",
          },
          {
            title: "Where can EV chargers be installed?",
            body: "EV chargers can be installed at homes, offices, commercial buildings, fleets, hotels, retail spaces, and public locations.",
          },
          {
            title: "How can I contact Shubh Power?",
            body: "Use phone number 7836992555 or email info@shubhpower.com to discuss EV charging solutions and site requirements.",
          },
        ]}
        stats={[
          { key: "chargers", label: "Chargers", value: "100+", unit: "EV chargers installed" },
          { key: "categories", label: "Categories", value: "4+", unit: "site categories covered" },
          { key: "monitoring", label: "Monitoring", value: "24/7", unit: "remote visibility" },
          { key: "coverage", label: "Coverage", value: "100%", unit: "smart charging focus" },
        ]}
        ctaPrimary={{ label: "Contact Us", to: "/contact" }}
        ctaSecondary={{ label: "Explore EV Solutions", to: "/ev-charging" }}
      />
    </Reveal>
    <Reveal><Promises /></Reveal>
    <Reveal><Projects /></Reveal>
    <Reveal><Testimonials /></Reveal>
    <Reveal><Brands /></Reveal>
    <Reveal><CTABanner /></Reveal>
  </div>
);

export default Home;
