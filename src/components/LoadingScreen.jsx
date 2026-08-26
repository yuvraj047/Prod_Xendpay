import { useEffect, useState } from "react";

// Full-screen loader shown for ~3s on first load. The Xendpay mark rises
// from below into place and holds a soft golden glow — the glow is dark-mode
// only (handled by the .dark .rail-glow rule in index.css), since a "golden
// glow" reads as a highlight against a dark background, not a light one.
export default function LoadingScreen({ onFinish }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 2000);
    const doneTimer = setTimeout(() => onFinish?.(), 2500);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-base transition-opacity duration-400 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      role="status"
      aria-label="Loading Xendpay Solutions"
    >
      <svg
        width="64"
        height="64"
        viewBox="0 0 32 32"
        className="rail-glow loader-rise"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="7" fill="#10141F" />
        <path
          d="M4 20 L12 20 L16 12 L28 12"
          stroke="#D9A441"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="loader-draw"
        />
        <circle cx="4" cy="20" r="2" fill="#2F9C82" />
        <circle cx="28" cy="12" r="2" fill="#D9A441" />
      </svg>

      <p className="font-display text-xs tracking-[0.28em] uppercase text-muted loader-fade-in">
        Xendpay Solutions
      </p>

      <div className="w-40 h-[3px] rounded-full bg-subtle overflow-hidden">
        <div className="h-full bg-amber loader-bar" />
      </div>

      <style>{`
        .loader-rise {
          animation: railRise 900ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes railRise {
          from { transform: translateY(32px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .loader-draw {
          stroke-dasharray: 40;
          stroke-dashoffset: 40;
          animation: drawLine 700ms ease-out 250ms both;
        }
        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }
        .loader-fade-in {
          animation: fadeIn 600ms ease-out 500ms both;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .loader-bar {
          width: 0%;
          animation: fillBar 2300ms linear 350ms forwards;
        }
        @keyframes fillBar {
          to { width: 100%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .loader-rise, .loader-draw, .loader-fade-in { animation: none; opacity: 1; }
          .loader-bar { animation: none; width: 100%; }
        }
      `}</style>
    </div>
  );
}
