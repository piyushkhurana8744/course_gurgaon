"use client";

import * as React from "react";
import { Accordion } from "@/components/ui/accordion";
import { FAQ_DATA } from "@/data/content";

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-white border-b border-zinc-200 relative">
      {/* Background glowing blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-red/5 blur-3xl rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold text-brand-red uppercase tracking-widest">
            FAQ Help Desk
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-800 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-zinc-550">
            Find answers to commonly asked questions about course fees, structures, eligibility, schedules, and placements.
          </p>
        </div>

        {/* Accordions */}
        <div className="max-w-3xl mx-auto">
          <Accordion items={FAQ_DATA} />
        </div>

      </div>
    </section>
  );
};
