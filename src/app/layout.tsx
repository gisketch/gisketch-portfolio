import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Providers } from "./providers";
import { CommandMenu } from "@/components/command-palette";
import JsonLd from "@/components/JsonLd";
import { Footer } from "@/components/home/footer";

const siteUrl = "https://gisketch.com";
const personName = "Arnel Glenn Jimenez";
const handle = "gisketch";
const seoDescription =
  "Official portfolio of Arnel Glenn Jimenez, also known as Glenn Jimenez, Ghegi Jimenez, and gisketch. Software engineer, full-stack developer, game developer, and digital artist in the Philippines.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "gisketch | Software Developer",
    template: `%s | ${handle}`,
  },
  description: seoDescription,
  keywords: [
    "Arnel Glenn Jimenez",
    "Glenn Jimenez",
    "Ghegi Jimenez",
    "Ghegi",
    "gisketch",
    "gisketch portfolio",
    "Web Developer",
    "Full-Stack Developer",
    "Software Engineer",
    "Frontend Developer",
    "TypeScript Developer",
    "React Developer",
    "Next.js Developer",
    "Philippines",
  ],
  alternates: {
    canonical: siteUrl,
  },
  authors: [{ name: personName, url: siteUrl }],
  creator: personName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "gisketch | Software Developer",
    description: seoDescription,
    siteName: "gisketch - Arnel Glenn Jimenez",
    images: [
      {
        url: "/thumb.webp",
        width: 1200,
        height: 630,
        alt: "gisketch - Arnel Glenn Jimenez portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "gisketch | Software Developer",
    description: seoDescription,
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
        <JsonLd />
      </head>
      <body className={`${publicSans.className} antialiased overflow-x-hidden`}>
        <Providers>
          <Navbar />
          <CommandMenu />
          <main className="w-full max-w-[1024px] mx-auto px-4">
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
