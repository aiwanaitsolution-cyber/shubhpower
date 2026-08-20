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
    <Reveal><SmartSavings /></Reveal>
    <Reveal><Promises /></Reveal>
    <Reveal><Projects /></Reveal>
    <Reveal><Testimonials /></Reveal>
    <Reveal><Brands /></Reveal>
    <Reveal><SmartSavings /></Reveal>
    <Reveal><CTABanner /></Reveal>
  </div>
);

export default Home;
