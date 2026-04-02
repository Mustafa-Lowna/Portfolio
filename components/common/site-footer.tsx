import { Container } from "@/components/common/container";
import { SocialLinks } from "@/components/common/social-links";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 py-12 from-background to-muted/20">
      <Container>
        <div className="flex flex-col items-center justify-center gap-4 text-center">

          {/* Name */}
          <p className="text-sm text-muted-foreground">
            © {year}{" "}
            <span className="font-semibold text-foreground">
              {siteConfig.name}
            </span>
            . All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            <div className="flex flex-wrap justify-center gap-3">
              <SocialLinks showLabels />
            </div>
          </div>

        </div>
      </Container>
    </footer>
  );
}