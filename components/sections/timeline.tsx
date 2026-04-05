"use client";

import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { useReducedMotionPreference } from "@/components/motion/use-reduced-motion";
import { Badge } from "@/components/ui/badge";
import { experience, experienceSection } from "@/content/experience";

const PAGE_SIZE = 2;

function chunk<T>(items: T[], size: number) {
  const result: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    result.push(items.slice(i, i + size));
  }
  return result;
}

export function Timeline() {
  const reduced = useReducedMotionPreference();

  const pages = chunk(experience, PAGE_SIZE).map((items) => ({
    id: items.map((entry) => `${entry.company}-${entry.role}`).join("|"),
    items,
  }));

  const [pageIndex, setPageIndex] = React.useState(0);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;

    if (diff > 50) {
      setPageIndex((prev) => (prev + 1) % pages.length);
    }

    if (diff < -50) {
      setPageIndex((prev) =>
        prev === 0 ? pages.length - 1 : prev - 1
      );
    }
  };

  React.useEffect(() => {
    if (pageIndex > pages.length - 1) {
      setPageIndex(0);
    }
  }, [pageIndex, pages.length]);

  if (!pages.length) return null;

  const page = pages[pageIndex];
  const items = page?.items ?? [];

  return (
    <section id="experience" className="section">
      <Container>
        <div className="space-y-12">
          <SectionHeading
            eyebrow={experienceSection.eyebrow}
            title={experienceSection.title}
            subtitle={experienceSection.subtitle}
          />

          <div className="space-y-6 section-gap">
            <AnimatePresence mode="wait">
              <motion.div
                key={`page-${pageIndex}`}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                initial={reduced ? false : { opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduced ? undefined : { opacity: 0 }}
                transition={{ duration: reduced ? 0 : 0.5, ease: "easeOut" }}
                className="grid gap-6"
              >
                {items.map((item) => (
                  <motion.div
                    key={`${item.company}-${item.role}`}
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid gap-6 rounded-2xl border border-border/60 bg-card/80 card-padding md:grid-cols-[220px_1fr]"
                  >
                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                        {item.period}
                      </p>
                      <h3 className="text-lg font-semibold text-foreground">
                        {item.role}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.company}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <motion.ul
                        className="space-y-2 text-sm text-muted-foreground"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{
                          hidden: {},
                          show: {
                            transition: {
                              staggerChildren: 0.12,
                              delayChildren: 0.1,
                            },
                          },
                        }}
                      >
                        {item.bullets.map((bullet) => (
                          <motion.li
                            key={bullet}
                            variants={{
                              hidden: { opacity: 0 },
                              show: { opacity: 1 },
                            }}
                          >
                            • {bullet}
                          </motion.li>
                        ))}
                      </motion.ul>

                      {item.tech?.length ? (
                        <motion.div
                          className="flex flex-wrap gap-2"
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true }}
                          variants={{
                            hidden: {},
                            show: {
                              transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.2,
                              },
                            },
                          }}
                        >
                          {item.tech.map((tech) => (
                            <motion.div
                              key={tech}
                              variants={{
                                hidden: { opacity: 0, scale: 0.9 },
                                show: { opacity: 1, scale: 1 },
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              <Badge variant="outline">{tech}</Badge>
                            </motion.div>
                          ))}
                        </motion.div>
                      ) : null}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() =>
                  setPageIndex((prev) =>
                    prev === 0 ? pages.length - 1 : prev - 1
                  )
                }
                className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition"
              >
                <ChevronLeft size={16} />
              </button>

              <div className="flex items-center gap-2">
                {pages.map((_, index) => (
                  <span
                    key={index}
                    onClick={() => setPageIndex(index)}
                    className={`h-2.5 w-2.5 rounded-full border cursor-pointer ${
                      index === pageIndex
                        ? "bg-gray-900 border-gray-900 dark:bg-white dark:border-white"
                        : "bg-transparent border-gray-300 dark:border-white/20"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() =>
                  setPageIndex((prev) => (prev + 1) % pages.length)
                }
                className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}