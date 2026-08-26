import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className={`relative w-14 h-8 shrink-0 rounded-full border border-subtle bg-surfacemuted transition-colors duration-300 ${className}`}
    >
      <span
        className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-amber flex items-center justify-center shadow-sm transition-transform duration-300 ease-out ${
          isDark ? "translate-x-0" : "translate-x-6"
        }`}
      >
        <Sun
          size={13}
          strokeWidth={2.25}
          className={`absolute text-ink transition-all duration-200 ${
            isDark ? "opacity-0 scale-50 rotate-45" : "opacity-100 scale-100 rotate-0"
          }`}
        />
        <Moon
          size={13}
          strokeWidth={2.25}
          className={`absolute text-ink transition-all duration-200 ${
            isDark ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-45"
          }`}
        />
      </span>
    </button>
  );
}
