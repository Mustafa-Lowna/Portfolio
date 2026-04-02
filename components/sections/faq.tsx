"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { faqSection, faqs } from "@/content/faq";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs.length) return null;

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section">
      <Container>
        <div className="space-y-12">

          <SectionHeading
            eyebrow={faqSection.eyebrow}
            title={faqSection.title}
            subtitle={faqSection.subtitle}
          />

          {/* 🔥 FAQ LIST */}
          <div className="space-y-4">

            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="
                  group rounded-2xl border border-border/60 bg-card/80 
                  p-6 transition-all duration-300 
                  hover:shadow-md hover:-translate-y-[2px]
                  "
                >
                  {/* HEADER */}
                  <button
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between text-left text-base font-semibold text-foreground"
                  >
                    <span className="transition group-hover:text-primary">
                      {item.question}
                    </span>

                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>

                  {/* 🔥 ANSWER ANIMATION */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              );
            })}

          </div>

        </div>
      </Container>
    </section>
  );
}