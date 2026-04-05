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

          <motion.div
            className="space-y-6"
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
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1 },
              }}
            >
              <SectionHeading
                eyebrow={about.eyebrow}
                title={about.title}
                subtitle={about.subtitle}
              />
            </motion.div>

            {about.paragraphs.map((paragraph) => (
              <motion.p
                key={paragraph}
                className="text-base leading-relaxed text-muted-foreground"
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1 },
                }}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Card
              className="group relative overflow-hidden border border-transparent dark:border-border/60 bg-card/80 shadow-sm dark:shadow-none p-6 pb-4 h-fit transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute -right-10 -top-10 h-24 w-24 bg-accent/10 blur-xl opacity-60 group-hover:opacity-80 transition" />

              <div className="relative space-y-5">

                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-4">
                    Profile Overview
                  </p>

                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    {siteConfig.location}
                  </div>
                </div>

                <motion.div
                  className="grid gap-4 text-sm"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    show: {
                      transition: {
                        staggerChildren: 0.08,
                        delayChildren: 0.1,
                      },
                    },
                  }}
                >
                  {about.quickFacts.map((fact) => (
                    <motion.div
                      key={fact.label}
                      className="grid grid-cols-[110px_1fr] gap-3 text-sm"
                      variants={{
                        hidden: { opacity: 0 },
                        show: { opacity: 1 },
                      }}
                    >
                      <span className="text-muted-foreground">
                        {fact.label}
                      </span>

                      <span className="text-foreground font-medium leading-relaxed">
                        {fact.value}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

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

                  <Link
                    href={siteConfig.links.x}
                    className="transition hover:text-foreground hover:underline"
                  >
                    Twitter
                  </Link>
                </div>

                <a
                  href="/Mustafa Resume.pdf"
                  download
                  className="flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium bg-foreground text-background transition-all duration-300 hover:opacity-90 hover:scale-[1.03] hover:shadow-md"
                >
                  Download CV
                </a>

              </div>
            </Card>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}