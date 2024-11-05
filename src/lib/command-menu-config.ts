import {
  HomeIcon,
  FolderIcon,
  UserIcon,
  TerminalIcon,
} from "lucide-react";

export type CommandGroup = {
  heading: string;
  id: string;
  items: CommandItem[];
};

export type CommandItem = {
  id: string;
  children: string;
  icon: any;
  href?: string;
  onClick?: () => void;
  closeOnSelect?: boolean;
};

export const COMMAND_MENU_ITEMS: CommandGroup[] = [
  {
    heading: "Navigation",
    id: "navigation",
    items: [
      {
        id: "home",
        children: "Home",
        icon: HomeIcon,
        href: "/",
      },
      {
        id: "projects",
        children: "Projects",
        icon: FolderIcon,
        href: "/projects",
      },
      {
        id: "resume",
        children: "Resume",
        icon: UserIcon,
        href: "/resume",
      },
      {
        id: "tools",
        children: "Tools",
        icon: TerminalIcon,
        href: "/tools",
      },
    ],
  },
];
