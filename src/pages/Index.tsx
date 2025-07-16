
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import YoutubeSection from "@/components/YoutubeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "YouTube", href: "#youtube" },
  { label: "Contact", href: "#contact" },
];

const Index = () => {
  // Track the current section for active link highlighting
  const [activeSection, setActiveSection] = useState("hero");
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.matches("a[href^='#']")) {
        const href = e.target.getAttribute("href");
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          window.location.hash = href;
        }
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-midnight-blue text-white font-roboto-condensed">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-30 bg-midnight-blue/80 backdrop-blur border-b border-neon-sky-blue/20 shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <span className="text-2xl font-bold text-white tracking-tight font-roboto-condensed drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">AI with Alex</span>
          {isMobile ? (
            <div className="relative">
              <button
                className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-neon-sky-blue"
                onClick={() => setMenuOpen((open) => !open)}
                aria-label="Open navigation menu"
              >
                {/* Hamburger icon */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </svg>
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-midnight-blue border border-neon-sky-blue/20 rounded shadow-lg z-50 animate-fade-in">
                  <ul className="flex flex-col">
                    {NAV_LINKS.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className={`block px-4 py-3 rounded transition-colors duration-200 font-medium hover:text-neon-sky-blue hover:bg-neon-sky-blue/10 ${
                            activeSection === link.href.replace("#", "") ? "text-neon-sky-blue bg-neon-sky-blue/10" : "text-gray-200"
                          }`}
                          onClick={() => setMenuOpen(false)}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <ul className="flex gap-2 md:gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`px-3 py-2 rounded transition-colors duration-200 font-medium hover:text-neon-sky-blue hover:bg-neon-sky-blue/10 ${
                      activeSection === link.href.replace("#", "") ? "text-neon-sky-blue bg-neon-sky-blue/10" : "text-gray-200"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
      <div>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <YoutubeSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
