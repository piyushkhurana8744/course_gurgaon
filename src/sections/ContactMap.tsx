"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Star, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactMapProps {
  onOpenDemo?: (courseName: string) => void;
}

export const ContactMap = ({ onOpenDemo }: ContactMapProps) => {
  const mapUrl = "https://maps.app.goo.gl/nhSFgLaum2NcsysH6";
  const embedMapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.321631329798!2d77.0444067!3d28.46985899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1918ea8818fb%3A0x3c88c555ccda07b!2sDelhi%20Institute%20of%20Digital%20Marketing!5e0!3m2!1sen!2sin!4v1781249210585!5m2!1sen!2sin";

  return (
    <section className="py-20 bg-[#f8fafc] border-b border-zinc-200 relative overflow-hidden">
      {/* Background Animated Blobs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-red-500/5 to-rose-500/5 rounded-full blur-[100px] -z-0 pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-gradient-to-bl from-rose-500/5 to-red-500/5 rounded-full blur-[100px] -z-0 pointer-events-none animate-pulse" style={{ animationDuration: '12s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 flex flex-col items-center gap-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-black text-brand-red uppercase tracking-[0.25em] bg-red-50 border border-red-100 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-2xs"
          >
            <Sparkles className="h-3 w-3 fill-brand-red text-brand-red" />
            DIDM Training Center
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl font-black text-zinc-900 tracking-tight leading-tight"
          >
            India&apos;s Leading Digital Marketing <br />
            Institute in <span className="bg-gradient-to-r from-red-500 to-rose-600 bg-clip-text text-transparent">Gurgaon</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs sm:text-sm text-zinc-550 leading-relaxed max-w-3xl mx-auto font-medium"
          >
            GURGAON is located in the Gautam Budh Nagar of Uttar Pradesh. Gurgaon is famous for big company hub like HCL, TCS, Wipro, Media Houses and Many MNC&apos;s company operated in Gurgaon. Many People come across India at Gurgaon for looking Jobs. Gurgaon always come in first place to create lots of jobs opportunities in every sector. Delhi Institute of Digital Marketing (DIDM) located at F-23 Film City News 24 Office premises. ISOMES-NEWS24 is our training partner. DIDM Gurgaon provide best quality of digital marketing training and same time also provide internships and placement opportunities to our Students so that they get real time exposure to work with News24 platform.
          </motion.p>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-16 h-1 bg-gradient-to-r from-red-500 to-rose-600 rounded-full mt-1 origin-center"
          />
        </div>

        {/* Two Premium Cards Grid (Compact max-w-5xl) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* ──────────────── LEFT CARD: VISIT OUR CAMPUS ──────────────── */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group rounded-3xl bg-white border border-zinc-200/85 p-5 sm:p-7 flex flex-col justify-between shadow-[0_4px_25px_rgb(0,0,0,0.015)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.035)] hover:border-zinc-300 transition-all duration-300"
          >
            <div className="flex flex-col gap-5">
              {/* Header */}
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1 text-left">
                  <span className="text-[9px] font-black text-brand-red uppercase tracking-widest">
                    Location Headquarters
                  </span>
                  <h3 className="text-xl font-black text-zinc-900 tracking-tight">
                    Visit Our Campus
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center text-brand-red shrink-0">
                  <MapPin className="h-4.5 w-4.5" />
                </div>
              </div>

              {/* Address detail */}
              <div className="text-left bg-zinc-50/50 rounded-2xl border border-zinc-150 p-4 flex flex-col gap-2.5">
                <p className="text-sm sm:text-base font-bold text-zinc-800 leading-snug">
                  M-41, 2nd Floor, Block M, Old DLF Colony, Sector 14, Gurugram, Haryana 122007
                </p>

                {/* Ratings */}
                <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold border-t border-zinc-200/60 pt-2.5">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-zinc-550">
                    Ratings <strong className="text-zinc-800">4.9/5</strong> (10,000+ reviews)
                  </span>
                  <a
                    href="https://www.google.com/search?q=DIDM+Gurgaon+reviews"
                    target="_blank"
                    rel="noreferrer"
                    className="text-brand-red hover:underline font-bold"
                  >
                    View Reviews
                  </a>
                </div>
              </div>

              {/* Contact Info Lines */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                <div className="p-3.5 rounded-xl bg-white border border-zinc-150 flex flex-col gap-0.5 shadow-2xs">
                  <span className="text-[8px] font-black text-zinc-455 uppercase tracking-wider block">
                    Helpline Numbers
                  </span>
                  <a href="tel:08800505151" className="text-xs font-extrabold text-zinc-800 hover:text-brand-red block transition-colors">
                    08800505151
                  </a>
                  <a href="tel:08800505151" className="text-[11px] font-bold text-zinc-500 hover:text-brand-red block transition-colors">
                    +91 88005 05151
                  </a>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-zinc-150 flex flex-col gap-0.5 shadow-2xs">
                  <span className="text-[8px] font-black text-zinc-455 uppercase tracking-wider block">
                    Official Email
                  </span>
                  <a href="mailto:info@didm.in" className="text-xs font-extrabold text-zinc-800 hover:text-brand-red block transition-colors truncate">
                    info@didm.in
                  </a>
                  <span className="text-[10px] font-bold text-zinc-400">Response in 24 hrs</span>
                </div>
              </div>

              {/* Mini badges */}
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[10px] font-extrabold text-zinc-700 bg-zinc-100/80 px-2.5 py-1 rounded-full border border-zinc-200">
                  ⚡ AI Tools Training
                </span>
                <span className="text-[10px] font-extrabold text-zinc-700 bg-zinc-100/80 px-2.5 py-1 rounded-full border border-zinc-200">
                  💼 Placement Support
                </span>
                <span className="text-[10px] font-extrabold text-zinc-700 bg-zinc-100/80 px-2.5 py-1 rounded-full border border-zinc-200">
                  🎓 Internship Included
                </span>
              </div>

              {/* Color Maps Preview (Without Grayscale filter) */}
              <div className="w-full rounded-2xl overflow-hidden border border-zinc-200 shadow-sm mt-1 relative bg-zinc-100" style={{ height: "180px" }}>
                <iframe
                  src={embedMapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="transition-all duration-300"
                />
              </div>
            </div>

            {/* Direction Button */}
            <div className="mt-6">
              <Button
                onClick={() => window.open(mapUrl, "_blank")}
                className="w-full bg-zinc-950 hover:bg-zinc-900 text-white font-bold py-3.5 rounded-xl transition-all cursor-pointer shadow-md hover:shadow-lg uppercase text-[11px] tracking-wider flex items-center justify-center gap-2"
              >
                Get Direction
                <ExternalLink className="h-3.5 w-3.5 shrink-0" />
              </Button>
            </div>
          </motion.div>

          {/* ──────────────── RIGHT CARD: PROGRAM FEES & ADMISSIONS ──────────────── */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group rounded-3xl bg-white border border-zinc-200/85 p-5 sm:p-7 flex flex-col justify-between shadow-[0_4px_25px_rgb(0,0,0,0.015)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.035)] hover:border-zinc-300 transition-all duration-300 relative overflow-hidden"
          >
            {/* Glowing Accent behind card contents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-500/3 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex flex-col gap-5 relative z-10">
              {/* Header */}
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1 text-left">
                  <span className="text-[9px] font-black text-brand-red uppercase tracking-widest">
                    Transparent Investment
                  </span>
                  <h3 className="text-xl font-black text-zinc-900 tracking-tight">
                    Fees &amp; Admissions
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center text-brand-red shrink-0">
                  <GraduationCap className="h-4.5 w-4.5" />
                </div>
              </div>

              {/* Graduates Photo Container (No Aspect Cropping to Show Full Image) */}
              <div className="w-full rounded-2xl overflow-hidden border border-zinc-200/80 shadow-xs bg-zinc-50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1532649538693-f3a2ec1bf8bd?auto=format&fit=crop&q=80&w=800"
                  alt="DIDM Gurgaon graduates at convocation ceremony holding diplomas"
                  className="w-full h-auto block"
                />
              </div>

              {/* Glassmorphism Price Box */}
              <div className="relative bg-white border border-zinc-250 rounded-2xl p-4.5 shadow-xs flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[9px] font-black text-zinc-400 uppercase tracking-wider">
                    One-Time Course Fee
                  </span>
                  <span className="text-2xl font-black text-zinc-900 tracking-tight">
                    ₹68,661<span className="text-xs font-semibold text-zinc-400">/-*</span>
                  </span>
                </div>
                <div className="h-px w-full sm:h-10 sm:w-px bg-zinc-200" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-[9px] font-black text-zinc-400 uppercase tracking-wider">
                    2 Easy Installments
                  </span>
                  <span className="text-base font-bold text-zinc-800">
                    ₹72,201<span className="text-[11px] font-semibold text-zinc-400">/-*</span>
                  </span>
                </div>
              </div>

              {/* Checklist features */}
              <div className="grid grid-cols-2 gap-3 text-left">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-700">
                  <CheckCircle2 className="h-4 w-4 text-brand-red shrink-0" />
                  <span>12+ Certifications</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-700">
                  <CheckCircle2 className="h-4 w-4 text-brand-red shrink-0" />
                  <span>Live Client Campaigns</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-700">
                  <CheckCircle2 className="h-4 w-4 text-brand-red shrink-0" />
                  <span>Guaranteed Internship</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-700">
                  <CheckCircle2 className="h-4 w-4 text-brand-red shrink-0" />
                  <span>100% Job Assistance</span>
                </div>
              </div>
            </div>

            {/* Enroll CTA */}
            <div className="mt-6 relative group/btn">
              {/* Button Glow Background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-rose-600 rounded-xl blur-md opacity-25 group-hover/btn:opacity-40 transition-opacity duration-300" />
              
              <Button
                onClick={() => onOpenDemo?.("Gurgaon Training Course")}
                className="w-full relative bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-bold py-3.5 rounded-xl transition-all cursor-pointer shadow-lg uppercase text-[11px] tracking-wider flex items-center justify-center gap-2 border-transparent"
              >
                Enroll Now
                <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
