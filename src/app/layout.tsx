import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Providers } from "./providers";
import { CommandMenu } from "@/components/command-palette";

export const metadata: Metadata = {
  title: {
    default: "gisketch",
    template: "%s | gisketch",
  },
  description:
    "Full-stack developer with years of experience specializing in Web Development. Creating stunning websites, automation tools, and games.",
  keywords: [
    "Glenn Jimenez",
    "Arnel Glenn Jimenez",
    "gisketch",
    "Web Developer",
    "Game Developer",
    "Full Stack Developer",
    "TypeScript",
    "React",
    "Next.js",
    "Unity",
    "C#",
    "Philippines",
  ],
  authors: [
    { name: "Arnel Glenn Jimenez", url: "https://github.com/gisketch" },
  ],
  creator: "Arnel Glenn Jimenez",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gisketch.com",
    title: "gisketch",
    description:
      "Full-stack developer with years of experience specializing in Web Development. Creating stunning websites, automation tools, and games.",
    siteName: "gisketch",
    images: [
      {
        url: "/thumb.webp",
        width: 1200,
        height: 630,
        alt: "gisketch thumbnail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "gisketch",
    description:
      "Full-stack developer with years of experience specializing in Web Development. Creating stunning websites, automation tools, and games.",
    creator: "@gisketch",
    images: ["/thumb.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const publicSans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-public-sans",
  preload: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${publicSans.className} antialiased overflow-x-hidden`}>
        <Providers>
          <Navbar />
          <CommandMenu />
          <main className="w-full max-w-[1024px] mx-auto px-4">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
