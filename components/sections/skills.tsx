"use client";

import { Cloud, Code2, Server, Wrench, Palette, PenTool } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/content/site";

const iconMap = {
  Design: PenTool,
  "Creative & Media": Palette,
  Frontend: Code2,
  Backend: Server,
  Tools: Wrench,
  Specialties: Cloud,
} as const;

const detailMap: Record<string, string> = {
  Design: "Creative and strategic visual design solutions.",
  "Creative & Media": "Marketing, print, and visual content creation.",
  Frontend: "Modern UI development and responsive layouts.",
  Backend: "APIs, databases, and server-side logic.",
  Tools: "Professional tools for design and development.",
  Specialties: "Optimized performance and scalable solutions.",
};

export function Skills() {
  const skills = siteConfig.skills;

  return (
    <section id="skills" className="section">
      <Container>
        <div className="space-y-12">
          <SectionHeading
            eyebrow="Skills"
            title="Skills & Expertise"
            subtitle="A blend of design and development skills focused on building modern, high-quality digital solutions."
          />

          <motion.div
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 section-gap items-stretch"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.12 },
              },
            }}
          >
            {skills.map((group) => {
              const Icon =
                iconMap[group.label as keyof typeof iconMap] ?? Code2;

              return (
                <motion.div
                  key={group.label}
                  className="h-full"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <Card
                    className="group h-full flex flex-col justify-between relative overflow-hidden border-border/60 bg-card/80 p-6 pb-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-accent/10 blur-xl opacity-60 group-hover:opacity-80 transition" />

                    <div className="relative space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 min-w-10 min-h-10 aspect-square shrink-0 rounded-full border border-border/60 bg-muted transition group-hover:scale-105">
                          <Icon className="w-5 h-5 text-foreground transition" />
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            {group.label}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {detailMap[group.label] ?? ""}
                          </p>
                        </div>
                      </div>

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
                            },
                          },
                        }}
                      >
                        {group.items.map((item) => (
                          <motion.div
                            key={item}
                            variants={{
                              hidden: { opacity: 0, y: 20, scale: 0.95 },
                              show: { opacity: 1, y: 0, scale: 1 },
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <Badge
                              variant="outline"
                              className="transition hover:scale-105 hover:bg-muted"
                            >
                              {item}
                            </Badge>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}