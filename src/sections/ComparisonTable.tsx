"use client";

import * as React from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ComparisonTableProps {
  onOpenDemo?: (courseName: string) => void;
  showPricing?: boolean;
}

export const ComparisonTable = ({ onOpenDemo, showPricing = true }: ComparisonTableProps) => {
  const courses = [
    {
      title: "ADVANCED COURSE",
      headerBg: "bg-zinc-900 text-white",
      borderColor: "border-zinc-200",
      price: "₹ 52250/-",
      features: [
        { text: "50+ Modules (140+ Hrs Training)", checked: true },
        { text: "E-Notes", checked: true },
        { text: "Internship / Placement", checked: true },
        { text: "Live Projects", checked: true },
        { text: "27 Globally Recognised (Certification)", checked: true },
        { text: "Live Q/A Forum", checked: false },
        { text: "Experience Certification", checked: false },
        { text: "On Board Training (2 Months)", checked: false },
        { text: "Hykoon Themes Membership", checked: false },
        { text: "Tools & Software", checked: true },
        { text: "LMS Recorded (Basic)", checked: true },
        { text: "E-Books", checked: true },
        { text: "Case Studies & Capstone Projects", checked: true },
        { text: "Graphic Design Course (Recorded / Live) Elementary Module", checked: false },
        { text: "Creative Content Writing (Recorded / Live) Fundamentals Module", checked: false },
        { text: "Skill Shiksha Certification", checked: false }
      ]
    },
    {
      title: "MASTER COURSE",
      headerBg: "bg-brand-red text-white",
      borderColor: "border-brand-red shadow-lg shadow-brand-red/5 scale-102 z-10",
      price: "₹ 68661/-",
      features: [
        { text: "50+ Modules (500+ Hrs Training)", checked: true },
        { text: "E-Notes", checked: true },
        { text: "Internship / Placement", checked: true },
        { text: "Live Projects", checked: true },
        { text: "30+ Globally Recognised (Certification)", checked: true },
        { text: "Live Q/A Forum", checked: true },
        { text: "Experience Certification", checked: true },
        { text: "On Board Training (2 Months)", checked: true },
        { text: "Hykoon Themes Membership", checked: true },
        { text: "Tools & Software", checked: true },
        { text: "LMS Recorded", checked: true },
        { text: "E-Books", checked: true },
        { text: "Case Studies & Capstone Projects", checked: true },
        { text: "Graphic Design Course (Recorded / Live) Elementary Module", checked: true },
        { text: "Creative Content Writing (Recorded / Live) Fundamentals Module", checked: true },
        { text: "Skill Shiksha Certification", checked: true }
      ]
    },
    {
      title: "CUSTOMIZED COURSE",
      headerBg: "bg-emerald-800 text-white",
      borderColor: "border-zinc-200",
      price: "₹ 24804/-",
      features: [
        { text: "Customized Modules", checked: true },
        { text: "E-Notes", checked: true },
        { text: "Internship / Placement", checked: true },
        { text: "Live Projects", checked: true },
        { text: "Google + DIDM (Certification)", checked: true },
        { text: "Live Q/A Forum", checked: false },
        { text: "Experience Certification", checked: false },
        { text: "On Board Training (2 Months)", checked: false },
        { text: "Hykoon Themes Membership", checked: false },
        { text: "Tools & Software", checked: false },
        { text: "LMS Recorded (Basic)", checked: false },
        { text: "E-Books", checked: false },
        { text: "Case Studies & Capstone Projects", checked: true },
        { text: "Graphic Design Course (Recorded / Live) Elementary Module", checked: false },
        { text: "Creative Content Writing (Recorded / Live) Fundamentals Module", checked: false },
        { text: "Skill Shiksha Certification", checked: false }
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16 flex flex-col gap-3">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-zinc-800 uppercase">
            DIGITAL MARKETING COURSE COMPARISON <span className="text-brand-red">- GURGAON</span>
          </h2>
          <p className="text-sm sm:text-base font-semibold text-zinc-550 max-w-3xl mx-auto leading-relaxed">
            The Best Digital Marketing Institute in Gurgaon, DIDM provides a detailed evaluation of three diverse digital marketing courses offered by DIDM in the Gurgaon region. Compare features, modules, and benefits to select the ideal program tailored to your career aspirations in digital marketing.
          </p>
          <span className="text-xs font-black text-zinc-450 uppercase tracking-widest block mt-2">
            ADVANCED <span className="text-brand-red">|</span> MASTER <span className="text-brand-red">|</span> CUSTOMIZED
          </span>
          <div className="w-16 h-1 bg-brand-red mx-auto rounded-full mt-2" />
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className={`border rounded-[32px] overflow-hidden bg-white flex flex-col justify-between h-full transition-all duration-350 hover:shadow-xl ${course.borderColor}`}
            >
              <div>
                {/* Header Badge */}
                <div className={`py-4 px-6 text-center font-black tracking-wider text-sm uppercase ${course.headerBg}`}>
                  {course.title}
                </div>

                {/* Price Display */}
                {showPricing && (
                  <div className="py-8 text-center border-b border-zinc-100 bg-zinc-50/20">
                    <span className="text-3xl sm:text-4xl font-black text-zinc-850 tracking-tight">
                      {course.price}
                    </span>
                  </div>
                )}

                {/* Features List */}
                <div className="divide-y divide-zinc-100">
                  {course.features.map((feature, fIdx) => (
                    <div
                      key={fIdx}
                      className={`flex gap-4 items-center px-6 py-3.5 text-left text-xs sm:text-sm font-semibold ${
                        fIdx % 2 === 0 ? "bg-white" : "bg-zinc-50/30"
                      }`}
                    >
                      {feature.checked ? (
                        <div className="w-5 h-5 rounded-full bg-red-50 border border-red-100 flex items-center justify-center shrink-0 shadow-2xs">
                          <Check className="h-3 w-3 text-brand-red stroke-[3.5px]" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center shrink-0 shadow-2xs">
                          <X className="h-2.5 w-2.5 text-zinc-400 stroke-[3px]" />
                        </div>
                      )}
                      <span className={feature.checked ? "text-zinc-700" : "text-zinc-450 line-through"}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Button Frame */}
              <div className="p-8 pt-6 border-t border-zinc-100/50 bg-zinc-50/10 text-center shrink-0">
                <Button
                  onClick={() => onOpenDemo?.(course.title)}
                  className="bg-black hover:bg-zinc-900 text-white font-black uppercase tracking-wider text-xs px-8 py-3.5 rounded-lg transition-all cursor-pointer shadow-sm hover:shadow"
                >
                  LEARN MORE
                </Button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
