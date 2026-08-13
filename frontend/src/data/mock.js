const live = "/images/live/";
const solarNew = "/images/hero/New%20folder/";

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Solar Power Solutions", to: "/solar" },
  { label: "EV Charging Solutions", to: "/ev-charging" },
  { label: "Projects", to: "/projects" },
  { label: "Blogs", to: "/blogs" },
  { label: "Contact Us", to: "/contact" },
];

export const brand = {
  name: "Shubh Power",
  full: "Shubh Power Solutions Pvt Ltd",
  tagline: "For a Brighter Future",
  vision: "To lead the global shift toward clean energy through innovative technologies.",
  mission: "To contribute in achieving zero carbon footprint by providing affordable and sustainable power solutions making the energy landscape resilient.",
  values: "Integrity, Customer-Focus and Excellence are our cornerstones of business. We bring reliable and premium quality solutions with a commitment to efficiency and effectiveness.",
  intro: "Shubh Power Solutions started with Solar Energy Solutions and gradually progressed to include Turnkey Solutions in EV Charging Infrastructure.",
  logo: "/logo.png",
};

export const heroImage = `${live}Untitled-design-9-rknh6lx7k80ll3dvtw5gszwkp4fhgv6li3c86qt6ko.png`;

export const stats = [
  { value: "2010", label: "solar business established" },
  { value: "146+", label: "happy customers" },
  { value: "30+ MW", label: "executed solar projects" },
  { value: "100+", label: "EV chargers installed" },
];

export const promises = [
  { title: "Zero-hassle installation", body: "At Shubh Power Solutions Pvt. Ltd., we specialize in turnkey power solutions from design and installation to maintenance." },
  { title: "Maximum efficiency", body: "Our team ensures maximum efficiency across solar power projects and EV charging infrastructure." },
  { title: "Subsidies and net metering", body: "We help clients with subsidies, net metering and the process needed to make solar adoption simpler." },
  { title: "24/7 customer support", body: "The live site states 24/7 customer support as part of Shubh Power's product and innovation benefits." },
];

export const actionline = [
  { title: "Environmental Sensitivity", body: "A Shubh Power actionline from the About Us page.", bg: "#E6F4E9" },
  { title: "Personalized Solutions", body: "A Shubh Power actionline from the About Us page.", bg: "#FDECD3" },
  { title: "Performance Measures", body: "A Shubh Power actionline from the About Us page.", bg: "#E1EBF9" },
];

export const solarSolutions = [
  {
    id: "epc",
    title: "EPC Solar Solutions",
    tag: "SP1",
    subtitle: "Solar Engineering, Procurement and Construction - EPC",
    description: "We provide complete EPC services for efficient, cost-effective solar power project development and installation.",
    bg: "#F0E7D8",
    image: `${solarNew}EPC%20Solar%20Solutions.png`,
    features: [
      "Our core expertise is Solar Engineering, Procurement and Construction - EPC.",
      "At Shubh Power Solutions Pvt. Ltd., we believe that solar energy is not just a technology - it is an upgrade.",
      "Solar power stands out as the most reliable, affordable, and future-proof choice.",
      "Read of Why to Choose Solar Energy?",
    ],
  },
  {
    id: "plant",
    title: "Solar Power Plant",
    tag: "SP2",
    subtitle: "Reliable renewable energy",
    description: "Harness the sun's power with efficient solar plants for reliable, renewable energy in all settings.",
    bg: "#E6F4E9",
    image: `${solarNew}Solar%20Power%20Plant.png`,
    features: [
      "Solar power is clean, green, and renewable.",
      "Solar energy helps combat climate change by significantly reducing greenhouse gas emissions.",
      "Businesses can harness solar energy effectively in regions where sunlight is abundant throughout the year.",
      "Solar power is a smart investment for companies aiming to lower operational costs while supporting environmental sustainability.",
    ],
  },
  {
    id: "panels",
    title: "Solar Panels",
    tag: "SP3",
    subtitle: "High-performance solar panels",
    description: "High-performance solar panels designed to maximize energy output and reduce your electricity bills sustainably.",
    bg: "#E1EBF9",
    image: `${solarNew}Solar%20Panels.png`,
    features: [
      "Solar PV modules are strategically installed on building rooftops to maximize exposure to sunlight throughout the day.",
      "When sunlight hits the PV modules, it is converted into Direct Current electricity.",
      "The inverter converts Direct Current into Alternating Current electricity.",
      "Facility owners have easy access to real-time data, ensuring complete transparency and control.",
    ],
  },
  {
    id: "generator",
    title: "Solar Generators",
    tag: "SP4",
    subtitle: "Portable clean power",
    description: "Portable solar generators deliver clean, efficient power anywhere, perfect for remote locations and off-grid use.",
    bg: "#FDECD3",
    image: `${solarNew}Solar%20Generators.png`,
    features: [
      "Solar energy ensures a reliable backup source.",
      "Solar energy systems complement your existing utility connection.",
      "Seamless energy supply helps ensure uninterrupted power.",
      "Long-term savings make solar a financially sound and environmentally responsible choice.",
    ],
  },
  {
    id: "bess",
    title: "BESS",
    tag: "SP5",
    subtitle: "Battery energy storage systems",
    description: "Store excess solar energy with advanced BESS, ensuring reliable backup power and optimized energy use.",
    bg: "#E6F4E9",
    image: `${solarNew}BESS.png`,
    features: [
      "Advanced storage helps optimize energy use.",
      "Backup power supports uninterrupted supply.",
      "Solar systems reduce the amount of electricity drawn from the grid.",
      "Solar supports global efforts to reduce carbon emissions.",
    ],
  },
  {
    id: "pv",
    title: "Solar PV Systems",
    tag: "SP6",
    subtitle: "Sunlight to electricity",
    description: "Efficient Solar PV Systems convert sunlight into electricity, reducing costs and environmental impact sustainably.",
    bg: "#F0E7D8",
    image: `${solarNew}Solar%20PV%20Systems.png`,
    features: [
      "Solar photovoltaic technology is a reliable and efficient solution for commercial and industrial energy needs.",
      "Generated electricity is used to power the facility.",
      "Surplus electricity can be exported back to the grid.",
      "All generated electricity is tracked for transparency and control.",
    ],
  },
];

export const evCategories = [
  {
    id: "fleet",
    title: "Fleet and Logistics",
    tag: "EV1",
    subtitle: "Logistics companies, car rental providers, ride-sharing platforms, and delivery businesses",
    description: "At Shubh Power Solutions Pvt. Ltd., we enable logistics companies, car rental providers, ride-sharing platforms, and delivery businesses to efficiently manage their EV fleets.",
    bg: "#F0E7D8",
    image: "/images/hero/evp/fleet_logistics.png",
    features: ["Depot Charging Infrastructure", "Remote Monitoring & Smart Diagnostics", "Cost-Optimized Charging Plans", "Customized Fleet Charging Solutions"],
  },
  {
    id: "residential",
    title: "Residential Communities",
    tag: "EV2",
    subtitle: "Individual homes, apartment complexes, gated communities, and housing societies",
    description: "Shubh Power Solutions Pvt. Ltd. provides smart and convenient EV charging solutions designed for individual homes, apartment complexes, gated communities, and housing societies.",
    bg: "#E6F4E9",
    image: "/images/hero/evp/residential_communities.jpeg",
    features: ["Dedicated Charging Stations", "Quick & Hassle-Free Installation", "Community Charging Solutions", "Load Management Systems"],
  },
  {
    id: "commercial",
    title: "Commercial Buildings",
    tag: "EV3",
    subtitle: "Businesses, retail outlets, shopping malls, office complexes, and hospitality establishments",
    description: "We provide reliable EV charging infrastructure for businesses, retail outlets, shopping malls, office complexes, and hospitality establishments.",
    bg: "#E1EBF9",
    image: "/images/hero/evp/commercial_building.jpeg",
    features: ["Customer-Facing Charging Stations", "Workplace Charging Programs", "Energy Optimization & Smart Monitoring", "Customized Charging Infrastructure"],
  },
  {
    id: "public",
    title: "Public Infrastructure",
    tag: "EV4",
    subtitle: "Cities, public spaces, streets, parking areas, and highways",
    description: "Shubh Power Solutions Pvt. Ltd. collaborates with municipalities and public authorities to develop accessible and reliable EV charging networks across cities and public spaces.",
    bg: "#E6F4E9",
    image: "/images/hero/evp/public_infra.jpeg",
    features: ["High-Speed Public Charging Stations", "Public Transit Charging Integration", "EV Charging Network Expansion", "Support for Grants & Incentive Programs"],
  },
  {
    id: "retail",
    title: "Retail and Hospitality",
    tag: "EV5",
    subtitle: "Retail outlets, shopping malls, hotels, restaurants, and hospitality businesses",
    description: "We help retail outlets, shopping malls, hotels, restaurants, and hospitality businesses enhance customer experience by integrating reliable EV charging infrastructure.",
    bg: "#FDECD3",
    image: "/images/hero/evp/retail_hospitality.jpeg",
    features: ["Customer Convenience Charging Stations", "Smart Payment & User-Friendly Access", "Increased Customer Engagement", "Flexible & Scalable Installations"],
  },
];

export const smartBenefits = [
  { title: "Money Saving", body: "Switching to solar can generate electricity and cut down utility costs by up to 40-50%." },
  { title: "Energy Saving", body: "The smartest and best solution for renewable energy." },
  { title: "Renewable Energy", body: "Solar power is clean, green, and renewable, meaning it does not release harmful carbon emissions." },
  { title: "Trust & Warranty", body: "Solar panels require very little maintenance and have a lifespan of 25+ years." },
];

export const advantages = [
  { title: "Reduced Dependency on the Grid", body: "The solar system generates a significant portion of the facility's energy needs, reducing electricity drawn from the grid." },
  { title: "Seamless Energy Supply", body: "When the solar facility cannot produce sufficient energy, the balance is sourced from the grid or backup diesel generator." },
  { title: "Dual Billing", body: "The facility receives one bill for lower-cost solar electricity and another for remaining grid-supplied energy." },
  { title: "Long-Term Savings", body: "Businesses can achieve substantial reductions in monthly energy expenses." },
];

export const savingsTabs = [
  { key: "solar", label: "Solar", value: "40-50", unit: "% utility cost cut" },
  { key: "customer", label: "Customers", value: "146+", unit: "happy customers" },
  { key: "solar-executed", label: "Solar MW", value: "30+", unit: "MW executed solar projects" },
  { key: "ev-chargers", label: "EV Chargers", value: "100+", unit: "EV chargers installed" },
];

export const solarProjects = [
  { title: "Hissar City, Haryana", location: "Hissar City, Haryana", tag: "UTILITY", capacity: "15 MW Project", year: "2022", image: `${live}10nlc_solar.jpg` },
  { title: "Neemrana, Rajasthan", location: "Neemrana, Rajasthan", tag: "GROUND-MOUNT", capacity: "3.5 MW Project", year: "2023", image: `${live}Depositphotos_172716044_S.jpg` },
  { title: "Khuri, Sikar, Rajasthan", location: "Khuri, Sikar, Rajasthan", tag: "GROUND-MOUNT", capacity: "2.5 MW Project", year: "2022", image: `${live}1mw-solar-power-plant-panorama.jpeg` },
  { title: "Bathinda (PB)", location: "Bathinda (PB)", tag: "ROOFTOP", capacity: "1 MW, Institutional", year: "2023", image: `${live}1MW-Institutional-Bathinda-PB.jpg` },
  { title: "Bikaner, Rajasthan", location: "Bikaner, Rajasthan", tag: "UTILITY", capacity: "500KW Project", year: "2021", image: `${live}solar-pv-net-metering-roof-top-project-rajasthan-india-1-e1726400177363.jpg` },
  { title: "Ganganagar, Rajasthan", location: "Ganganagar, Rajasthan", tag: "ROOFTOP", capacity: "120KW Project", year: "2022", image: `${live}IND-Rooftop-Solar-1.jpg` },
  { title: "Jaipur, Rajasthan", location: "Jaipur, Rajasthan", tag: "ROOFTOP", capacity: "100KW Project", year: "2023", image: `${live}WhatsApp-Image-2024-07-02-at-18.45.44_14e0dbce-1.jpg` },
  { title: "Badli, Delhi", location: "Badli, Delhi", tag: "ROOFTOP", capacity: "100KW Project", year: "2021", image: `${live}IMG-20250901-WA0025.jpg` },
];

export const evProjects = [
  { title: "Amrapali Zodiac", location: "Noida", tag: "RESIDENTIAL CPO", capacity: "EV CPO completed project", year: "2024", image: `${live}WhatsApp-Image-2026-03-11-at-12.13.22-PM.jpeg` },
  { title: "DLF", location: "Gurugram", tag: "COMMERCIAL CPO", capacity: "EV CPO completed project", year: "2024", image: `${live}Untitled-design-2.png` },
  { title: "Gulab Garh Palace", location: "Rajasthan", tag: "HOSPITALITY CPO", capacity: "EV CPO completed project", year: "2023", image: `${live}WhatsApp-Image-2025-12-02-at-3.28.56-PM-1.jpg` },
  { title: "Manvar Hotel", location: "Rajasthan", tag: "HOSPITALITY CPO", capacity: "EV CPO completed project", year: "2022", image: `${live}WhatsApp-Image-2025-12-02-at-3.29.22-PM.jpg` },
];

export const solarBrands = [
  { name: "Waaree", logo: `${live}Logo-6-300x300.png` },
  { name: "Luminous Solar", logo: `${live}Luminous-300x300.png` },
  { name: "ReNew Power", logo: `${live}Renew-300x300.png` },
  { name: "Emmvee", logo: `${live}Emmvee-300x300.png` },
  { name: "Vikram Solar", logo: `${live}Logo-1-300x300.png` },
  { name: "Rayzon Solar", logo: `${live}Logo-3-300x300.png` },
  { name: "Havells", logo: `${live}Logo-300x300.png` },
  { name: "Tata Power", logo: `${live}Logo-4-300x300.png` },
];

export const evBrands = [
  { name: "Lubi EV Solutions", logo: `${live}Adani-EV-Charging-2-300x300.png` },
  { name: "Exicom Power Solutions", logo: `${live}EV-Partners-1-300x300.png` },
  { name: "Adani EV Charging", logo: `${live}EV-Partners-2-300x300.png` },
  { name: "TruePower by JioThings", logo: `${live}EV-Partners-3-300x300.png` },
  { name: "Delta", logo: `${live}EV-Partners-300x300.png` },
  { name: "Siemens", logo: `${live}Siemens-300x300.png` },
];

export const ongoingSolarProjects = [];
export const ongoingEvProjects = [];

export const company = {
  name: "Shubh Power Solutions",
  short: "SPS",
  since: 2010,
  email: "info@shubhpower.com",
  phone: "8527007680",
  whatsapp: "8527276868",
  address: "B-681, Shushant Lok Phase 1, Sector 43, Gurugram, 122001",
  gstin: "06ABPCS4833A1ZE",
};

export const testimonials = [
  { quote: "Solar power transformed our farm! Lower bills, seamless installation, and outstanding support. A smart investment that's paying off in more ways than one.", name: "Naresh Modi", role: "Client of Company" },
  { quote: "Our solar plant reduced costs and enhanced our sustainability. Excellent service and support throughout the process. A smart business move that exceeded expectations.", name: "Inder Singh Shekhawat", role: "Client of Company" },
  { quote: "We're thrilled with our solar panels! Lower energy bills, seamless installation, and eco-friendly. The team was professional and exceeded our expectations. Highly recommended!", name: "Bhanwer Lal Swami", role: "Client of Company" },
];

export const values = [
  { title: "Integrity", body: "Integrity is one of Shubh Power's cornerstones of business.", bg: "#E6F4E9" },
  { title: "Customer-Focus", body: "Customer-Focus is one of Shubh Power's cornerstones of business.", bg: "#E1EBF9" },
  { title: "Excellence", body: "Excellence is one of Shubh Power's cornerstones of business.", bg: "#FDECD3" },
  { title: "Efficiency", body: "Shubh Power brings reliable and premium quality solutions with a commitment to efficiency and effectiveness.", bg: "#F0E7D8" },
];

export const timeline = [
  { year: "2010", title: "Founded with solar vision", body: "Shubh Power Solutions started with Solar Energy Solutions and gradually progressed to include Turnkey Solutions in EV Charging Infrastructure." },
  { year: "2014", title: "First 500 kW rooftop", body: "Delivered our first large-scale commercial rooftop for a cooperative society in Delhi-NCR." },
  { year: "2017", title: "1 MW milestone", body: "Commissioned our first megawatt-scale institutional plant in Bathinda, Punjab." },
  { year: "2020", title: "Utility-scale expansion", body: "Broke ground on multiple MW-scale ground-mount plants across Rajasthan and Haryana." },
  { year: "2022", title: "15 MW Hissar", body: "Commissioned our largest solar plant to date - 15 MW in Hissar, Haryana." },
  { year: "2024", title: "EV CPO launch", body: "Launched our EV CPO vertical - 40+ charging points live across DLF, Amrapali and Puri properties." },
  {
    year: "2025",
    title: "EV CPO scale-up",
    body: "Shubh Power moved from license to execution with a fast sequence of EV milestones and early-scale deployments.",
    highlight: "100+ EV Chargers Installed",
    milestones: [
      { date: "March 2025", text: "Est. with Electric License" },
      { date: "June 2025", text: "First CPO charging station for a residential society" },
      { date: "July 2025", text: "Tie-up with OEM & Deploying Team" },
      { date: "August 2025", text: "First EV charging installation with Solar+BESS" },
    ],
  },
  {
    year: "2026-27",
    title: "Next EV expansion wave",
    body: "The next phase focuses on scale, repeatability and denser charging coverage across more sites.",
    highlight: "300+ EV Chargers Planned",
    milestones: [
      { date: "August 2026", text: "Total no. of EV charger installed are 100+" },
      { date: "FY 2026-27", text: "Total no. of EV chargers expected to install originally are 300+" },
    ],
  },
];

export const leadership = [
  { name: "Bhavy Aggarwal", role: "Founder & CEO", group: "partners", image: `${live}WhatsApp-Image-2024-06-27-at-14.55.57_5ea9c002-e1734601461367.jpg` },
  { name: "Subhash Chandra", role: "Co founder & COO", group: "partners", image: `${live}Copy-of-1.png` },
  { name: "Anchal Andrews", role: "Business Strategist", group: "partners", image: "/images/hero/anchal-andrews.jpeg" },
];

export const operationalTeam = [
  { name: "Mahender Kumar", role: "Head of Project Execution", meta: "", image: `${live}WhatsApp-Image-2026-01-22-at-8.00.51-PM-1.jpeg` },
  { name: "Nishant Chauhan", role: "Operation Head", meta: "EV CPO", image: `${live}image-2-e1771485080926-rjdgjbfv0tyc2sb05qqeuizzx69ok5os7mju075a6o.png` },
  { name: "Anchal Andrews", role: "Business Strategist", meta: "", image: `${live}WhatsApp-Image-2026-02-18-at-11.23.43-AM-e1771480842140.jpeg` },
  { name: "Ankit Prajapat", role: "Site Manager", meta: "", image: "/images/hero/ankit-prajapat.jpeg" },
  { name: "Harsh Aggarwal", role: "Chartered Accountant", meta: "", image: `${live}IMG_0959.JPG.jpeg` },
];

export const processSteps = [
  { n: "01", title: "Design", body: "Shubh Power offers end-to-end services for EV charging needs, including design." },
  { n: "02", title: "Installation", body: "EV charging infrastructure is installed for residential, commercial, public, fleet, and hospitality use cases." },
  { n: "03", title: "Maintenance", body: "Maintenance is included in Shubh Power's end-to-end EV charging services." },
  { n: "04", title: "Monitoring", body: "Remote monitoring and smart diagnostics help optimize fleet usage and uptime." },
];

export const faqs = [
  { q: "Why choose solar energy?", a: "Solar energy is a renewable and environmentally friendly energy source that produces no harmful pollutants." },
  { q: "How do solar panels work?", a: "When sunlight hits PV modules, it is converted into Direct Current electricity, then an inverter converts it into Alternating Current electricity." },
  { q: "Does solar disconnect me from my utility provider?", a: "Switching to solar does not mean disconnecting from your current utility provider. The solar system complements your existing connection." },
  { q: "How does solar reduce costs?", a: "The solar system generates a significant portion of the facility's energy needs, reducing electricity drawn from the grid." },
  { q: "What EV sectors does Shubh Power serve?", a: "Fleet and Logistics, Residential Communities, Commercial Buildings, Public Infrastructure, and Retail and Hospitality." },
  { q: "How can I contact Shubh Power?", a: "Use phone number 8527007680 or email info@shubhpower.com." },
];
