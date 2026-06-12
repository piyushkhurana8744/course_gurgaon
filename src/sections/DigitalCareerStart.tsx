"use client";

import * as React from "react";
import { Phone, Laptop, Share2 } from "lucide-react";

interface DigitalCareerStartProps {
  onOpenDemo?: (courseName: string) => void;
}

export const DigitalCareerStart = ({ onOpenDemo }: DigitalCareerStartProps) => {
  return (
    <section className="py-20 bg-white border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <h2 className="text-2xl sm:text-3.5xl font-black text-center text-[#c90c0c] mb-14 tracking-tight">
          Let Your Digital Career Begins Now....
        </h2>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Talk to a Career Advisor */}
          <div className="bg-white border border-zinc-150 rounded-2xl p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-[#c90c0c] mb-6">
              <Phone className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-black text-zinc-900 mb-2">
              Talk to a Career Advisor
            </h3>
            <p className="text-zinc-500 text-xs sm:text-sm font-semibold mb-1 max-w-xs">
              Get to understand what to learn & how it will help you
            </p>
            <div className="flex items-center justify-center gap-3 mb-6">
              {/* WhatsApp Link */}
              <a
                href="https://wa.me/919310076503?text=Hi!%20I%20am%20interested%20in%20the%20Digital%20Marketing%20Course%20at%20Gurgaon%20campus.%20Please%20share%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 hover:bg-emerald-100 hover:scale-105 transition-all shadow-2xs"
                title="WhatsApp Us"
              >
                <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </a>

              {/* Call Us Link */}
              <a
                href="tel:+919310076503"
                className="w-9 h-9 rounded-full bg-red-50 text-brand-red flex items-center justify-center border border-red-100 hover:bg-red-100 hover:scale-105 transition-all shadow-2xs"
                title="Call Advisor"
              >
                <Phone className="h-4.5 w-4.5" />
              </a>

              <span className="text-brand-red font-black text-base">
                09310076503
              </span>
            </div>
            <a
              href="tel:+919310076503"
              className="bg-[#c90c0c] hover:bg-[#b00a0a] active:scale-[0.98] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-8 py-3 rounded-full shadow-sm hover:shadow transition-all cursor-pointer inline-block text-center"
            >
              Talk to Advisor
            </a>
          </div>

          {/* Card 2: Attend a Free Demo Session */}
          <div className="bg-white border border-zinc-150 rounded-2xl p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-[#c90c0c] mb-6">
              <Laptop className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-black text-zinc-900 mb-2">
              Attend a Free Demo Session
            </h3>
            <p className="text-zinc-500 text-xs sm:text-sm font-semibold mb-8 max-w-xs">
              Get to understand what to learn & how it will help you
            </p>
            <button
              onClick={() => onOpenDemo?.("Free Demo Session")}
              className="bg-[#c90c0c] hover:bg-[#b00a0a] active:scale-[0.98] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-8 py-3 rounded-full shadow-sm hover:shadow transition-all cursor-pointer"
            >
              Registered for Free Demo
            </button>
          </div>

          {/* Card 3: Apply Now */}
          <div className="bg-white border border-zinc-150 rounded-2xl p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-[#c90c0c] mb-6">
              <Share2 className="h-8 w-8 fill-current" />
            </div>
            <h3 className="text-lg font-black text-zinc-900 mb-2">
              Apply Now
            </h3>
            <p className="text-zinc-500 text-xs sm:text-sm font-semibold mb-8 max-w-xs">
              Get to understand what to learn & how it will help you
            </p>
            <button
              onClick={() => onOpenDemo?.("Regular Admission")}
              className="bg-[#c90c0c] hover:bg-[#b00a0a] active:scale-[0.98] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-8 py-3 rounded-full shadow-sm hover:shadow transition-all cursor-pointer"
            >
              Enroll Now
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
