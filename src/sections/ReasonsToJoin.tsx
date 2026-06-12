"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Target,
  BriefcaseBusiness,
  Wrench,
  Award,
  Monitor,
  Users,
  Layers,
  Clock,
  Phone,
} from "lucide-react";

interface ReasonsToJoinProps {
  onOpenDemo: (courseName: string) => void;
}

const REASONS_DATA = [
  {
    icon: Target,
    title: "100% Placement Assistance",
    description:
      "DIDM understands career priorities, therefore, we provide job notification to all our trainees and help them with placements.",
  },
  {
    icon: Wrench,
    title: "Tool Based Learning",
    description:
      "DIDM focuses on providing practical knowledge along with theory. We provide free digital tools that will enhance your classroom training.",
  },
  {
    icon: Award,
    title: "Proven Placement Record",
    description:
      "DIDM has tie-ups with over 650+ IT and Non-IT companies. We have placed 80% of our trainees.",
  },
  {
    icon: Monitor,
    title: "Students Reviews",
    description:
      "The experiences of our alumni and the reviews given by them will help you know the greatness and virtue of our digital marketing course. Our students are everything to us.",
  },
  {
    icon: Users,
    title: "Industry Top Trainers",
    description:
      "DIDM has Google certified Industry experts who possess vast experience and knowledge.",
  },
  {
    icon: BriefcaseBusiness,
    title: "High-Quality Training",
    description:
      "Our trainers share in-depth knowledge and solve all the queries of our trainees.",
  },
  {
    icon: Layers,
    title: "Hybrid Training Program",
    description:
      "We conduct traditional cum with modern technique of learning both online and in class training mode.",
  },
  {
    icon: Clock,
    title: "Flexible Batch Timings",
    description:
      "Trainees can choose the batch timings according to their convenience. We conduct weekdays and weekend classes.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 18 },
  },
};

export const ReasonsToJoin = ({ onOpenDemo }: ReasonsToJoinProps) => {
  return (
    <>
      {/* ── CTA Banner: "Still Thinking" ── */}
      <section className="py-14 bg-zinc-50 border-y border-zinc-200 text-center">
        <div className="max-w-3xl mx-auto px-4 flex flex-col items-center gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-zinc-800 tracking-tight leading-tight">
            Still Thinking!! Let Us Clear Your Doubts!!
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 font-medium">
            Speak with our digital marketing course experts for Batches, fee &amp; curriculum.
          </p>
          <a
            href="tel:+919310076503"
            className="inline-flex items-center gap-2.5 border-2 border-[#c90c0c] text-[#c90c0c] font-extrabold text-base sm:text-lg px-7 py-3 rounded-full hover:bg-[#c90c0c] hover:text-white transition-all duration-300 shadow-sm mt-2"
          >
            <Phone className="h-5 w-5" />
            +91-9310076503
          </a>
        </div>
      </section>

      {/* ── 150+ Reasons Grid ── */}
      <section className="py-20 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-6 flex flex-col gap-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#c90c0c] tracking-tight leading-tight">
              150+ Reasons To Join Digital Marketing Institute in Gurgaon
            </h2>
            <p className="text-sm sm:text-base text-zinc-500 font-medium leading-relaxed max-w-3xl mx-auto">
              The Digital Marketing program will prepare you to become a complete digital marketer.
              One of the world&apos;s fastest-growing disciplines, this Digital Marketing
              certification course will increase your job market value and enable you to handle
              end-to-end marketing campaigns.
            </p>
          </div>

          {/* 4×2 Card Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          >
            {REASONS_DATA.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div key={idx} variants={cardVariants} className="h-full">
                  <div className="bg-white border border-zinc-200 rounded-2xl p-6 h-full flex flex-col items-start gap-4 shadow-sm hover:shadow-lg hover:border-[#c90c0c]/30 transition-all duration-300 group text-left">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center group-hover:bg-[#c90c0c]/10 transition-colors duration-300">
                      <IconComponent className="h-7 w-7 text-[#c90c0c]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-extrabold text-[#c90c0c] tracking-tight leading-snug">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-zinc-500 font-medium leading-relaxed flex-1">
                      {item.description}
                    </p>

                    {/* Read More Button */}
                    <button
                      onClick={() => onOpenDemo(item.title)}
                      className="bg-[#c90c0c] hover:bg-[#a80a0a] text-white text-[11px] font-black uppercase tracking-widest px-5 py-2.5 rounded-lg transition-all duration-200 shadow-xs cursor-pointer mt-auto"
                    >
                      Read More
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom CTA */}
          <div className="flex justify-center mt-12">
            <Button
              variant="primary"
              size="lg"
              onClick={() => onOpenDemo("150+ Reasons")}
              className="bg-[#c90c0c] hover:bg-[#a80a0a] text-white font-black uppercase tracking-widest px-8 py-4 rounded-full shadow-lg shadow-[#c90c0c]/20 text-sm cursor-pointer"
            >
              150+ Reason to Join DIDM
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
