import { about, socialMedia } from "@/lib/data";
import Link from "next/link";

export function Footer() {
  const { copyrightYear } = about();

  return (
    <footer className="w-full bg-transparent py-4">
      <div className="container flex flex-col gap-4">
        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          {socialMedia.map((social) => (
            <Link
              key={social.platform}
              href={social.url}
              target="_blank"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label={social.platform}
            >
              <social.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>

        {/* Tech Stack & Copyright */}
        <div className="flex flex-col items-center justify-center gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>Built with</span>
            <span className="font-medium text-foreground hover:text-primary">
              Next.js
            </span>
            <span>•</span>
            <span className="font-medium text-foreground hover:text-primary">
              TypeScript
            </span>
            <span>•</span>
            <span className="font-medium text-foreground hover:text-primary">
              Tailwind
            </span>
          </div>

          <div className="flex items-center gap-1">
            <span>© {copyrightYear}</span>
            <span>•</span>
            <span>Made with 💜 by gisketch</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
