/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Theme-aware semantic tokens — swap automatically via CSS
        // variables defined in index.css, flipped by the .dark class.
        base: "rgb(var(--base) / <alpha-value>)",
        basetext: "rgb(var(--basetext) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        surfacemuted: "rgb(var(--surfacemuted) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        subtle: "rgb(var(--subtle) / <alpha-value>)",
        // Fixed literal tokens — used only for intentionally-always-dark
        // structural blocks (Footer) that don't flip with the theme.
        ink: "#10141F",
        paper: "#ECEAE1",
        // Accent colors — constant across both themes.
        amber: "#D9A441",
        teal: "#2F9C82",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'IBM Plex Sans'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      maxWidth: {
        content: "1240px",
      },
      boxShadow: {
        glow: "0 0 24px 2px rgba(217, 164, 65, 0.35)",
      },
    },
  },
  plugins: [],
};
