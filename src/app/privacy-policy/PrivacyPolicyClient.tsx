"use client";

import * as React from "react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { useRouter } from "next/navigation";
import { ShieldCheck, Calendar, FileText, ArrowRight } from "lucide-react";

export function PrivacyPolicyClient() {
  const router = useRouter();

  const handleOpenDemo = () => {
    router.push("/#demo");
  };

  return (
    <>
      {/* Navigation Header */}
      <Header onOpenDemo={handleOpenDemo} showPricing={false} />

      {/* Main Container */}
      <main className="flex-1 w-full bg-zinc-50/50 pt-28 pb-20 relative overflow-hidden bg-dot-pattern-light">
        {/* Background decorative glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-amber-500/[0.02] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb / Top Header */}
          <div className="text-center mb-10">
            <span className="text-[11px] font-black text-brand-red uppercase tracking-[0.2em] bg-red-50 border border-red-100 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-2xs mb-4">
              <ShieldCheck className="h-3.5 w-3.5" /> Legal & Privacy
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-zinc-900 tracking-tight leading-tight">
              Privacy <span className="bg-gradient-to-r from-brand-red to-rose-600 bg-clip-text text-transparent">Policy</span>
            </h1>
            <div className="flex items-center justify-center gap-2 mt-4 text-xs font-bold text-zinc-400 uppercase tracking-widest">
              <FileText className="h-4.5 w-4.5 text-zinc-300" />
              <span>Effective Date: May 28, 2026</span>
            </div>
          </div>

          {/* Document Content Card */}
          <div className="bg-white border border-zinc-200/80 rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.015)] relative">
            
            {/* Introductory Text */}
            <div className="prose max-w-none text-zinc-650 text-sm sm:text-base leading-relaxed space-y-6">
              <p className="font-semibold text-zinc-800 bg-zinc-50 border border-zinc-150 p-5 rounded-2xl leading-relaxed">
                By access to Delhi Institute of Digital Marketing (DIDM) website, you accept and agree to the following terms and conditions. If you do not agree to these terms and conditions, then immediately stop using the website service.
              </p>
              
              <p>
                If we ask you to provide any information that can be used to identify you when using the website, we assure that it will be used according to this privacy policy. DIDM has the complete right to change this policy as per the company requirements from time to time and will update this page.
              </p>

              <p>
                When you sign up to our website, we store your personal information in order to send notifications regarding the latest courses and other services. Your email will be used to send newsletters, promotional offers, and inquiry information. You are free to unsubscribe from this service at any time you feel like by following a few simple steps.
              </p>

              <hr className="my-8 border-zinc-150" />

              {/* Information We Gather Section */}
              <div className="space-y-4">
                <h2 className="text-lg font-black text-zinc-900 uppercase tracking-wide flex items-center gap-2 border-l-4 border-brand-red pl-3">
                  We collect following information from our users:
                </h2>
                <ul className="space-y-2.5 pl-6 list-disc marker:text-brand-red text-zinc-650 text-sm sm:text-base">
                  <li>Job title and name.</li>
                  <li>Complete contact information including email address.</li>
                  <li>Demographic details like postcode, interests, and preferences.</li>
                  <li>Other relevant information that is used to conduct surveys and other offers.</li>
                </ul>
              </div>

              <hr className="my-8 border-zinc-150" />

              {/* What We Do Section */}
              <div className="space-y-4">
                <h2 className="text-lg font-black text-zinc-900 uppercase tracking-wide flex items-center gap-2 border-l-4 border-brand-red pl-3">
                  What we do with the information we gather:
                </h2>
                <p>
                  Collecting the above information is to gather complete details about the candidate's requirements and provide them with the best possible educational services:
                </p>
                <ul className="space-y-2.5 pl-6 list-disc marker:text-brand-red text-zinc-650 text-sm sm:text-base">
                  <li>Internal record keeping.</li>
                  <li>Improving our services, modules, and products.</li>
                  <li>Sending promotional emails, newsletters, special offers, and other relevant information regarding digital marketing programs.</li>
                  <li>
                    Using the information to contact you for market research and informative purposes. DIDM will contact you using phone, email, fax, or mail. This information is highly useful to customize our educational programs as per your interest.
                  </li>
                </ul>
              </div>

              <hr className="my-8 border-zinc-150" />

              {/* Security Section */}
              <div className="space-y-4">
                <h2 className="text-lg font-black text-zinc-900 uppercase tracking-wide flex items-center gap-2 border-l-4 border-brand-red pl-3">
                  Security
                </h2>
                <p>
                  DIDM ensures that all your information is secure and will not be revealed to others. This is only to make sure that only legal and authorized users visit our website. We also have the best security systems in place that protect all your information.
                </p>
                <p>
                  We also provide complete options to our users to restrict the use of their personal information. The basic steps for doing so are:
                </p>
                <ul className="space-y-2.5 pl-6 list-disc marker:text-brand-red text-zinc-650 text-sm sm:text-base">
                  <li>
                    Whenever you find a form important to fill on this website, you may click to indicate that you are not interested in getting direct marketing promotions.
                  </li>
                  <li>
                    You can also change the prior acceptance with us for using personal information for marketing. For this, write to us at{" "}
                    <a href="mailto:info@didm.in" className="text-brand-red hover:underline font-bold">
                      info@didm.in
                    </a>.
                  </li>
                </ul>
                <p className="bg-amber-50 border border-amber-200/80 p-4 rounded-xl text-xs sm:text-sm font-semibold text-zinc-700 leading-relaxed mt-4">
                  We can change this privacy policy without any prior notice. We do not individually inform users about policy changes; you are advised to check this website periodically to stay aware of the updates.
                </p>
              </div>

            </div>
          </div>

          {/* Call to Action back to Home */}
          <div className="text-center mt-12">
            <button
              onClick={() => router.push("/")}
              className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-extrabold text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-all cursor-pointer shadow-sm hover:-translate-y-0.5"
            >
              <span>Back to Campus Homepage</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

        </div>
      </main>

      {/* Navigation Footer */}
      <Footer showPricing={false} />
    </>
  );
}
