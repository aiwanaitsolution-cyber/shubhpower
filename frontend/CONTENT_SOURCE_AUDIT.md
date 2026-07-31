# Content Source Audit

## Project Audit

- Editable source folder: `src`
- Framework: Vite + React + React Router
- Routes found: `/`, `/about`, `/solar`, `/ev-charging`, `/projects`, `/blogs`, `/blogs/:slug`, `/contact`, `/privacy`
- Shared components found: `Navbar`, `Footer`, `Hero`, `About`, `SolarSolutions`, `EVCharging`, `SmartSavings`, `Projects`, `Brands`, `Testimonials`, `FAQ`, `CTABanner`, `PageHero`
- Primary data files: `src/data/mock.js`, `src/data/blogs.js`
- Compiled files not edited: sibling `shubhpower-dist`, `shubhpowerdist`, `shubhpowerpreview.html`, `shubhpower-new.html`

## Home

- Local page/source: `/`, `src/pages/Home.jsx`, `src/components/*`, `src/data/mock.js`
- Live source URL: `https://shubhpower.com/`
- Content replaced: hero copy, about intro, solar solution names, EV solution names, smart savings content, completed project names, testimonials, partner brands
- Images used: live homepage imagery and live partner logo assets downloaded to `public/images/live`
- Image source URL: `https://shubhpower.com/wp-content/uploads/...`
- Type: exact copy where live text exists; formatting-only corrections for local template fit

## About Us

- Local page/source: `/about`, `src/pages/AboutPage.jsx`, `src/data/mock.js`
- Live source URLs: `https://shubhpower.com/about-us/`, `https://shubhpower.com/our-team/`
- Content replaced: company intro, Our Vision, Our Mission, Our Values, product benefits, testimonials, team names and roles
- Images used: live About and Team page images downloaded to `public/images/live`
- Type: exact names/roles/contact text; concise formatting where local card layout requires shorter labels

## Solar Power Solutions

- Local page/source: `/solar`, `src/pages/SolarPage.jsx`, `src/data/mock.js`
- Live source URLs: `https://shubhpower.com/services/`, `https://shubhpower.com/why-choose-solar-energy/`, `https://shubhpower.com/how-do-solar-panels-work/`, `https://shubhpower.com/reduce-your-costs/`
- Content replaced: Solar EPC, Solar Power Plant, Solar Panels, Solar Generators, BESS, Solar PV Systems, benefits and process text
- Images used: live solar service/detail images downloaded to `public/images/live`
- Type: exact copy or shortened extract to fit existing feature rows

## EV Charging Solutions

- Local page/source: `/ev-charging`, `src/pages/EVPage.jsx`, `src/data/mock.js`
- Live source URLs: `https://shubhpower.com/for-fleet-and-logistics/`, `https://shubhpower.com/for-residential-communities/`, `https://shubhpower.com/for-commercial-buildings/`, `https://shubhpower.com/for-public-infrastructure/`, `https://shubhpower.com/for-retail-and-hospitality/`
- Content replaced: EV category titles, descriptions, feature headings and CTA labels
- Images used: live EV category images downloaded to `public/images/live`
- Type: exact copy or shortened extract to fit existing feature rows

## Projects

- Local page/source: `/projects`, `src/pages/ProjectsPage.jsx`, `src/data/mock.js`
- Live source URLs: `https://shubhpower.com/our-projects/`, `https://shubhpower.com/ev-cpo-projects/`
- Content replaced: all generated solar and EV project cards
- Images used: live project images downloaded to `public/images/live`
- Type: exact project names, locations and capacities where present

## Blogs

- Local page/source: `/blogs`, `/blogs/:slug`, `src/pages/BlogsPage.jsx`, `src/pages/BlogPostPage.jsx`, `src/data/blogs.js`
- Live source URLs: WordPress post URLs from `https://shubhpower.com/wp-json/wp/v2/posts?per_page=100`
- Content replaced: stock thumbnail URLs with live featured images downloaded to `public/images/live/blogs`
- Type: existing local article text preserved where already imported from live; images corrected to live assets

## Contact Us

- Local page/source: `/contact`, `src/pages/ContactPage.jsx`, `src/data/mock.js`
- Live source URL: `https://shubhpower.com/contact/`
- Content replaced: phone, email, address, GSTIN, labels, placeholders, CTA text, office/map text
- Exact live details: `8527007680`, `info@shubhpower.com`, `B-681, Shushant Lok Phase 1, Sector 43, Gurugram, 122001`, `GSTIN: 06ABPCS4833A1ZE`
- Type: exact copy

## Header And Footer

- Local source: `src/components/Navbar.jsx`, `src/components/Footer.jsx`
- Live source URL: `https://shubhpower.com/` and footer/menu snippets from live pages
- Content replaced: navigation labels/dropdown items, footer intro, quick links, solutions links, contact details, copyright/GSTIN
- Removed: fake social links and fake legal links not verified on the live footer

## Partner Logos

- Local source: `src/components/Brands.jsx`, `src/data/mock.js`
- Live source URL: `https://shubhpower.com/`
- Solar logos added: Waaree, Luminous Solar, ReNew Power, Emmvee, Vikram Solar, Rayzon Solar, Havells, Tata Power
- EV logos added: Lubi EV Solutions, Exicom Power Solutions, Adani EV Charging, TruePower by JioThings, Delta, Siemens
- Image source URL: live WordPress media URLs under `https://shubhpower.com/wp-content/uploads/2026/03/`
- Type: exact live logo assets

