import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0D1B2D",
        gold: "#D4A017",
        slateBody: "#334155",
        soft: "#F7F8FA",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Manrope", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 24px 80px rgba(13, 27, 45, 0.12)",
        glow: "0 0 48px rgba(212, 160, 23, 0.22)",
      },
    },
  },
  plugins: [],
} satisfies Config;
