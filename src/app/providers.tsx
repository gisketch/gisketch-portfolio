// app/providers.tsx
"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="kanagawa"
      themes={["light", "dark", "kanagawa"]}
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
}
