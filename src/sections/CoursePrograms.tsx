"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

interface CourseProgramsProps {
  onOpenDemo: (courseName: string) => void;
}

export const CoursePrograms = ({ onOpenDemo }: CourseProgramsProps) => {
  const programs = [
    {
      id: "midm",
      title: "Master in Digital Marketing (MIDM)",
      image: "https://res.cloudinary.com/dnfz4jwam/image/upload/f_auto,q_auto,w_800/v1779780068/midm-program_kxiznq.jpg",
      desc: "Unique type of digital marketing training program designed to suit all market needs. This training program includes three training formats combined into a single course enrollment fee.",
      bullets1: [
        "In-Class Training Program (140hrs sessions)",
        "LMS Training Session (Multiple experts guidance)",
        "On-board Training Session (360hrs Program)"
      ],
      middleDesc: "Our Master In Digital Marketing course (MIDM) is designed for all profiles so that everyone can master core digital concepts in depth and achieve their career milestones.",
      bullets2: [
        "Working Professionals - Upgrading skills",
        "Business Owners - Increase campaign ROI",
        "Students & Job Seekers - Global opportunities",
        "Housewives & Freelancers - Make money online"
      ]
    },
    {
      id: "advanced",
      title: "Advanced in Digital Marketing",
      image: "https://res.cloudinary.com/dnfz4jwam/image/upload/f_auto,q_auto,w_800/v1779780055/advanced-program_scdx6v.jpg",
      desc: "DIDM Gurgaon offers the Advanced Internet Marketing Training Program (AIMTP). Master core concepts of digital marketing covering all vital industry modules, conducted in both Online and In-Class sessions.",
      bullets1: [
        "50+ Modules & Complete Practical Sessions",
        "Practice on Live Projects & Case Studies",
        "Tools & Software Support with E-Notes"
      ],
      middleDesc: "The Advanced Internet Marketing Training Program (AIMTP) is designed to cover deep marketing, analytics, and business growth strategies to turn students into experts.",
      bullets2: [
        "27 Globally Recognised Certifications",
        "Dedicated Placement Assistance",
        "Comprehensive Mock Interviews & Resume Prep",
        "Interactive Assignments & Capstone Projects"
      ]
    },
    {
      id: "customized",
      title: "Customized in Digital Marketing",
      image: "https://res.cloudinary.com/dnfz4jwam/image/upload/f_auto,q_auto,w_800/v1779780059/customized-program_hiug7z.jpg",
      desc: "DIDM Gurgaon offers customized digital marketing sessions aligned with individual needs or market demand. Select specific modules according to your strategic career or business objectives.",
      bullets1: [
        "Customized Training Modules & Flexible Hours",
        "Practical & Live Project Oriented Sessions",
        "Real-World Case Studies & E-Notes Support"
      ],
      middleDesc: "Customized learning allows business units, corporate teams, and freelancers to focus exclusively on digital marketing channels that drive their specific goals.",
      bullets2: [
        "DIDM + Globally Recognised Certifications",
        "Dedicated One-on-One Mentorship",
        "Placement Assistance & Portfolio Reviews",
        "Practical Assignments & Interview Bootcamps"
      ]
    }
  ];

  return (
    <section className="py-20 bg-zinc-50/50 border-b border-zinc-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-2.5">
          <span className="text-xs font-black text-brand-red uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Sparkles className="h-4 w-4" /> Comprehensive Programs
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-850 tracking-tight">
            Choose Your <span className="text-brand-red">Learning Pathway</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 font-medium">
            Explore our specialized digital marketing modules designed for different levels of expertise and goals.
          </p>
          <div className="w-16 h-1 bg-brand-red mx-auto rounded-full mt-2" />
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {programs.map((prog, idx) => (
            <div 
              key={idx} 
              className="border border-zinc-200 shadow-sm overflow-hidden h-full flex flex-col justify-between bg-white rounded-3xl group hover:shadow-xl transition-all duration-500"
            >
              <div>
                {/* Top Image Frame */}
                <div className="w-full aspect-video md:aspect-[16/10] overflow-hidden relative border-b border-zinc-100 bg-zinc-100 shrink-0">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    width={500}
                    height={312}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8 text-left">
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-black text-zinc-850 tracking-tight mb-4 group-hover:text-brand-red transition-colors duration-300">
                    {prog.title}
                  </h3>

                  {/* Primary Description */}
                  <p className="text-sm text-zinc-550 font-semibold leading-relaxed mb-6">
                    {prog.desc}
                  </p>

                  {/* Bullets List 1 */}
                  <div className="space-y-3 mb-6">
                    {prog.bullets1.map((b, bIdx) => (
                      <div key={bIdx} className="flex gap-3 items-start">
                        <div className="w-5 h-5 rounded-full bg-red-50 border border-red-100 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                          <Check className="h-3 w-3 text-brand-red stroke-[3px]" />
                        </div>
                        <span className="text-sm font-semibold text-zinc-700 leading-snug">
                          {b}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Conditional Middle Block */}
                  {prog.middleDesc && (
                    <div className="pt-5 border-t border-zinc-100 mt-5">
                      <p className="text-sm text-zinc-550 font-semibold leading-relaxed mb-5">
                        {prog.middleDesc}
                      </p>
                      
                      {/* Bullets List 2 */}
                      <div className="space-y-3">
                        {prog.bullets2.map((b, bIdx) => (
                          <div key={bIdx} className="flex gap-3 items-start">
                            <div className="w-5 h-5 rounded-full bg-red-50 border border-red-100 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                              <Check className="h-3 w-3 text-brand-red stroke-[3px]" />
                            </div>
                            <span className="text-sm font-semibold text-zinc-700 leading-snug">
                              {b}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>

              {/* Bottom Button Frame */}
              <div className="p-6 sm:p-8 pt-0 border-t border-zinc-50 shrink-0">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => onOpenDemo(prog.title)}
                  className="w-full bg-gradient-to-r from-brand-red to-red-650 hover:from-red-600 hover:to-brand-red text-white py-3 shadow-md shadow-brand-red/10 cursor-pointer font-bold uppercase tracking-wider rounded-xl transition-all"
                >
                  Talk to Counsellor
                </Button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
