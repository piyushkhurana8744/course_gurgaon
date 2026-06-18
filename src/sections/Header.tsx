"use client";

import * as React from "react";
import { Menu, X, CalendarRange, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScroll } from "@/hooks/useScroll";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface HeaderProps {
  onOpenDemo: (courseName?: string) => void;
  showPricing?: boolean;
}

export const Header = ({ onOpenDemo, showPricing = true }: HeaderProps) => {
  const pathname = usePathname();
  const { isScrolled } = useScroll(20);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const basePath = pathname.startsWith("/gurgaon") ? "/gurgaon" : "";

  const navLinks = [
    { label: "Home", href: basePath || "/" },
    { label: "Highlights", href: `${basePath}/highlights` },
    { label: "Curriculum", href: `${basePath}/curriculum` },
    { 
      label: showPricing ? "Pricing" : "Courses", 
      href: `${basePath}${showPricing ? "/pricing" : "/courses"}` 
    },
    { label: "FAQ", href: `${basePath}/faq` },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const isMainPage = pathname === "/" || pathname === "/gurgaon";
    if (!isMainPage) {
      setMobileMenuOpen(false);
      return;
    }

    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === "#" || href === "/" || href === "/gurgaon" || href === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", href === "#" ? (basePath || "/") : href);
      return;
    }

    let targetId = "";
    if (href.endsWith("/highlights")) targetId = "highlights";
    else if (href.endsWith("/curriculum")) targetId = "curriculum";
    else if (href.endsWith("/pricing") || href.endsWith("/courses")) targetId = "pricing";
    else if (href.endsWith("/faq")) targetId = "faq";

    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 border-b border-zinc-200/85 backdrop-blur-md py-2 shadow-md"
            : "bg-white/85 border-b border-zinc-150 backdrop-blur-sm py-3 sm:py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logos Panel */}
            <div className="flex items-center">
              <a
                href={basePath || "/"}
                onClick={(e) => handleNavClick(e, basePath || "/")}
                className="flex items-center group cursor-pointer focus:outline-none"
              >
                <img
                  src="https://res.cloudinary.com/dnfz4jwam/image/upload/f_auto,q_auto,w_400/v1779780063/didm-logo-reg_gaianm.png"
                  alt="DIDM Logo"
                  width={250}
                  height={80}
                  className="h-13 sm:h-15 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
                />
              </a>

              {/* Vertical divider and MSME Logo */}
              <div className="h-8 sm:h-9 w-px bg-zinc-300 mx-4 hidden xs:block" />
              
              <img
                src="https://res.cloudinary.com/dnfz4jwam/image/upload/v1779780068/msme_logo_1_ylyjdr.png"
                alt="MSME Logo"
                width={120}
                height={40}
                className="h-8 sm:h-10 md:h-11 w-auto object-contain hidden xs:block"
              />
            </div>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-zinc-800 hover:text-brand-red hover:bg-zinc-50 text-[13px] sm:text-sm font-bold tracking-wide px-3 py-2 rounded-xl transition-all duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
                </a>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-5">
              <div className="flex items-center gap-3 border-r border-zinc-200 pr-5">
                {/* WhatsApp Link */}
                <a
                  href="https://wa.me/919310076503?text=Hi!%20I%20am%20interested%20in%20the%20Digital%20Marketing%20Course%20at%20Gurgaon%20campus.%20Please%20share%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-zinc-800 hover:text-emerald-600 transition-all duration-300 font-extrabold text-sm"
                  title="WhatsApp Us"
                >
                  <svg className="h-4.5 w-4.5 text-emerald-600 fill-current animate-pulse" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                </a>
                
                <span className="text-zinc-300 font-normal">/</span>
                
                {/* Phone Call Link */}
                <a
                  href="tel:+919310076503"
                  className="flex items-center gap-1.5 text-zinc-800 hover:text-brand-red transition-all duration-300 font-extrabold text-sm"
                  title="Call Us"
                >
                  <Phone className="h-4 w-4 text-brand-red animate-pulse" />
                  <span>09310076503</span>
                </a>
              </div>
              <Button
                variant="primary"
                size="md"
                className="flex items-center gap-2 shadow-md shadow-brand-red/15 py-3 px-5 text-sm"
                onClick={() => onOpenDemo("Request Callback")}
              >
                <Phone className="h-4 w-4" />
                <span>Request Callback</span>
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2.5 lg:hidden">
              {/* Phone Icon */}
              <a
                href="tel:+919310076503"
                className="p-2 text-brand-red bg-zinc-50 border border-zinc-200 rounded-lg hover:text-red-650 transition-colors"
                title="Call Advisor"
              >
                <Phone className="h-4.5 w-4.5" />
              </a>

              {/* WhatsApp Icon */}
              <a
                href="https://wa.me/919310076503?text=Hi!%20I%20am%20interested%20in%20the%20Digital%20Marketing%20Course%20at%20Gurgaon%20campus.%20Please%20share%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-emerald-600 bg-zinc-50 border border-zinc-200 rounded-lg hover:text-emerald-550 transition-colors"
                title="WhatsApp Advisor"
              >
                <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </a>

              {/* MSME logo shown on mobile next to menu if screen is small */}
              <img
                src="https://res.cloudinary.com/dnfz4jwam/image/upload/v1779780068/msme_logo_1_ylyjdr.png"
                alt="MSME Logo"
                width={80}
                height={28}
                className="h-7 w-auto object-contain xs:hidden mr-2"
              />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-zinc-650 hover:text-zinc-900 bg-zinc-50 border border-zinc-200 rounded-lg cursor-pointer"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dark overlay backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-30 lg:hidden backdrop-blur-xs"
            />
            {/* Drawer Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring" as const, bounce: 0.1, duration: 0.4 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white border-l border-zinc-200 z-30 p-6 flex flex-col justify-between lg:hidden pt-32"
            >
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest border-b border-zinc-150 pb-2">
                  Navigation
                </span>
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-zinc-700 hover:text-brand-red hover:bg-zinc-50 py-3 px-4 rounded-xl text-base font-semibold transition-all text-left"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="flex flex-col gap-3 mt-8 border-t border-zinc-200 pt-6">
                <div className="flex items-center justify-between gap-3 mb-1">
                  <a
                    href="tel:+919310076503"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-zinc-200 text-brand-red bg-zinc-50 hover:bg-zinc-100 font-extrabold text-sm transition-all"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Call Us</span>
                  </a>
                  <a
                    href="https://wa.me/919310076503?text=Hi!%20I%20am%20interested%20in%20the%20Digital%20Marketing%20Course%20at%20Gurgaon%20campus.%20Please%20share%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-zinc-200 text-emerald-600 bg-zinc-50 hover:bg-zinc-100 font-extrabold text-sm transition-all"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                </div>
                <Button
                  variant="primary"
                  size="md"
                  className="w-full flex items-center justify-center gap-2 font-bold"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDemo("Request Callback");
                  }}
                >
                  <Phone className="h-4 w-4" />
                  <span>Request Callback</span>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
