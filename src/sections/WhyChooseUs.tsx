"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { WHY_CHOOSE_US_DATA } from "@/data/content";
import * as Icons from "lucide-react";

export const WhyChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold text-brand-red uppercase tracking-widest">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-800 tracking-tight">
            How We Are Different From Local Institutes
          </h2>
          <p className="text-sm sm:text-base text-zinc-500">
            We don't teach from slides or textbooks. We run actual live-budget campaigns, analyze raw datasets, and build portfolios.
          </p>
        </div>

        {/* Grid Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {WHY_CHOOSE_US_DATA.map((item, idx) => {
            const IconComponent = (Icons as any)[item.icon] || Icons.HelpCircle;

            return (
              <motion.div key={idx} variants={cardVariants} className="h-full">
                <Card
                  glass
                  className="p-6 h-full flex items-start gap-4 hover:border-brand-red/30 hover:bg-zinc-50/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-red/10 border border-brand-red/20 flex items-center justify-center shrink-0">
                    <IconComponent className="h-5 w-5 text-brand-red" />
                  </div>
                  <div className="flex flex-col gap-2 text-left">
                    <h3 className="text-lg font-bold text-zinc-850 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-550 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
