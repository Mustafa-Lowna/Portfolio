"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Card } from "@/components/ui/card";
import { testimonials, testimonialsSection } from "@/content/testimonials";

export function Testimonials() {
  const total = testimonials.length;

  const [index, setIndex] = useState(0);
  const [isReading, setIsReading] = useState(false);
  const [delay, setDelay] = useState(6000);

  const next = () => {
    setIndex((prev) => (prev + 1 >= total ? 0 : prev + 1));
    setDelay(9000); // 🔥 slow after manual interaction
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 < 0 ? total - 1 : prev - 1));
    setDelay(9000);
  };

  // ✅ Auto slide with smart control
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

          {/* SLIDER */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${index * 100}%)`,
              }}
            >
              {testimonials.map((item, i) => (
                <div key={i} className="w-full shrink-0 px-2">
                  <Card className="space-y-4 border-border/60 bg-card/80 card-padding rounded-2xl">

                    {/* 🔥 READ MORE CONTROL */}
                    <ExpandableText
                      text={item.quote}
                      onToggle={(reading) => setIsReading(reading)}
                    />

                    {/* PROFILE */}
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 flex items-center justify-center rounded-full border border-border/60 bg-muted text-sm font-semibold text-foreground uppercase overflow-hidden">
                        {item.avatar ? (
                          <img
                            src={item.avatar}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          item.name?.charAt(0)
                        )}
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {item.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {item.role}
                        </p>
                      </div>
                    </div>

                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* CONTROLS */}
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
                  className={`h-2 w-2 rounded-full transition ${
                    i === index ? "bg-foreground scale-110" : "bg-muted"
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

/* 🔥 SMART READ MORE */
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
    onToggle(newState); // 🔥 inform parent
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