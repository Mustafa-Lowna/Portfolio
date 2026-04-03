import type { SiteConfig } from "@/content/types";

const links = {
  github: "https://github.com/Mustafa-Lowna",
  linkedin: "https://www.linkedin.com/in/mustafa-lowna",
  x: "https://x.com/mustafa_lowna",
  email: "mustafalowna321@gmail.com",
  website: "",
};

export const siteConfig = {
  name: "Mustafa Lowna",
  headline: "Professional Graphic Designer & Web Developer",
  shortBio:
    "I design high-quality logos, websites, and branding materials that make businesses look professional and attract clients.",
  location: "Bhatkal, Karnataka, India",
  avatarUrl: "",
  links,
  ctas: {
    primary: { label: "View My Work", href: "#projects" },
    secondary: { label: "Contact Me", href: "#contact" },
  },
  seo: {
    title: "Mustafa Lowna | Graphic Designer & Web Designer in India",
    description:
      "Mustafa Lowna is a professional graphic and web designer specializing in logo design, branding, and modern responsive websites. Helping businesses grow with high-quality creative solutions. Available for freelance projects worldwide.",
    keywords: [
      "Mustafa Lowna",
      "graphic designer",
      "web designer",
      "logo designer",
      "branding designer",
      "freelance graphic designer",
      "freelance web designer",
      "graphic designer India",
      "web designer India",
      "graphic designer Bhatkal",
      "web designer Karnataka",
      "logo design services",
      "brand identity design",
      "modern website design",
      "responsive web design",
      "UI UX designer",
      "social media designer",
      "poster design",
      "flyer design",
      "Instagram post design",
      "creative designer",
      "digital designer portfolio",
    ],
    ogImage: "",
    linkedinhandle: "https://linkedin.com/in/mustafa-lowna",
    locale: "en_IN",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Services", href: "#services" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  socialProof: [
    "Branding",
    "Web Development",
    "Design Work",
    "Digital Projects",
    "UI/UX Design",
  ],
  skills: [
    {
      label: "Design",
      items: [
        "Logo & Brand Identity",
        "UI/UX Design",
        "Social Media & Ads Design",
        "Print & Marketing Design",
        "Typography & Visual Design",
      ],
    },
    {
      label: "Creative & Media",
      items: [
        "Poster & Banner Design",
        "Book & Certificate Design",
        "Menu & Business Card Design",
        "Advertisement & Promo Creatives",
        "Video Editing",
      ],
    },
    {
      label: "Frontend",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Next.js",
        "Responsive Web Design",
      ],
    },
    {
      label: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "Authentication",
        "API Integration",
      ],
    },
    {
      label: "Tools",
      items: [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "CorelDRAW",
        "Canva",
        "VS Code & GitHub",
        "Vercel & Postman",
      ],
    },
    {
      label: "Specialties",
      items: [
        "Full-Stack Web Development",
        "Branding Strategy",
        "SEO Optimization",
        "Performance Optimization",
        "User Experience Optimization",
      ],
    },
  ],
  hero: {
    statusChips: [
      "Available for Freelance Projects",
      "Fast, Reliable & High-Quality Delivery",
    ],
    nowBlurb: "Designing brands and developing modern web experiences.",
    availability: "Available for freelance work",
    focus: "Logo & Branding, Web Development",
    signals: [
      { label: "Projects Delivered", value: "50+" },
      { label: "Satisfied Clients", value: "40+" },
      { label: "Years of Experience", value: "3+" },
    ],
  },
  about: {
    eyebrow: "About",
    title:
      "A creative approach to building impactful brands and digital experiences",
    subtitle:
      "I help businesses grow by combining strategic design with modern web development to create high-quality, results-driven solutions.",
    paragraphs: [
      "I specialize in crafting professional brand identities, logo designs, and visually engaging digital assets that help businesses stand out in a competitive market.",
      "As a full-stack web developer, I build modern, responsive, and high-performance websites using the latest technologies, ensuring seamless user experience across all devices.",
      "From concept to final delivery, I focus on clarity, performance, and premium design to deliver solutions that not only look great but also perform effectively.",
    ],
    quickFacts: [
      {
        label: "Specialization",
        value: "Branding & Full-Stack Web Development",
      },
      { label: "Availability", value: "Available for Freelance Projects" },
      { label: "Response Time", value: "Within 24 Hours" },
      { label: "Work Type", value: "Remote & Client Projects" },
      { label: "Focus", value: "Business Growth & Modern Design" },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let’s Build Something Great",
    subtitle:
      "Have a project in mind? I help businesses grow with professional design, branding, and modern web development solutions.",
    actions: [
      {
        label: "Start a Project",
        href: `mailto:${links.email}`,
        variant: "default",
      },
      { label: "LinkedIn", href: links.linkedin, variant: "secondary" },
      { label: "View Portfolio", href: links.website, variant: "ghost" },
    ],
    helperText:
      "Open for freelance projects and collaborations. Feel free to reach out — I usually respond within 24 hours.",
  },
} satisfies SiteConfig;
