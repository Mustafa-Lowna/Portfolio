import type { SectionCopy } from "@/content/types";

export const servicesSection = {
  eyebrow: "Services",
  title: "What I Offer",
  subtitle:
    "Professional design and development services to help businesses grow, stand out, and succeed.",
} satisfies SectionCopy;

export type Services = {
  title: string;
  description: string;
  icon: string;
};

export const services = [
  {
    title: "Branding & Logo Design",
    description:
      "Create unique logos and complete brand identity systems that build strong and memorable brands.",
    icon: "Sparkles",
  },
  {
    title: "Website Design & Development",
    description:
      "Build modern, responsive, and high-performance websites with clean UI and smooth user experience.",
    icon: "Code2",
  },
  {
    title: "Social Media & Marketing Design",
    description:
      "Design engaging social media posts, advertisements, posters, and marketing creatives that attract attention.",
    icon: "Image",
  },
  {
    title: "Print & Book Design",
    description:
      "Design books, certificates, banners, menus, and print materials with professional layouts and typography.",
    icon: "BookOpen",
  },
] satisfies Services[];