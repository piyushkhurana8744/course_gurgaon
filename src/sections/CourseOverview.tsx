"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Layers, BookMarked, Settings, BarChart3, Compass, CheckCircle2 } from "lucide-react";

export const CourseOverview = () => {
  const cards = [
    {
      icon: Layers,
      title: "Digital Marketing Course",
      bullets: ["50+ Modules", "500 Hrs Training"],
    },
    {
      icon: BookMarked,
      title: "Special Session",
      bullets: ["Case Study Discussion", "Dropshipping Concepts"],
    },
    {
      icon: Settings,
      title: "Tools & Software / LMS",
      bullets: ["Tools / Themes", "LMS"],
    },
    {
      icon: BarChart3,
      title: "Live Projects Exposure",
      bullets: ["2 Months Training", "Live Projects"],
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: Course Intro Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-12 flex flex-col gap-3">
          <h2 className="text-3xl sm:text-4xl font-black text-brand-red tracking-tight">
            Digital Marketing Course In Gurgaon
          </h2>
          <p className="text-sm sm:text-base font-semibold text-zinc-600 leading-relaxed max-w-3xl mx-auto">
            Learn digital skills to implement them on your website and social media to generate traffic and get maximum ROI. We are providing <span className="font-extrabold text-zinc-800">50+ modules</span> in our Masters in Digital Marketing Course—an all-in-one digital marketing program for Students, Working Professionals & Entrepreneurs.
          </p>
          <div className="w-16 h-1 bg-brand-red mx-auto rounded-full mt-1" />
        </div>

        {/* Part 2: Four Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[220px]"
              >
                {/* Red Icon Wrapper */}
                <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mb-4 shrink-0 shadow-2xs">
                  <IconComponent className="h-6 w-6 text-brand-red" />
                </div>

                {/* Card Title */}
                <h3 className="text-base font-extrabold text-brand-red uppercase tracking-wider mb-4 leading-snug">
                  {card.title}
                </h3>

                {/* Bullets List with Compass Icons */}
                <div className="w-full flex flex-col gap-2.5 items-start px-2">
                  {card.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex gap-2.5 items-center text-left">
                      <Compass className="h-4 w-4 text-zinc-400 shrink-0" />
                      <span className="text-sm font-semibold text-zinc-700">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Part 3: Master Title and Main Reasons Block */}
        <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 sm:p-10 text-center max-w-4xl mx-auto shadow-sm relative overflow-hidden">
          {/* Accent decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent" />
          
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight mb-2 uppercase leading-snug text-zinc-800">
            MASTER IN DIGITAL MARKETING COURSE <span className="text-brand-red">IN GURGAON</span>
          </h3>
          
          <p className="text-sm sm:text-base font-extrabold text-zinc-700 tracking-wide mb-5">
            <span className="text-brand-red">Hybrid</span> Training Program conducted by <span className="text-brand-red">DIDM</span>
          </p>
          
          <p className="text-sm sm:text-base font-semibold text-zinc-500 leading-relaxed max-w-3xl mx-auto">
            The main reasons to join digital marketing training program in Gurgaon. In DIDM Gurgaon training centre, you will get both <span className="font-extrabold text-zinc-800">In-Class</span> and <span className="font-extrabold text-zinc-800">Online</span> digital marketing training sessions. DIDM Gurgaon covers almost <span className="font-extrabold text-brand-red">50+ digital marketing modules</span> specially designed to fulfill the market needs.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 pt-6 border-t border-zinc-200 text-zinc-400 text-xs font-bold uppercase tracking-wider">
            <span className="flex items-center gap-1.5 text-zinc-600">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Practical Exposure
            </span>
            <span className="flex items-center gap-1.5 text-zinc-600">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Agency Projects
            </span>
            <span className="flex items-center gap-1.5 text-zinc-600">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Live Campaign Budgets
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
