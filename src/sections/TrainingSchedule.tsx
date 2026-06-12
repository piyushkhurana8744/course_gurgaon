"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  Calendar, 
  Monitor, 
  GraduationCap, 
  CheckCircle2, 
  Download, 
  HelpCircle, 
  Award,
  BookOpen,
  Users
} from "lucide-react";

interface TrainingScheduleProps {
  onOpenDemo: (courseName: string) => void;
}

export const TrainingSchedule = ({ onOpenDemo }: TrainingScheduleProps) => {
  const scheduleHighlights = [
    {
      icon: Clock,
      label: "Training Centre Timing",
      value: "9:00 AM TO 9:00 PM",
    },
    {
      icon: Calendar,
      label: "Batch Type",
      value: "Weekdays | Weekends",
    },
    {
      icon: Monitor,
      label: "Training Mode",
      value: "In-Class | Online Mode",
    },
    {
      icon: GraduationCap,
      label: "Education Qualification",
      value: "Any Level",
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 flex flex-col gap-3">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-zinc-800 uppercase">
            DIGITAL MARKETING TRAINING SCHEDULE <span className="text-brand-red">IN GURGAON</span>
          </h2>
          <p className="text-sm sm:text-base font-semibold text-zinc-555 leading-relaxed max-w-3xl mx-auto">
            In our Gurgaon Training Centre, sessions are conducted throughout the day with total scheduling flexibility and multiple batch options in both online & offline modes.
          </p>
          <div className="w-16 h-1 bg-brand-red mx-auto rounded-full mt-1" />
        </div>

        {/* 1. Dashboard-Style Schedule Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {scheduleHighlights.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 flex items-center gap-4.5 shadow-2xs hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 border border-red-100/50 shadow-3xs">
                  <IconComponent className="h-5 w-5 text-brand-red" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider block">
                    {item.label}
                  </span>
                  <span className="text-sm sm:text-base font-extrabold text-zinc-800 block mt-0.5">
                    {item.value}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Gurgaon Training Center Upcoming Batches Details */}
        <div className="mb-16 text-center">
          <h3 className="text-2xl sm:text-3xl font-black text-zinc-800 tracking-tight mb-8">
            Gurgaon Training Center Upcoming Batches Details
          </h3>

          <div className="border border-zinc-200 bg-white rounded-3xl shadow-sm overflow-hidden text-left">
            {/* Header bar */}
            <div className="bg-zinc-50 border-b border-zinc-200 px-6 py-4">
              <span className="text-sm font-bold text-[#c90c0c] uppercase tracking-wider">
                Gurgaon Training Center Batches Details
              </span>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse">
                <thead>
                  <tr className="bg-zinc-50/50 border-b border-zinc-200 text-left text-[11px] font-black text-zinc-500 uppercase tracking-wider">
                    <th className="px-6 py-4 border-r border-zinc-200">Batch</th>
                    <th className="px-6 py-4 border-r border-zinc-200">Duration</th>
                    <th className="px-6 py-4 border-r border-zinc-200">Next Batch</th>
                    <th className="px-6 py-4 border-r border-zinc-200">Duration</th>
                    <th className="px-6 py-4 border-r border-zinc-200">Fees</th>
                    <th className="px-6 py-4">Downloads</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  {/* Row 1 */}
                  <tr className="text-zinc-700 hover:bg-zinc-50/30 transition-colors">
                    <td className="px-6 py-5 border-r border-zinc-200 font-extrabold text-sm text-zinc-800">
                      Weekend Batches
                    </td>
                    <td className="px-6 py-5 border-r border-zinc-200 text-xs font-semibold text-zinc-550 leading-relaxed">
                      130 Hrs Training, 10 Hrs Backup Classes
                    </td>
                    <td className="px-6 py-5 border-r border-zinc-200 text-xs leading-relaxed">
                      <span className="font-extrabold text-zinc-850 block mb-0.5">11th April 2026</span>
                      <span className="font-medium text-zinc-500">Saturday & Sunday- 04:00pm - 07:00pm</span>
                    </td>
                    <td className="px-6 py-5 border-r border-zinc-200 text-xs font-bold text-zinc-800">
                      20 Weeks
                    </td>
                    <td className="px-6 py-5 border-r border-zinc-200 text-xs leading-relaxed">
                      <span className="block font-semibold text-zinc-600">
                        <strong className="text-zinc-850 font-black">Program Fee :</strong> INR 68661/-
                      </span>
                      <span className="block font-semibold text-zinc-600 mt-1">
                        <strong className="text-zinc-850 font-black">2 Easy Instalments Fees :</strong> INR 72201/
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex flex-col gap-2 max-w-[220px]">
                        <button
                          onClick={() => onOpenDemo("Weekend Batch: Book Seat")}
                          className="bg-[#c90c0c] hover:bg-[#b00a0a] text-white text-[10px] font-black uppercase tracking-widest py-2.5 px-3 rounded-lg transition-all shadow-xs text-center cursor-pointer"
                        >
                          Book Seat For Free Counselling
                        </button>
                        <button
                          onClick={() => onOpenDemo("Weekend Batch: Download Brochure")}
                          className="bg-[#c90c0c] hover:bg-[#b00a0a] text-white text-[10px] font-black uppercase tracking-widest py-2.5 px-3 rounded-lg transition-all shadow-xs text-center cursor-pointer flex items-center justify-center gap-1.5"
                        >
                          Download Brochure <Download className="h-3 w-3" />
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="text-zinc-700 hover:bg-zinc-50/30 transition-colors">
                    <td className="px-6 py-5 border-r border-zinc-200 font-extrabold text-sm text-zinc-800">
                      Weekday Batches
                    </td>
                    <td className="px-6 py-5 border-r border-zinc-200 text-xs font-semibold text-zinc-550 leading-relaxed">
                      130 Hrs Training, 10 Hrs Backup Classes
                    </td>
                    <td className="px-6 py-5 border-r border-zinc-200 text-xs leading-relaxed">
                      <span className="font-extrabold text-zinc-850 block mb-0.5">10th April 2026</span>
                      <span className="font-medium text-zinc-500">Tuesday to Friday- 10:00pm - 12:00pm</span>
                    </td>
                    <td className="px-6 py-5 border-r border-zinc-200 text-xs font-bold text-zinc-800">
                      12 Weeks
                    </td>
                    <td className="px-6 py-5 border-r border-zinc-200 text-xs leading-relaxed">
                      <span className="block font-semibold text-zinc-600">
                        <strong className="text-zinc-850 font-black">Program Fee :</strong> INR 68661/-
                      </span>
                      <span className="block font-semibold text-zinc-600 mt-1">
                        <strong className="text-zinc-850 font-black">2 Easy Instalments Fees :</strong> INR 72201/
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex flex-col gap-2 max-w-[220px]">
                        <button
                          onClick={() => onOpenDemo("Weekday Batch (Night): Book Seat")}
                          className="bg-[#c90c0c] hover:bg-[#b00a0a] text-white text-[10px] font-black uppercase tracking-widest py-2.5 px-3 rounded-lg transition-all shadow-xs text-center cursor-pointer"
                        >
                          Book Seat For Free Counselling
                        </button>
                        <button
                          onClick={() => onOpenDemo("Weekday Batch (Night): Download Brochure")}
                          className="bg-[#c90c0c] hover:bg-[#b00a0a] text-white text-[10px] font-black uppercase tracking-widest py-2.5 px-3 rounded-lg transition-all shadow-xs text-center cursor-pointer flex items-center justify-center gap-1.5"
                        >
                          Download Brochure <Download className="h-3 w-3" />
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="text-zinc-700 hover:bg-zinc-50/30 transition-colors">
                    <td className="px-6 py-5 border-r border-zinc-200 font-extrabold text-sm text-zinc-800">
                      Weekday Batches
                    </td>
                    <td className="px-6 py-5 border-r border-zinc-200 text-xs font-semibold text-zinc-550 leading-relaxed">
                      130 Hrs Training, 10 Hrs Backup Classes
                    </td>
                    <td className="px-6 py-5 border-r border-zinc-200 text-xs leading-relaxed">
                      <span className="font-extrabold text-zinc-850 block mb-0.5">13th Mar 2026</span>
                      <span className="font-medium text-zinc-500">Tuesday to Friday- 05:00pm - 07:00pm</span>
                    </td>
                    <td className="px-6 py-5 border-r border-zinc-200 text-xs font-bold text-zinc-800">
                      12 Weeks
                    </td>
                    <td className="px-6 py-5 border-r border-zinc-200 text-xs leading-relaxed">
                      <span className="block font-semibold text-zinc-600">
                        <strong className="text-zinc-850 font-black">Program Fee :</strong> INR 68661/-
                      </span>
                      <span className="block font-semibold text-zinc-600 mt-1">
                        <strong className="text-zinc-850 font-black">2 Easy Instalments Fees :</strong> INR 72201/
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex flex-col gap-2 max-w-[220px]">
                        <button
                          onClick={() => onOpenDemo("Weekday Batch (Evening): Book Seat")}
                          className="bg-[#c90c0c] hover:bg-[#b00a0a] text-white text-[10px] font-black uppercase tracking-widest py-2.5 px-3 rounded-lg transition-all shadow-xs text-center cursor-pointer"
                        >
                          Book Seat For Free Counselling
                        </button>
                        <button
                          onClick={() => onOpenDemo("Weekday Batch (Evening): Download Brochure")}
                          className="bg-[#c90c0c] hover:bg-[#b00a0a] text-white text-[10px] font-black uppercase tracking-widest py-2.5 px-3 rounded-lg transition-all shadow-xs text-center cursor-pointer flex items-center justify-center gap-1.5"
                        >
                          Download Brochure <Download className="h-3 w-3" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};
