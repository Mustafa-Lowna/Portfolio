"use client";

import { MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/content/site";

export function About() {
  const about = siteConfig.about;

  return (
    <section id="about" className="section">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] section-gap items-start">
          {/* LEFT SIDE */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              eyebrow={about.eyebrow}
              title={about.title}
              subtitle={about.subtitle}
            />

            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* RIGHT SIDE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card
              className="
              group relative overflow-hidden 
              border-border/60 bg-card/80 
              p-6 pb-4 h-fit 
              transition-all duration-300 
              hover:-translate-y-1 hover:shadow-md
              "
            >
              {/* 🔥 SOFT GLOW */}
              <div className="absolute -right-10 -top-10 h-24 w-24 bg-accent/10 blur-xl opacity-60 group-hover:opacity-80 transition" />

              <div className="relative space-y-5">
                {/* HEADING */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-4">
                    Profile Overview
                  </p>

                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    {siteConfig.location}
                  </div>
                </div>

                {/* FACTS */}
                <div className="grid gap-4 text-sm">
                  {about.quickFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex items-center justify-between gap-4"
                    >
                      <span className="text-muted-foreground">
                        {fact.label}
                      </span>
                      <span className="text-right text-foreground font-medium">
                        {fact.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* LINKS */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground pt-2">
                  <Link
                    href={siteConfig.links.linkedin}
                    className="transition hover:text-foreground hover:underline"
                  >
                    LinkedIn
                  </Link>

                  <Link
                    href={siteConfig.links.github}
                    className="transition hover:text-foreground hover:underline"
                  >
                    GitHub
                  </Link>
                </div>

                {/* DOWNLOAD BUTTON */}
                <a
                  href="/Mustafa Resume.pdf"
                  download
                  className="
                  flex items-center justify-center gap-2 
                  rounded-lg px-4 py-2 text-sm font-medium 
                  bg-foreground text-background 
                  transition-all duration-300 
                  hover:opacity-90 hover:scale-105 hover:shadow-md
                  "
                >
                  Download CV ↗
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
