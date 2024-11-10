import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glenn's Resume",
  description:
    "Explore my resume, including my skills, experience, and education.",
  openGraph: {
    title: "Resume | Glenn Jimenez",
    description:
      "Explore my resume, including my skills, experience, and education.",
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
