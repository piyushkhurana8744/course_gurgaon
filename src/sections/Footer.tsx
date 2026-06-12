"use client";

import * as React from "react";
import { Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface FooterProps {
  showPricing?: boolean;
}

export const Footer = ({ showPricing = true }: FooterProps) => {
  const pathname = usePathname();

  const basePath = pathname.startsWith("/gurgaon") ? "/gurgaon" : "";

  const quickLinks = [
    { label: "Home", href: basePath || "/" },
    { label: "Highlights", href: `${basePath}/highlights` },
    { label: showPricing ? "Pricing Options" : "Courses", href: `${basePath}${showPricing ? "/pricing" : "/courses"}` },
    { label: "Testimonials", href: `${basePath}/testimonials` },
    { label: "FAQ Portal", href: `${basePath}/faq` },
  ];

  return (
    <footer className="bg-[#c90c0c] text-white pt-20 pb-10 text-left relative overflow-hidden">
      {/* Footer background glows */}
      <div className="absolute bottom-0 right-0 w-84 h-84 rounded-full bg-white/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/20">
          
          {/* Logo & Bio Column */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="bg-white px-3 py-1.5 rounded-xl flex items-center justify-center shadow-sm">
                <img
                  src="https://res.cloudinary.com/dnfz4jwam/image/upload/f_auto,q_auto,w_300/v1779780063/didm-logo-reg_gaianm.png"
                  alt="DIDM Logo"
                  width={150}
                  height={48}
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-red-100 leading-relaxed max-w-sm font-medium">
              We are Gurgaon's premier growth marketing academy training students, executives, and agency owners to lead performance campaigns using modern AI methodologies.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <Sparkles className="h-4 w-4 text-white animate-pulse" />
              <span className="text-xs font-bold text-white uppercase tracking-widest">
                ISO 9001:2015 Certified Campus
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest border-l-2 border-white pl-2">
              Explore
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-sm text-red-100 hover:text-white transition-colors duration-250 font-semibold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact Column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest border-l-2 border-white pl-2">
              Stay Updated
            </h4>
            <p className="text-xs text-red-100 leading-relaxed font-semibold">
              Get modern marketing updates, trends, and course discount options direct by contacting our Gurgaon admissions desk.
            </p>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 text-xs text-red-200 font-semibold">
          <p>© {new Date().getFullYear()} Gurgaon Digital Marketing Institute. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
