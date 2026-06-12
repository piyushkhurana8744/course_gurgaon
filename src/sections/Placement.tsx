"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";
import { PLACEMENTS_DATA, BRANDS_DATA } from "@/data/content";
import { TrendingUp } from "lucide-react";

export const Placement = () => {
  return (
    <section id="placements" className="py-24 bg-white border-b border-zinc-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold text-brand-red uppercase tracking-widest">
            Recent Placements
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-800 tracking-tight">
            Our Graduates Earn More
          </h2>
          <p className="text-sm sm:text-base text-zinc-550">
            See actual recent salary upgrades achieved by our students in Sector 62, Gurgaon campus.
          </p>
        </div>

        {/* Placement Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PLACEMENTS_DATA.map((card, idx) => (
            <Card
              key={idx}
              glass
              className="p-5 border-zinc-200 flex flex-col justify-between hover:border-brand-red/25 transition-all duration-300 group bg-white"
            >
              {/* Top part: Photo & Role */}
              <div className="flex flex-col gap-4 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-zinc-200 shrink-0">
                    <img src={card.photo} alt={card.name} className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-zinc-800 leading-tight">{card.name}</h4>
                    <span className="text-[10px] text-zinc-500 font-bold block uppercase mt-0.5">
                      {card.role}
                    </span>
                  </div>
                </div>

                {/* Company Logo / Placement Info */}
                <div className="flex items-center gap-2 bg-zinc-50 p-2 border border-zinc-200 rounded-lg">
                  <img
                    src={card.companyLogo}
                    alt={card.companyName}
                    className="h-5 w-auto object-contain max-w-16 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-350"
                  />
                  <span className="text-[10px] text-zinc-600 font-bold truncate">
                    {card.companyName}
                  </span>
                </div>
              </div>

              {/* Bottom part: Salary Transformation */}
              <div className="mt-5 pt-4 border-t border-zinc-200 text-left space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider">
                    Before:
                  </span>
                  <span className="text-xs font-semibold text-zinc-600">
                    {card.beforeSalary}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[9px] text-brand-red font-black uppercase tracking-wider">
                    Placed:
                  </span>
                  <span className="text-sm font-black text-zinc-800">
                    {card.afterSalary}
                  </span>
                </div>

                {/* Hike badge */}
                <div className="bg-emerald-50 border border-emerald-250 text-emerald-700 text-xs font-black py-1.5 px-3 rounded-lg flex items-center justify-between">
                  <span>{card.hike}</span>
                  <TrendingUp className="h-4 w-4 shrink-0 text-emerald-600 animate-pulse" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Hiring Partners Marquee */}
        <div className="pt-8 border-t border-zinc-200">
          <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest text-center mb-8">
            Hiring Network Partners Include
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-50">
            {BRANDS_DATA.slice(0, 6).map((brand, bIdx) => (
              <img
                key={bIdx}
                src={brand.logoUrl}
                alt={brand.name}
                className="h-6 w-auto object-contain grayscale"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
