"use client";

import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import { CloudBackground } from "@/components/cloud/cloud-background";
import { Container } from "@/components/common/container";
import { SocialLinks } from "@/components/common/social-links";
import { FadeIn } from "@/components/motion/fade-in";
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
          {/* LEFT SIDE */}
          <FadeIn className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
              {siteConfig.location}
            </p>

            {/* 🔥 ANIMATED HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl font-semibold leading-tight text-foreground sm:text-6xl"
            >
              <span className="">{siteConfig.name}</span>
              <span className="block text-primary">{siteConfig.headline}</span>
            </motion.h1>

            {/* 🔥 ANIMATED BIO */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-xl text-base text-muted-foreground sm:text-lg"
            >
              {siteConfig.shortBio}
            </motion.p>

            {/* 🔥 BUTTONS */}
            <div className="flex flex-wrap items-center gap-3">
              <Button
                asChild
                size="lg"
                className="transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg"
              >
                <Link href={siteConfig.ctas.primary.href}>
                  {siteConfig.ctas.primary.label}
                </Link>
              </Button>

              <Button
                asChild
                variant="secondary"
                size="lg"
                className="transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg"
              >
                <Link href={siteConfig.ctas.secondary.href}>
                  {siteConfig.ctas.secondary.label}
                </Link>
              </Button>

              <Link
                href="#about"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
              >
                Scroll <ArrowDownRight className="h-4 w-4" />
              </Link>
            </div>

            <SocialLinks className="pt-2" />

            {/* 🔥 STATUS CHIPS */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              {hero.statusChips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 transition hover:bg-accent/10 hover:scale-[1.02]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* RIGHT SIDE */}
          <FadeIn className="space-y-4" delay={0.2}>
            {/* CARD 1 */}
            <Card className="space-y-6 border-border/60 bg-card/80 card-padding transition-all duration-300 ease-out hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:-translate-y-1.25">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  What I’m Doing
                </p>
                <p className="text-base text-foreground">{hero.nowBlurb}</p>
              </div>

              <div className="grid gap-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Availability</span>
                  <span className="text-foreground">{hero.availability}</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Focus</span>
                  <span className="text-foreground">{hero.focus}</span>
                </div>

                <div className="flex items-center justify-between text-sm">
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

            {/* CARD 2 */}
            <Card className="space-y-4 border-border/60 bg-card/80 card-padding transition-all duration-300 ease-out hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:-translate-y-1.25">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Highlights
              </p>

              <div className="grid gap-3 text-sm">
                {hero.signals.map((signal) => (
                  <div
                    key={signal.label}
                    className="flex items-center justify-between gap-4"
                  >
                    <span className="text-muted-foreground">
                      {signal.label}
                    </span>
                    <span className="text-foreground">{signal.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
