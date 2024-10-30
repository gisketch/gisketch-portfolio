// components/layout/Navbar.tsx
"use client";

import { useCommandPalette } from "@/components/command-palette";
import { COMMAND_MENU_ITEMS } from "@/lib/command-menu-config";
import Link from "next/link";
import {
  HomeIcon,
  FolderIcon,
  UserIcon,
  TerminalIcon,
  CommandIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";

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

export function Navbar() {
  const { setIsOpen } = useCommandStore();

  // Get navigation items from the shared config
  const navItems = COMMAND_MENU_ITEMS.find(
    (group) => group.id === "navigation"
  )?.items;
  const socialItems = COMMAND_MENU_ITEMS.find(
    (group) => group.id === "social"
  )?.items;

  return (
    <header className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2">
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

          {/* Social Links */}
          {socialItems?.map((item) => (
            <DockIcon key={item.children}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href || ""}
                    target="_blank"
                    rel="noopener noreferrer"
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
    </header>
  );
}
