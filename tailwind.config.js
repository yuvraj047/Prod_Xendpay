/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#10141F",
        inkgrey: "#5B6470",
        paper: "#ECEAE1",
        panel: "#E1DFD4",
        amber: "#D9A441",
        teal: "#2F7A6B",
        line: "#C9C6B8",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'IBM Plex Sans'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      maxWidth: {
        content: "1240px",
      },
    },
  },
  plugins: [],
};
