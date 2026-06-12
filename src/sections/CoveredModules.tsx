"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, BookOpen, Layers, Target, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CoveredModulesProps {
  onOpenDemo: (courseName: string) => void;
}

export const CoveredModules = ({ onOpenDemo }: CoveredModulesProps) => {
  const categories = [
    {
      title: "Foundation & Search Optimization",
      icon: Layers,
      modules: [
        "Ice Breaker for Digital Marketing Overview",
        "Digital Marketing Strategy",
        "Web Designing with no codes",
        "Practical Approach",
        "Email Marketing",
        "Inbound Marketing",
        "Search Engine Optimization (SEO)",
        "Google Webmaster Tool",
        "Search Engine Algorithms",
        "Local Business Listing",
        "Google Analytics",
        "Content Marketing"
      ]
    },
    {
      title: "Campaigns & Lead Generation",
      icon: Target,
      modules: [
        "Competitors Analysis",
        "Social Media Marketing",
        "Video Marketing Fundamentals",
        "E-commerce Marketing",
        "Mobile Marketing",
        "Optimization Conversion Rate",
        "Google Adwords",
        "Online Display Advertising",
        "Online Reputation Management (ORM)",
        "Creating Marketing Strategy",
        "Lead Generation for Business"
      ]
    },
    {
      title: "Monetization & Career Prep",
      icon: Briefcase,
      modules: [
        "Live Practical Session",
        "Case Study Discussion",
        "Digital Marketing Interview Preparation",
        "Blogging",
        "Adsense",
        "Affiliate Marketing",
        "Freelancer Pushups",
        "Search Engine & Social Marketing Parameters",
        "Remarketing Concept",
        "Other Modules"
      ]
    }
  ];

  return (
    <section className="py-20 bg-zinc-50/50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-black text-brand-red uppercase tracking-widest flex items-center justify-center gap-1.5">
            <BookOpen className="h-4 w-4" /> Course Curriculum
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-zinc-800">
            Delhi Institute of Digital Marketing <span className="text-brand-red">(DIDM) in Gurgaon</span>
          </h2>
          <p className="text-base sm:text-lg font-bold text-zinc-650 max-w-3xl mx-auto leading-normal">
            Covers <span className="text-brand-red font-black">50+ modules</span> that you will learn in our Master in Digital Marketing training program in Gurgaon.
          </p>
          <div className="w-16 h-1 bg-brand-red mx-auto rounded-full mt-2" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14 items-stretch">
          {categories.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 text-left shadow-sm flex flex-col justify-between hover:shadow-lg transition-all duration-300"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 pb-5 border-b border-zinc-100 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-brand-red shrink-0 shadow-3xs">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-zinc-850 tracking-tight leading-snug">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Modules Checklist */}
                  <div className="space-y-3.5">
                    {cat.modules.map((mod, modIdx) => (
                      <div key={modIdx} className="flex gap-3 items-start">
                        <div className="w-5 h-5 rounded-full bg-red-50 border border-red-100 flex items-center justify-center shrink-0 mt-0.5 shadow-3xs">
                          <CheckCircle2 className="h-3 w-3 text-brand-red fill-red-50/10 stroke-[2.5px]" />
                        </div>
                        <span className="text-sm font-semibold text-zinc-700 leading-snug">
                          {mod}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => onOpenDemo("Download Syllabus")}
            className="bg-brand-red hover:bg-red-650 text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-xl shadow-md cursor-pointer transition-all"
          >
            Download Detailed Syllabus
          </Button>
        </div>

      </div>
    </section>
  );
};
