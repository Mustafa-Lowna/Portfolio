"use client";

import { ArrowUp, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/content/site";

export function Contact() {
  const contact = siteConfig.contact;

  return (
    <section id="contact" className="section scroll-mt-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Card className="space-y-6 border border-transparent dark:border-border/60 bg-card/80 shadow-sm dark:shadow-none card-padding transition">
            
            <SectionHeading
              eyebrow={contact.eyebrow}
              title={contact.title}
              subtitle={contact.subtitle}
            />

            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.15,
                  },
                },
              }}
            >
              {contact.actions.map((action) => {
                const isExternal =
                  action.href.startsWith("http") ||
                  action.href.startsWith("mailto:");

                const isScrollTop = action.href === "#top";

                return (
                  <motion.div
                    key={action.label}
                    variants={{
                      hidden: { opacity: 0 },
                      show: { opacity: 1 },
                    }}
                  >
                    {isScrollTop ? (
                      <Button
                        variant={action.variant}
                        size="lg"
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        className="w-full sm:w-auto sm:min-w-40 justify-center transition hover:scale-[1.03]"
                      >
                        {action.label}
                        <ArrowUp className="ml-2 h-4 w-4" />
                      </Button>
                    ) : isExternal ? (
                      <Button
                        asChild
                        variant={action.variant}
                        size="lg"
                        className="w-full sm:w-auto sm:min-w-40 justify-center transition hover:scale-[1.03]"
                      >
                        <a
                          href={action.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-full"
                        >
                          {action.label}
                          {!action.href.startsWith("mailto:") && (
                            <ArrowUpRight className="ml-2 h-4 w-4" />
                          )}
                        </a>
                      </Button>
                    ) : (
                      <Button
                        asChild
                        variant={action.variant}
                        size="lg"
                        className="w-full sm:w-auto sm:min-w-40 justify-center transition hover:scale-[1.03]"
                      >
                        <Link
                          href={action.href}
                          className="inline-flex items-center justify-center w-full"
                        >
                          {action.label}
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.p
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              {contact.helperText}
            </motion.p>

          </Card>
        </motion.div>
      </Container>
    </section>
  );
}