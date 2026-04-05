"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import { CloudBackground } from "@/components/cloud/cloud-background";
import { Container } from "@/components/common/container";
import { SocialLinks } from "@/components/common/social-links";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/content/site";

export function Hero() {
  const hero = siteConfig.hero;

  return (
    <section
      id="hero"
      className="section relative overflow-hidden pt-24 sm:pt-32"
    >
      <CloudBackground />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground"
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            >
              {siteConfig.location}
            </motion.p>

            <motion.h1
              variants={{
                hidden: { opacity: 0, scale: 0.96, filter: "blur(6px)" },
                show: { opacity: 1, scale: 1, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-display text-4xl font-semibold leading-tight text-foreground sm:text-6xl"
            >
              <span>{siteConfig.name}</span>
              <span className="block text-primary">{siteConfig.headline}</span>
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              transition={{ delay: 0.1 }}
              className="max-w-xl text-base text-muted-foreground sm:text-lg"
            >
              {siteConfig.shortBio}
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-3"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08 } },
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  show: { opacity: 1, scale: 1 },
                }}
              >
                <Button
                  size="lg"
                  onClick={() => {
                    const el = document.querySelector(
                      siteConfig.ctas.primary.href,
                    );
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {siteConfig.ctas.primary.label}
                </Button>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  show: { opacity: 1, scale: 1 },
                }}
              >
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => {
                    const el = document.querySelector(
                      siteConfig.ctas.secondary.href,
                    );
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {siteConfig.ctas.secondary.label}
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            >
              <SocialLinks className="pt-2" />
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 text-sm text-muted-foreground"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.06,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              {hero.statusChips.map((chip) => (
                <motion.span
                  key={chip}
                  variants={{
                    hidden: { opacity: 0, scale: 0.95 },
                    show: { opacity: 1, scale: 1 },
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 transition/10 hover:scale-[1.02]"
                >
                  {chip}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <Card className="space-y-6 border border-transparent dark:border-border/60 bg-card/80 shadow-sm dark:shadow-none card-padding transition hover:shadow-md hover:-translate-y-1">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  What I’m Doing
                </p>
                <p className="text-base text-foreground">{hero.nowBlurb}</p>
              </div>

              <div className="grid gap-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Availability</span>
                  <span className="text-foreground">{hero.availability}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted-foreground">Focus</span>
                  <span className="text-foreground">{hero.focus}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email</span>

                  <Link
                    href={`mailto:${siteConfig.links.email}`}
                    className="inline-flex items-center gap-1 text-foreground hover:text-primary transition"
                  >
                    {siteConfig.links.email}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Card>

            <Card className="space-y-4 border border-transparent dark:border-border/60 bg-card/80 shadow-sm dark:shadow-none card-padding transition hover:shadow-md hover:-translate-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Highlights
              </p>

              <div className="grid gap-3 text-sm">
                {hero.signals.map((signal) => (
                  <div
                    key={signal.label}
                    className="flex items-center justify-between"
                  >
                    <span className="text-muted-foreground">
                      {signal.label}
                    </span>
                    <span className="text-foreground">{signal.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
