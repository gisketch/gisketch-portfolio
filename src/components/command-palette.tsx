// components/command-palette.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { COMMAND_MENU_ITEMS } from "@/lib/command-menu-config";
import { useCommandStore } from "@/store/use-command-store";
import { DialogTitle } from "@/components/ui/dialog"; // Add this import

export function useCommandPalette() {
  const { setIsOpen, toggleOpen } = useCommandStore();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggleOpen();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [toggleOpen]);

  return {
    setIsOpen,
  };
}

export function CommandMenu() {
  const { isOpen, setIsOpen } = useCommandStore();
  const router = useRouter();

  const handleSelect = (href?: string) => {
    if (href) {
      if (href.startsWith("http")) {
        window.open(href, "_blank");
      } else {
        router.push(href);
      }
      setIsOpen(false);
    }
  };

  return (
    <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTitle className="sr-only">Command Menu</DialogTitle>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {COMMAND_MENU_ITEMS.map((group) => (
          <CommandGroup key={group.id} heading={group.heading}>
            {group.items.map((item) => (
              <CommandItem
                key={item.id}
                onSelect={() => handleSelect(item.href)}
              >
                {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                {item.children}
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  );
}
