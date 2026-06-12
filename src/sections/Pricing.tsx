"use client";

import * as React from "react";
import { Check, Award, ShieldCheck, Flame } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PRICING_DATA } from "@/data/content";

interface PricingProps {
  onOpenDemo: (courseName: string) => void;
}

export const Pricing = ({ onOpenDemo }: PricingProps) => {
  return (
    <section id="pricing" className="py-20 relative bg-zinc-50 border-b border-zinc-200">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand-red/5 blur-3xl rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 3 Columns Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto pt-8">
          {PRICING_DATA.map((plan, idx) => {
            const isProfessional = plan.popular; // Card 2 is Professional
            const isBasic = idx === 0;

            return (
              <div
                key={idx}
                className={`flex flex-col justify-between h-full text-left relative rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
                  isProfessional
                    ? "bg-gradient-to-b from-[#e3e3e6] via-[#ebebef] to-[#fafafb] border border-zinc-300 shadow-xl shadow-zinc-200/50 scale-105 z-10"
                    : isBasic
                    ? "bg-white border border-[#fbc5c5] hover:border-[#f9a8a8] shadow-md hover:shadow-lg"
                    : "bg-white border border-zinc-200 hover:border-zinc-300 shadow-md hover:shadow-lg"
                }`}
              >
                {/* Most Popular ribbon for Card 2 */}
                {isProfessional && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#c90c0c] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border border-transparent flex items-center gap-1 shadow-md whitespace-nowrap z-20">
                    <Flame className="h-3.5 w-3.5 fill-white text-white" />
                    Most Popular
                  </div>
                )}

                {/* Title & Price */}
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                    {plan.duration}
                  </span>
                  <div>
                    <h3 className="text-2xl font-black text-zinc-800">{plan.name}</h3>
                    <p className="text-xs text-zinc-500 mt-1 leading-relaxed">{plan.tagline}</p>
                  </div>

                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-4xl font-black text-zinc-800">{plan.price}</span>
                    <span className="text-sm text-zinc-400 line-through font-semibold">
                      {plan.originalPrice}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded ml-1">
                      SAVE {Math.round(100 - (parseInt(plan.price.replace(/[^\d]/g, "")) / parseInt(plan.originalPrice.replace(/[^\d]/g, ""))) * 100)}%
                    </span>
                  </div>

                  {/* Main Deliverables Box */}
                  <div className={`rounded-2xl p-4 space-y-3 mt-2 border ${
                    isProfessional ? "bg-white border-zinc-250 shadow-sm" : "bg-white border-zinc-200"
                  }`}>
                    <div>
                      <span className="text-[9px] text-zinc-400 font-bold uppercase tracking-wider block">
                        Internship Opportunity
                      </span>
                      <span className="text-xs font-bold text-zinc-800 block mt-0.5">
                        {plan.internship}
                      </span>
                    </div>
                    <div>
                      <span className="text-[9px] text-zinc-400 font-bold uppercase tracking-wider block">
                        Recruitment Support
                      </span>
                      <span className="text-xs font-bold text-[#c90c0c] block mt-0.5">
                        {plan.placement}
                      </span>
                    </div>
                  </div>

                  {/* Features Checklist */}
                  <div className="space-y-3 mt-4">
                    <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">
                      What's Included
                    </span>
                    <div className="space-y-3">
                      {plan.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs font-medium text-zinc-650">
                          <Check className="h-4 w-4 text-[#c90c0c] shrink-0 mt-0.5" />
                          <span className="leading-normal">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Credentials Section */}
                  <div className="space-y-2.5 mt-6">
                    <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">
                      Credentials Earned
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {plan.certifications.map((cert, cIdx) => (
                        <span
                          key={cIdx}
                          className="text-[9px] font-semibold text-zinc-650 bg-[#fafafa] border border-zinc-200 px-2.5 py-1 rounded flex items-center gap-1.5"
                        >
                          <Award className="h-3.5 w-3.5 text-[#c90c0c] shrink-0" />
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Button & Note */}
                <div className="mt-8 pt-4 border-t border-zinc-200/60 flex flex-col gap-3">
                  <Button
                    variant={isProfessional ? "primary" : "outline"}
                    size="lg"
                    animate={true}
                    className={`w-full flex items-center justify-center gap-2 cursor-pointer font-bold py-3.5 rounded-xl ${
                      isProfessional
                        ? "bg-[#c90c0c] hover:bg-[#b00a0a] text-white shadow-lg shadow-[#c90c0c]/30 border-transparent"
                        : "bg-white border border-zinc-300 text-zinc-700 hover:bg-zinc-50 hover:text-zinc-800"
                    }`}
                    onClick={() => onOpenDemo(plan.name)}
                  >
                    <span>Select {plan.name.split(" ")[0]}</span>
                  </Button>
                  
                  {/* 0% EMI Note */}
                  <div className="flex items-center justify-center gap-1.5 mt-1">
                    <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span className="text-[9px] text-zinc-400 font-bold tracking-wider uppercase">
                      0% EMI Options Available starting from ₹3,000/mo
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
