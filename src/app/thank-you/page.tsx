import * as React from "react";
import Link from "next/link";
import { CheckCircle2, Phone, Calendar, ArrowLeft, GraduationCap, MapPin } from "lucide-react";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Registration Successful | DIDM Gurgaon Campus",
  description: "Thank you for registering at Delhi Institute of Digital Marketing (DIDM) Gurgaon Campus. Our career specialist will contact you shortly to confirm your seat.",
};

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  
  // Dynamically resolve value and currency with defaults
  const rawValue = resolvedSearchParams.value;
  const value = typeof rawValue === "string" && !isNaN(parseFloat(rawValue))
    ? parseFloat(rawValue)
    : 1.0;
  
  const rawCurrency = resolvedSearchParams.currency;
  const currency = typeof rawCurrency === "string" ? rawCurrency : "INR";

  return (
    <main className="min-h-screen bg-zinc-50 flex items-center justify-center py-20 px-4 relative overflow-hidden bg-dot-pattern-light">
      {/* Event snippet for Submit lead form conversion page */}
      <Script
        id="google-ads-conversion-tracking"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {
              'send_to': 'AW-18183560002/318UCMG1mLQcEMK2zN5D',
              'value': ${value},
              'currency': '${currency}'
            });
          `,
        }}
      />
      {/* Background blobs for premium feel */}
      <div className="absolute top-1/4 -left-32 w-[400px] h-[400px] bg-brand-red/[0.04] rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-[450px] h-[450px] bg-amber-500/[0.03] rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-2xl w-full text-center relative z-10">
        
        {/* Success Icon Animation container */}
        <div className="mb-8 flex justify-center">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-emerald-500/10 animate-ping opacity-75" style={{ animationDuration: '3s' }} />
            <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-100 flex items-center justify-center text-emerald-500 shadow-lg shadow-emerald-500/10">
              <CheckCircle2 className="h-10 w-10 stroke-[2.5px]" />
            </div>
          </div>
        </div>

        {/* Heading */}
        <span className="text-[11px] font-black text-brand-red uppercase tracking-[0.25em] bg-red-50 border border-red-100 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-2xs mb-6">
          Admissions Desk Confirmation
        </span>
        
        <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-zinc-900 tracking-tight leading-tight mb-4">
          Thank You For <span className="bg-gradient-to-r from-brand-red to-rose-600 bg-clip-text text-transparent">Connecting!</span>
        </h1>
        
        <p className="text-sm sm:text-base font-semibold text-zinc-550 leading-relaxed max-w-xl mx-auto mb-10">
          Your request has been successfully locked into our admissions portal. A senior career specialist from the DIDM Gurgaon Campus is reviewing your profile and will call you back shortly.
        </p>

        {/* Quick Steps Box */}
        <div className="bg-white border border-zinc-200/80 rounded-3xl p-6 sm:p-8 shadow-[0_4px_25px_rgb(0,0,0,0.015)] text-left mb-10 flex flex-col gap-6">
          <h3 className="text-xs font-black text-zinc-400 uppercase tracking-widest border-b border-zinc-150 pb-3">
            What Happens Next?
          </h3>
          
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-brand-red shrink-0 shadow-2xs mt-0.5">
              <Phone className="h-4 w-4" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-zinc-800 uppercase tracking-wide">1. Phone Verification call</h4>
              <p className="text-xs text-zinc-500 font-semibold mt-1 leading-relaxed">
                You will receive a verification call on your provided mobile number from DIDM Gurgaon (+91 88005 05151) within 15 minutes.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-brand-red shrink-0 shadow-2xs mt-0.5">
              <Calendar className="h-4 w-4" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-zinc-800 uppercase tracking-wide">2. Batch Schedule Allocation</h4>
              <p className="text-xs text-zinc-500 font-semibold mt-1 leading-relaxed">
                Our team will assist you in allocating a convenient weekend or weekday batch slot according to your profile.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-brand-red shrink-0 shadow-2xs mt-0.5">
              <GraduationCap className="h-4 w-4" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-zinc-800 uppercase tracking-wide">3. Join Free Demo Class</h4>
              <p className="text-xs text-zinc-500 font-semibold mt-1 leading-relaxed">
                Attend the live practical class with our core instructors and experience our high-tech labs first-hand.
              </p>
            </div>
          </div>
        </div>

        {/* Contact/Address Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-10">
          <div className="p-4 rounded-2xl bg-zinc-100/50 border border-zinc-200 flex gap-3 items-center">
            <MapPin className="h-5 w-5 text-brand-red shrink-0" />
            <div className="min-w-0">
              <span className="text-[9px] font-black text-zinc-400 uppercase tracking-wider block">Gurgaon Campus Address</span>
              <span className="text-xs font-bold text-zinc-750 truncate block">M-41, 2nd Floor, Block M, Old DLF Colony, Sector 14, Gurugram, Haryana 122007</span>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-zinc-100/50 border border-zinc-200 flex gap-3 items-center">
            <Phone className="h-5 w-5 text-brand-red shrink-0" />
            <div className="min-w-0">
              <span className="text-[9px] font-black text-zinc-400 uppercase tracking-wider block">Direct Admissions Helpline</span>
              <a href="tel:08800505151" className="text-xs font-bold text-zinc-750 hover:text-brand-red block transition-colors">+91 88005 05151</a>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            id="back-home-btn"
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-950 hover:bg-zinc-900 active:scale-[0.98] text-white font-black text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-md transition-all duration-200 cursor-pointer"
          >
            <ArrowLeft className="h-4.5 w-4.5" /> Back To Home
          </Link>
        </div>

      </div>
    </main>
  );
}
