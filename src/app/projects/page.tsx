"use client";

import Heading from "./components/heading";
import Repos from "./components/repos";
import Artworks from "./components/artworks";

export default function ProjectPage() {
  return (
    <div className="bg-dot-black/40 dark:bg-dot-white/30 pb-24">
      <Heading />
      <Repos />
      <Artworks />
    </div>
  );
}
