"use client";

import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Card } from "@/components/ui/card";
import { testimonials, testimonialsSection } from "@/content/testimonials";

export function Testimonials() {
  const total = testimonials.length;

  const [index, setIndex] = useState(0);
  const [isReading, setIsReading] = useState(false);
  const [delay, setDelay] = useState(6000);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const next = () => {
    setIndex((prev) => (prev + 1 >= total ? 0 : prev + 1));
    setDelay(9000);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 < 0 ? total - 1 : prev - 1));
    setDelay(9000);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;

    if (diff > 50) next();
    if (diff < -50) prev();
  };

  useEffect(() => {
    if (total <= 1 || isReading) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1 >= total ? 0 : prev + 1));
    }, delay);

    return () => clearInterval(interval);
  }, [total, isReading, delay]);

  if (!total) return null;

  return (
    <section id="testimonials" className="section">
      <Container>
        <div className="space-y-12">
          <SectionHeading
            eyebrow={testimonialsSection.eyebrow}
            title={testimonialsSection.title}
            subtitle={testimonialsSection.subtitle}
          />

          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -60, opacity: 0 }}
                transition={{
                  duration: 0.45,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="w-full px-2"
              >
                <Card className="space-y-4 border-border/60 bg-card/80 card-padding rounded-2xl transition hover:shadow-md">

                  <ExpandableText
                    text={testimonials[index].quote}
                    onToggle={(reading) => setIsReading(reading)}
                  />

                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 flex items-center justify-center rounded-full border border-border/60 bg-muted text-sm font-semibold text-foreground uppercase overflow-hidden">
                      {testimonials[index].avatar ? (
                        <img
                          src={testimonials[index].avatar}
                          alt={testimonials[index].name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        testimonials[index].name?.charAt(0)
                      )}
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {testimonials[index].name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonials[index].role}
                      </p>
                    </div>
                  </div>

                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 w-2.5 rounded-full border cursor-pointer transition-all duration-300 ${
                    i === index
                      ? "bg-gray-900 border-gray-900 dark:bg-white dark:border-white"
                      : "bg-transparent border-gray-300 dark:border-white/20"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ExpandableText({
  text,
  onToggle,
}: {
  text: string;
  onToggle: (val: boolean) => void;
}) {
  const [expanded, setExpanded] = useState(false);

  const limit = 300;
  const isLong = text.length > limit;

  const displayText = expanded ? text : text.slice(0, limit);

  const handleToggle = () => {
    const newState = !expanded;
    setExpanded(newState);
    onToggle(newState);
  };

  return (
    <p className="text-base text-foreground leading-relaxed">
      “{displayText}
      {!expanded && isLong ? "..." : ""}”
      {isLong && (
        <button
          onClick={handleToggle}
          className="ml-2 text-sm font-semibold text-foreground hover:underline transition"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </p>
  );
}