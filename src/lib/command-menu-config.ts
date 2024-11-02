import {
  HomeIcon,
  FolderIcon,
  UserIcon,
  TerminalIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
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
        id: "about",
        children: "About",
        icon: UserIcon,
        href: "/about",
      },
      {
        id: "tools",
        children: "Tools",
        icon: TerminalIcon,
        href: "/tools",
      },
    ],
  },
  {
    heading: "Social",
    id: "social",
    items: [
      {
        id: "github",
        children: "GitHub",
        icon: GithubIcon,
        href: "https://github.com/yourusername",
      },
      {
        id: "linkedin",
        children: "LinkedIn",
        icon: LinkedinIcon,
        href: "https://linkedin.com/in/yourusername",
      },
      {
        id: "twitter",
        children: "Twitter",
        icon: TwitterIcon,
        href: "https://twitter.com/yourusername",
      },
    ],
  },
];
