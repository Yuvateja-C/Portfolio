import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050505",
        surface: "#111111",
        surface2: "#181818",
        ink: "#FFFFFF",
        muted: "#9A9A9A",
        accent: "#FF5A1F",
        line: "rgba(255,255,255,0.09)",
        line2: "rgba(255,255,255,0.16)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest2: "0.28em",
      },
      maxWidth: {
        page: "1440px",
      },
      transitionTimingFunction: {
        industrial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
