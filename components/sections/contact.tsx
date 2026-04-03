"use client";

import { ArrowUp, ArrowUpRight } from "lucide-react";
import Link from "next/link";
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
        <Card className="space-y-6 border-border/60 bg-card/80 card-padding">
          <SectionHeading
            eyebrow={contact.eyebrow}
            title={contact.title}
            subtitle={contact.subtitle}
          />

          <div className="flex flex-wrap gap-3">
            {contact.actions.map((action) => {
              const isExternal =
                action.href.startsWith("http") ||
                action.href.startsWith("mailto:");

              const isScrollTop = action.href === "#top";

              if (isScrollTop) {
                return (
                  <Button
                    key={action.label}
                    variant={action.variant}
                    size="lg"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="inline-flex items-center"
                  >
                    {action.label}
                    <ArrowUp className="ml-2 h-4 w-4" />
                  </Button>
                );
              }

              if (isExternal) {
                return (
                  <Button
                    key={action.label}
                    asChild
                    variant={action.variant}
                    size="lg"
                  >
                    <a
                      href={action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      {action.label}
                      {!action.href.startsWith("mailto:") && (
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      )}
                    </a>
                  </Button>
                );
              }

              return (
                <Button
                  key={action.label}
                  asChild
                  variant={action.variant}
                  size="lg"
                >
                  <Link href={action.href} className="inline-flex items-center">
                    {action.label}
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              );
            })}
          </div>

          <p className="text-sm text-muted-foreground">{contact.helperText}</p>
        </Card>
      </Container>
    </section>
  );
}
