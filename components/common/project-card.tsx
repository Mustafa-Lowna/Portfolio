"use client";

import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  hrefLive?: string;
  hrefRepo?: string;
  highlights?: string[];
  featured?: boolean;
}

export function ProjectCard({
  title,
  description,
  tags,
  hrefLive,
  hrefRepo,
  highlights,
  featured,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="h-full"
    >
      <Card
        className={cn(
          "group relative h-full flex flex-col justify-between overflow-hidden border border-transparent dark:border-border/60 bg-card/80 shadow-sm dark:shadow-none card-padding transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
          featured ? "ring-1 ring-accent/30" : "",
        )}
      >
        <div className="absolute -top-10 -right-10 h-24 w-24 bg-accent/10 blur-2xl opacity-0 group-hover:opacity-80 transition duration-500" />

        <CardHeader className="px-0 pt-0 space-y-2">
          <CardTitle className="text-lg font-semibold transition group-hover:text-primary">
            {title}
          </CardTitle>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </CardHeader>

        <CardContent className="space-y-4 px-0 pb-0">
          <motion.div
            className="flex flex-wrap gap-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.15,
                },
              },
            }}
          >
            {tags.map((tag) => (
              <motion.div
                key={tag}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  show: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.3,
                      ease: "easeOut",
                    },
                  },
                }}
              >
                <Badge
                  variant="outline"
                  className="transition hover:bg-muted hover:scale-[1.05]"
                >
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          {highlights?.length ? (
            <ul className="space-y-1 text-sm text-muted-foreground">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="transition group-hover:text-foreground"
                >
                  • {item}
                </li>
              ))}
            </ul>
          ) : null}

          <div className="flex items-center gap-4 text-sm pt-2">
            {hrefLive ? (
              <Link
                href={hrefLive}
                className="inline-flex items-center gap-1 text-foreground transition hover:text-primary"
              >
                <span className="relative flex h-2 w-2 mr-1">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-current opacity-40 animate-ping"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-current"></span>
                </span>
                Live
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
            ) : null}

            {hrefRepo ? (
              <Link
                href={hrefRepo}
                className="inline-flex items-center gap-1 text-muted-foreground transition hover:text-foreground"
              >
                <Github className="h-4 w-4" /> Repo
              </Link>
            ) : null}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
