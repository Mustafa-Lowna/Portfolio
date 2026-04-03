"use client";

import { Palette, Code2, Image, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Card } from "@/components/ui/card";
import { servicesSection, services } from "@/content/services";

const iconMap = {
  Palette,
  Code2,
  Image,
  BookOpen,
} as const;

export function Services() {
  return (
    <section id="services" className="section">
      <Container>
        <div className="space-y-12">

          <SectionHeading
            eyebrow={servicesSection.eyebrow}
            title={servicesSection.title}
            subtitle={servicesSection.subtitle}
          />

          <motion.div
            className="grid gap-6 md:grid-cols-2 section-gap items-stretch"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {services.map((item) => {
              const Icon =
                iconMap[item.icon as keyof typeof iconMap] ?? Palette;

              return (
                <motion.div
                  key={item.title}
                  className="h-full"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <Card
                    className="
                    group h-full flex flex-col justify-between
                    relative overflow-hidden 
                    border-border/60 bg-card/80 
                    p-6 
                    transition-all duration-300 
                    hover:-translate-y-1 
                    hover:shadow-md
                    "
                  >
                    <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-accent/10 blur-xl opacity-60 group-hover:opacity-80 transition" />

                    <div className="relative space-y-4">

                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-muted transition group-hover:scale-105">
                        <Icon className="h-5 w-5 text-foreground transition group-hover:text-accent/80" />
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-base font-semibold text-foreground transition group-hover:text-primary">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>

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