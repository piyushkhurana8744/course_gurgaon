"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CoveredModulesTabsProps {
  onOpenDemo: (courseName: string) => void;
}

interface ModuleData {
  id: string;
  name: string;
  paragraphs: string[];
  listHeader?: string;
  list?: string[];
  subListHeader?: string;
  subList?: string[];
}

export const CoveredModulesTabs = ({ onOpenDemo }: CoveredModulesTabsProps) => {
  const [activeTab, setActiveTab] = React.useState<string>("email");

  const modules: ModuleData[] = [
    {
      id: "email",
      name: "E-Mail Marketing",
      paragraphs: [
        "Email Marketing has now emerged as the most effective marketing tool to reach a number of targeted audiences at the lowest cost. This is the most feasible advertising technique that makes use of digital platforms to reach internet users in bulk. It is also the best way to gain customer's trust and is now widely used as the method of marketing that is producing a high response rate. This is the reason we have introduced a comprehensive email marketing module.",
        "Our email marketing training courses teach trainees the fundamentals behind email marketing campaigns, email deliverability, email copywriting, and list management. We provide trainers who are active in this industry to share real-world practices. Trainees also learn the best use of analytics, automation, and mobile strategies to build a unified, integrated email marketing strategy."
      ],
      listHeader: "Important Course Objectives",
      list: [
        "Learn tactics to draw more traffic by generating brand awareness and get high visibility",
        "Understand effective tactics of email marketing",
        "Learn to build highly targeted email lists and email campaigns",
        "Understanding the Marketing Funnel and Lead Nurturing Process",
        "Learn skills to market a business with the use of email marketing platforms",
        "Gain knowledge to generate a large number of organic email subscribers",
        "In-depth knowledge of email marketing regulations (CAN-SPAM, GDPR)",
        "Learn the best ways to send mass emails to prospects looking for particular products or services"
      ]
    },
    {
      id: "ppc",
      name: "Google AdWords / PPC",
      paragraphs: [
        "Pay-Per-Click (PPC) marketing is the best modern advertising strategy that is used to target the prospective audience over search engines and social media to increase conversions. In this method, advertisers showcase ads on different websites and pay for each click made by the audience. This has raised the demand for certified PPC experts.",
        "PPC training provided by us concentrates on using search engines for generating profitable clicks for websites. The sessions assure in-depth knowledge of PPC campaigns through instructor-led walkthroughs, video lessons, live Google AdWords accounts, and optimization tools. We regularly update the course content to match Google's latest updates.",
        "After completing this PPC course, trainees will be able to handle Pay-Per-Click campaigns with the ability to add target keywords, add negative keywords, split Ad groups, design landing pages, and review CPC performance metrics."
      ]
    },
    {
      id: "orm",
      name: "Online Reputation Management",
      paragraphs: [
        "Understanding the concept of online reputation management reveals that you need to possess knowledge of the various analytical and practical methods that will allow you to understand the negative components and ways to eliminate them from search listings. In this module, we teach you how to build branding strategies and monitor brand image to maintain a positive public outlook.",
        "The importance of this module cannot be overstated, as it is a complete brand-safety solution for business websites. After completion of the course, you will be able to manage social media feedback and maintain a positive brand reputation that attracts organic viewers to your site."
      ],
      listHeader: "Who should attend this training?",
      list: [
        "Business Heads & Digital Marketing Teams",
        "Sales & Marketing Professionals",
        "PR, Communications & CRM Teams",
        "CXOs & Brand Owners"
      ],
      subListHeader: "Key promises of online reputation management training:",
      subList: [
        "Understand ways to measure and analyze brand sentiment metrics",
        "Why brands must care about active online reputation building",
        "Get practical knowledge to handle negative conversations and reviews",
        "Learn to create & execute an end-to-end online reputation management strategy"
      ]
    },
    {
      id: "affiliate",
      name: "Affiliate Marketing",
      paragraphs: [
        "We have designed a balanced affiliate marketing module coached by industry professionals. Affiliate marketing is widely adopted across all businesses that leverage digital platforms. With this course, you will gain complete operational knowledge on how affiliate programs generate passive revenue.",
        "The classes teach trainees the best practices to position banner ads, place affiliate hyperlinks for product images, construct buttons, and set up tracking codes across various partner websites."
      ],
      listHeader: "Course Curriculum",
      list: [
        "Understanding core concepts of affiliate marketing",
        "Types of affiliate networks and publisher models",
        "Affiliate marketing agencies, popular networks, products and services",
        "How to build expertise in handling affiliate programs for a specific business",
        "Commission-based lead generation strategies",
        "Understanding tracking mechanisms and cookie durations",
        "Tactics to apply affiliate networks for marketing a business",
        "Affiliate marketing success stories & case studies"
      ]
    },
    {
      id: "social",
      name: "Social Media Marketing",
      paragraphs: [
        "The social media marketing module concentrates on developing skills in trainees to build brand image along with generating leads for respective businesses. It is sure that after completing the desired SMM/SMO courses from Delhi Institute of Digital Marketing, you will understand the complete social landscape.",
        "Our social media training sessions include theoretical knowledge alongside heavy practical execution. Candidates get the opportunity to work on live projects, understanding the key factors, metrics, and tactics that are important for a successful social media manager."
      ],
      listHeader: "Key benefits of availing Social Media Marketing Training:",
      list: [
        "Learn to create high-ROI campaigns across Facebook, Instagram, LinkedIn, and YouTube",
        "Develop social media expert skills to opt for high-paying career profiles",
        "Learn how to create comprehensive Social Media Strategies from scratch",
        "Flexible sessions including weekday and weekend batches"
      ]
    },
    {
      id: "seo",
      name: "Search Engine Optimization",
      paragraphs: [
        "We have designed our SEO training module to provide complete, detailed knowledge of the tools, techniques, and core concepts of Search Engine Optimization. The course provides the basic concepts of SEO alongside hands-on practice in industry-standard tools under the guidance of experts.",
        "This course provides the necessary skills to trainees to achieve and maintain top listings for websites in Google search results. The entire training is exhaustive and covers on-page, off-page, technical SEO, and site health audits."
      ],
      listHeader: "Some of the main objectives of our SEO training course:",
      list: [
        "Master basic and advanced technical skills of SEO",
        "Understand the mechanics of how Search Engines crawl, index, and rank websites",
        "Learn how to attract high-intent organic traffic to boost search visibility",
        "Learn keyword research methods to collect search volume and intent data",
        "Learn best techniques and optimization practices for high keyword rankings",
        "Learn how to troubleshoot indexing problems, perform audits, and manage site health"
      ]
    },
    {
      id: "adsense",
      name: "Adsense",
      paragraphs: [
        "Google AdSense is a program run by Google that allows publishers in the Google Network of content sites to serve automatic text, image, video, or interactive media advertisements that are targeted to site content and audience. These advertisements are administered, sorted, and maintained by Google. They can generate revenue on either a per-click or per-impression basis.",
        "AdSense has become one of the popular programs that specialize in creating and placing banner advertisements on a website or blog because the advertisements are less intrusive and the content of the advertisements is often highly relevant to the website's niche, driving strong user engagement and revenue."
      ]
    }
  ];

  const currentModule = modules.find((m) => m.id === activeTab) || modules[0];

  return (
    <section id="curriculum" className="py-20 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-black text-brand-red uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Sparkles className="h-4 w-4" /> Core Modules Detail
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-zinc-800">
            Digital Marketing Training <span className="text-brand-red">Course Module in Gurgaon</span>
          </h2>
          <p className="text-sm sm:text-base font-semibold text-zinc-550 max-w-3xl mx-auto leading-relaxed">
            We are providing <strong className="text-zinc-800 font-extrabold">50+ modules</strong> &amp; <strong className="text-brand-red font-extrabold">02 Months</strong> Live practical training by <strong className="text-zinc-800 font-extrabold">Online Strikers</strong> a Digital Marketing agency in our Masters in Digital Marketing training program.
          </p>
          <div className="w-16 h-1 bg-brand-red mx-auto rounded-full mt-2" />
        </div>

        {/* Interactive Layout Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Stack of Vertical Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-2.5 w-full">
            {modules.map((mod) => {
              const isActive = activeTab === mod.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveTab(mod.id)}
                  className={`w-full text-left px-6 py-4 rounded-xl font-bold transition-all duration-350 cursor-pointer border ${
                    isActive
                      ? "bg-brand-red text-white border-brand-red shadow-md shadow-brand-red/10"
                      : "bg-white text-zinc-700 border-zinc-200 hover:bg-zinc-50 hover:border-zinc-300"
                  }`}
                >
                  <span className="text-sm sm:text-base block">
                    {mod.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Tab Content Display */}
          <div className="lg:col-span-8 bg-zinc-50/50 border border-zinc-200 rounded-3xl p-6 sm:p-10 text-left min-h-[480px] flex flex-col justify-between shadow-2xs">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-6"
              >
                {/* Module Heading */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-zinc-850 tracking-tight">
                    {currentModule.name}
                  </h3>
                  <div className="w-12 h-1 bg-brand-red rounded-full mt-3.5" />
                </div>

                {/* Paragraphs */}
                <div className="space-y-4">
                  {currentModule.paragraphs.map((p, idx) => (
                    <p key={idx} className="text-sm sm:text-base font-semibold text-zinc-550 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>

                {/* Main List */}
                {currentModule.listHeader && currentModule.list && (
                  <div className="pt-4 border-t border-zinc-200/60 flex flex-col gap-4">
                    <h4 className="text-base font-black text-zinc-800 uppercase tracking-wide">
                      {currentModule.listHeader}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {currentModule.list.map((item, idx) => (
                        <div key={idx} className="flex gap-3 items-start">
                          <div className="w-5 h-5 rounded-full bg-red-50 border border-red-100 flex items-center justify-center shrink-0 mt-0.5 shadow-3xs">
                            <Check className="h-3 w-3 text-brand-red stroke-[3px]" />
                          </div>
                          <span className="text-sm font-semibold text-zinc-650 leading-snug">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sub List (specifically for ORM) */}
                {currentModule.subListHeader && currentModule.subList && (
                  <div className="pt-4 border-t border-zinc-200/60 flex flex-col gap-4">
                    <h4 className="text-base font-black text-zinc-800 uppercase tracking-wide">
                      {currentModule.subListHeader}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {currentModule.subList.map((item, idx) => (
                        <div key={idx} className="flex gap-3 items-start">
                          <div className="w-5 h-5 rounded-full bg-red-50 border border-red-100 flex items-center justify-center shrink-0 mt-0.5 shadow-3xs">
                            <Check className="h-3 w-3 text-brand-red stroke-[3px]" />
                          </div>
                          <span className="text-sm font-semibold text-zinc-650 leading-snug">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>

            {/* Bottom Panel Actions */}
            <div className="pt-8 border-t border-zinc-200/60 mt-8 flex flex-wrap items-center justify-between gap-4">
              <span className="text-sm font-bold text-zinc-500">
                Want to learn {currentModule.name} in Gurgaon?
              </span>
              <Button
                variant="primary"
                size="md"
                onClick={() => onOpenDemo(`Module Session: ${currentModule.name}`)}
                className="bg-brand-red hover:bg-red-650 text-white font-extrabold uppercase tracking-wide px-6 py-3.5 rounded-xl shadow-md cursor-pointer transition-all"
              >
                Book A Demo Class
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
