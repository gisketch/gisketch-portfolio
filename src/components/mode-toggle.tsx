"use client";

import * as React from "react";
import { MoonIcon, SunIcon, Palette } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Only run on client side
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  console.log({ theme });

  const cycleTheme = () => {
    if (theme === "kanagawa") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("kanagawa");
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("size-12 rounded-full", className)}
      onClick={cycleTheme}
    >
      {theme === "light" ? (
        <SunIcon className="size-4" />
      ) : theme === "dark" ? (
        <MoonIcon className="size-4" />
      ) : (
        <Palette className="size-4" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
