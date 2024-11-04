import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of web and game development projects, including AoTTG 2, Who's That Pokémon?, and award-winning games like COVID: Armageddon.",
  openGraph: {
    title: "Projects | Glenn Jimenez",
    description:
      "Explore my portfolio of web and game development projects, including AoTTG 2, Who's That Pokémon?, and award-winning games like COVID: Armageddon.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
