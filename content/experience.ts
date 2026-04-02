import type { ExperienceItem, SectionCopy } from "@/content/types";

export const experienceSection = {
  eyebrow: "Experience",
  title: "Professional Experience",
  subtitle:
    "Delivering high-quality design solutions across education, branding, and digital media with a focus on clarity, creativity, and impact.",
} satisfies SectionCopy;

export const experience = [
  {
    role: "Graphic Designer",
    company: "Pearl Modern School",
    period: "Jun 2024 - Present",
    bullets: [
      "Designed structured educational books and materials with clean layouts and strong visual hierarchy.",
      "Created engaging academic and promotional designs using Canva, ensuring consistency and clarity.",
      "Maintained high-quality output aligned with institutional branding and standards.",
    ],
    tech: ["Book Design", "Canva", "Layout Design"],
  },
  {
    role: "Graphic Designer",
    company: "Future Leaders Academy",
    period: "Jul 2023 - Nov 2024",
    bullets: [
      "Designed social media creatives, posters, flyers, and advertisement materials for marketing campaigns.",
      "Developed certificates and promotional assets to strengthen brand identity and outreach.",
      "Delivered professional designs using Adobe Photoshop and Illustrator with attention to detail.",
    ],
    tech: ["Adobe Photoshop", "Adobe Illustrator", "Social Media Design"],
  },
  {
    role: "Book Designer",
    company: "Ali Public School, Bhatkal",
    period: "Aug 2023 - Jul 2024",
    bullets: [
      "Designed educational books and covers across multiple subjects and languages.",
      "Focused on clean typography, readability, and well-structured layouts for students.",
      "Prepared print-ready files ensuring accuracy and quality for publishing.",
    ],
    tech: ["Book Design", "Typography", "Print Design"],
  },
] satisfies ExperienceItem[];