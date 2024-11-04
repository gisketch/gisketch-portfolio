/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Config } from "tailwindcss";
// import defaultTheme from "tailwindcss/defaultTheme";
import svgToDataUri from "mini-svg-data-uri";
// import colors from "tailwindcss/colors";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import tailwindcssAnimate from "tailwindcss-animate";

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      fontSize: {
        hero: [
          "3rem",
          {
            lineHeight: "3.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        h1: [
          "1.875rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        h2: [
          "1.5rem",
          { lineHeight: "2rem", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        h3: [
          "1.25rem",
          {
            lineHeight: "1.75rem",
            letterSpacing: "-0.01em",
            fontWeight: "600",
          },
        ],
        h4: [
          "1.125rem",
          { lineHeight: "1.5rem", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        subheading: [
          "1rem",
          { lineHeight: "1.5rem", letterSpacing: "-0.01em", fontWeight: "500" },
        ],
        body: ["0.875rem", { lineHeight: "1.25rem", letterSpacing: "0" }],
        small: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0" }],
        tiny: ["0.675rem", { lineHeight: "0.875rem", letterSpacing: "0" }],
        "hero-desktop": [
          "3.25rem",
          {
            lineHeight: "3.75rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        "h1-desktop": [
          "2.25rem",
          { lineHeight: "2.5rem", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "body-desktop": ["1rem", { lineHeight: "1.5rem", letterSpacing: "0" }],
        "small-desktop": [
          "0.875rem",
          { lineHeight: "1.25rem", letterSpacing: "0" },
        ],
        "tiny-desktop": ["0.75rem", { lineHeight: "1rem", letterSpacing: "0" }],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-1))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        terminal: {
          bg: "hsl(var(--terminal-bg))",
          fg: "hsl(var(--terminal-fg))",
          "bg-half": "hsl(var(--terminal-bg-half))",
          red: "hsl(var(--terminal-red))",
          yellow: "hsl(var(--terminal-yellow))",
          "samurai-red": "hsl(var(--terminal-samurai-red))",
          "ronin-yellow": "hsl(var(--terminal-ronin-yellow))",
          aqua1: "hsl(var(--terminal-aqua1))",
          "dragon-blue": "hsl(var(--terminal-dragon-blue))",
          gray: "hsl(var(--terminal-gray))",
          violet1: "hsl(var(--terminal-violet1))",
          "oni-violet": "hsl(var(--terminal-oni-violet))",
          "crystal-blue": "hsl(var(--terminal-crystal-blue))",
          violet2: "hsl(var(--terminal-violet2))",
          "spring-blue": "hsl(var(--terminal-spring-blue))",
          "light-blue": "hsl(var(--terminal-light-blue))",
          aqua2: "hsl(var(--terminal-aqua2))",
          "spring-green": "hsl(var(--terminal-spring-green))",
          "boat-yellow1": "hsl(var(--terminal-boat-yellow1))",
          "boat-yellow2": "hsl(var(--terminal-boat-yellow2))",
          "carp-yellow": "hsl(var(--terminal-carp-yellow))",
          "sakura-pink": "hsl(var(--terminal-sakura-pink))",
          "wave-red": "hsl(var(--terminal-wave-red))",
          "peach-red": "hsl(var(--terminal-peach-red))",
          "surimi-orange": "hsl(var(--terminal-surimi-orange))",
        },
        "color-1": "hsl(var(--color-1))",
        "color-2": "hsl(var(--color-2))",
        "color-3": "hsl(var(--color-3))",
        "color-4": "hsl(var(--color-4))",
        "color-5": "hsl(var(--color-5))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        "shimmer-slide":
          "shimmer-slide var(--speed) ease-in-out infinite alternate",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        rainbow: "rainbow var(--speed, 2s) infinite linear",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - var(--gap)))",
          },
        },
        "marquee-vertical": {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(calc(-100% - var(--gap)))",
          },
        },
        pulse: {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.5",
          },
        },
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        "shimmer-slide": {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        rainbow: {
          "0%": {
            "background-position": "0%",
          },
          "100%": {
            "background-position": "200%",
          },
        },
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor")),
          type: "color",
        }
      );
    },
  ],
};
export default config;
