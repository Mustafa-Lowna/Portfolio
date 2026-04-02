import type { Project, SectionCopy } from "@/content/types";

export const projectsSection = {
  eyebrow: "Featured",
  title: "Selected Work",
  subtitle: "A curated selection of my design and web development projects.",
} satisfies SectionCopy;

export const projects = [
  {
    title: "Pharmacia Kuwait Website",
    description:
      "A modern and responsive pharmacy website with a custom-built chatbot for seamless user assistance, featuring a clean UI and optimized performance.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    hrefLive: "https://mustafa-lowna.github.io/Pharmacia-Kuwait/",
    hrefRepo: "https://github.com/Mustafa-Lowna/Pharmacia-Kuwait",
    featured: true,
    highlights: ["Live Business Website", "Responsive Design"],
  },
  {
    title: "Urban Skills Institute Website",
    description:
      "An educational website offering multiple courses with course registration functionality, built with a structured layout and modern user experience.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    hrefLive: "https://mustafa-lowna.github.io/Urban-Skills-Institute/",
    hrefRepo: "https://github.com/Mustafa-Lowna/Urban-Skills-Institute",
    featured: true,
    highlights: ["Institute Website", "Clean Layout"],
  },
  {
    title: "Logo & Brand Identity Collection",
    description:
      "Designed 10+ professional logos and complete brand identity systems for various businesses.",
    tags: ["Logo Design", "Branding"],
    featured: true,
    highlights: [
      "10+ Logo Designs",
      "Custom Brand Identity",
      "Business-Focused Concepts",
    ],
  },
  {
    title: "Social Media & Advertisement Designs",
    description:
      "Created 10+ Instagram posts and advertisement creatives designed to attract attention and increase engagement.",
    tags: ["Social Media", "Marketing Design"],
    featured: true,
    highlights: [
      "10+ Designs",
      "High Engagement Visuals",
      "Ad Campaign Creatives",
    ],
  },
  {
    title: "Print & Marketing Design",
    description:
      "Designed banners, posters, standees, and menus for effective business promotions.",
    tags: ["Poster", "Banner", "Print Design"],
    featured: true,
    highlights: [
      "Print-Ready Designs",
      "Posters & Banners",
      "Professional Layouts",
    ],
  },
  {
    title: "Book & Certificate Design",
    description:
      "Designed school books and certificates across multiple subjects and languages with clean layouts.",
    tags: ["Book Design", "Certificate Design"],
    featured: true,
    highlights: [
      "5+ Books Designed",
      "Multi-Language (Arabic, Urdu, Kannada, English)",
      "Clean Typography & Layout",
    ],
  },
] satisfies Project[];
