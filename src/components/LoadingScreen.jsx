import { useEffect, useState } from "react";
import logo from "../assets/logu.jpeg";

// Full-screen loader shown for ~3s on first load.
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
        fading
          ? "opacity-0 pointer-events-none"
          : "opacity-100"
      }`}
      role="status"
      aria-label="Loading Xendpay Solutions"
    >
      <img
        src={logo}
        alt="Xendpay Solutions logo"
        width="22"
        height="22"
        className="object-contain"
      />

      <p className="font-display text-xs tracking-[0.28em] uppercase text-muted loader-fade-in">
        Xendpay Solutions
      </p>

      <div className="w-40 h-[3px] rounded-full bg-subtle overflow-hidden">
        <div className="h-full bg-amber loader-bar" />
      </div>

      <style>{`
        .loader-fade-in {
          animation: fadeIn 600ms ease-out 500ms both;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .loader-bar {
          width: 0%;
          animation: fillBar 2300ms linear 350ms forwards;
        }

        @keyframes fillBar {
          to {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .loader-fade-in {
            animation: none;
            opacity: 1;
          }

          .loader-bar {
            animation: none;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
