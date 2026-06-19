"use client";

import * as React from "react";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { ProgramHighlights } from "@/sections/ProgramHighlights";
import { VideoCounselling } from "@/sections/VideoCounselling";
import { CourseOverview } from "@/sections/CourseOverview";
import { CoursePrograms } from "@/sections/CoursePrograms";
import { TrainingSchedule } from "@/sections/TrainingSchedule";
import { CoveredModules } from "@/sections/CoveredModules";
import { CoveredModulesTabs } from "@/sections/CoveredModulesTabs";
import { ComparisonTable } from "@/sections/ComparisonTable";
import { FAQ } from "@/sections/FAQ";
import { StudentFeedback } from "@/sections/StudentFeedback";
import { StudentsCorner } from "@/sections/StudentsCorner";
import { StudentsHappyFaces } from "@/sections/StudentsHappyFaces";
import { DigitalCareerStart } from "@/sections/DigitalCareerStart";
import { ContactMap } from "@/sections/ContactMap";
import { Footer } from "@/sections/Footer";
import { FloatingWidgets } from "@/components/FloatingWidgets";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { ShieldCheck, Mail, Phone, User, MapPin } from "lucide-react";
import { CENTERS } from "@/data/content";
import { 
  contactFormSchema, 
  ContactFormValues, 
  nameSchema, 
  emailSchema, 
  phoneSchema, 
  centerSchema 
} from "@/utils/validation";
import { CustomCaptcha, CustomCaptchaRef, resetCustomCaptcha } from "@/components/CustomCaptcha";

interface MainPageContentProps {
  showPricing: boolean;
}

export function MainPageContent({ showPricing }: MainPageContentProps) {
  const { toast } = useToast();
  const router = useRouter();

  React.useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === "#demo") {
        triggerDemoModal();
      }
    };

    // Check hash on initial load
    handleHash();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHash);

    const path = window.location.pathname;
    let targetId = "";
    if (path.endsWith("/highlights")) targetId = "highlights";
    else if (path.endsWith("/curriculum")) targetId = "curriculum";
    else if (path.endsWith("/pricing") || path.endsWith("/courses")) targetId = "pricing";
    else if (path.endsWith("/faq")) targetId = "faq";

    if (targetId) {
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 300);
    }

    return () => {
      window.removeEventListener("hashchange", handleHash);
    };
  }, []);
  
  // Dialog visibility states
  const [isDemoOpen, setIsDemoOpen] = React.useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = React.useState(false);
  const [selectedCourse, setSelectedCourse] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // Custom CAPTCHA references and state
  const demoRecaptchaRef = React.useRef<CustomCaptchaRef>(null);
  const brochureRecaptchaRef = React.useRef<CustomCaptchaRef>(null);
  const [brochureToken, setBrochureToken] = React.useState<string | null>(null);

  const [demoResetToggle, setDemoResetToggle] = React.useState(0);
  const [brochureResetToggle, setBrochureResetToggle] = React.useState(0);

  React.useEffect(() => {
    if (demoResetToggle > 0) {
      resetCustomCaptcha(demoRecaptchaRef);
    }
  }, [demoResetToggle]);

  React.useEffect(() => {
    if (brochureResetToggle > 0) {
      resetCustomCaptcha(brochureRecaptchaRef);
    }
  }, [brochureResetToggle]);

  // Form hooks for modal (Demo Booking)
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
      email: "",
      phone: "",
      center: "Gurgaon",
      agree: false,
      captchaToken: "",
    },
  });

  // Open demo class registration
  const triggerDemoModal = (courseName: string = "") => {
    if (courseName && (courseName.toLowerCase().includes("brochure") || courseName.toLowerCase().includes("syllabus"))) {
      setIsBrochureOpen(true);
      return;
    }
    setSelectedCourse(courseName || "Free Demo Class");
    setValue("center", "Gurgaon");
    setIsDemoOpen(true);
  };

  const handleDemoSubmit = async (data: ContactFormValues) => {
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
          formType: "DIDM Gurgaon Adword Form 2",
        }),
      });

      const resData = await response.json();
      if (!response.ok) {
        throw new Error(resData.error || "Failed to submit form");
      }

      setIsDemoOpen(false);
      toast(`Thank you, ${data.name}! Your seats for the free trial class are locked at our ${data.center} center. Check your email for details.`, "success");
      reset({
        name: "",
        email: "",
        phone: "",
        center: "Gurgaon",
        agree: false,
        captchaToken: "",
      });
      setDemoResetToggle(prev => prev + 1);
      router.push("/thank-you");
    } catch (err: unknown) {
      console.error("Failed to shoot email lead:", err);
      const errorMessage = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      toast(errorMessage, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBrochureSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    const formData = new FormData(target);
    const name = formData.get("brochure-name");
    const email = formData.get("brochure-email");
    const phone = formData.get("brochure-phone");
    const center = formData.get("brochure-center");

    // Perform individual schema validations for standard form
    const nameResult = nameSchema.safeParse(name);
    if (!nameResult.success) {
      toast(nameResult.error.issues[0].message, "error");
      return;
    }
    const sanitizedName = nameResult.data;

    const emailResult = emailSchema.safeParse(email);
    if (!emailResult.success) {
      toast(emailResult.error.issues[0].message, "error");
      return;
    }
    const sanitizedEmail = emailResult.data;

    const phoneResult = phoneSchema.safeParse(phone);
    if (!phoneResult.success) {
      toast(phoneResult.error.issues[0].message, "error");
      return;
    }
    const sanitizedPhone = phoneResult.data;

    const centerResult = centerSchema.safeParse(center);
    if (!centerResult.success) {
      toast(centerResult.error.issues[0].message, "error");
      return;
    }
    const sanitizedCenter = centerResult.data;

    const agree = formData.get("brochure-agree");
    if (!agree) {
      toast("You must agree to the DIDM Terms of Use and Privacy Policy", "error");
      return;
    }

    if (!brochureToken) {
      toast("Please complete the security check to prove you are not a bot.", "error");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: sanitizedName,
          email: sanitizedEmail,
          phone: sanitizedPhone,
          center: sanitizedCenter,
          captchaToken: brochureToken,
          formType: "Brochure Download Form",
        }),
      });

      const resData = await response.json();
      if (!response.ok) {
        throw new Error(resData.error || "Failed to submit form");
      }

      setIsBrochureOpen(false);
      toast(`Syllabus brochure generated for ${sanitizedCenter} center! Download starting automatically for ${sanitizedEmail}.`, "success");
      
      // Trigger file download
      const link = document.createElement("a");
      link.href = "/E-brochure (5).pdf";
      link.download = "E-brochure (5).pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      target.reset();
      setBrochureToken(null);
      setBrochureResetToggle(prev => prev + 1);
      router.push("/thank-you");
    } catch (err: unknown) {
      console.error("Failed to shoot email lead:", err);
      const errorMessage = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      toast(errorMessage, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Sticky header navigation */}
      <Header onOpenDemo={triggerDemoModal} showPricing={showPricing} />

      {/* Main Page Layout Sections */}
      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <Hero />

        {/* Branding Ribbon */}
        <div className="w-full bg-gradient-to-r from-brand-red via-red-600 to-brand-red py-4 text-center shadow-md relative overflow-hidden">
          {/* Animated accent gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
          <h2 className="text-white text-base sm:text-lg lg:text-xl font-extrabold tracking-widest uppercase flex items-center justify-center gap-2">
            <span>★</span> India's Most Promising Brand <span>★</span>
          </h2>
        </div>

        {/* 7c. Let Your Digital Career Begins Now - CTA Cards */}
        <DigitalCareerStart onOpenDemo={triggerDemoModal} />

        {/* 7. Detailed Course comparison grid */}
        <ComparisonTable onOpenDemo={triggerDemoModal} showPricing={showPricing} />

        {/* 2. Program Highlights */}
        <ProgramHighlights />

        {/* 3c. Course learning pathways (MIDM, Advanced, Customized) */}
        <CoursePrograms onOpenDemo={triggerDemoModal} />

        {/* 3. Video & Counselling Form */}
        <VideoCounselling />

        {/* 7b. Gurgaon Student Feedback Grid */}
        <StudentFeedback />

        {/* 3b. Course Overview details */}
        <CourseOverview />

        {/* 3d. Training schedule and qualifications (Gurgaon) */}
        <TrainingSchedule onOpenDemo={triggerDemoModal} />

        {/* 3e. 50+ Modules list covered in Gurgaon master program */}
        <CoveredModules onOpenDemo={triggerDemoModal} />

        {/* 3f. Interactive module details tabs (Adwords, SEO, SMM, Adsense, etc.) */}
        <CoveredModulesTabs onOpenDemo={triggerDemoModal} />

        {/* 7a. Gurgaon Branch Students Corner Carousel */}
        <StudentsCorner />

        {/* 7b. Students Happy Faces Gallery */}
        {/* <StudentsHappyFaces /> */}

        {/* 12. FAQ Accordions */}
        <FAQ />

        {/* 13. Map & Office Helpline Desk */}
        <ContactMap onOpenDemo={triggerDemoModal} />
      </main>

      {/* Footer credits and newsletter sign-up */}
      <Footer showPricing={showPricing} />

      {/* Floating widgets (WhatsApp, back to top, mobile sticky bottom) */}
      <FloatingWidgets onOpenDemo={() => triggerDemoModal()} />

      {/* ================================================== */}
      {/* DIALOG POPUPS */}
      {/* ================================================== */}

      {/* A. Free Demo Booking Modal */}
      <Dialog
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        title={selectedCourse === "Request Callback" ? "Request a Callback" : (selectedCourse ? `Register: ${selectedCourse}` : "Book Your Free Demo Class")}
      >
        <form onSubmit={handleSubmit(handleDemoSubmit)} className="space-y-4 text-left">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
              <User className="h-3.5 w-3.5 text-brand-red" /> Full Name
            </label>
            <input
              type="text"
              placeholder="e.g. Rahul Sharma"
              {...register("name", {
                onBlur: (e) => {
                  e.target.value = e.target.value.trim().replace(/\s+/g, " ");
                }
              })}
              disabled={isSubmitting}
              className={`w-full bg-zinc-50 border rounded-xl py-3 px-4 text-sm text-zinc-855 placeholder-zinc-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all ${
                errors.name ? "border-red-500" : "border-zinc-300"
              }`}
            />
            {errors.name && <span className="text-xs text-red-500 font-semibold">{errors.name.message}</span>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-brand-red" /> Email
            </label>
            <input
              type="email"
              placeholder="e.g. rahul@gmail.com"
              {...register("email", {
                onBlur: (e) => {
                  e.target.value = e.target.value.trim();
                }
              })}
              disabled={isSubmitting}
              className={`w-full bg-zinc-50 border rounded-xl py-3 px-4 text-sm text-zinc-855 placeholder-zinc-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all ${
                errors.email ? "border-red-500" : "border-zinc-300"
              }`}
            />
            {errors.email && <span className="text-xs text-red-500 font-semibold">{errors.email.message}</span>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-brand-red" /> Mobile Phone
            </label>
            <input
              type="tel"
              placeholder="98765 43210"
              maxLength={10}
              {...register("phone", {
                onChange: (e) => {
                  e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
                }
              })}
              disabled={isSubmitting}
              className={`w-full bg-zinc-50 border rounded-xl py-3 px-4 text-sm text-zinc-855 placeholder-zinc-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all ${
                errors.phone ? "border-red-500" : "border-zinc-300"
              }`}
            />
            {errors.phone && <span className="text-xs text-red-500 font-semibold">{errors.phone.message}</span>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-brand-red" /> Choose Center Near You..
            </label>
            <select
              {...register("center")}
              disabled={isSubmitting}
              className={`w-full bg-zinc-50 border rounded-xl py-3 px-4 text-sm text-zinc-855 placeholder-zinc-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all cursor-pointer ${
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
            ref={demoRecaptchaRef}
            id="modal-demo-captcha"
            error={errors.captchaToken?.message}
            onChange={(token) => {
              setValue("captchaToken", token || "", { shouldValidate: true });
            }}
          />

          <div className="flex items-center gap-2 py-1">
            <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
            <span className="text-[10px] text-zinc-500 font-bold">
              ISO 9001:2015 Admissions Desk. Support hours: 9AM - 7PM daily.
            </span>
          </div>

          <Button variant="primary" size="lg" type="submit" disabled={isSubmitting} className="w-full mt-2 cursor-pointer font-bold">
            {isSubmitting ? "Submitting..." : (selectedCourse === "Request Callback" ? "Request a Callback" : "Confirm Free Class Booking")}
          </Button>
        </form>
      </Dialog>

      {/* B. Download Syllabus Brochure Modal */}
      <Dialog
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
        title="Download Course Brochure"
      >
        <form onSubmit={handleBrochureSubmit} className="space-y-4 text-left">
          <p className="text-xs text-zinc-655 mb-2 leading-relaxed font-medium">
            Enter your details below to receive the complete 2026 digital marketing curriculum PDF file directly on your device.
          </p>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="b-name" className="text-xs font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
              <User className="h-3.5 w-3.5 text-brand-red" /> Full Name
            </label>
            <input
              id="b-name"
              name="brochure-name"
              type="text"
              required
              placeholder="e.g. Rahul Sharma"
              onBlur={(e) => {
                e.target.value = e.target.value.trim().replace(/\s+/g, " ");
              }}
              disabled={isSubmitting}
              className="w-full bg-zinc-50 border border-zinc-300 rounded-xl py-3 px-4 text-sm text-zinc-855 placeholder-zinc-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="b-email" className="text-xs font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-brand-red" /> Email
            </label>
            <input
              id="b-email"
              name="brochure-email"
              type="email"
              required
              placeholder="e.g. rahul@gmail.com"
              onBlur={(e) => {
                e.target.value = e.target.value.trim();
              }}
              disabled={isSubmitting}
              className="w-full bg-zinc-50 border border-zinc-300 rounded-xl py-3 px-4 text-sm text-zinc-855 placeholder-zinc-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="b-phone" className="text-xs font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-brand-red" /> Mobile Phone
            </label>
            <input
              id="b-phone"
              name="brochure-phone"
              type="tel"
              required
              maxLength={10}
              onInput={(e) => {
                const target = e.target as HTMLInputElement;
                target.value = target.value.replace(/\D/g, "").slice(0, 10);
              }}
              placeholder="98765 43210"
              disabled={isSubmitting}
              className="w-full bg-zinc-50 border border-zinc-300 rounded-xl py-3 px-4 text-sm text-zinc-855 placeholder-zinc-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="b-center" className="text-xs font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-brand-red" /> Choose Center Near You..
            </label>
            <select
              id="b-center"
              name="brochure-center"
              required
              disabled={isSubmitting}
              className="w-full bg-zinc-50 border border-zinc-300 rounded-xl py-3 px-4 text-sm text-zinc-855 placeholder-zinc-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all cursor-pointer"
            >
              <option value="">Choose Center Near You..</option>
              {CENTERS.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Agreement Checkbox */}
          <div className="flex flex-col gap-1.5 py-1">
            <label className="flex items-start gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                name="brochure-agree"
                required
                disabled={isSubmitting}
                className="mt-0.5 rounded border border-zinc-350 text-brand-red focus:ring-brand-red/20 focus:border-brand-red"
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
          </div>

          {/* Spam Protection - Cloudflare Turnstile */}
          <CustomCaptcha
            ref={brochureRecaptchaRef}
            id="modal-brochure-captcha"
            onChange={(token) => setBrochureToken(token)}
          />

          <Button variant="primary" size="lg" type="submit" disabled={isSubmitting} className="w-full mt-4 cursor-pointer font-bold">
            {isSubmitting ? "Generating PDF..." : "Download Free Brochure Now"}
          </Button>
        </form>
      </Dialog>
    </>
  );
}
