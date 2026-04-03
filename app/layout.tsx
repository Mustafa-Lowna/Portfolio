import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { siteConfig } from "@/content/site";
import ChatBot from "@/components/common/chatbot";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  applicationName: siteConfig.name,
  keywords: siteConfig.seo.keywords,
  authors: [
    {
      name: siteConfig.name,
    },
  ],
  creator: siteConfig.seo.linkedinhandle ?? siteConfig.name,
  metadataBase: new URL("https://mustafa-portfolio-seven-lime.vercel.app"),
  icons: {
    icon: "/icon.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    siteName: siteConfig.name,
    locale: siteConfig.seo.locale,
    type: "website",
    images: siteConfig.seo.ogImage
      ? [
          {
            url: siteConfig.seo.ogImage,
            width: 1200,
            height: 630,
            alt: siteConfig.seo.title,
          },
        ]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: siteConfig.seo.ogImage ? [siteConfig.seo.ogImage] : undefined,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#f0eee9",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sans.variable} ${display.variable} bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>

          {children}

          <ChatBot />
        </ThemeProvider>
      </body>
    </html>
  );
}