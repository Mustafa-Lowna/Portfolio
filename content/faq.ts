import type { FaqItem, SectionCopy } from "@/content/types";

export const faqSection = {
  eyebrow: "FAQ",
  title: "Frequently Asked Questions",
  subtitle:
    "Everything you need to know before starting a project — clear, simple, and transparent.",
} satisfies SectionCopy;

export const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I offer logo design, brand identity, website design and development, social media creatives, print design, and book design — all tailored to your business needs.",
  },
  {
    question: "What kind of projects do you work on?",
    answer:
      "I work on business websites, branding projects, marketing creatives, and educational designs, focusing on clean, modern, and professional results.",
  },
  {
    question: "How does the project process work?",
    answer:
      "We start with understanding your requirements, then move to design or development, followed by revisions and final delivery. I ensure clear communication at every step.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Timelines depend on the project scope. Most design projects take a few days, while websites may take a few days to a couple of weeks.",
  },
  {
    question: "Do you work with clients remotely?",
    answer:
      "Yes, I work with clients worldwide and manage everything online, ensuring smooth communication and timely delivery.",
  },
  {
    question: "How can I get started with you?",
    answer:
      "You can contact me via email or LinkedIn with your project details. I’ll respond quickly and guide you through the next steps.",
  },
] satisfies FaqItem[];