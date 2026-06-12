"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  id: string | number;
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  index?: number;
}

export const AccordionItem = ({
  title,
  children,
  isOpen = false,
  onToggle,
  index = 0,
}: AccordionItemProps) => {
  return (
    <div
      className={`rounded-2xl overflow-hidden transition-all duration-300 mb-4 ${
        isOpen
          ? "bg-white ring-1 ring-brand-red/15 shadow-[var(--shadow-md)]"
          : "bg-white ring-1 ring-zinc-200/80 shadow-[var(--shadow-xs)] hover:ring-zinc-300 hover:shadow-[var(--shadow-sm)]"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-5 sm:p-6 text-left transition-colors focus:outline-none cursor-pointer group"
      >
        {/* Number indicator */}
        <span
          className={`text-[11px] font-black uppercase tracking-wider shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300 ${
            isOpen
              ? "bg-brand-red text-white"
              : "bg-zinc-100 text-zinc-400 group-hover:bg-zinc-200 group-hover:text-zinc-600"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span
          className={`flex-1 text-[15px] font-bold leading-snug transition-colors duration-200 ${
            isOpen ? "text-zinc-900" : "text-zinc-700 group-hover:text-zinc-900"
          }`}
        >
          {title}
        </span>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300 ${
            isOpen
              ? "bg-brand-red/10 text-brand-red"
              : "bg-zinc-100 text-zinc-400 group-hover:bg-zinc-200"
          }`}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="px-5 sm:px-6 pb-6 pt-0">
              <div className="border-t border-zinc-100 pt-4">
                <p className="text-[14px] text-zinc-600 leading-[1.75] font-medium">
                  {children}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface AccordionProps {
  items: { question: string; answer: string }[];
}

export const Accordion = ({ items }: AccordionProps) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-1">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          id={index}
          index={index}
          title={item.question}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        >
          {item.answer}
        </AccordionItem>
      ))}
    </div>
  );
};
