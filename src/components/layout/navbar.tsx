"use client";

import { COMMAND_MENU_ITEMS } from "@/lib/command-menu-config";
import Link from "next/link";
import { CommandIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ModeToggle } from "@/components/mode-toggle";
import { Dock, DockIcon } from "@/components/ui/dock";
import { useCommandStore } from "@/store/use-command-store";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";

export function Navbar() {
  const { setIsOpen } = useCommandStore();
  const [isAtBottom, setIsAtBottom] = useState(false);

  // Function to check if we're at the bottom of the page
  const checkIfBottom = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Add a small threshold (1px) to account for decimal values
    const isBottom = Math.abs(scrollTop + windowHeight - documentHeight) < 1;
    setIsAtBottom(isBottom);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkIfBottom);
    return () => window.removeEventListener("scroll", checkIfBottom);
  }, []);

  // Get navigation items from the shared config
  const navItems = COMMAND_MENU_ITEMS.find(
    (group) => group.id === "navigation"
  )?.items;

  return (
    <>
      {/* Desktop Floating Dock (hidden on mobile) */}
      <motion.header
        className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 hidden md:block"
        animate={{ opacity: isAtBottom ? 0 : 1 }}
        style={{ pointerEvents: isAtBottom ? "none" : "auto" }}
        transition={{ duration: 0.3 }}
      >
        <TooltipProvider>
          <Dock
            className="rounded-full border bg-background/80 backdrop-blur-sm py-8"
            direction="middle"
            distance={24}
          >
            {/* Main Navigation */}
            {navItems?.map((item) => (
              <DockIcon key={item.children}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href || ""}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12 rounded-full"
                      )}
                    >
                      <item.icon className="size-4" />
                      <span className="sr-only">{item.children}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.children}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}

            <Separator orientation="vertical" className="h-8" />

            {/* Utilities */}
            <DockIcon>
              <Tooltip>
                <TooltipTrigger asChild>
                  <ModeToggle className="rounded-full" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Toggle theme</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>

            <DockIcon>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                    onClick={() => setIsOpen(true)}
                  >
                    <CommandIcon className="size-4" />
                    <span className="sr-only">Command palette</span>
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Command palette (⌘+K)</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          </Dock>
        </TooltipProvider>
      </motion.header>

      {/* Mobile Fixed Bottom Dock */}
      <motion.header
        className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/80 backdrop-blur-sm md:hidden"
        animate={{ y: isAtBottom ? 100 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <nav className="flex items-center justify-around p-4">
          {navItems?.map((item) => (
            <Link
              key={item.children}
              href={item.href || ""}
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "size-10 rounded-full"
              )}
            >
              <item.icon className="size-4" />
              <span className="sr-only">{item.children}</span>
            </Link>
          ))}
          <ModeToggle className="size-10 rounded-full" />
        </nav>
      </motion.header>
    </>
  );
}
