"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { CURRICULUM_DATA } from "@/data/content";
import * as Icons from "lucide-react";

export const Curriculum = () => {
  const [activeTab, setActiveTab] = React.useState(CURRICULUM_DATA[0].id);

  const tabsConfig = CURRICULUM_DATA.map((c) => {
    const IconComponent = (Icons as any)[c.icon] || Icons.BookOpen;
    return {
      id: c.id,
      label: c.name.split(" (")[0], // Shorten name for tab button readability
      icon: <IconComponent className="h-4 w-4 shrink-0" />,
    };
  });

  const selectedCurriculum = CURRICULUM_DATA.find((c) => c.id === activeTab) || CURRICULUM_DATA[0];

  return (
    <section id="curriculum" className="py-24 relative bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col gap-3">
          <span className="text-xs font-bold text-brand-red uppercase tracking-widest">
            Course Curriculum
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-800 tracking-tight">
            Comprehensive Growth Marketing Syllabus
          </h2>
          <p className="text-sm sm:text-base text-zinc-550">
            We cover everything from search marketing algorithms to AI tools and lead automations. Select a module below to inspect the syllabus.
          </p>
        </div>

        {/* Tabs Bar */}
        <div className="flex justify-center mb-12">
          <Tabs
            tabs={tabsConfig}
            activeTab={activeTab}
            onChange={setActiveTab}
            className="w-full justify-center max-w-4xl"
          />
        </div>

        {/* Tab Panel Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-12 gap-8 items-start"
          >
            {/* Left Col: Overview, timeline */}
            <div className="lg:col-span-4 flex flex-col gap-4 text-left">
              <Card glass className="p-6 border-zinc-200 bg-white">
                <span className="text-xs font-bold text-brand-red uppercase tracking-wider">
                  Module Summary
                </span>
                <h3 className="text-2xl font-black text-zinc-855 mt-2 leading-tight">
                  {selectedCurriculum.name}
                </h3>
                <p className="text-sm font-bold text-brand-red mt-2 italic leading-relaxed">
                  "{selectedCurriculum.tagline}"
                </p>
                <p className="text-sm text-zinc-550 mt-4 leading-relaxed font-medium">
                  {selectedCurriculum.overview}
                </p>

                {/* Stat summary */}
                <div className="mt-6 pt-6 border-t border-zinc-200 grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                      Modules Count
                    </span>
                    <p className="text-xl font-extrabold text-zinc-800 mt-0.5">
                      {selectedCurriculum.modules.length} Stages
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                      Duration
                    </span>
                    <p className="text-xl font-extrabold text-zinc-800 mt-0.5">
                      {selectedCurriculum.modules.reduce(
                        (acc, m) => {
                          const w = parseInt(m.duration);
                          return acc + (isNaN(w) ? 1 : w);
                        },
                        0
                      )}{" "}
                      Weeks
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Col: Timeline stages */}
            <div className="lg:col-span-8 space-y-6">
              {selectedCurriculum.modules.map((module, idx) => (
                <Card
                  key={idx}
                  glass={false}
                  className="bg-zinc-50/50 border border-zinc-200 p-6 flex flex-col gap-4 hover:border-brand-red/20 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-200 pb-3">
                    <div className="flex items-center gap-3 text-left">
                      <div className="w-8 h-8 rounded-lg bg-brand-red flex items-center justify-center font-black text-sm text-white shrink-0">
                        {idx + 1}
                      </div>
                      <h4 className="text-lg font-bold text-zinc-850 tracking-tight">
                        {module.title}
                      </h4>
                    </div>
                    <span className="text-xs font-bold text-zinc-600 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-full self-start sm:self-center">
                      Duration: {module.duration}
                    </span>
                  </div>

                  <p className="text-sm text-zinc-550 leading-relaxed text-left font-medium">
                    {module.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mt-2">
                    {/* Tools list */}
                    <div className="text-left">
                      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                        Tools Covered
                      </span>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {module.tools.map((tool, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] font-semibold text-zinc-750 bg-zinc-100 border border-zinc-200 px-2 py-0.5 rounded"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Projects list */}
                    <div className="text-left">
                      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                        Live Project Tasks
                      </span>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {module.projects.map((proj, pIdx) => (
                          <span
                            key={pIdx}
                            className="text-[11px] font-semibold text-brand-red bg-brand-red/5 border border-brand-red/20 px-2 py-0.5 rounded"
                          >
                            {proj}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
