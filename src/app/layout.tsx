import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Providers } from "./providers";
import { CommandMenu } from "@/components/command-palette";

const publicSans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-public-sans",
  preload: true,
});

export const metadata: Metadata = {
  title: "gisketch",
  description: "portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
