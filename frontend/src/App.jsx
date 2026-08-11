import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFab from "./components/WhatsAppFab";
import ScrollToTopFab from "./components/ScrollToTopFab";
import SiteAssistantDock from "./components/SiteAssistantDock";
import CookieBanner from "./components/CookieBanner";
import Home from "./pages/Home";
import "./App.css";

// Route-level code-splitting: each page loads as its own chunk on demand.
const AboutPage = lazy(() => import("./pages/AboutPage"));
const SolarPage = lazy(() => import("./pages/SolarPage"));
const EVPage = lazy(() => import("./pages/EVPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const BlogsPage = lazy(() => import("./pages/BlogsPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));

const Layout = ({ children }) => (
  <div className="App bg-white text-[#0F1F14] overflow-x-hidden">
    <Navbar />
    <main className="pt-[88px]">{children}</main>
    <Footer />
    <ScrollToTopFab />
    <SiteAssistantDock />
    <WhatsAppFab />
    <CookieBanner />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div className="min-h-[60vh]" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/solar" element={<SolarPage />} />
            <Route path="/ev-charging" element={<EVPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blogs/:slug" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
