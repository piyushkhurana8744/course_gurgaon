"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/components/ui/toast";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Laptop, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Check, 
  Monitor, 
  Clock, 
  FileText, 
  Video, 
  Award, 
  BookOpen, 
  Briefcase, 
  ChevronRight,
  Flame,
  CheckCircle2
} from "lucide-react";
import { useRouter } from "next/navigation";
import { CENTERS } from "@/data/content";
import { contactFormSchema, ContactFormValues } from "@/utils/validation";
import { CustomCaptcha, CustomCaptchaRef, resetCustomCaptcha } from "@/components/CustomCaptcha";

export const ProgramHighlights = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(0);
  const recaptchaRef = React.useRef<CustomCaptchaRef>(null);

  const [recaptchaResetToggle, setRecaptchaResetToggle] = React.useState(0);

  React.useEffect(() => {
    if (recaptchaResetToggle > 0) {
      resetCustomCaptcha(recaptchaRef);
    }
  }, [recaptchaResetToggle]);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      center: "Gurgaon",
      agree: false,
      captchaToken: "",
    },
  });

  const onSubmitInquiry = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          center: data.center,
          captchaToken: data.captchaToken,
          formType: "Download Brochure Form",
        }),
      });

      const resData = await response.json();
      if (!response.ok) {
        throw new Error(resData.error || "Failed to submit form");
      }

      toast("Syllabus brochure generated! Download starting automatically.", "success");
      
      // Trigger file download
      const link = document.createElement("a");
      link.href = "/E-brochure (5).pdf";
      link.download = "E-brochure (5).pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      reset({
        name: "",
        phone: "",
        email: "",
        center: "Gurgaon",
        agree: false,
        captchaToken: "",
      });
      setRecaptchaResetToggle(prev => prev + 1);
      router.push("/thank-you");
    } catch (err: unknown) {
      console.error("Failed to shoot email lead:", err);
      const errorMessage = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      toast(errorMessage, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const featureItems = [
    {
      title: "Training Mode",
      desc: "In Class | Online",
      icon: Monitor,
      detailHeader: "Flexible Learning Formats",
      details: [
        "Interactive physical classroom training at our Gurgaon campus.",
        "Live online classes with real-time screen sharing and chat.",
        "Hybrid flexibility: Switch between online and offline classes easily.",
        "Convenient batch timings for college students & working professionals."
      ]
    },
    {
      title: "Course Duration",
      desc: "3 | 6 Months",
      icon: Clock,
      detailHeader: "Professional Duration Options",
      details: [
        "3 Months Fast-Track course for quick job placements.",
        "6 Months Master Specialization including advanced strategy modules.",
        "Structured modules with weekly milestones & performance tests.",
        "Flexible pacing: Learn at your own comfortable speed."
      ]
    },
    {
      title: "Course Materials",
      desc: "E-Notes & E-Books",
      icon: FileText,
      detailHeader: "Comprehensive Resource Library",
      details: [
        "Access to DIDM's official student portal and resource library.",
        "Comprehensive study material: E-Notes, E-Books, & guides.",
        "Daily practice assignments and ready-to-use checklist PDFs.",
        "Lifetime access to updated course modules and framework updates."
      ]
    },
    {
      title: "Training Session",
      desc: "Recording & Live",
      icon: Video,
      detailHeader: "Session Recordings & LMS Support",
      details: [
        "High-definition classroom recordings uploaded within 2 hours.",
        "Live interactive sessions with doubt clearing assistance.",
        "Doubt clearing support sessions every Saturday.",
        "Interactive forum: Connect with instructors and peer groups."
      ]
    },
    {
      title: "Certifications & Exams",
      desc: "30+ Certifications",
      icon: Award,
      detailHeader: "Industry Recognized Credentials",
      details: [
        "Get certified by Google (Search, Display, Video Ads).",
        "Meta Blueprint certification guidance for FB & Instagram.",
        "HubSpot, SEMrush, & DIDM official master certificate.",
        "Increase resume value with 30+ industry-trusted credentials."
      ]
    },
    {
      title: "Practical Learning",
      desc: "Case Studies & Live Projects",
      icon: BookOpen,
      detailHeader: "100% Practical Implementation",
      details: [
        "Execute real Google Ads and Meta Campaigns with test budgets.",
        "Work on 10+ actual industry case studies.",
        "Hands-on experience with SEMrush, Ahrefs, & Canva.",
        "Regular classroom drills on SEO audits and website building."
      ]
    },
    {
      title: "Placement Session",
      desc: "Job Prep & Placement Assistance",
      icon: Briefcase,
      detailHeader: "Guaranteed Placement Support",
      details: [
        "Complete resume building & LinkedIn profile optimization.",
        "Frequent mock interviews with industry HR leaders.",
        "Exclusive job portal access with daily direct openings.",
        "100% placement assurance with Gurgaon and NCR top agencies."
      ]
    },
    {
      title: "Practical Exposure",
      desc: "2-Month Agency Internship",
      icon: Laptop,
      detailHeader: "Internship & Live Exposure",
      details: [
        "Guaranteed 2-month internship with Online Strikers agency.",
        "Earn an official internship experience letter.",
        "Work on client projects under senior mentor guidance.",
        "Build a solid portfolio of success campaigns to show recruiters."
      ]
    },
  ];

  return (
    <div className="w-full flex flex-col bg-white">
      {/* 2. Program Highlights Section */}
      <section id="highlights" className="py-20 bg-zinc-50 border-b border-zinc-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-2">
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-800 tracking-tight">
              Program <span className="text-brand-red">Highlights</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 font-bold uppercase tracking-wider">
              Interactive Dashboard — Click any highlights below to view details
            </p>
            <div className="w-16 h-1 bg-brand-red mx-auto rounded-full mt-2" />
          </div>

          {/* Three-Column Grid */}
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Column A: Interactive Feature Tabs */}
            <div className="lg:col-span-4 flex flex-col gap-2.5 h-full">
              {featureItems.map((item, idx) => {
                const Icon = item.icon;
                const isActive = activeTab === idx;
                
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full flex items-center gap-4 border rounded-xl p-3.5 text-left transition-all duration-300 cursor-pointer shadow-xs lg:flex-1 ${
                      isActive 
                        ? "bg-gradient-to-r from-brand-red to-red-600 border-brand-red text-white shadow-lg shadow-brand-red/15 scale-[1.02]" 
                        : "bg-white border-zinc-200 text-zinc-855 hover:bg-zinc-50 hover:border-zinc-300"
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                      isActive ? "bg-white/20" : "bg-red-50"
                    }`}>
                      <Icon className={`h-4.5 w-4.5 ${isActive ? "text-white" : "text-brand-red"}`} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className={`text-xs font-black uppercase tracking-wider block ${
                        isActive ? "text-red-100" : "text-brand-red"
                      }`}>
                        {item.title}
                      </h4>
                      <p className={`text-sm font-semibold truncate mt-0.5 ${
                        isActive ? "text-white" : "text-zinc-700"
                      }`}>
                        {item.desc}
                      </p>
                    </div>
                    
                    <ChevronRight className={`h-4 w-4 shrink-0 transition-transform ${
                      isActive ? "text-white translate-x-1" : "text-zinc-300"
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Column B: Dynamic Key Highlights Details */}
            <div className="lg:col-span-4 h-full">
              <Card className="border-zinc-200 shadow-sm overflow-hidden h-full flex flex-col bg-white">
                {/* Dynamic Header */}
                <div className="bg-[#0f766e] text-white py-4 px-6 text-left flex items-center justify-between shrink-0">
                  <h3 className="font-extrabold text-sm uppercase tracking-wider flex items-center gap-2">
                    <Laptop className="h-4.5 w-4.5" />
                    {featureItems[activeTab].detailHeader}
                  </h3>
                  <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-bold uppercase">
                    Tab {activeTab + 1}/8
                  </span>
                </div>
                
                {/* Dynamic Details List Container */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between gap-6 text-left relative min-h-[360px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-5 flex-1 flex flex-col justify-around"
                    >
                      {featureItems[activeTab].details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex gap-3.5 items-start">
                          <div className="w-5 h-5 rounded-full bg-brand-red/10 border border-brand-red/20 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="h-3 w-3 text-brand-red stroke-[3.5px]" />
                          </div>
                          <p className="text-sm sm:text-base font-semibold text-zinc-700 leading-relaxed">
                            {detail}
                          </p>
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </Card>
            </div>            {/* Column C: Workshop Booking Card */}
            <div className="lg:col-span-4 h-full">
              <Card className="border-zinc-200 shadow-sm p-6 sm:p-8 h-full flex flex-col justify-between bg-white text-left">
                
                <div>
                  {/* Hot Deal Badge */}
                  <div className="inline-flex bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest px-3.5 py-1 rounded-full items-center gap-1.5 shadow-md shadow-amber-500/10 mb-3.5">
                    <Flame className="h-3 w-3 fill-white" />
                    <span>Seats Filling Fast</span>
                  </div>

                  <h3 className="text-lg font-black text-zinc-800 uppercase tracking-wide border-b border-zinc-150 pb-3 mb-6">
                    Download Brochure
                  </h3>

                  <form onSubmit={handleSubmit(onSubmitInquiry)} className="space-y-4">
                    {/* Full Name */}
                    <div className="flex flex-col gap-1.5">
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                        <input
                          type="text"
                          placeholder="Full Name"
                          disabled={isSubmitting}
                          {...register("name", {
                            onBlur: (e) => {
                              e.target.value = e.target.value.trim().replace(/\s+/g, " ");
                            }
                          })}
                          className={`w-full bg-zinc-50 border rounded-xl py-3.5 pl-10 pr-4 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all ${
                            errors.name ? "border-red-500" : "border-zinc-300"
                          }`}
                        />
                      </div>
                      {errors.name && <span className="text-xs text-red-500 font-semibold">{errors.name.message}</span>}
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col gap-1.5">
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                        <input
                          type="tel"
                          placeholder="Phone"
                          maxLength={10}
                          disabled={isSubmitting}
                          {...register("phone", {
                            onChange: (e) => {
                              e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
                            }
                          })}
                          className={`w-full bg-zinc-50 border rounded-xl py-3.5 pl-10 pr-4 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all ${
                            errors.phone ? "border-red-500" : "border-zinc-300"
                          }`}
                        />
                      </div>
                      {errors.phone && <span className="text-xs text-red-500 font-semibold">{errors.phone.message}</span>}
                    </div>

                    {/* Email Address */}
                    <div className="flex flex-col gap-1.5">
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                        <input
                          type="email"
                          placeholder="Email"
                          disabled={isSubmitting}
                          {...register("email", {
                            onBlur: (e) => {
                              e.target.value = e.target.value.trim();
                            }
                          })}
                          className={`w-full bg-zinc-50 border rounded-xl py-3.5 pl-10 pr-4 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all ${
                            errors.email ? "border-red-500" : "border-zinc-300"
                          }`}
                        />
                      </div>
                      {errors.email && <span className="text-xs text-red-500 font-semibold">{errors.email.message}</span>}
                    </div>

                    {/* Center selection */}
                    <div className="flex flex-col gap-1.5">
                      <div className="relative">
                        <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                        <select
                          disabled={isSubmitting}
                          {...register("center")}
                          className={`w-full bg-zinc-50 border rounded-xl py-3.5 pl-10 pr-4 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all cursor-pointer ${
                            errors.center ? "border-red-500" : "border-zinc-300"
                          }`}
                        >
                          <option value="">Choose Center Near You..</option>
                          {CENTERS.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                      </div>
                      {errors.center && <span className="text-xs text-red-500 font-semibold">{errors.center.message}</span>}
                    </div>

                    {/* Agreement Checkbox */}
                    <div className="flex flex-col gap-1.5 py-1">
                      <label className="flex items-start gap-2 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          disabled={isSubmitting}
                          {...register("agree")}
                          className={`mt-0.5 rounded border border-zinc-350 text-brand-red focus:ring-brand-red/20 focus:border-brand-red ${
                            errors.agree ? "border-red-500" : "border-zinc-300"
                          }`}
                        />
                        <span className="text-[11px] text-zinc-550 font-bold leading-tight">
                          I agree to the DIDM{" "}
                          <a
                            href="/terms-and-conditions"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-red hover:underline"
                          >
                            Terms of Use
                          </a>{" "}
                          and{" "}
                          <a
                            href="/privacy-policy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-red hover:underline"
                          >
                            Privacy Policy
                          </a>
                        </span>
                      </label>
                      {errors.agree && <span className="text-xs text-red-500 font-semibold">{errors.agree.message}</span>}
                    </div>

                    {/* Spam Protection - Cloudflare Turnstile */}
                    <CustomCaptcha
                      ref={recaptchaRef}
                      id="highlights-captcha"
                      error={errors.captchaToken?.message}
                      onChange={(token) => {
                        setValue("captchaToken", token || "", { shouldValidate: true });
                      }}
                    />

                    {/* Submit Button */}
                    <Button
                      variant="primary"
                      size="lg"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 cursor-pointer mt-4 py-3.5 shadow-md shadow-brand-red/10 font-bold"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Downloading...</span>
                        </>
                      ) : (
                        <span>DOWNLOAD</span>
                      )}
                    </Button>

                  </form>
                </div>
                
                {/* Security footer badge */}
                <div className="border-t border-zinc-150 pt-3 mt-4 text-center flex items-center justify-center gap-1.5 text-zinc-400">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">
                    GDPR Compliant & Secure Portal
                  </span>
                </div>
              </Card>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
