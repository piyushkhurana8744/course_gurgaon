"use client";

import * as React from "react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { useRouter } from "next/navigation";
import { FileWarning, Calendar, Landmark, CheckCircle, ArrowRight, ShieldCheck, Mail } from "lucide-react";

export function TermsAndConditionsClient() {
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
              <FileWarning className="h-3.5 w-3.5" /> Policy Agreement
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-zinc-900 tracking-tight leading-tight">
              Terms & <span className="bg-gradient-to-r from-brand-red to-rose-600 bg-clip-text text-transparent">Conditions</span>
            </h1>
            <div className="flex items-center justify-center gap-2 mt-4 text-xs font-bold text-zinc-400 uppercase tracking-widest">
              <Calendar className="h-4.5 w-4.5 text-zinc-300" />
              <span>Last Updated: May 28, 2026</span>
            </div>
          </div>

          {/* Document Content Card */}
          <div className="bg-white border border-zinc-200/80 rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.015)] relative space-y-10">
            
            {/* Introductory Text */}
            <div className="bg-zinc-50 border border-zinc-150 p-6 rounded-2xl">
              <h3 className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-2">Notice to Students</h3>
              <p className="text-sm sm:text-base font-semibold text-zinc-750 leading-relaxed">
                This Terms and Conditions Form is applicable to all students enrolled with Dayitwa Consultancy Services Pvt. Ltd. By signing this form, the student agrees to all rules, regulations, and policies mentioned below.
              </p>
            </div>

            {/* List of Sections */}
            <div className="space-y-10 text-zinc-650 text-sm sm:text-base leading-relaxed">
              
              {/* 1. Enrollment Terms */}
              <section className="space-y-4">
                <h2 className="text-lg font-black text-zinc-900 uppercase tracking-wide flex items-center gap-2.5 border-l-4 border-brand-red pl-3">
                  <span className="text-brand-red">1.</span> Enrollment Terms
                </h2>
                <ul className="space-y-2.5 pl-6 list-disc marker:text-brand-red text-zinc-650">
                  <li>Admission/enrollment/registration will be confirmed only after submission of required documents and payment of applicable fees.</li>
                  <li>Company reserves the right to accept or reject any enrollment application without prior notice.</li>
                  <li>Course duration, batch timing, branch location, training centre location and trainer allocation may be changed by management if required.</li>
                  <li>Student must provide correct personal details, contact number, and email ID at the time of enrollment.</li>
                  <li>Enrollment once confirmed is non-transferable to another person. Admission transfer is allowed in emergency situations only to blood relation members with management approval.</li>
                  <li>
                    Student/Participant can hold the course for up to six months by providing intimation on{" "}
                    <a href="mailto:services@didm.in" className="text-brand-red hover:underline font-bold">
                      services@didm.in
                    </a>{" "}
                    with supporting documents.
                  </li>
                  <li>For students below 18 years of age, a consent form signed by parents/guardian along with Aadhaar card copy must be submitted.</li>
                </ul>
              </section>

              <hr className="border-zinc-150" />

              {/* 2. Payment Terms */}
              <section className="space-y-4">
                <h2 className="text-lg font-black text-zinc-900 uppercase tracking-wide flex items-center gap-2.5 border-l-4 border-brand-red pl-3">
                  <span className="text-brand-red">2.</span> Payment Terms
                </h2>
                <ul className="space-y-2.5 pl-6 list-disc marker:text-brand-red text-zinc-650 mb-6">
                  <li>All fees must be paid as per agreed schedule at the time of admission.</li>
                  <li>Payment shall be made payable to "Dayitwa Consultancy Services Pvt Ltd" via online transfer, cheque, or credit card.</li>
                </ul>

                {/* Bank Details Visual Box */}
                <div className="bg-gradient-to-br from-zinc-50 to-zinc-100 border border-zinc-200 rounded-2xl p-5 sm:p-6 shadow-2xs mt-4">
                  <div className="flex items-center gap-2 mb-4 border-b border-zinc-200 pb-3">
                    <Landmark className="h-5 w-5 text-brand-red" />
                    <span className="text-xs font-black text-zinc-800 uppercase tracking-widest">DIDM Gurgaon Official Bank Details</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="space-y-1">
                      <span className="text-[10px] font-black text-zinc-400 uppercase tracking-wider block">Beneficiary Name</span>
                      <span className="font-extrabold text-zinc-850 block">Dayitwa Consultancy Services Pvt Ltd</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-black text-zinc-400 uppercase tracking-wider block">Bank Name</span>
                      <span className="font-extrabold text-zinc-850 block">Kotak Mahindra Bank</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-black text-zinc-400 uppercase tracking-wider block">Account Number</span>
                      <span className="font-extrabold text-zinc-850 font-mono block">8612190164</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-black text-zinc-400 uppercase tracking-wider block">Account Type</span>
                      <span className="font-extrabold text-zinc-850 block">Current Account</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-black text-zinc-400 uppercase tracking-wider block">IFSC Code</span>
                      <span className="font-extrabold text-zinc-850 font-mono block">KKBK0000193</span>
                    </div>
                    <div className="space-y-1 sm:col-span-2">
                      <span className="text-[10px] font-black text-zinc-400 uppercase tracking-wider block">Branch Address</span>
                      <span className="font-bold text-zinc-700 block">G1,2,3,4 Pankaj Arcade, Plot No-16, Sector-5, Dwarka, New Delhi-110075</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2.5 pl-6 list-disc marker:text-brand-red text-zinc-650 mt-6">
                  <li>Fees once paid are non-refundable and non-transferable under any circumstances.</li>
                  <li>Delay in payment may lead to suspension of classes, LMS access, certificates, or services until dues are cleared.</li>
                  <li>Late fee of Rs. 200 per day will be charged for delayed payments.</li>
                  <li>Transfer of batch and branch will be chargeable at Rs. 3000 + GST.</li>
                  <li>GST (18%) will be applicable for invoice billing.</li>
                </ul>
              </section>

              <hr className="border-zinc-150" />

              {/* 3. Training Services */}
              <section className="space-y-4">
                <h2 className="text-lg font-black text-zinc-900 uppercase tracking-wide flex items-center gap-2.5 border-l-4 border-brand-red pl-3">
                  <span className="text-brand-red">3.</span> Training Services
                </h2>
                <ul className="space-y-2.5 pl-6 list-disc marker:text-brand-red text-zinc-650">
                  <li>Training shall be provided through offline/online/hybrid mode as decided by management.</li>
                  <li>Attendance should remain regular with minimum 80% attendance.</li>
                  <li>Misconduct or damage to property may lead to suspension or termination without refund.</li>
                  <li>Recording videos, taking pictures, or electronic recording during classes is strictly prohibited.</li>
                  <li>Students must carry their own laptop/learning gadget during classes.</li>
                  <li>Internet access provided in classrooms must only be used for training purposes.</li>
                </ul>
              </section>

              <hr className="border-zinc-150" />

              {/* 4. Add-On Services */}
              <section className="space-y-4">
                <h2 className="text-lg font-black text-zinc-900 uppercase tracking-wide flex items-center gap-2.5 border-l-4 border-brand-red pl-3">
                  <span className="text-brand-red">4.</span> Add-On Services
                </h2>
                <ul className="space-y-2.5 pl-6 list-disc marker:text-brand-red text-zinc-650">
                  <li>Add-on services may include internship support, placement assistance, workshops, seminars, certifications, portfolio support, and career guidance.</li>
                  <li>Company reserves the right to modify or discontinue any add-on service.</li>
                </ul>
              </section>

              <hr className="border-zinc-150" />

              {/* 5. Certificates & Completion */}
              <section className="space-y-4">
                <h2 className="text-lg font-black text-zinc-900 uppercase tracking-wide flex items-center gap-2.5 border-l-4 border-brand-red pl-3">
                  <span className="text-brand-red">5.</span> Certificates & Completion
                </h2>
                <ul className="space-y-2.5 pl-6 list-disc marker:text-brand-red text-zinc-650">
                  <li>Certificates will only be issued after successful completion of course requirements and full fee clearance.</li>
                  <li>Certificate availability depends on exam clearance and third-party availability.</li>
                </ul>
              </section>

              <hr className="border-zinc-150" />

              {/* 6. Advertisement / Media Consent */}
              <section className="space-y-4">
                <h2 className="text-lg font-black text-zinc-900 uppercase tracking-wide flex items-center gap-2.5 border-l-4 border-brand-red pl-3">
                  <span className="text-brand-red">6.</span> Advertisement / Media Consent
                </h2>
                <ul className="space-y-2.5 pl-6 list-disc marker:text-brand-red text-zinc-650">
                  <li>Student give consent to use photographs, videos, testimonials, project visuals, and event participation media for promotional purposes.</li>
                  <li>Such content may be used in advertisements, brochures, websites, social media, reels, and videos.</li>
                  <li>Student shall not claim any compensation for such usage.</li>
                </ul>
              </section>

              <hr className="border-zinc-150" />

              {/* 7. Legal Jurisdiction */}
              <section className="space-y-4">
                <h2 className="text-lg font-black text-zinc-900 uppercase tracking-wide flex items-center gap-2.5 border-l-4 border-brand-red pl-3">
                  <span className="text-brand-red">7.</span> Legal Jurisdiction
                </h2>
                <p className="pl-3 font-semibold text-zinc-800">
                  Any dispute or claim relating to admission, payment, training services, or interpretation of these terms shall be subject to the exclusive jurisdiction of competent courts at Delhi, India only.
                </p>
              </section>

              <hr className="border-zinc-150" />

              {/* 8. Declaration */}
              <section className="space-y-4">
                <h2 className="text-lg font-black text-zinc-900 uppercase tracking-wide flex items-center gap-2.5 border-l-4 border-brand-red pl-3">
                  <span className="text-brand-red">8.</span> Declaration
                </h2>
                <div className="flex gap-3 bg-red-50/50 border border-brand-red/10 p-5 rounded-2xl text-zinc-800 font-extrabold items-center">
                  <CheckCircle className="h-5 w-5 text-brand-red shrink-0" />
                  <span>I have read, understood, and accepted all the above Terms and Conditions voluntarily.</span>
                </div>
              </section>

            </div>

            {/* Footer queries block */}
            <div className="border-t border-zinc-150 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs sm:text-sm font-semibold text-zinc-550">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4.5 w-4.5 text-brand-red" />
                <span>Issuer: Dayitwa Consultancy Services Pvt. Ltd.</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4.5 w-4.5 text-brand-red" />
                <span>Contact Desk: <a href="tel:+918800505151" className="text-brand-red hover:underline font-bold">+91 88005 05151</a></span>
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
